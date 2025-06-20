
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Cyberpunk Dashboard',
      description: 'A futuristic admin dashboard with neon aesthetics and smooth animations',
      category: 'web',
      stack: ['React', 'Tailwind', 'Framer Motion'],
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
      github: '#',
      live: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Anime Portfolio Site',
      description: 'Personal portfolio website with manga-inspired design elements',
      category: 'web',
      stack: ['Next.js', 'TypeScript', 'GSAP'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
      github: '#',
      live: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Neural Network Visualizer',
      description: 'Interactive tool to visualize and understand neural network architectures',
      category: 'ai',
      stack: ['Python', 'TensorFlow', 'D3.js'],
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
      github: '#',
      live: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Code Syntax Highlighter',
      description: 'Advanced syntax highlighting tool with multiple theme support',
      category: 'tool',
      stack: ['JavaScript', 'CSS', 'Prism.js'],
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
      github: '#',
      live: '#',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'web', name: 'Web Apps', count: projects.filter(p => p.category === 'web').length },
    { id: 'ai', name: 'AI/ML', count: projects.filter(p => p.category === 'ai').length },
    { id: 'tool', name: 'Tools', count: projects.filter(p => p.category === 'tool').length },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-cyber-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-glow mb-6">
            Featured <span className="text-neon-purple">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my technical projects, each crafted with attention to detail and innovative problem-solving
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-4 bg-cyber-gray/30 rounded-full p-2 border border-electric-cyan/30">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                  filter === category.id
                    ? 'bg-electric-cyan text-cyber-black cyan-glow'
                    : 'text-gray-400 hover:text-cyber-white hover:bg-cyber-gray/50'
                }`}
              >
                {category.name}
                <span className="text-xs bg-neon-purple/20 px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-cyber-gray/20 border border-neon-purple/30 rounded-xl overflow-hidden hover:border-neon-purple/50 transition-all duration-300 neon-border ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-neon-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-neon-purple text-cyber-black px-3 py-1 rounded-full text-sm font-bold">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-cyber-white group-hover:text-neon-purple transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-electric-cyan/20 text-electric-cyan rounded-full text-xs font-medium border border-electric-cyan/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <Button
                    size="sm"
                    className="bg-transparent border border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-cyber-black cyber-glow"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    GitHub
                  </Button>
                  <Button
                    size="sm"
                    className="bg-transparent border border-electric-cyan text-electric-cyan hover:bg-electric-cyan hover:text-cyber-black cyan-glow"
                    onClick={() => window.open(project.live, '_blank')}
                  >
                    Live Demo
                  </Button>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-neon-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-transparent border-2 border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-cyber-black cyber-glow transition-all duration-300 px-8 py-4"
          >
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
