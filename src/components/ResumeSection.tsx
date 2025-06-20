
import React from 'react';
import { Button } from '@/components/ui/button';

const ResumeSection = () => {
  const achievements = [
    {
      title: 'Hackathon Winner',
      description: 'First place in multiple college-level hackathons',
      icon: '🏆',
      color: 'text-neon-purple'
    },
    {
      title: 'Cummins Scholar',
      description: 'Academic excellence scholarship recipient',
      icon: '🎓',
      color: 'text-electric-cyan'
    },
    {
      title: 'Tech Club Leader',
      description: 'Active member and contributor in college tech communities',
      icon: '👥',
      color: 'text-neon-purple'
    },
    {
      title: 'Open Source Contributor',
      description: 'Contributing to various open-source projects on GitHub',
      icon: '💻',
      color: 'text-electric-cyan'
    }
  ];

  const handleDownloadResume = () => {
    // In a real implementation, this would trigger the download
    console.log('Downloading resume...');
    // For demo purposes, we'll show an alert
    alert('Resume download would start here. Please add your actual resume file to the project.');
  };

  return (
    <section id="resume" className="py-20 bg-cyber-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-glow mb-6">
            Resume & <span className="text-neon-purple">Achievements</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my academic journey, technical skills, and notable accomplishments
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Resume Preview Panel */}
          <div className="space-y-8">
            <div className="bg-cyber-gray/20 border border-neon-purple/30 rounded-xl p-8 neon-border">
              <div className="text-center space-y-6">
                {/* Resume Preview Placeholder */}
                <div className="bg-cyber-white/10 rounded-lg p-8 border border-electric-cyan/30">
                  <div className="space-y-4">
                    <div className="w-24 h-24 bg-neon-gradient rounded-full mx-auto flex items-center justify-center">
                      <span className="text-2xl font-serif font-bold text-cyber-black">NK</span>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-cyber-white">Nandini Kaushik</h3>
                      <p className="text-electric-cyan font-mono">B.Tech Computer Science & Engineering</p>
                      <p className="text-gray-400 text-sm">Jaypee University of Engineering & Technology</p>
                    </div>

                    {/* Resume Sections Preview */}
                    <div className="space-y-3 text-left">
                      <div className="border-l-2 border-neon-purple pl-4">
                        <h4 className="text-sm font-semibold text-neon-purple">EDUCATION</h4>
                        <p className="text-xs text-gray-400">B.Tech CSE • JUET Guna</p>
                      </div>
                      
                      <div className="border-l-2 border-electric-cyan pl-4">
                        <h4 className="text-sm font-semibold text-electric-cyan">SKILLS</h4>
                        <p className="text-xs text-gray-400">UI/UX • Frontend • Design</p>
                      </div>
                      
                      <div className="border-l-2 border-neon-purple pl-4">
                        <h4 className="text-sm font-semibold text-neon-purple">PROJECTS</h4>
                        <p className="text-xs text-gray-400">Web Apps • Design Systems</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Download Button */}
                <div className="space-y-4">
                  <Button 
                    size="lg"
                    className="w-full bg-neon-purple hover:bg-neon-purple/80 text-cyber-black font-bold py-4 cyber-glow"
                    onClick={handleDownloadResume}
                  >
                    📄 Download Complete Resume
                  </Button>
                  
                  <p className="text-sm text-gray-400">
                    Latest version • Updated December 2024 • PDF Format
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements & Highlights */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif font-bold text-electric-cyan mb-6">
                Key Achievements
              </h3>
              
              <div className="grid grid-cols-1 sm:gri
  d-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div
                    key={achievement.title}
                    className="bg-cyber-gray/20 border border-electric-cyan/30 rounded-xl p-6 hover:bg-cyber-gray/40 transition-all duration-300 group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="space-y-3">
                      <div className={`text-3xl ${achievement.color} group-hover:scale-110 transition-transform duration-300`}>
                        {achievement.icon}
                      </div>
                      
                      <div>
                        <h4 className={`font-bold ${achievement.color} mb-1`}>
                          {achievement.title}
                        </h4>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-cyber-gray/20 border border-neon-purple/30 rounded-xl p-6 neon-border">
              <h3 className="text-xl font-serif font-bold text-neon-purple mb-4">Quick Stats</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center space-y-1">
                  <div className="text-2xl font-bold text-electric-cyan">15+</div>
                  <div className="text-xs text-gray-400">Projects Completed</div>
                </div>
                
                <div className="text-center space-y-1">
                  <div className="text-2xl font-bold text-neon-purple">3+</div>
                  <div className="text-xs text-gray-400">Years of Learning</div>
                </div>
                
                <div className="text-center space-y-1">
                  <div className="text-2xl font-bold text-electric-cyan">10+</div>
                  <div className="text-xs text-gray-400">Technologies</div>
                </div>
                
                <div className="text-center space-y-1">
                  <div className="text-2xl font-bold text-neon-purple">5+</div>
                  <div className="text-xs text-gray-400">Hackathons</div>
                </div>
              </div>
            </div>

            {/* Additional Actions */}
            <div className="space-y-4">
              <Button 
                variant="outline"
                className="w-full border-2 border-electric-cyan text-electric-cyan hover:bg-electric-cyan hover:text-cyber-black cyan-glow"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                💬 Let's Connect
              </Button>
              
              <Button 
                variant="outline"
                className="w-full border-2 border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-cyber-black cyber-glow"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                🚀 View Projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
