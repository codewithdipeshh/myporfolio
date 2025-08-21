import React, { useState, useEffect } from 'react';
import { Download, Eye, Mail } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'Front-End Developer';

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentIndex(0);
        setDisplayText('');
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-[#0B1D51] via-[#131D4F] to-[#0B1D51] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="text-xl font-medium text-[#965CF5]">
                Hi, I'm Dipesh Verma
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-[#FDFAF6] leading-tight">
                A{' '}
                <span className="text-[#965CF5] relative">
                  {displayText}
                  <span className="animate-pulse text-[#FDFAF6]">|</span>
                </span>
              </h1>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#FDFAF6]">
                Crafting Digital Solutions
                <span className="animate-blink text-[#965CF5]">.</span>
              </h2>
              <p className="text-xl text-[#FDFAF6]/80 max-w-2xl">
                I build and maintain responsive and user-friendly web applications from front to back.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-[#965CF5] text-[#FDFAF6] px-8 py-4 rounded-xl font-semibold hover:bg-[#8A5FF4] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <Mail size={20} />
                Contact Me
              </button>
              
              <a
                href="#"
                className="bg-transparent border-2 border-[#8A5FF4] text-[#8A5FF4] px-8 py-4 rounded-xl font-semibold hover:bg-[#8A5FF4]/10 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <Download size={20} />
                Download Resume
              </a>
              
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-transparent text-[#8A5FF4] px-8 py-4 rounded-xl font-semibold hover:bg-[#965CF5]/10 transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <Eye size={20} />
                View My Work
              </button>
            </div>
          </div>

          {/* Right Content - 3D Coding Animation */}
          <div className="relative">
            <div className="coding-workspace">
              <div className="monitor">
                <div className="screen">
                  <div className="code-lines">
                    <div className="line">
                      <span className="keyword">const</span>
                      <span className="variable"> developer</span>
                      <span className="operator"> = </span>
                      <span className="string">"Dipesh Verma";</span>
                    </div>
                    <div className="line">
                      <span className="keyword">function</span>
                      <span className="function"> buildAmazingApps</span>
                      <span className="brackets">()</span>
                      <span className="operator"> &#123;</span>
                    </div>
                    <div className="line indent">
                      <span className="keyword">return</span>
                      <span className="string"> "Beautiful UI"</span>
                      <span className="operator"> + </span>
                      <span className="string">"Great UX";</span>
                    </div>
                    <div className="line">
                      <span className="operator">&#125;</span>
                    </div>
                  </div>
                  <div className="cursor animate-pulse"></div>
                </div>
              </div>
              <div className="floating-elements">
                <div className="element react">React</div>
                <div className="element js">JS</div>
                <div className="element css">CSS</div>
                <div className="element html">HTML</div>
                <div className="element node">Node</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;