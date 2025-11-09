import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { username: string } }
) {
  try {
    const username = params.username

    // Fetch basic stats from LeetCode Stats API
    const leetcodeUrl = `https://leetcode-stats-api.herokuapp.com/${username}`
    
    let leetcodeStats = null
    try {
      const response = await fetch(leetcodeUrl, {
        next: { revalidate: 3600 }, // Cache for 1 hour
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        },
      })

      console.log('LeetCode response:', response)
      if (response.ok) {
        leetcodeStats = await response.json()
      }
    } catch (error) {
      console.error('Error fetching LeetCode stats:', error)
    }

    // Fetch contest data and badges from GraphQL API
    let contestData = null
    try {
      const graphqlQuery = {
        query: `
          query userProfile($username: String!) {
            matchedUser(username: $username) {
              contestBadge {
                name
                icon
              }
              userContestRanking {
                attendedContestsCount
                rating
                globalRanking
                totalParticipants
              }
              userContestRankingHistory {
                attended
                rating
                ranking
                contest {
                  title
                  startTime
                }
              }
            }
          }
        `,
        variables: { username },
      }

      const graphqlResponse = await fetch("https://leetcode.com/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
          "Referer": "https://leetcode.com/",
          "Origin": "https://leetcode.com",
        },
        body: JSON.stringify(graphqlQuery),
        next: { revalidate: 3600 },
      })

      if (graphqlResponse.ok) {
        const graphqlData = await graphqlResponse.json()
        
        console.log('GraphQL full response:', JSON.stringify(graphqlData, null, 2))
        
        // Check for errors in GraphQL response
        if (graphqlData.errors) {
          console.error('GraphQL errors:', graphqlData.errors)
        }
        
        if (graphqlData.data?.matchedUser) {
          const user = graphqlData.data.matchedUser
          
          console.log('User data:', {
            hasContestRanking: !!user.userContestRanking,
            hasContestHistory: !!user.userContestRankingHistory,
            contestHistoryLength: user.userContestRankingHistory?.length || 0,
            hasContestBadge: !!user.contestBadge,
            contestBadgeType: typeof user.contestBadge,
            contestBadgeIsArray: Array.isArray(user.contestBadge),
          })
          
          const userContestRanking = user.userContestRanking
          const contestHistory = user.userContestRankingHistory || []
          
          // Filter only attended contests from history
          const attendedContests = contestHistory.filter((c: any) => c.attended === true)
          
          // Get latest contest from history
          const latestContest = attendedContests.length > 0
            ? attendedContests[attendedContests.length - 1]
            : null

          // Handle contestBadge - it can be null, an object, or an array
          let badges: Array<{ name: string; icon: string }> = []
          let totalBadges = 0
          
          if (user.contestBadge) {
            if (Array.isArray(user.contestBadge)) {
              badges = user.contestBadge
                .filter((b: any) => b && b.name)
                .map((b: any) => ({ 
                  name: b.name, 
                  icon: b.icon || '' 
                }))
              totalBadges = badges.length
            } else if (user.contestBadge.name) {
              // Single badge object
              badges = [{ 
                name: user.contestBadge.name, 
                icon: user.contestBadge.icon || '' 
              }]
              totalBadges = 1
            }
          }

          // Extract contest data with proper fallbacks
          contestData = {
            contestRank: userContestRanking?.globalRanking || latestContest?.ranking || null,
            contestRating: userContestRanking?.rating || latestContest?.rating || null,
            totalContests: userContestRanking?.attendedContestsCount || attendedContests.length || 0,
            totalBadges: totalBadges,
            badges: badges,
            totalParticipants: userContestRanking?.totalParticipants || null,
            // Debug info
            debug: {
              userContestRankingExists: !!userContestRanking,
              contestHistoryLength: contestHistory.length,
              attendedContestsCount: attendedContests.length,
              latestContestExists: !!latestContest,
            }
          }
          
          console.log('Contest data extracted:', JSON.stringify(contestData, null, 2))
        } else {
          console.error('No matchedUser in GraphQL response. Full response:', JSON.stringify(graphqlData, null, 2))
        }
      } else {
        const errorText = await graphqlResponse.text()
        console.error('GraphQL response not OK:', graphqlResponse.status, graphqlResponse.statusText, errorText)
      }
    } catch (error) {
      console.error('Error fetching LeetCode GraphQL data:', error)
    }

    // Combine both data sources
    const transformedData = {
      username: username,
      totalSolved: leetcodeStats?.totalSolved || 0,
      totalQuestions: leetcodeStats?.totalQuestions || 0,
      easySolved: leetcodeStats?.easySolved || 0,
      mediumSolved: leetcodeStats?.mediumSolved || 0,
      hardSolved: leetcodeStats?.hardSolved || 0,
      acceptanceRate: leetcodeStats?.acceptanceRate || 0,
      ranking: leetcodeStats?.ranking || 0,
      contributionPoints: leetcodeStats?.contributionPoints || 0,
      reputation: leetcodeStats?.reputation || 0,
      submissionCalendar: leetcodeStats?.submissionCalendar || {},
      // Contest data
      contestRank: contestData?.contestRank || null,
      contestRating: contestData?.contestRating || null,
      totalContests: contestData?.totalContests || 0,
      totalBadges: contestData?.totalBadges || 0,
      badges: contestData?.badges || [],
      // Include debug info in development
      ...(process.env.NODE_ENV === 'development' && contestData?.debug ? { debug: contestData.debug } : {}),
    }

    console.log('Final transformed data:', JSON.stringify(transformedData, null, 2))

    return NextResponse.json(transformedData)
  } catch (error: any) {
    console.error('Error in LeetCode API route:', error)
    return NextResponse.json(
      { 
        error: 'Failed to fetch LeetCode data',
        message: error.message || 'Unable to fetch data from LeetCode API',
        username: params.username
      },
      { status: 500 }
    )
  }
}
