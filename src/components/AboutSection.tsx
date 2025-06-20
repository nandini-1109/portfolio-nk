
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-cyber-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Profile silhouette */}
          <div className="relative flex justify-center">
            <div className="relative w-80 h-96">
              {/* Silhouette background */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 to-electric-cyan/10 rounded-3xl backdrop-blur-sm border border-neon-purple/20"></div>
              
              {/* Profile silhouette placeholder */}
              <div className="relative z-10 w-full h-full flex flex-col items-center justify-center space-y-6 p-8">
                <div className="w-32 h-32 bg-gradient-to-br from-neon-purple to-electric-cyan rounded-full flex items-center justify-center">
                  <span className="text-3xl font-serif font-bold text-cyber-black">NK</span>
                </div>
                
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-serif text-neon-purple">Profile</h3>
                  <p className="text-sm font-mono text-gray-400">
                    // Silhouette art placeholder
                    <br />
                    // Cyberpunk aesthetic
                  </p>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-electric-cyan rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-neon-purple rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>

          {/* Right side - About content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-glow">
                About <span className="text-neon-purple">Me</span>
              </h2>
              
              <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                <p>
                  I'm <span className="text-neon-purple font-semibold">Nandini Kaushik</span>, a passionate Computer Science student 
                  at Jaypee University of Engineering and Technology, Guna. I specialize in merging design thinking 
                  with technical innovation to create meaningful digital experiences.
                </p>
                
                <p>
                  My journey spans across <span className="text-electric-cyan">UI/UX design</span>, 
                  <span className="text-electric-cyan"> frontend development</span>, and 
                  <span className="text-electric-cyan"> creative problem-solving</span>. I believe in the power 
                  of technology to transform ideas into reality.
                </p>
              </div>
            </div>

            {/* Education */}
            <div className="space-y-4">
              <h3 className="text-2xl font-serif text-neon-purple">Education</h3>
              <div className="bg-cyber-gray/30 border border-neon-purple/30 rounded-lg p-6 neon-border">
                <div className="space-y-2">
                  <h4 className="text-xl font-semibold text-cyber-white">B.Tech Computer Science & Engineering</h4>
                  <p className="text-electric-cyan font-mono">Jaypee University of Engineering & Technology, Guna</p>
                  <p className="text-gray-400">Currently pursuing</p>
                </div>
              </div>
            </div>

            {/* Key Areas */}
            <div className="space-y-4">
              <h3 className="text-2xl font-serif text-neon-purple">Focus Areas</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'UI/UX Design',
                  'Frontend Development',
                  'Creative Coding',
                  'Design Systems'
                ].map((area, index) => (
                  <div 
                    key={area}
                    className="bg-cyber-gray/20 border border-electric-cyan/30 rounded-lg p-4 text-center hover:bg-cyber-gray/40 transition-all duration-300 cursor-pointer"
                  >
                    <div className="text-electric-cyan font-medium">{area}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
