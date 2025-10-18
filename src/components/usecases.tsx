import { useNavigate } from "react-router-dom";
import { Wallet, TrendingUp, Users, Zap, Target, Rocket } from "lucide-react";

const UseCasesSection = () => {
  const navigate = useNavigate();

  const opportunities = [
    {
      title: "Compete",
      description: "Join contests and compete for rewards and recognition",
      icon: <TrendingUp className="w-8 h-8" />,
      gradient: "from-electric-blue to-electric-blue-200",
      action: "Start Competing",
      link: "/opportunities"
    },
    {
      title: "Discover",
      description: "Find contests, bounties, and opportunities on Cedra",
      icon: <Target className="w-8 h-8" />,
      gradient: "from-blue-600 to-blue-800",
      action: "Explore",
      link: "/opportunities"
    },
    {
      title: "Build",
      description: "Develop Move applications and grow your reputation",
      icon: <Rocket className="w-8 h-8" />,
      gradient: "from-purple-600 to-purple-800",
      action: "Start Building",
      link: "/opportunities"
    },
    {
      title: "Connect",
      description: "Join the Cedra ecosystem community of builders",
      icon: <Users className="w-8 h-8" />,
      gradient: "from-orange-600 to-orange-800",
      action: "Join Community",
      link: "/profile"
    },
    {
      title: "Submit",
      description: "Submit your solutions and track contest progress",
      icon: <Wallet className="w-8 h-8" />,
      gradient: "from-glow-cyan to-glow-cyan-200",
      action: "Submit Work",
      link: "/opportunities"
    },
    {
      title: "Rise",
      description: "Climb leaderboards and earn merit-based recognition",
      icon: <Zap className="w-8 h-8" />,
      gradient: "from-pink-600 to-pink-800",
      action: "View Leaderboard",
      link: "/opportunities"
    }
  ];

  return (
  <section className="w-full py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-electric-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-electric-blue bg-clip-text text-transparent">
              Build on Cedra
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join the Cedra ecosystem. Compete in contests, build innovative solutions, and rise through merit.
          </p>
        </div>

        {/* Opportunities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {opportunities.map((opportunity, index) => (
            <div
              key={index}
              className="group relative bg-card/60 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-electric-blue/50 transition-all duration-500 hover:transform hover:scale-105 hover:glow-electric"
            >
              {/* Card Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${opportunity.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${opportunity.gradient} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {opportunity.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {opportunity.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {opportunity.description}
                </p>
                
                {/* Action Button */}
                <button
                  onClick={() => navigate(opportunity.link)}
                  className="inline-flex items-center gap-2 text-electric-blue hover:text-electric-blue-50 font-medium transition-colors duration-300 group-hover:gap-3"
                >
                  {opportunity.action}
                  <span className="text-lg">→</span>
                </button>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/0 via-electric-blue/5 to-electric-blue/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button
            onClick={() => navigate("/opportunities")}
            className="bg-gradient-to-r from-electric-blue to-electric-blue-200 hover:from-electric-blue-50 hover:to-electric-blue text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg glow-electric hover:glow-electric-strong"
          >
            Get Started with TeamMove
          </button>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
