'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Trophy, TrendingUp, Code2, Award, Target, Zap, Loader2 } from 'lucide-react'

interface LeetCodeData {
  username: string
  totalSolved: number
  totalQuestions: number
  easySolved: number
  mediumSolved: number
  hardSolved: number
  acceptanceRate: number
  ranking: number
  contributionPoints: number
  reputation: number
  contestRank?: number | null
  contestRating?: number | null
  totalContests?: number
  totalBadges?: number
  badges?: Array<{ name: string; icon: string }>
}

interface CodeChefData {
  username: string
  rating: number
  maxRating: number
  stars: number
  problemsSolved: number
  contests: number
  globalRank?: number
  countryRank?: number
  profileUrl: string
  error?: string
}

// ============================================
// STATIC LEETCODE CONTEST DATA - UPDATE MANUALLY HERE
// ============================================
// Update these contest-related values manually from your LeetCode profile
// Problem-solving stats (totalSolved, easySolved, etc.) are fetched from API
// Last updated: Based on profile snapshot
const LEETCODE_CONTEST_STATIC_DATA = {
  contestRating: 1901,             // Current contest rating
  contestRank: 66278,              // Global contest rank
  totalParticipants: 784100,       // Total participants (for percentage calculation)
  topPercentage: 4.91,             // Top percentage (8.69%)
  totalContests: 24,               // Number of contests attended
  totalBadges: 12,                 // Total number of badges
  badges: [
    { name: 'Knight Badge', icon: 'Knight hexagonal badge' },
    { name: '365 Days Badge', icon: 'Gold hexagonal badge' },
    { name: '20 Days Badge', icon: 'Silver hexagonal badge' },
    { name: '10 Days Badge', icon: 'Silver hexagonal badge' },
  ],
}
// ============================================

// ============================================
// STATIC CODE CHEF DATA - UPDATE MANUALLY HERE
// ============================================
// Update these values manually from your CodeChef profile
// Last updated: Based on profile snapshot
const CODE_CHEF_STATIC_DATA = {
  username: 'agrawaldaya20',
  rating: 1620,                    // Current rating
  maxRating: 1625,                 // Highest rating achieved
  stars: 3,                        // Star rating (1-7)
  problemsSolved: 145,             // Total problems solved
  contests: 30,                    // Number of contests participated
  globalRank: 17451,               // Global rank
  countryRank: 15678,              // Country rank (India)
  profileUrl: 'https://www.codechef.com/users/agrawaldaya20',
  // Optional: Add badges if you want to display them
  badges: [
    { name: 'Contest Contender', level: 'Silver', progress: '30/50' },
    { name: 'Problem Solver', level: 'Bronze', progress: '145/250' },
  ],
}
// ============================================

// ============================================
// STATIC GEEKSFORGEEKS DATA - UPDATE MANUALLY HERE
// ============================================
// Update these values manually from your GeeksforGeeks profile
// Last updated: Based on profile snapshot from https://www.geeksforgeeks.org/user/agrwldaya20/
const GFG_STATIC_DATA = {
  username: 'agrwldaya20',
  codingScore: 599,                // Coding score
  problemsSolved: 156,             // Total problems solved
  potdStreak: 23,                  // Current POTD streak
  longestStreak: 1559,             // Longest streak / Global longest streak
  instituteRank: 100,              // Institute rank
  language: 'C++',                 // Primary language used
  profileUrl: 'https://www.geeksforgeeks.org/user/agrwldaya20/',
  // Problem breakdown by difficulty
  problemBreakdown: {
    school: 0,
    basic: 4,
    easy: 28,
    medium: 109,
    hard: 15,
  },
  submissions: 168,                // Submissions in current year
  contestRating: null,             // Contest rating (not available)
}
// ============================================

