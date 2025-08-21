import React from 'react';
import { Code, Lightbulb, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#FDFAF6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0B1D51] mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-[#965CF5] mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
            <div className="w-16 h-16 bg-[#965CF5]/10 rounded-full flex items-center justify-center mb-6">
              <Code className="text-[#965CF5]" size={32} />
            </div>
            <h3 className="text-xl font-bold text-[#0B1D51] mb-4">Clean Code</h3>
            <p className="text-[#0B1D51]/70">
              I write maintainable, scalable code that follows best practices and modern development standards.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
            <div className="w-16 h-16 bg-[#965CF5]/10 rounded-full flex items-center justify-center mb-6">
              <Lightbulb className="text-[#965CF5]" size={32} />
            </div>
            <h3 className="text-xl font-bold text-[#0B1D51] mb-4">AI Integration</h3>
            <p className="text-[#0B1D51]/70">
              Combining AI knowledge with front-end development to create intelligent, user-centric solutions.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
            <div className="w-16 h-16 bg-[#965CF5]/10 rounded-full flex items-center justify-center mb-6">
              <Target className="text-[#965CF5]" size={32} />
            </div>
            <h3 className="text-xl font-bold text-[#0B1D51] mb-4">User-Focused</h3>
            <p className="text-[#0B1D51]/70">
              Every project is built with the end user in mind, ensuring excellent usability and experience.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <p className="text-lg text-[#0B1D51]/80 leading-relaxed text-center">
            As a <span className="font-semibold text-[#965CF5]">B.Tech student specializing in AI</span> and a dedicated 
            <span className="font-semibold text-[#965CF5]"> Front-End Developer</span>, I focus on creating clean, responsive, 
            and user-centric websites. My technical skills in HTML, CSS, JavaScript, and modern frameworks, combined with my 
            growing knowledge of artificial intelligence, allow me to approach development challenges with a unique and 
            analytical perspective. I am currently seeking opportunities to apply my skills to real-world projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;