
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const handleDownloadCV = () => {
    // For now, we'll just log this action
    console.log('Download CV clicked');
    // In a real implementation, you would trigger a file download here
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative particles">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-glow">
                <span className="block animate-fade-in">Nandini</span>
                <span className="block text-neon-purple animate-fade-in" style={{ animationDelay: '0.5s' }}>
                  Kaushik
                </span>
              </h1>
              
              <div className="text-xl md:text-2xl text-electric-cyan font-mono typing">
                B.Tech CSE | UI/UX Designer | Developer
              </div>
              
              <p className="text-lg text-gray-300 max-w-lg leading-relaxed">
                Designing immersive experiences that combine technology with human-centered design. 
                Passionate about merging creativity with code to build the future.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-transparent border-2 border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-cyber-black cyber-glow transition-all duration-300 text-lg px-8 py-6"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Portfolio
              </Button>
              
              <Button 
                variant="outline"
                className="border-2 border-electric-cyan text-electric-cyan hover:bg-electric-cyan hover:text-cyber-black cyan-glow transition-all duration-300 text-lg px-8 py-6"
                onClick={handleDownloadCV}
              >
                Download CV
              </Button>
            </div>
          </div>

          {/* Right side - Hero artwork */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* Main character silhouette */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 to-electric-cyan/20 rounded-full blur-3xl animate-glow-pulse"></div>
              
              {/* Placeholder for the anime-style coder illustration */}
              <div className="relative z-10 w-full h-full bg-gradient-to-br from-cyber-gray to-cyber-black rounded-2xl border border-neon-purple/30 flex items-center justify-center neon-border">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-neon-purple to-electric-cyan rounded-full flex items-center justify-center animate-float">
                    <span className="text-4xl font-serif font-bold text-cyber-black">NK</span>
                  </div>
                  <div className="text-sm font-mono text-gray-400">
                    // Anime-style coder illustration
                    <br />
                    // Coming soon...
                  </div>
                </div>
              </div>

              {/* Floating UI elements */}
              <div className="absolute -top-4 -right-4 bg-cyber-gray/80 border border-neon-purple/50 rounded-lg p-3 backdrop-blur-md animate-float" style={{ animationDelay: '1s' }}>
                <div className="text-xs font-mono text-neon-purple">{'<Code />'}</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-cyber-gray/80 border border-electric-cyan/50 rounded-lg p-3 backdrop-blur-md animate-float" style={{ animationDelay: '2s' }}>
                <div className="text-xs font-mono text-electric-cyan">Design++</div>
              </div>

              <div className="absolute top-1/2 -left-8 bg-cyber-gray/80 border border-neon-purple/50 rounded-lg p-2 backdrop-blur-md animate-float" style={{ animationDelay: '3s' }}>
                <div className="w-4 h-4 bg-neon-gradient rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-neon-purple rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neon-purple rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