const initialPlatforms = [
  {
    name: 'LeetCode',
    username: 'agrawaldaya',
    link: 'https://leetcode.com/u/agrawaldaya/',
    currentRating: 0,
    maxRating: 0,
    problemsSolved: 0,
    contests: 0,
    badge: 'Loading...',
    badgeColor: 'text-yellow-400',
    achievements: [] as string[],
    stats: [] as Array<{ label: string; value: number; color: string }>,
    consistency: '0%',
    contestRank: 'N/A',
    loading: true,
  },  
  {
    name: 'CodeChef',
    username: 'agrawaldaya20',
    link: 'https://www.codechef.com/users/agrawaldaya20',
    currentRating: 0,
    maxRating: 0,
    problemsSolved: 0,
    contests: 0,
    badge: 'Loading...',
    badgeColor: 'text-blue-400',
    achievements: [] as string[],
    stats: [] as Array<{ label: string; value: number; color: string }>,
    consistency: '0%',
    contestRank: 'N/A',
    loading: true,
  },
  {
    name: 'GeeksforGeeks',
    username: 'agrwldaya20',
    link: 'https://www.geeksforgeeks.org/user/agrwldaya20/',
    currentRating: 0,
    maxRating: 0,
    problemsSolved: 0,
    contests: 0,
    badge: 'Loading...',
    badgeColor: 'text-green-400',
    achievements: [] as string[],
    stats: [] as Array<{ label: string; value: number; color: string }>,
    consistency: '0%',
    contestRank: 'N/A',
    loading: true,
  },
]

const overallStats = {
  totalProblems: 850,
  totalContests: 95,
  platforms: 3, // Updated to include GFG
  consistency: '88%',
}

