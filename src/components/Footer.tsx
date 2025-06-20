
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      category: 'Portfolio',
      links: [
        { name: 'Projects', href: '#projects' },
        { name: 'Design Work', href: '#design' },
        { name: 'Skills', href: '#skills' },
        { name: 'Resume', href: '#resume' }
      ]
    },
    {
      category: 'Connect',
      links: [
        { name: 'GitHub', href: '#' },
        { name: 'LinkedIn', href: '#' },
        { name: 'Behance', href: '#' },
        { name: 'Email', href: 'mailto:nandini@example.com' }
      ]
    },
    {
      category: 'About',
      links: [
        { name: 'About Me', href: '#about' },
        { name: 'Contact', href: '#contact' },
        { name: 'Experience', href: '#resume' },
        { name: 'Achievements', href: '#resume' }
      ]
    }
  ];

  return (
    <footer className="bg-cyber-black border-t border-neon-purple/20 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-bg opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h3 className="text-3xl font-serif font-bold text-neon-purple text-glow">
                Nandini Kaushik
              </h3>
              <p className="text-electric-cyan font-mono mt-2">
                B.Tech CSE | Designer | Developer
              </p>
            </div>
            
            <p className="text-gray-300 leading-relaxed max-w-md">
              Crafting digital experiences that bridge the gap between innovative technology 
              and human-centered design. Always learning, always creating.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              {['🐙', '💼', '🎨', '📧'].map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-cyber-gray/30 border border-neon-purple/30 rounded-lg flex items-center justify-center hover:bg-neon-purple/20 hover:border-neon-purple/50 transition-all duration-300 group"
                >
                  <span className="group-hover:scale-110 transition-transform duration-300">
                    {icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.category} className="space-y-4">
              <h4 className="text-lg font-semibold text-electric-cyan">
                {section.category}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-neon-purple transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-cyber-gray/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} Nandini Kaushik. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Designed & Coded with <span className="text-neon-purple">💜</span> in India
              </p>
            </div>

            {/* Attribution */}
            <div className="text-center md:text-right">
              <p className="text-gray-500 text-xs">
                Built with React, Tailwind CSS & Modern Web Technologies
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Inspired by cyberpunk aesthetics & anime culture
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-8 right-8 w-32 h-32 bg-neon-gradient opacity-5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-8 left-8 w-24 h-24 bg-electric-cyan/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </footer>
  );
};

export default Footer;
