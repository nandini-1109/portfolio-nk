
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      alert('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: '🐙',
      url: '#',
      color: 'hover:text-neon-purple',
      description: 'Check out my code'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: '#',
      color: 'hover:text-electric-cyan',
      description: 'Professional network'
    },
    {
      name: 'Behance',
      icon: '🎨',
      url: '#',
      color: 'hover:text-neon-purple',
      description: 'Design portfolio'
    },
    {
      name: 'Email',
      icon: '📧',
      url: 'mailto:nandini@example.com',
      color: 'hover:text-electric-cyan',
      description: 'Direct contact'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-cyber-black relative particles">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-glow mb-6">
            Let's <span className="text-electric-cyan">Connect</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to collaborate on your next project? Whether it's a hackathon, internship opportunity, 
            or creative venture, I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-8">
            <div className="bg-cyber-gray/20 border border-electric-cyan/30 rounded-xl p-8 neon-border">
              <h3 className="text-2xl font-serif font-bold text-electric-cyan mb-6">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      className="bg-cyber-gray/50 border-neon-purple/30 text-cyber-white placeholder-gray-400 focus:border-neon-purple focus:ring-neon-purple"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="bg-cyber-gray/50 border-neon-purple/30 text-cyber-white placeholder-gray-400 focus:border-neon-purple focus:ring-neon-purple"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    className="bg-cyber-gray/50 border-neon-purple/30 text-cyber-white placeholder-gray-400 focus:border-neon-purple focus:ring-neon-purple"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project, opportunity, or just say hello!"
                    className="bg-cyber-gray/50 border-neon-purple/30 text-cyber-white placeholder-gray-400 focus:border-neon-purple focus:ring-neon-purple resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-electric-cyan hover:bg-electric-cyan/80 text-cyber-black font-bold py-4 cyan-glow disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-cyber-black mr-2"></div>
                      Sending Message...
                    </>
                  ) : (
                    '🚀 Send Message'
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info & Social Links */}
          <div className="space-y-8">
            {/* Quick Contact Info */}
            <div className="bg-cyber-gray/20 border border-neon-purple/30 rounded-xl p-8 neon-border">
              <h3 className="text-2xl font-serif font-bold text-neon-purple mb-6">
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">📍</div>
                  <div>
                    <h4 className="font-semibold text-cyber-white">Location</h4>
                    <p className="text-gray-300">Guna, Madhya Pradesh, India</p>
                    <p className="text-sm text-gray-400">Open to remote opportunities</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-2xl">🎓</div>
                  <div>
                    <h4 className="font-semibold text-cyber-white">Current Status</h4>
                    <p className="text-gray-300">B.Tech CSE Student</p>
                    <p className="text-sm text-gray-400">Available for internships & projects</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-2xl">⚡</div>
                  <div>
                    <h4 className="font-semibold text-cyber-white">Response Time</h4>
                    <p className="text-gray-300">Usually within 24 hours</p>
                    <p className="text-sm text-gray-400">Faster for urgent opportunities</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-cyber-gray/20 border border-electric-cyan/30 rounded-xl p-8 neon-border">
              <h3 className="text-2xl font-serif font-bold text-electric-cyan mb-6">
                Connect on Social
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group bg-cyber-gray/30 border border-gray-600 rounded-lg p-4 hover:border-neon-purple/50 transition-all duration-300 block ${social.color}`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                        {social.icon}
                      </div>
                      <div>
                        <div className="font-semibold text-cyber-white group-hover:text-inherit">
                          {social.name}
                        </div>
                        <div className="text-xs text-gray-400">
                          {social.description}
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center space-y-4">
              <div className="text-lg text-gray-300">
                Looking for a creative developer who bridges design and technology?
              </div>
              <Button
                className="bg-transparent border-2 border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-cyber-black cyber-glow transition-all duration-300 px-8 py-3"
                onClick={() => document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
