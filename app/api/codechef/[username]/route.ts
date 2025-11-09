import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { username: string } }
) {
  try {
    const username = params.username

    // Try CodeChef official API first
    const codechefOfficialUrl = `https://www.codechef.com/api/users/${username}`
    
    try {
      const officialResponse = await fetch(codechefOfficialUrl, {
        next: { revalidate: 3600 },
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        },
      })

      if (officialResponse.ok) {
        const officialData = await officialResponse.json()
        console.log('CodeChef official API response:', JSON.stringify(officialData, null, 2))
        
        if (officialData.status === 'success' && officialData.user_data) {
          const userData = officialData.user_data
          const codechefData = {
            username: username,
            rating: userData.rating || 0,
            maxRating: userData.highest_rating || userData.rating || 0,
            stars: userData.stars || 0,
            problemsSolved: userData.fully_solved || 0,
            contests: 0,
            globalRank: userData.global_rank || 0,
            countryRank: userData.country_rank || 0,
            profileUrl: `https://www.codechef.com/users/${username}`,
          }
          
          console.log('CodeChef transformed data (official API):', JSON.stringify(codechefData, null, 2))
          return NextResponse.json(codechefData)
        }
      }
    } catch (officialError) {
      console.error('CodeChef official API error:', officialError)
    }

    // Fallback to Vercel API
    const codechefUrl = `https://codechef-api.vercel.app/${username}`

    try {
      const response = await fetch(codechefUrl, {
        next: { revalidate: 3600 }, // Cache for 1 hour
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        },
      })

      if (!response.ok) {
        const errorText = await response.text()
        console.error('CodeChef Vercel API error:', response.status, errorText)
        
        // Check if it's a payment required error
        if (response.status === 402 || errorText.includes('Payment required')) {
          throw new Error('CodeChef API service is currently unavailable')
        }
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()

      console.log('CodeChef API raw response:', JSON.stringify(data, null, 2))

      // Check if API returned success
      if (data.status !== 'success') {
        console.error('CodeChef API status not success:', data.status, data)
        return NextResponse.json({
          username: username,
          rating: 0,
          maxRating: 0,
          stars: 0,
          problemsSolved: 0,
          contests: 0,
          globalRank: 0,
          countryRank: 0,
          profileUrl: `https://www.codechef.com/users/${username}`,
          error: data.message || 'User not found or API limit reached',
        })
      }

      // Transform the data to our format
      const codechefData = {
        username: username,
        rating: data.rating?.current || data.currentRating || 0,
        maxRating: data.rating?.highest || data.highestRating || 0,
        stars: data.rating?.stars || data.stars || 0,
        problemsSolved: data.fully_solved?.count || data.problemsSolved || 0,
        contests: 0, // This API doesn't provide contest count
        globalRank: data.rating?.global_rank || data.globalRank || 0,
        countryRank: data.rating?.country_rank || data.countryRank || 0,
        profileUrl: `https://www.codechef.com/users/${username}`,
      }

      console.log('CodeChef transformed data:', JSON.stringify(codechefData, null, 2))

      return NextResponse.json(codechefData)
    } catch (error: any) {
      console.error('Error fetching CodeChef data:', error)
      
      // Return error response
      return NextResponse.json({
        username: username,
        rating: 0,
        maxRating: 0,
        stars: 0,
        problemsSolved: 0,
        contests: 0,
        globalRank: 0,
        countryRank: 0,
        profileUrl: `https://www.codechef.com/users/${username}`,
        error: error.message || 'Unable to fetch data from CodeChef API',
      })
    }
  } catch (error: any) {
    return NextResponse.json(
      { 
        error: 'Internal server error', 
        details: error.message,
        username: params.username
      },
      { status: 500 }
    )
  }
}