export default function CompetitiveProgramming() {
  const [platforms, setPlatforms] = useState(initialPlatforms)
  const [overallStats, setOverallStats] = useState({
    totalProblems: 0,
    totalContests: 0,
    platforms: 3, // Updated to include GFG
    consistency: '0%',
  })

  useEffect(() => {
    const fetchData = async () => {
      // Fetch LeetCode data
      try {
        const leetcodeResponse = await fetch('/api/leetcode/agrawaldaya')
        const leetcodeData: LeetCodeData | { error?: string; message?: string } = await leetcodeResponse.json()
        
        if (leetcodeResponse.ok && !('error' in leetcodeData)) {
          const data = leetcodeData as LeetCodeData
          
          console.log('LeetCode data received:', data)
          
          // Determine badge based on problems solved
          let badge = 'Newbie'
          let badgeColor = 'text-gray-400'
          if (data.totalSolved >= 500) {
            badge = 'Knight'
            badgeColor = 'text-yellow-400'
          } else if (data.totalSolved >= 300) {
            badge = 'Advanced'
            badgeColor = 'text-orange-400'
          } else if (data.totalSolved >= 100) {
            badge = 'Intermediate'
            badgeColor = 'text-blue-400'
          } else if (data.totalSolved > 0) {
            badge = 'Beginner'
            badgeColor = 'text-green-400'
          }

          const leetcodeStats = [
            { label: 'Easy', value: data.easySolved || 0, color: 'from-green-500 to-emerald-500' },
            { label: 'Medium', value: data.mediumSolved || 0, color: 'from-yellow-500 to-orange-500' },
            { label: 'Hard', value: data.hardSolved || 0, color: 'from-red-500 to-rose-500' },
          ]

          // Merge API data with static contest data
          const contestData = LEETCODE_CONTEST_STATIC_DATA
          
          const achievements: string[] = []
          if (data.totalSolved > 0) {
            achievements.push(`${data.totalSolved}+ Problems Solved`)
          }
          if (data.acceptanceRate > 0) {
            achievements.push(`Acceptance Rate: ${data.acceptanceRate.toFixed(1)}%`)
          }
          if (data.ranking > 0) {
            achievements.push(`Ranking: #${data.ranking.toLocaleString()}`)
          }
          if (data.reputation > 0) {
            achievements.push(`Reputation: ${data.reputation}`)
          }
          // Use static contest data
          if (contestData.totalContests > 0) {
            achievements.push(`${contestData.totalContests} Contests Participated`)
          }
          if (contestData.totalBadges > 0) {
            achievements.push(`${contestData.totalBadges} Contest Badges`)
          }
          if (contestData.contestRating > 0) {
            achievements.push(`Contest Rating: ${contestData.contestRating}`)
          }
          if (contestData.topPercentage > 0) {
            achievements.push(`Top ${contestData.topPercentage}%`)
          }
          if (achievements.length === 0) {
            achievements.push('Active Problem Solver')
          }

          // Calculate contest rank display using static data
          let contestRankDisplay = 'N/A'
          if (contestData.contestRank > 0) {
            if (contestData.topPercentage > 0) {
              contestRankDisplay = `Top ${contestData.topPercentage}%`
            } else if (contestData.contestRank <= 100) {
              contestRankDisplay = 'Top 1%'
            } else if (contestData.contestRank <= 500) {
              contestRankDisplay = 'Top 5%'
            } else if (contestData.contestRank <= 1000) {
              contestRankDisplay = 'Top 10%'
            } else if (contestData.contestRank <= 5000) {
              contestRankDisplay = 'Top 20%'
            } else {
              contestRankDisplay = `Rank #${contestData.contestRank.toLocaleString()}`
            }
          } else if (contestData.totalContests === 0) {
            contestRankDisplay = 'No contests yet'
          }

          setPlatforms((prev) => prev.map((p) => 
            p.name === 'LeetCode' ? {
              ...p,
              // Use contest rating from static data, fallback to ranking from API
              currentRating: contestData.contestRating || data.ranking || 0,
              maxRating: contestData.contestRating || data.ranking || 0,
              problemsSolved: data.totalSolved || 0,
              contests: contestData.totalContests || 0, // Use static contest data
              badge,
              badgeColor,
              achievements,
              stats: leetcodeStats,
              consistency: data.totalSolved > 0 ? '95%' : '0%',
              contestRank: contestRankDisplay,
              loading: false,
            } : p
          ))
        } else {
          console.error('LeetCode API error:', leetcodeData)
          setPlatforms((prev) => prev.map((p) => 
            p.name === 'LeetCode' ? { 
              ...p, 
              loading: false, 
              badge: 'Error',
              achievements: ['Unable to fetch data. Please check username or try again later.']
            } : p
          ))
        }
      } catch (error) {
        console.error('Error fetching LeetCode data:', error)
        setPlatforms((prev) => prev.map((p) => 
          p.name === 'LeetCode' ? { 
            ...p, 
            loading: false, 
            badge: 'Error',
            achievements: ['Failed to connect to LeetCode API']
          } : p
        ))
      }

      // Use static CodeChef data (no API fetch needed)
      // Update CODE_CHEF_STATIC_DATA object above to change values
      const codechefData = CODE_CHEF_STATIC_DATA
      
      // Determine star rating based on rating
      const rating = codechefData.rating
      const stars = codechefData.stars
      const badge = stars > 0 ? `${stars}★` : 'Newbie'
      const badgeColor = stars >= 3 ? 'text-blue-400' : stars >= 2 ? 'text-green-400' : stars >= 1 ? 'text-yellow-400' : 'text-gray-400'

      const problemsSolved = codechefData.problemsSolved
      const codechefStats = problemsSolved > 0 ? [
        { label: 'Beginner', value: Math.floor(problemsSolved * 0.3), color: 'from-green-500 to-emerald-500' },
        { label: 'Easy', value: Math.floor(problemsSolved * 0.4), color: 'from-blue-500 to-cyan-500' },
        { label: 'Medium', value: Math.floor(problemsSolved * 0.25), color: 'from-purple-500 to-pink-500' },
        { label: 'Hard', value: Math.floor(problemsSolved * 0.05), color: 'from-red-500 to-rose-500' },
      ] : []

      const achievements: string[] = []
      if (stars > 0) {
        achievements.push(`${stars}★ Coder`)
      }
      if (rating > 0) {
        achievements.push(`Current Rating: ${rating}`)
      }
      if (codechefData.maxRating > 0 && codechefData.maxRating !== rating) {
        achievements.push(`Highest Rating: ${codechefData.maxRating}`)
      }
      if (problemsSolved > 0) {
        achievements.push(`${problemsSolved}+ Problems Solved`)
      }
      if (codechefData.globalRank && codechefData.globalRank > 0) {
        achievements.push(`Global Rank: #${codechefData.globalRank.toLocaleString()}`)
      }
      if (codechefData.countryRank && codechefData.countryRank > 0) {
        achievements.push(`Country Rank: #${codechefData.countryRank.toLocaleString()}`)
      }
      if (codechefData.contests > 0) {
        achievements.push(`${codechefData.contests} Contests Participated`)
      }
      if (achievements.length === 0) {
        achievements.push('Regular Contest Participant')
      }

      // Calculate contest rank display for CodeChef
      let contestRankDisplay = 'N/A'
      if (codechefData.globalRank && codechefData.globalRank > 0) {
        if (codechefData.globalRank <= 100) {
          contestRankDisplay = 'Top 1%'
        } else if (codechefData.globalRank <= 500) {
          contestRankDisplay = 'Top 5%'
        } else if (codechefData.globalRank <= 1000) {
          contestRankDisplay = 'Top 10%'
        } else if (codechefData.globalRank <= 5000) {
          contestRankDisplay = 'Top 20%'
        } else {
          contestRankDisplay = `#${codechefData.globalRank.toLocaleString()}`
        }
      } else if (problemsSolved > 0) {
        contestRankDisplay = 'Active'
      }

      setPlatforms((prev) => prev.map((p) => 
        p.name === 'CodeChef' ? {
          ...p,
          currentRating: rating,
          maxRating: codechefData.maxRating,
          problemsSolved: problemsSolved,
          contests: codechefData.contests,
          badge,
          badgeColor,
          achievements,
          stats: codechefStats,
          consistency: problemsSolved > 0 ? '88%' : '0%',
          contestRank: contestRankDisplay,
          loading: false,
        } : p
      ))

      // Use static GeeksforGeeks data (no API fetch needed)
      // Update GFG_STATIC_DATA object above to change values
      const gfgData = GFG_STATIC_DATA
      
      // Determine badge based on coding score
      let gfgBadge = 'Newbie'
      let gfgBadgeColor = 'text-gray-400'
      if (gfgData.codingScore >= 1000) {
        gfgBadge = 'Expert'
        gfgBadgeColor = 'text-yellow-400'
      } else if (gfgData.codingScore >= 500) {
        gfgBadge = 'Advanced'
        gfgBadgeColor = 'text-green-400'
      } else if (gfgData.codingScore >= 200) {
        gfgBadge = 'Intermediate'
        gfgBadgeColor = 'text-blue-400'
      } else if (gfgData.codingScore > 0) {
        gfgBadge = 'Beginner'
        gfgBadgeColor = 'text-purple-400'
      }

      const gfgStats = gfgData.problemsSolved > 0 ? [
        { label: 'Basic', value: gfgData.problemBreakdown.basic, color: 'from-blue-500 to-cyan-500' },
        { label: 'Easy', value: gfgData.problemBreakdown.easy, color: 'from-green-500 to-emerald-500' },
        { label: 'Medium', value: gfgData.problemBreakdown.medium, color: 'from-yellow-500 to-orange-500' },
        { label: 'Hard', value: gfgData.problemBreakdown.hard, color: 'from-red-500 to-rose-500' },
      ] : []

      const gfgAchievements: string[] = []
      if (gfgData.codingScore > 0) {
        gfgAchievements.push(`Coding Score: ${gfgData.codingScore}`)
      }
      if (gfgData.problemsSolved > 0) {
        gfgAchievements.push(`${gfgData.problemsSolved}+ Problems Solved`)
      }
      if (gfgData.potdStreak > 0) {
        gfgAchievements.push(`POTD Streak: ${gfgData.potdStreak} days`)
      }
      if (gfgData.instituteRank > 0) {
        gfgAchievements.push(`Institute Rank: #${gfgData.instituteRank}`)
      }
      if (gfgData.submissions > 0) {
        gfgAchievements.push(`${gfgData.submissions} Submissions (2024)`)
      }
      if (gfgData.language) {
        gfgAchievements.push(`Primary Language: ${gfgData.language}`)
      }
      if (gfgAchievements.length === 0) {
        gfgAchievements.push('Active Problem Solver')
      }

      // Calculate rank display for GFG
      let gfgRankDisplay = 'N/A'
      if (gfgData.instituteRank > 0) {
        if (gfgData.instituteRank <= 10) {
          gfgRankDisplay = 'Top 1%'
        } else if (gfgData.instituteRank <= 50) {
          gfgRankDisplay = 'Top 5%'
        } else if (gfgData.instituteRank <= 100) {
          gfgRankDisplay = 'Top 10%'
        } else {
          gfgRankDisplay = `Rank #${gfgData.instituteRank}`
        }
      } else if (gfgData.problemsSolved > 0) {
        gfgRankDisplay = 'Active'
      }

      setPlatforms((prev) => prev.map((p) => 
        p.name === 'GeeksforGeeks' ? {
          ...p,
          currentRating: gfgData.codingScore,
          maxRating: gfgData.codingScore,
          problemsSolved: gfgData.problemsSolved,
          contests: 0, // GFG doesn't have contest count in the same way
          badge: gfgBadge,
          badgeColor: gfgBadgeColor,
          achievements: gfgAchievements,
          stats: gfgStats,
          consistency: gfgData.potdStreak > 0 ? '85%' : '0%',
          contestRank: gfgRankDisplay,
          loading: false,
        } : p
      ))

      // Update overall stats
      setPlatforms((current) => {
        const totalProblems = current.reduce((sum, p) => sum + p.problemsSolved, 0)
        const totalContests = current.reduce((sum, p) => sum + p.contests, 0)
        setOverallStats({
          totalProblems,
          totalContests,
          platforms: 3, // Updated to include GFG
          consistency: '88%',
        })
        return current
      })
    }

    fetchData()
  }, [])

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-mono gradient-text mb-4 sm:mb-6"
          >
            {'>'} Competitive Programming
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-terminal-green/80 font-mono max-w-3xl mx-auto px-4"
          >
            {'{'} A snapshot of my problem-solving journey  {'}'}
          </motion.p>
        </motion.div>

        {/* Overall Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12 md:mb-16"
        >
          <motion.div
            className="glass rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 text-center border-terminal-green/20"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <Code2 className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-terminal-green mx-auto mb-2 sm:mb-3" />
            <div className="text-xl sm:text-2xl md:text-3xl font-mono text-terminal-cyan mb-1 glow-cyan">
              {overallStats.totalProblems > 0 ? `${overallStats.totalProblems}+` : '...'}
            </div>
            <div className="text-terminal-green/70 font-mono text-xs sm:text-sm">
              Problems Solved
            </div>
          </motion.div>
          <motion.div
            className="glass rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 text-center border-terminal-green/20"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <Trophy className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-terminal-green mx-auto mb-2 sm:mb-3" />
            <div className="text-xl sm:text-2xl md:text-3xl font-mono text-terminal-cyan mb-1 glow-cyan">
              {overallStats.totalContests > 0 ? overallStats.totalContests : '...'}
            </div>
            <div className="text-terminal-green/70 font-mono text-xs sm:text-sm">
              Contests
            </div>
          </motion.div>
          <motion.div
            className="glass rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 text-center border-terminal-green/20"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <Target className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-terminal-green mx-auto mb-2 sm:mb-3" />
            <div className="text-xl sm:text-2xl md:text-3xl font-mono text-terminal-cyan mb-1 glow-cyan">
              {overallStats.consistency}
            </div>
            <div className="text-terminal-green/70 font-mono text-xs sm:text-sm">
              Consistency
            </div>
          </motion.div>
          <motion.div
            className="glass rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 text-center border-terminal-green/20"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <Zap className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-terminal-green mx-auto mb-2 sm:mb-3" />
            <div className="text-xl sm:text-2xl md:text-3xl font-mono text-terminal-cyan mb-1 glow-cyan">
              {overallStats.platforms}
            </div>
            <div className="text-terminal-green/70 font-mono text-xs sm:text-sm">
              Platforms
            </div>
          </motion.div>
        </motion.div>

        {/* Platform Cards */}
        <div className="space-y-6 sm:space-y-8">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
              className="glass rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border-terminal-green/20 hover:border-terminal-green/50 transition-all"
            >
              {platform.loading ? (
                <div className="flex flex-col sm:flex-row items-center justify-center py-8 sm:py-12 gap-3">
                  <Loader2 className="w-6 h-6 sm:w-8 sm:h-8 text-terminal-green animate-spin" />
                  <span className="text-sm sm:text-base text-terminal-green/80 font-mono text-center">
                    {'>'} Loading {platform.name} data...
                  </span>
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                  {/* Left Column - Platform Info */}
                  <div className="lg:col-span-1">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-2 sm:gap-0">
                      <h3 className="text-2xl sm:text-3xl font-mono text-terminal-green glow-text">
                        {'>'} {platform.name}
                      </h3>
                      <motion.span
                        className={`text-xl sm:text-2xl font-bold ${platform.badgeColor}`}
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {platform.badge}
                      </motion.span>
                    </div>
                    
                    <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                      <div>
                        <div className="text-terminal-green/60 font-mono text-xs mb-1">
                          {'//'} Username
                        </div>
                        <div className="text-terminal-cyan font-mono text-sm sm:text-base break-all">
                          @{platform.username}
                        </div>
                      </div>
                      
                      {platform.name === 'LeetCode' ? (
                        <>
                          <div>
                            <div className="text-terminal-green/60 font-mono text-xs mb-1">
                              {'//'} Ranking
                            </div>
                            <div className="text-terminal-green font-mono text-base sm:text-lg">
                              #{platform.currentRating.toLocaleString()}
                            </div>
                          </div>
                          <div>
                            <div className="text-terminal-green/60 font-mono text-xs mb-1">
                              {'//'} Problems Solved
                            </div>
                            <div className="text-terminal-cyan font-mono text-base sm:text-lg">
                              {platform.problemsSolved}+
                            </div>
                          </div>
                          {platform.contests > 0 && (
                            <div>
                              <div className="text-terminal-green/60 font-mono text-xs mb-1">
                                {'//'} Contests
                              </div>
                              <div className="text-terminal-cyan font-mono text-base sm:text-lg">
                                {platform.contests}
                              </div>
                            </div>
                          )}
                        </>
                      ) : (
                        <>
                          <div className="grid grid-cols-2 gap-3 sm:gap-4">
                            <div>
                              <div className="text-terminal-green/60 font-mono text-xs mb-1">
                                {'//'} Rating
                              </div>
                              <div className="text-terminal-green font-mono text-base sm:text-lg">
                                {platform.currentRating}
                              </div>
                            </div>
                            <div>
                              <div className="text-terminal-green/60 font-mono text-xs mb-1">
                                {'//'} Max Rating
                              </div>
                              <div className="text-terminal-cyan font-mono text-base sm:text-lg">
                                {platform.maxRating}
                              </div>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-3 sm:gap-4">
                            <div>
                              <div className="text-terminal-green/60 font-mono text-xs mb-1">
                                {'//'} Problems
                              </div>
                              <div className="text-terminal-green font-mono text-base sm:text-lg">
                                {platform.problemsSolved}+
                              </div>
                            </div>
                            <div>
                              <div className="text-terminal-green/60 font-mono text-xs mb-1">
                                {'//'} Contests
                              </div>
                              <div className="text-terminal-green font-mono text-base sm:text-lg">
                                {platform.contests}
                              </div>
                            </div>
                          </div>
                        </>
                      )}

                      <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        <div>
                          <div className="text-terminal-green/60 font-mono text-xs mb-1">
                            {'//'} Consistency
                          </div>
                          <div className="text-terminal-cyan font-mono text-xs sm:text-sm">
                            {platform.consistency}
                          </div>
                        </div>
                        <div>
                          <div className="text-terminal-green/60 font-mono text-xs mb-1">
                            {'//'} Contest Rank
                          </div>
                          <div className="text-terminal-cyan font-mono text-xs sm:text-sm break-words">
                            {platform.contestRank}
                          </div>
                        </div>
                      </div>
                    </div>

                    <motion.a
                      href={platform.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hacker-button w-full text-center inline-block text-sm sm:text-base py-2 sm:py-3"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {'>'} View Profile
                    </motion.a>
                  </div>

                  {/* Middle Column - Problem Distribution */}
                  <div className="lg:col-span-1">
                    <h4 className="text-terminal-cyan font-mono text-base sm:text-lg mb-3 sm:mb-4 glow-cyan">
                      {'>'} Problem Distribution
                    </h4>
                    {platform.stats.length > 0 ? (
                      <div className="space-y-3 sm:space-y-4">
                        {platform.stats.map((stat, statIndex) => (
                          <div key={stat.label}>
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-terminal-green/80 font-mono text-xs sm:text-sm">
                                {stat.label}
                              </span>
                              <span className="text-terminal-green font-mono text-xs sm:text-sm">
                                {stat.value}
                              </span>
                            </div>
                            <div className="h-2.5 sm:h-3 bg-terminal-green/10 rounded-full overflow-hidden border border-terminal-green/20">
                              <motion.div
                                className={`h-full bg-gradient-to-r ${stat.color} rounded-full`}
                                initial={{ width: 0 }}
                                whileInView={{ width: `${platform.problemsSolved > 0 ? (stat.value / platform.problemsSolved) * 100 : 0}%` }}
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{ delay: statIndex * 0.1, duration: 1, ease: 'easeOut' }}
                                style={{ boxShadow: '0 0 10px rgba(0, 255, 65, 0.5)' }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-terminal-green/60 font-mono text-xs sm:text-sm">
                        {'//'} No data available
                      </div>
                    )}
                  </div>

                  {/* Right Column - Achievements */}
                  <div className="lg:col-span-1">
                    <h4 className="text-terminal-cyan font-mono text-base sm:text-lg mb-3 sm:mb-4 glow-cyan">
                      {'>'} Key Achievements
                    </h4>
                    {platform.achievements.length > 0 ? (
                      <div className="space-y-2 sm:space-y-3">
                        {platform.achievements.map((achievement, achIndex) => (
                          <motion.div
                            key={achievement}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ delay: achIndex * 0.1 }}
                            className="flex items-start gap-2 glass rounded-lg p-2.5 sm:p-3 border-terminal-green/10"
                          >
                            <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-terminal-green mt-0.5 flex-shrink-0" />
                            <span className="text-terminal-green/80 font-mono text-xs break-words">
                              {achievement}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-terminal-green/60 font-mono text-xs sm:text-sm">
                        {'//'} No achievements available
                      </div>
                    )}

                    {/* Rating Trend Indicator */}
                    <div className="mt-4 sm:mt-6 glass rounded-lg p-3 sm:p-4 border-terminal-green/20">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-terminal-green flex-shrink-0" />
                        <span className="text-terminal-green/80 font-mono text-xs sm:text-sm">
                          Rating Trend
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-terminal-green/10 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-terminal-green to-terminal-cyan rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${platform.currentRating > 0 ? (platform.currentRating / 2000) * 100 : 0}%` }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ delay: 0.2, duration: 1.5, ease: 'easeOut' }}
                          />
                        </div>
                        <span className="text-terminal-cyan font-mono text-xs whitespace-nowrap">
                          {platform.currentRating > 0 ? platform.currentRating : 'N/A'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Notable Achievement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2 }}
          className="mt-8 sm:mt-12 md:mt-16 glass rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border-terminal-green/30 border-2"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <Trophy className="w-8 h-8 sm:w-10 sm:h-10 text-terminal-green flex-shrink-0" />
            <h3 className="text-xl sm:text-2xl font-mono text-terminal-green glow-text">
              {'>'} Notable Achievement
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="glass rounded-lg sm:rounded-xl p-4 sm:p-6 border-terminal-green/20">
              <div className="text-terminal-cyan font-mono text-base sm:text-lg mb-2 glow-cyan">
                CodeChef
              </div>
              <div className="text-terminal-green/80 font-mono text-xs sm:text-sm">
                Achieved 3★ rating 
              </div>
            </div>
            <div className="glass rounded-lg sm:rounded-xl p-4 sm:p-6 border-terminal-green/20">
              <div className="text-terminal-cyan font-mono text-base sm:text-lg mb-2 glow-cyan">
                Leetcode
              </div>
              <div className="text-terminal-green/80 font-mono text-xs sm:text-sm">
                Knight Badge achiver with max rating of 1900+ 
              </div>
            </div>
            <div className="glass rounded-lg sm:rounded-xl p-4 sm:p-6 border-terminal-green/20">
              <div className="text-terminal-cyan font-mono text-base sm:text-lg mb-2 glow-cyan">
                Code Fusion 2.0 Hackathon
              </div>
              <div className="text-terminal-green/80 font-mono text-xs sm:text-sm">
                Ranked 12th out of 920 teams at Chandigarh University
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
