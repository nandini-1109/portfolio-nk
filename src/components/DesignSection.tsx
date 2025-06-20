
import React, { useState } from 'react';

const DesignSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedDesign, setSelectedDesign] = useState(null);

  const designCategories = [
    { id: 'all', name: 'All', icon: '🎨' },
    { id: 'ui', name: 'UI/UX', icon: '📱' },
    { id: 'poster', name: 'Posters', icon: '🖼️' },
    { id: 'layout', name: 'Layouts', icon: '📐' },
    { id: 'illustration', name: 'Illustrations', icon: '✨' },
  ];

  const designs = [
    {
      id: 1,
      title: 'HackVerse 2024 App Dashboard',
      category: 'ui',
      description: 'Modern dashboard design for hackathon management platform',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
      tags: ['UI/UX', 'React', 'Figma'],
      featured: true
    },
    {
      id: 2,
      title: 'Cyberpunk Event Poster',
      category: 'poster',
      description: 'Neon-styled poster design for tech conference',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
      tags: ['Poster', 'Adobe', 'Cyberpunk'],
      featured: false
    },
    {
      id: 3,
      title: 'E-commerce Mobile Layout',
      category: 'layout',
      description: 'Clean and intuitive mobile shopping experience',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
      tags: ['Mobile', 'UI/UX', 'Figma'],
      featured: true
    },
    {
      id: 4,
      title: 'Code Editor Interface',
      category: 'ui',
      description: 'Custom code editor with syntax highlighting',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
      tags: ['UI/UX', 'Developer Tools'],
      featured: false
    },
    {
      id: 5,
      title: 'Anime Character Illustration',
      category: 'illustration',
      description: 'Digital art inspired by modern anime aesthetics',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
      tags: ['Illustration', 'Digital Art'],
      featured: true
    },
    {
      id: 6,
      title: 'Tech Startup Landing Page',
      category: 'layout',
      description: 'Modern landing page design for AI startup',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      tags: ['Web Design', 'Landing Page'],
      featured: false
    }
  ];

  const filteredDesigns = activeFilter === 'all' 
    ? designs 
    : designs.filter(design => design.category === activeFilter);

  return (
    <section id="design" className="py-20 bg-cyber-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-glow mb-6">
            Design <span className="text-electric-cyan">Showcase</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A curated collection of my design work, from UI interfaces to digital illustrations, 
            each crafted with precision and creative vision
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-4 bg-cyber-gray/30 rounded-full p-2 border border-electric-cyan/30">
            {designCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeFilter === category.id
                    ? 'bg-electric-cyan text-cyber-black cyan-glow'
                    : 'text-gray-400 hover:text-cyber-white hover:bg-cyber-gray/50'
                }`}
              >
                <span>{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredDesigns.map((design, index) => (
            <div
              key={design.id}
              className="break-inside-avoid group relative bg-cyber-gray/20 border border-electric-cyan/30 rounded-xl overflow-hidden hover:border-electric-cyan/50 transition-all duration-300 cursor-pointer neon-border"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedDesign(design)}
            >
              {/* Design Image */}
              <div className="relative overflow-hidden">
                <img
                  src={design.image}
                  alt={design.title}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-electric-cyan/0 group-hover:bg-electric-cyan/20 transition-all duration-300"></div>
                
                {/* Featured Badge */}
                {design.featured && (
                  <div className="absolute top-4 left-4 bg-electric-cyan text-cyber-black px-3 py-1 rounded-full text-sm font-bold">
                    Featured
                  </div>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <button className="w-full bg-electric-cyan text-cyber-black py-2 rounded-lg font-medium hover:bg-cyber-white transition-colors duration-300">
                      View Full Design
                    </button>
                  </div>
                </div>
              </div>

              {/* Design Info */}
              <div className="p-6 space-y-3">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-cyber-white group-hover:text-electric-cyan transition-colors duration-300">
                    {design.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {design.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {design.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-neon-purple/20 text-neon-purple rounded-md text-xs font-medium border border-neon-purple/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Portfolio Button */}
        <div className="text-center mt-16">
          <button className="bg-transparent border-2 border-electric-cyan text-electric-cyan hover:bg-electric-cyan hover:text-cyber-black cyan-glow transition-all duration-300 px-8 py-4 rounded-lg font-medium text-lg">
            View Complete Design Portfolio
          </button>
        </div>
      </div>

      {/* Lightbox Modal (Simple implementation) */}
      {selectedDesign && (
        <div 
          className="fixed inset-0 bg-cyber-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedDesign(null)}
        >
          <div className="max-w-4xl max-h-full overflow-auto bg-cyber-gray/50 border border-electric-cyan/50 rounded-xl p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-cyber-white">{selectedDesign.title}</h3>
                <p className="text-gray-300">{selectedDesign.description}</p>
              </div>
              <button 
                onClick={() => setSelectedDesign(null)}
                className="text-gray-400 hover:text-cyber-white text-2xl"
              >
                ×
              </button>
            </div>
            <img
              src={selectedDesign.image}
              alt={selectedDesign.title}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default DesignSection;
