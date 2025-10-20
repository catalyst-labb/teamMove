import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { 
  Twitter, 
  Github, 
  Linkedin, 
  Youtube, 
  Instagram, 
  Globe, 
  Users, 
  MessageCircle, 
  Heart, 
  Share2, 
  ExternalLink,
  Calendar,
  TrendingUp,
  Award,
  Zap,
  Star,
  ArrowRight,
  Globe2,
  MessageSquare,
  ThumbsUp,
  Eye
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../nav-bar";
import Footer from "../footer";
import AOS from "aos";
import "aos/dist/aos.css";

const CommunityPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    });
    
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  // Cedra social media handles and platforms
  const socialPlatforms = [
    {
      id: 1,
      name: "X (Twitter)",
      handle: "@cedra_dev",
      url: "https://twitter.com/cedra_dev",
      icon: Twitter,
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
      borderColor: "border-blue-200 dark:border-blue-800",
      followers: "12.4K",
      engagement: "4.2%",
      description: "Follow us for the latest updates, announcements, and community discussions",
      isVerified: true,
      isActive: true
    },
    {
      id: 2,
      name: "GitHub",
      handle: "cedra-dev",
      url: "https://github.com/cedra-dev",
      icon: Github,
      color: "from-gray-700 to-gray-900",
      bgColor: "bg-gray-50 dark:bg-gray-950/20",
      borderColor: "border-gray-200 dark:border-gray-800",
      followers: "2.8K",
      engagement: "8.7%",
      description: "Explore our open-source projects, contribute to the ecosystem, and track development progress",
      isVerified: true,
      isActive: true
    },
    {
      id: 3,
      name: "LinkedIn",
      handle: "cedra-blockchain",
      url: "https://linkedin.com/company/cedra-blockchain",
      icon: Linkedin,
      color: "from-blue-600 to-blue-800",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
      borderColor: "border-blue-200 dark:border-blue-800",
      followers: "5.1K",
      engagement: "2.1%",
      description: "Professional updates, team insights, and industry partnerships",
      isVerified: true,
      isActive: true
    },
    {
      id: 4,
      name: "YouTube",
      handle: "Cedra Blockchain",
      url: "https://youtube.com/@cedrablockchain",
      icon: Youtube,
      color: "from-red-500 to-red-700",
      bgColor: "bg-red-50 dark:bg-red-950/20",
      borderColor: "border-red-200 dark:border-red-800",
      followers: "3.2K",
      engagement: "6.8%",
      description: "Tutorials, demos, and deep-dive content about Move development and blockchain technology",
      isVerified: true,
      isActive: true
    },
    {
      id: 5,
      name: "Instagram",
      handle: "@cedra_blockchain",
      url: "https://instagram.com/cedra_blockchain",
      icon: Instagram,
      color: "from-pink-500 to-purple-600",
      bgColor: "bg-pink-50 dark:bg-pink-950/20",
      borderColor: "border-pink-200 dark:border-pink-800",
      followers: "8.7K",
      engagement: "5.3%",
      description: "Visual content, behind-the-scenes, and community highlights",
      isVerified: true,
      isActive: true
    },
    {
      id: 6,
      name: "Discord",
      handle: "Cedra Community",
      url: "https://discord.gg/cedra",
      icon: MessageCircle,
      color: "from-indigo-500 to-purple-600",
      bgColor: "bg-indigo-50 dark:bg-indigo-950/20",
      borderColor: "border-indigo-200 dark:border-indigo-800",
      followers: "15.2K",
      engagement: "12.4%",
      description: "Join our active Discord community for real-time discussions and support",
      isVerified: true,
      isActive: true
    },
    {
      id: 7,
      name: "Telegram",
      handle: "@cedra_announcements",
      url: "https://t.me/cedra_announcements",
      icon: MessageSquare,
      color: "from-blue-500 to-blue-700",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
      borderColor: "border-blue-200 dark:border-blue-800",
      followers: "9.8K",
      engagement: "3.9%",
      description: "Official announcements and important updates",
      isVerified: true,
      isActive: true
    },
    {
      id: 8,
      name: "Website",
      handle: "cedra.dev",
      url: "https://cedra.dev",
      icon: Globe2,
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50 dark:bg-green-950/20",
      borderColor: "border-green-200 dark:border-green-800",
      followers: "N/A",
      engagement: "N/A",
      description: "Official website with comprehensive documentation and resources",
      isVerified: true,
      isActive: true
    }
  ];

  // Community stats
  const communityStats = [
    {
      label: "Total Followers",
      value: "57.2K",
      change: "+12.3%",
      icon: Users,
      color: "text-electric-blue"
    },
    {
      label: "Active Members",
      value: "15.2K",
      change: "+8.7%",
      icon: MessageCircle,
      color: "text-glow-cyan"
    },
    {
      label: "Engagement Rate",
      value: "6.2%",
      change: "+2.1%",
      icon: TrendingUp,
      color: "text-electric-blue"
    },
    {
      label: "Community Score",
      value: "9.4/10",
      change: "+0.3",
      icon: Star,
      color: "text-yellow-500"
    }
  ];

  // Recent community highlights
  const communityHighlights = [
    {
      id: 1,
      title: "Move Developer Workshop Series",
      platform: "YouTube",
      date: "2 days ago",
      engagement: "1.2K views",
      description: "Comprehensive tutorial series on Move smart contract development",
      thumbnail: "https://pbs.twimg.com/media/G3PHh30WsAAybW8?format=jpg&name=900x900"
    },
    {
      id: 2,
      title: "Community AMA with Core Team",
      platform: "Discord",
      date: "1 week ago",
      engagement: "850 participants",
      description: "Live Q&A session with Cedra's core development team",
      thumbnail: "https://pbs.twimg.com/profile_banners/1869029357529747456/1753185510/1080x360"
    },
    {
      id: 3,
      title: "Developer Spotlight: Contest Winner",
      platform: "X (Twitter)",
      date: "2 weeks ago",
      engagement: "2.1K likes",
      description: "Showcasing the winning project from our latest contest",
      thumbnail: "https://pbs.twimg.com/media/G3sk7UWXIAAhFCK?format=jpg&name=900x900"
    }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-electric-blue mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading community...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-electric-blue to-glow-cyan bg-clip-text text-transparent">
            Cedra Community
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Connect with the Cedra ecosystem across all our social platforms. Join our vibrant community of developers, builders, and blockchain enthusiasts.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Users className="w-4 h-4 mr-2" />
              57.2K+ Followers
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <MessageCircle className="w-4 h-4 mr-2" />
              15.2K+ Active Members
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Star className="w-4 h-4 mr-2" />
              9.4/10 Community Score
            </Badge>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {communityStats.map((stat, index) => (
            <Card 
              key={index} 
              className="relative overflow-hidden hover:glow-electric transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-lg bg-electric-blue/10">
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {stat.change}
                  </Badge>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Social Media Platforms */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Social Platforms</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Follow us across all platforms to stay connected with the latest updates and community discussions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {socialPlatforms.map((platform, index) => (
            <Card 
              key={platform.id} 
              className={`relative overflow-hidden hover:shadow-lg transition-all duration-300 hover:glow-electric group ${platform.bgColor} ${platform.borderColor} border-2`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${platform.color} text-white`}>
                      <platform.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{platform.name}</h3>
                      {platform.isVerified && (
                        <Badge variant="secondary" className="text-xs">
                          <Star className="w-3 h-3 mr-1" />
                          Verified
                        </Badge>
                      )}
                    </div>
                  </div>
                  {platform.isActive && (
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  )}
                </div>
                <p className="text-sm text-muted-foreground font-mono">{platform.handle}</p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {platform.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground">Followers</p>
                    <p className="font-semibold">{platform.followers}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground">Engagement</p>
                    <p className="font-semibold">{platform.engagement}</p>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-gradient-to-r from-electric-blue to-electric-blue-200 hover:from-electric-blue-50 hover:to-electric-blue text-white glow-electric hover:glow-electric-strong"
                  onClick={() => window.open(platform.url, '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Visit Platform
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Community Highlights */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20 max-w-7xl mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Community Highlights</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Recent activities and engaging content from our community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {communityHighlights.map((highlight, index) => (
              <Card 
                key={highlight.id} 
                className="hover:shadow-lg transition-shadow cursor-pointer hover:glow-electric group"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={highlight.thumbnail} 
                    alt={highlight.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="bg-black/50 text-white">
                      {highlight.platform}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{highlight.date}</span>
                    <div className="flex items-center gap-1 ml-auto">
                      <Eye className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{highlight.engagement}</span>
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2 line-clamp-2">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                    {highlight.description}
                  </p>
                  <Button variant="ghost" size="sm" className="text-electric-blue hover:text-electric-blue-50 p-0">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Community</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Be part of the most active and supportive blockchain community. Connect, learn, and build together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-electric-blue to-electric-blue-200 hover:from-electric-blue-50 hover:to-electric-blue text-white px-8 py-3 glow-electric hover:glow-electric-strong"
              onClick={() => window.open('https://discord.gg/cedra', '_blank')}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Join Discord
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white px-8 py-3"
              onClick={() => navigate('/opportunities')}
            >
              <Zap className="w-5 h-5 mr-2" />
              Explore Contests
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CommunityPage;
