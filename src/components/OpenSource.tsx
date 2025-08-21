import React from 'react';
import { Award, Github, Star } from 'lucide-react';

const OpenSource = () => {
  const projects = [
    {
      name: 'Email Sender Application',
      tech: ['Python', 'Streamlit', 'SMTP'],
      description: 'User-friendly web app to send emails through Streamlit interface with secure SMTP integration.',
    },
    {
      name: 'Interactive Chatbot',
      tech: ['Python', 'NLP', 'Machine Learning'],
      description: 'AI-powered chatbot using NLP for intelligent conversations.',
    },
    {
      name: 'Rain Prediction Model',
      tech: ['Python', 'Pandas', 'Scikit-Learn'],
      description: 'ML model analyzing weather data to predict rainfall accurately.',
    },
    {
      name: 'Photo Capture Automation',
      tech: ['JavaScript', 'Web APIs'],
      description: 'Browser-based camera app with automated photo capture and sharing functionality.',
    },
    {
      name: 'Marks Prediction System',
      tech: ['Python', 'NumPy', 'Linear Regression'],
      description: 'ML model predicting student performance based on study patterns.',
    },
    {
      name: 'Red Hat Containerization',
      tech: ['Docker', 'Podman', 'Red Hat Tools'],
      description: 'Exploration of container deployment practices using Red Hat tools.',
    },
  ];

  return (
    <section id="opensource" className="py-20 bg-gradient-to-br from-[#131D4F] to-[#0B1D51]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#FDFAF6] mb-4">
            Open Source Mini Projects
          </h2>
          <div className="w-24 h-1 bg-[#965CF5] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-[#965CF5]/20 hover:border-[#965CF5]/40 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 group shadow-lg hover:shadow-xl"
            >
              <div className="flex items-center gap-2 mb-4">
                <Github className="text-[#965CF5]" size={20} />
                <h3 className="text-lg font-bold text-[#FDFAF6] group-hover:text-[#965CF5] transition-colors duration-300">
                  {project.name}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-[#965CF5]/20 text-[#965CF5] rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-[#FDFAF6]/80 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>

        {/* Achievement */}
        <div className="bg-gradient-to-r from-[#965CF5]/20 to-[#8A5FF4]/20 rounded-2xl p-8 border border-[#965CF5]/30 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Award className="text-[#965CF5]" size={32} />
            <h3 className="text-2xl font-bold text-[#FDFAF6]">Achievement</h3>
          </div>
          <div className="text-center">
            <p className="text-xl font-semibold text-[#965CF5] mb-2">
              DevSummit 2025 – Hackathon Participation Certificate
            </p>
            <div className="flex items-center justify-center gap-2">
              <Star className="text-yellow-400" size={20} />
              <span className="text-[#FDFAF6]/80">Recognized for innovative problem-solving</span>
              <Star className="text-yellow-400" size={20} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;