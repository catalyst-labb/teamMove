import { useNavigate } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";

const Hero = () => {
  const navigate = useNavigate();
  const { isDark } = useTheme();
  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Cosmic Background */}
      <div className="absolute inset-0 bg-background">
        {/* Stars */}
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 ${isDark ? 'bg-glow-cyan' : 'bg-electric-blue'} rounded-full animate-pulse`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
                boxShadow: isDark ? '0 0 6px oklch(0.70 0.20 200 / 0.8)' : '0 0 4px oklch(0.55 0.25 240 / 0.6)',
              }}
            />
          ))}
        </div>

        {/* Cosmic Rays */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-px h-full bg-gradient-to-b from-transparent via-electric-blue to-transparent opacity-20 glow-electric"
              style={{
                left: `${i * 12.5 + Math.random() * 10}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          ))}
        </div>

        {/* Crystal Balls */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top-left */}
          <div
            className={`absolute rounded-full bg-gradient-to-br from-electric-blue/20 via-glow-cyan/10 to-electric-blue/20 backdrop-blur-xl border ${isDark ? 'border-white/10' : 'border-gray-300/20'} glow-electric animate-float`}
            style={{ left: "8%", top: "12%", width: 140, height: 140, animationDelay: "0.2s", animationDuration: "7s" }}
          />
          {/* Top-right */}
          <div
            className={`absolute rounded-full bg-gradient-to-br from-glow-cyan/20 via-electric-blue/10 to-glow-cyan/20 backdrop-blur-xl border ${isDark ? 'border-white/10' : 'border-gray-300/20'} glow-cyan animate-float`}
            style={{ right: "10%", top: "18%", width: 110, height: 110, animationDelay: "1.1s", animationDuration: "6.5s" }}
          />
          {/* Center-left */}
          <div
            className={`absolute rounded-full bg-gradient-to-br from-electric-blue/20 via-glow-cyan/10 to-electric-blue/20 backdrop-blur-xl border ${isDark ? 'border-white/10' : 'border-gray-300/20'} glow-electric-strong animate-float`}
            style={{ left: "12%", top: "48%", width: 180, height: 180, animationDelay: "0.6s", animationDuration: "8s" }}
          />
          {/* Center-right */}
          <div
            className={`absolute rounded-full bg-gradient-to-br from-glow-cyan/20 via-electric-blue/10 to-glow-cyan/20 backdrop-blur-xl border ${isDark ? 'border-white/10' : 'border-gray-300/20'} glow-cyan-strong animate-float`}
            style={{ right: "14%", top: "52%", width: 160, height: 160, animationDelay: "1.8s", animationDuration: "7.5s" }}
          />
          {/* Bottom-left */}
          <div
            className={`absolute rounded-full bg-gradient-to-br from-electric-blue/20 via-glow-cyan/10 to-electric-blue/20 backdrop-blur-xl border ${isDark ? 'border-white/10' : 'border-gray-300/20'} glow-electric animate-float`}
            style={{ left: "18%", bottom: "8%", width: 120, height: 120, animationDelay: "1.4s", animationDuration: "6.8s" }}
          />
          {/* Bottom-right */}
          <div
            className={`absolute rounded-full bg-gradient-to-br from-glow-cyan/20 via-electric-blue/10 to-glow-cyan/20 backdrop-blur-xl border ${isDark ? 'border-white/10' : 'border-gray-300/20'} glow-cyan-strong animate-float`}
            style={{ right: "12%", bottom: "10%", width: 190, height: 190, animationDelay: "0.9s", animationDuration: "8.5s" }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 text-center">
        {/* Main Heading */}
        <h1 className="text-3xl md:text-6xl font-bold mb-8 leading-tight text-foreground">
          Contest-Driven
          <br />
          <span>Ecosystem Builder for</span>
          <br />
          <span className="inline-block relative">
            Cedra Network
            <span
              className="absolute left-0 right-0 -bottom-1 h-1 bg-electric-blue rounded glow-electric"
              style={{ zIndex: -1 }}
            ></span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Transform ecosystem development into high-stakes contests where builders compete, ship, and rise through transparent merit. Join the Cedra ecosystem and build the future of Move.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            className="bg-gradient-to-r from-electric-blue to-electric-blue-200 hover:from-electric-blue-50 hover:to-electric-blue text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer glow-electric hover:glow-electric-strong"
            onClick={() => navigate("/opportunities")}
          >
            Start Building
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
