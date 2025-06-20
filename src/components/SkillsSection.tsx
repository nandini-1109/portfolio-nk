
import React, { useState } from 'react';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillCategories = [
    { id: 'all', name: 'All', color: 'text-cyber-white' },
    { id: 'design', name: 'Design', color: 'text-neon-purple' },
    { id: 'frontend', name: 'Frontend', color: 'text-electric-cyan' },
    { id: 'tools', name: 'Tools', color: 'text-neon-purple' },
  ];

  const skills = [
    // Design Tools
    { name: 'Figma', category: 'design', icon: '🎨', level: 90 },
    { name: 'Adobe Illustrator', category: 'design', icon: '🖌️', level: 85 },
    { name: 'Adobe Photoshop', category: 'design', icon: '📷', level: 80 },
    { name: 'Canva', category: 'design', icon: '✨', level: 95 },
    
    // Frontend Development
    { name: 'HTML5', category: 'frontend', icon: '🌐', level: 95 },
    { name: 'CSS3', category: 'frontend', icon: '🎭', level: 90 },
    { name: 'JavaScript', category: 'frontend', icon: '⚡', level: 85 },
    { name: 'React.js', category: 'frontend', icon: '⚛️', level: 80 },
    { name: 'Tailwind CSS', category: 'frontend', icon: '🌊', level: 88 },
    
    // Programming Languages
    { name: 'C++', category: 'frontend', icon: '💻', level: 85 },
    { name: 'Python', category: 'frontend', icon: '🐍', level: 75 },
    
    // Tools
    { name: 'GitHub', category: 'tools', icon: '🐙', level: 90 },
    { name: 'VS Code', category: 'tools', icon: '📝', level: 95 },
    { name: 'Bolt.new', category: 'tools', icon: '⚡', level: 85 },
    { name: 'Netlify', category: 'tools', icon: '🚀', level: 80 },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 bg-cyber-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-glow mb-6">
            Skills & <span className="text-neon-purple">Expertise</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit for creating digital experiences that merge aesthetics with functionality
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-4 bg-cyber-gray/30 rounded-full p-2 border border-neon-purple/30">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-neon-purple text-cyber-black cyber-glow'
                    : 'text-gray-400 hover:text-cyber-white hover:bg-cyber-gray/50'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative bg-cyber-gray/20 border border-neon-purple/30 rounded-xl p-6 hover:bg-cyber-gray/40 hover:border-neon-purple/50 transition-all duration-300 cursor-pointer neon-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Skill Icon */}
              <div className="text-4xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              
              {/* Skill Name */}
              <div className="text-center mb-4">
                <h3 className="text-cyber-white font-semibold text-sm mb-2">{skill.name}</h3>
                
                {/* Skill Level Bar */}
                <div className="w-full bg-cyber-gray rounded-full h-2">
                  <div 
                    className="bg-neon-gradient h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <div className="text-xs text-gray-400 mt-1">{skill.level}%</div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-neon-gradient opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Skill Summary */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-neon-purple">{skills.filter(s => s.category === 'design').length}+</div>
              <div className="text-gray-300">Design Tools</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-electric-cyan">{skills.filter(s => s.category === 'frontend').length}+</div>
              <div className="text-gray-300">Tech Skills</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-neon-purple">{skills.filter(s => s.category === 'tools').length}+</div>
              <div className="text-gray-300">Dev Tools</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
