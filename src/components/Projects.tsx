import React from 'react';
import { ExternalLink, Github, Monitor } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      name: 'Netflix Clone',
      description: 'A responsive front-end clone of Netflix designed to mimic the UI and user experience of the original platform. Includes modern layout, hover effects, and a mobile-friendly design.',
      technologies: ['HTML5', 'CSS3'],
      liveLink: 'http://netfilx-clone-pi.vercel.app',
      sourceCode: 'https://github.com/codewithdipeshh/codewithdipeshh',
      hosting: 'Vercel',
      image: 'https://img.etimg.com/thumb/width-1600,height-900,imgsize-508841,resizemode-75,msid-84013290/magazines/panache/netflix-india-is-getting-its-first-dating-reality-show-irl-in-real-love.jpg',
    },
    {
      name: 'E-Commerce Hub',
      description: 'A fully functional e-commerce storefront with product management and Stripe payment integration.',
      technologies: ['HTML', 'CSS', 'Django', 'PostgreSQL', 'Stripe API'],
      sourceCode: 'https://github.com/codewithdipeshh/codewithdipeshh',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-[#0B1D51] to-[#131D4F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#FDFAF6] mb-4">
            My Work
          </h2>
          <div className="w-24 h-1 bg-[#965CF5] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-4 hover:scale-105 transition-all duration-500"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#965CF5]/0 group-hover:bg-[#965CF5]/10 transition-all duration-300"></div>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Monitor className="text-[#965CF5]" size={24} />
                  <h3 className="text-2xl font-bold text-[#0B1D51]">{project.name}</h3>
                </div>

                <p className="text-[#0B1D51]/70 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-[#965CF5]/10 text-[#965CF5] rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.hosting && (
                    <div className="mt-2">
                      <span className="text-sm text-[#0B1D51]/50">Hosted on: </span>
                      <span className="text-sm font-medium text-[#965CF5]">{project.hosting}</span>
                    </div>
                  )}
                </div>

                <div className="flex gap-4">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-[#965CF5] text-[#FDFAF6] px-4 py-2 rounded-lg hover:bg-[#8A5FF4] transform hover:scale-105 transition-all duration-300 font-medium"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border-2 border-[#965CF5] text-[#965CF5] px-4 py-2 rounded-lg hover:bg-[#965CF5] hover:text-[#FDFAF6] transform hover:scale-105 transition-all duration-300 font-medium"
                  >
                    <Github size={18} />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;