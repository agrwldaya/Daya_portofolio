import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { username: string } }
) {
  try {
    const username = params.username

    // Test GraphQL query with minimal fields first
    const graphqlQuery = {
      query: `
        query userProfile($username: String!) {
          matchedUser(username: $username) {
            username
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
    })

    const responseText = await graphqlResponse.text()
    let graphqlData
    
    try {
      graphqlData = JSON.parse(responseText)
    } catch (e) {
      return NextResponse.json({
        error: 'Failed to parse response',
        rawResponse: responseText.substring(0, 1000),
        status: graphqlResponse.status,
      })
    }

    return NextResponse.json({
      status: graphqlResponse.status,
      ok: graphqlResponse.ok,
      data: graphqlData,
      rawResponse: responseText,
    })
  } catch (error: any) {
    return NextResponse.json({
      error: error.message,
      stack: error.stack,
    }, { status: 500 })
  }
}

