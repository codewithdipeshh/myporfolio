import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, User, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#0B1D51] to-[#131D4F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#FDFAF6] mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-[#965CF5] mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-[#FDFAF6]/80">
            Have something to discuss? Send me a message and let's talk.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#0B1D51] mb-2">
                  Your Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#0B1D51]/40" size={20} />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-[#0B1D51]/20 rounded-lg focus:ring-2 focus:ring-[#965CF5] focus:border-transparent outline-none transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#0B1D51] mb-2">
                  Your Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#0B1D51]/40" size={20} />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-[#0B1D51]/20 rounded-lg focus:ring-2 focus:ring-[#965CF5] focus:border-transparent outline-none transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#0B1D51] mb-2">
                  Your Message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 text-[#0B1D51]/40" size={20} />
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-[#0B1D51]/20 rounded-lg focus:ring-2 focus:ring-[#965CF5] focus:border-transparent outline-none transition-all duration-300 resize-none"
                    placeholder="Enter your message"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#965CF5] text-[#FDFAF6] py-3 px-6 rounded-lg font-semibold hover:bg-[#8A5FF4] transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-[#965CF5]/20 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold text-[#FDFAF6] mb-6">Let's Connect</h3>
              <p className="text-[#FDFAF6]/80 mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, collaborating on interesting projects, 
                or just having a chat about technology and development.
              </p>

              <div className="space-y-6">
                <a
                  href="mailto:dipeshverma81122@gmail.com"
                  className="flex items-center gap-4 text-[#FDFAF6]/80 hover:text-[#965CF5] transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 bg-[#965CF5]/20 rounded-full flex items-center justify-center group-hover:bg-[#965CF5]/30 transition-all duration-300">
                    <Mail size={20} />
                  </div>
                  <span className="font-medium">dipeshverma81122@gmail.com</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/dipesh-verma-70b8ba2b7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-[#FDFAF6]/80 hover:text-[#965CF5] transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 bg-[#965CF5]/20 rounded-full flex items-center justify-center group-hover:bg-[#965CF5]/30 transition-all duration-300">
                    <Linkedin size={20} />
                  </div>
                  <span className="font-medium">LinkedIn Profile</span>
                </a>

                <a
                  href="https://github.com/codewithdipeshh/codewithdipeshh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-[#FDFAF6]/80 hover:text-[#965CF5] transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 bg-[#965CF5]/20 rounded-full flex items-center justify-center group-hover:bg-[#965CF5]/30 transition-all duration-300">
                    <Github size={20} />
                  </div>
                  <span className="font-medium">GitHub Repository</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;