import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { 
  Trophy, 
  Crown, 
  Medal, 
  Star,
  TrendingUp,
  Users,
  DollarSign,
  Zap,
  Calendar,
  Award,
  Target,
  Clock,
  ChevronRight,
  Filter,
  Search,
  RefreshCw
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";
import Navbar from "../nav-bar";
import { Skeleton } from "../ui/skeleton";

// Mock data for seasonal leaderboard
const mockLeaderboardData = [
  {
    id: 1,
    rank: 1,
    name: "Alex Chen",
    username: "@alexchen",
    avatar: "https://github.com/shadcn.png",
    totalEarnings: 15420,
    projectsCompleted: 12,
    streak: 45,
    badges: ["Top Performer", "Consistent Builder", "Community Leader"],
    tier: "Diamond",
    tierColor: "from-yellow-400 to-yellow-600",
    tierIcon: Crown,
    change: "+3",
    isCurrentUser: false
  },
  {
    id: 2,
    rank: 2,
    name: "Sarah Kim",
    username: "@sarahkim",
    avatar: "https://github.com/shadcn.png",
    totalEarnings: 12850,
    projectsCompleted: 10,
    streak: 38,
    badges: ["Design Expert", "UI/UX Master"],
    tier: "Platinum",
    tierColor: "from-gray-300 to-gray-500",
    tierIcon: Trophy,
    change: "+1",
    isCurrentUser: false
  },
  {
    id: 3,
    rank: 3,
    name: "Mike Johnson",
    username: "@mikej",
    avatar: "https://github.com/shadcn.png",
    totalEarnings: 11200,
    projectsCompleted: 9,
    streak: 32,
    badges: ["DeFi Specialist", "Smart Contract Expert"],
    tier: "Gold",
    tierColor: "from-yellow-500 to-yellow-700",
    tierIcon: Medal,
    change: "-1",
    isCurrentUser: true
  },
  {
    id: 4,
    rank: 4,
    name: "Emma Wilson",
    username: "@emmaw",
    avatar: "https://github.com/shadcn.png",
    totalEarnings: 9850,
    projectsCompleted: 8,
    streak: 28,
    badges: ["Content Creator", "Technical Writer"],
    tier: "Gold",
    tierColor: "from-yellow-500 to-yellow-700",
    tierIcon: Medal,
    change: "+2",
    isCurrentUser: false
  },
  {
    id: 5,
    rank: 5,
    name: "David Lee",
    username: "@davidlee",
    avatar: "https://github.com/shadcn.png",
    totalEarnings: 8750,
    projectsCompleted: 7,
    streak: 25,
    badges: ["Full Stack Developer", "Open Source Contributor"],
    tier: "Silver",
    tierColor: "from-gray-400 to-gray-600",
    tierIcon: Star,
    change: "-2",
    isCurrentUser: false
  },
  {
    id: 6,
    rank: 6,
    name: "Lisa Zhang",
    username: "@lisaz",
    avatar: "https://github.com/shadcn.png",
    totalEarnings: 7650,
    projectsCompleted: 6,
    streak: 22,
    badges: ["Frontend Specialist", "React Expert"],
    tier: "Silver",
    tierColor: "from-gray-400 to-gray-600",
    tierIcon: Star,
    change: "+1",
    isCurrentUser: false
  },
  {
    id: 7,
    rank: 7,
    name: "James Brown",
    username: "@jamesb",
    avatar: "https://github.com/shadcn.png",
    totalEarnings: 6800,
    projectsCompleted: 5,
    streak: 18,
    badges: ["Backend Developer", "API Specialist"],
    tier: "Bronze",
    tierColor: "from-orange-500 to-orange-700",
    tierIcon: Award,
    change: "+3",
    isCurrentUser: false
  },
  {
    id: 8,
    rank: 8,
    name: "Maria Garcia",
    username: "@mariag",
    avatar: "https://github.com/shadcn.png",
    totalEarnings: 5900,
    projectsCompleted: 4,
    streak: 15,
    badges: ["Mobile Developer", "iOS Expert"],
    tier: "Bronze",
    tierColor: "from-orange-500 to-orange-700",
    tierIcon: Award,
    change: "-1",
    isCurrentUser: false
  }
];

const mockSeasonStats = {
  seasonName: "Winter 2024",
  startDate: "2024-12-01",
  endDate: "2024-02-29",
  totalParticipants: 1247,
  totalEarnings: 245680,
  activeProjects: 89,
  daysRemaining: 23
};

const mockRecentActivity = [
  {
    id: 1,
    user: "Alex Chen",
    action: "completed",
    project: "Cedra Analytics Dashboard",
    reward: "800 USDC",
    time: "2 hours ago",
    avatar: "https://github.com/shadcn.png"
  },
  {
    id: 2,
    user: "Sarah Kim",
    action: "submitted",
    project: "TeamMove Mobile UI Design",
    reward: "600 USDC",
    time: "4 hours ago",
    avatar: "https://github.com/shadcn.png"
  },
  {
    id: 3,
    user: "Mike Johnson",
    action: "started",
    project: "Cedra Documentation Guide",
    reward: "400 USDC",
    time: "6 hours ago",
    avatar: "https://github.com/shadcn.png"
  },
  {
    id: 4,
    user: "Emma Wilson",
    action: "completed",
    project: "Community Guidelines",
    reward: "300 USDC",
    time: "8 hours ago",
    avatar: "https://github.com/shadcn.png"
  }
];

const TalentPage = () => {
  const [activeTab, setActiveTab] = useState("Leaderboard");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const tabs = ["Leaderboard", "Activity", "Badges", "Stats"];

  const filteredLeaderboard = mockLeaderboardData.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getRankIcon = (rank: number) => {
    if (rank === 1) return Crown;
    if (rank === 2) return Trophy;
    if (rank === 3) return Medal;
    return Star;
  };

  const getRankColor = (rank: number) => {
    if (rank === 1) return "from-yellow-400 to-yellow-600";
    if (rank === 2) return "from-gray-300 to-gray-500";
    if (rank === 3) return "from-orange-500 to-orange-700";
    return "from-electric-blue to-electric-blue-200";
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Header */}
      <Navbar />

      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="flex-1 p-4 sm:p-6">
          {/* Hero Section */}
          
          {/* Season Info Card */}
          <Card className="bg-card border border-border p-4 sm:p-6 mb-6 animate-slide-in-up">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-electric-blue to-electric-blue-200 animate-pulse-glow">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">{mockSeasonStats.seasonName}</h3>
                  <p className="text-sm text-muted-foreground">
                    {mockSeasonStats.startDate} - {mockSeasonStats.endDate}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-electric-blue stat-counter">{mockSeasonStats.daysRemaining}</div>
                  <div className="text-xs text-muted-foreground">Days Left</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground stat-counter">{mockSeasonStats.totalParticipants.toLocaleString()}</div>
                  <div className="text-xs text-muted-foreground">Participants</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground stat-counter">${mockSeasonStats.totalEarnings.toLocaleString()}</div>
                  <div className="text-xs text-muted-foreground">Total Earned</div>
                </div>
              </div>
            </div>
          </Card>

          {/* Tabs */}
          <div className="flex gap-1 mb-6 overflow-x-auto pb-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 sm:px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${
                  activeTab === tab
                    ? "bg-electric-blue text-white"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input
                type="text"
                placeholder="Search talent..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-blue/50"
              />
            </div>
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 transition-colors ${
                showFilters 
                  ? "text-electric-blue bg-electric-blue/10" 
                  : "text-muted-foreground hover:text-primary"
              } px-3 py-2 rounded-lg`}
            >
              <Filter className="w-4 h-4" />
              <span className="hidden sm:inline">Filter</span>
            </button>
          </div>

          {/* Content based on active tab */}
          {activeTab === "Leaderboard" && (
            <div className="space-y-4">
              {loading ? (
                Array.from({ length: 5 }).map((_, i) => (
                  <Card key={`leader-skel-${i}`} className="bg-card border border-border p-4 sm:p-6">
                    <div className="flex items-center gap-4">
                      <Skeleton className="w-12 h-12 rounded-full" />
                      <div className="flex-1 space-y-2">
                        <Skeleton className="h-4 w-48" />
                        <Skeleton className="h-3 w-32" />
                      </div>
                      <Skeleton className="h-6 w-20" />
                    </div>
                  </Card>
                ))
              ) : (
                filteredLeaderboard.map((user, index) => {
                  const RankIcon = getRankIcon(user.rank);
                  const rankColor = getRankColor(user.rank);
                  
                  return (
                    <Card 
                      key={user.id} 
                      className={`leaderboard-item talent-card-hover bg-card border border-border p-4 sm:p-6 hover:border-electric-blue/50 transition-all duration-300 ${
                        user.isCurrentUser ? 'ring-2 ring-electric-blue/30 bg-electric-blue/5' : ''
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        {/* Rank */}
                        <div className="flex-shrink-0">
                          <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${rankColor} flex items-center justify-center animate-rank-glow ${
                            user.rank === 1 ? 'rank-badge-gold' : 
                            user.rank === 2 ? 'rank-badge-silver' : 
                            user.rank === 3 ? 'rank-badge-bronze' : ''
                          }`}>
                            <RankIcon className="w-6 h-6 text-white" />
                          </div>
                        </div>

                        {/* User Info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-foreground text-sm sm:text-base truncate">
                              {user.name}
                            </h3>
                            {user.isCurrentUser && (
                              <Badge variant="secondary" className="text-xs">You</Badge>
                            )}
                            <span className="text-muted-foreground text-xs sm:text-sm">
                              {user.username}
                            </span>
                          </div>
                          
                          {/* Badges */}
                          <div className="flex flex-wrap gap-1 mb-2">
                            {user.badges.slice(0, 2).map((badge, badgeIndex) => (
                              <Badge key={badgeIndex} variant="outline" className="text-xs animate-badge-bounce" style={{ animationDelay: `${badgeIndex * 0.2}s` }}>
                                {badge}
                              </Badge>
                            ))}
                            {user.badges.length > 2 && (
                              <Badge variant="outline" className="text-xs animate-badge-bounce" style={{ animationDelay: '0.4s' }}>
                                +{user.badges.length - 2} more
                              </Badge>
                            )}
                          </div>

                          {/* Stats */}
                          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <DollarSign className="w-3 h-3" />
                              ${user.totalEarnings.toLocaleString()}
                            </span>
                            <span className="flex items-center gap-1">
                              <Target className="w-3 h-3" />
                              {user.projectsCompleted} projects
                            </span>
                            <span className="flex items-center gap-1">
                              <Zap className="w-3 h-3" />
                              {user.streak} day streak
                            </span>
                          </div>
                        </div>

                        {/* Tier and Change */}
                        <div className="flex flex-col items-end gap-2">
                          <div className={`flex items-center gap-1 px-2 py-1 rounded-full bg-gradient-to-r ${user.tierColor} ${
                            user.tier === 'Diamond' ? 'tier-diamond' :
                            user.tier === 'Platinum' ? 'tier-platinum' :
                            user.tier === 'Gold' ? 'tier-gold' :
                            user.tier === 'Silver' ? 'tier-silver' :
                            'tier-bronze'
                          }`}>
                            <user.tierIcon className="w-3 h-3 text-white" />
                            <span className="text-white text-xs font-medium">{user.tier}</span>
                          </div>
                          <div className={`flex items-center gap-1 text-xs font-medium ${
                            user.change.startsWith('+') ? 'text-green-400' : 'text-red-400'
                          }`}>
                            <TrendingUp className={`w-3 h-3 ${user.change.startsWith('+') ? 'animate-bounce' : ''}`} />
                            {user.change}
                          </div>
                        </div>
                      </div>
                    </Card>
                  );
                })
              )}
            </div>
          )}

          {activeTab === "Activity" && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
              {mockRecentActivity.map((activity) => (
                <Card key={activity.id} className="bg-card border border-border p-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={activity.avatar} />
                      <AvatarFallback className="bg-electric-blue text-white">
                        {activity.user.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-foreground">{activity.user}</span>
                        <span className="text-muted-foreground text-sm">
                          {activity.action} {activity.project}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="text-electric-blue font-medium">{activity.reward}</span>
                        <span>{activity.time}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {activeTab === "Badges" && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold mb-4">Available Badges</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: "Top Performer", description: "Earned $10,000+ in a season", icon: Crown, color: "from-yellow-400 to-yellow-600" },
                  { name: "Consistent Builder", description: "Complete 10+ projects", icon: Target, color: "from-electric-blue to-electric-blue-200" },
                  { name: "Community Leader", description: "Help 50+ community members", icon: Users, color: "from-purple-500 to-purple-700" },
                  { name: "Design Expert", description: "Complete 5+ design projects", icon: Award, color: "from-pink-500 to-pink-700" },
                  { name: "DeFi Specialist", description: "Complete 3+ DeFi projects", icon: Zap, color: "from-green-500 to-green-700" },
                  { name: "Technical Writer", description: "Write 10+ technical articles", icon: Star, color: "from-orange-500 to-orange-700" }
                ].map((badge, index) => (
                  <Card key={index} className="bg-card border border-border p-4 hover:border-electric-blue/50 transition-colors animate-scale-in talent-card-hover" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${badge.color} flex items-center justify-center animate-badge-bounce`} style={{ animationDelay: `${index * 0.2}s` }}>
                        <badge.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{badge.name}</h4>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{badge.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === "Stats" && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold mb-4">Season Statistics</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card className="bg-card border border-border p-4 animate-scale-in" style={{ animationDelay: '0.1s' }}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-electric-blue/10 animate-pulse-glow">
                      <Users className="w-5 h-5 text-electric-blue" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground stat-counter">{mockSeasonStats.totalParticipants.toLocaleString()}</div>
                      <div className="text-sm text-muted-foreground">Total Participants</div>
                    </div>
                  </div>
                </Card>
                <Card className="bg-card border border-border p-4 animate-scale-in" style={{ animationDelay: '0.2s' }}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-green-500/10 animate-pulse-glow">
                      <DollarSign className="w-5 h-5 text-green-500" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground stat-counter">${mockSeasonStats.totalEarnings.toLocaleString()}</div>
                      <div className="text-sm text-muted-foreground">Total Earnings</div>
                    </div>
                  </div>
                </Card>
                <Card className="bg-card border border-border p-4 animate-scale-in" style={{ animationDelay: '0.3s' }}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-purple-500/10 animate-pulse-glow">
                      <Target className="w-5 h-5 text-purple-500" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground stat-counter">{mockSeasonStats.activeProjects}</div>
                      <div className="text-sm text-muted-foreground">Active Projects</div>
                    </div>
                  </div>
                </Card>
                <Card className="bg-card border border-border p-4 animate-scale-in" style={{ animationDelay: '0.4s' }}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-orange-500/10 animate-pulse-glow">
                      <Clock className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground stat-counter">{mockSeasonStats.daysRemaining}</div>
                      <div className="text-sm text-muted-foreground">Days Remaining</div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:w-80 lg:border-l lg:border-gray-800 lg:p-6">
          <div className="p-4 lg:p-0">
            {/* Current User Stats */}
            <Card className="bg-card border border-border p-4 sm:p-6 mb-6 animate-slide-in-right">
              <div className="flex items-center gap-3 mb-4">
                <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-electric-blue" />
                <h3 className="font-semibold text-foreground text-sm sm:text-base">Your Performance</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Current Rank</span>
                  <span className="text-lg font-bold text-electric-blue stat-counter">#3</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Total Earnings</span>
                  <span className="text-lg font-bold text-foreground stat-counter">$11,200</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Projects Completed</span>
                  <span className="text-lg font-bold text-foreground stat-counter">9</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Current Streak</span>
                  <span className="text-lg font-bold text-foreground stat-counter">32 days</span>
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-gray-300 border border-gray-700 p-4 sm:p-6 mb-6 animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-electric-blue " />
                <h3 className="font-semibold text-foreground text-sm sm:text-base">Quick Actions</h3>
              </div>
              <div className="space-y-3">
                <Button 
                  onClick={() => navigate("/opportunities")}
                  className="w-full bg-gradient-to-r from-electric-blue to-electric-blue-200 hover:from-electric-blue-50 hover:to-electric-blue text-white text-sm glow-electric hover:glow-electric-strong animate-scale-in"
                  style={{ animationDelay: '0.3s' }}
                >
                  Browse Opportunities
                </Button>
                <Button 
                  variant="outline"
                  className="w-full border-electric-blue text-electric-blue hover:bg-electric-blue/10 animate-scale-in"
                  style={{ animationDelay: '0.4s' }}
                >
                  View Your Profile
                </Button>
              </div>
            </Card>

            {/* Season Progress */}
            <Card className="bg-card border border-border p-4 sm:p-6 animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-electric-blue animate-pulse-glow" />
                <h3 className="font-semibold text-foreground text-sm sm:text-base">Season Progress</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="text-foreground stat-counter">68%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                    <div className="bg-gradient-to-r from-electric-blue to-electric-blue-200 h-2 rounded-full animate-shimmer" style={{ width: '68%' }}></div>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  <p>23 days remaining in Winter 2024 season</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentPage;
