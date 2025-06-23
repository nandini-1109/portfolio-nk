
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-cyber-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Profile Image */}
          <div className="relative flex justify-center">
            <div className="relative w-80 h-96">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 to-electric-cyan/10 rounded-3xl backdrop-blur-sm border border-neon-purple/20"></div>
              
              {/* Profile Image Container */}
              <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden border border-neon-purple/30">
                <img 
                  src="/lovable-uploads/a0b8946f-7c53-4860-8cd1-4b9140c7ef2b.png"
                  alt="Nandini Kaushik - About"
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Cyberpunk overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-black/60 via-transparent to-transparent"></div>
                
                {/* Bottom info panel */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-cyber-black/80 backdrop-blur-md rounded-lg p-4 border border-electric-cyan/30">
                    <h3 className="text-lg font-serif text-neon-purple mb-1">Nandini Kaushik</h3>
                    <p className="text-sm font-mono text-electric-cyan">B.Tech CSE Student</p>
                    <p className="text-xs text-gray-400 mt-1">JUET Guna</p>
                  </div>
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
