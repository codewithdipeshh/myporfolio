import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

const Experience = () => {
  const responsibilities = [
    'Created technical content (blogs, tutorials, videos) on open-source and cloud-native tech.',
    'Hosted workshops, hackathons, webinars on Linux, DevOps, containerization.',
    'Contributed code, improved docs, resolved issues in open-source projects.',
    'Gained experience with Docker, Kubernetes, AWS, Jenkins, IaC tools.',
    'Explored Generative AI, Agentic AI, and ML applications.',
  ];

  return (
    <section id="experience" className="py-20 bg-[#FDFAF6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0B1D51] mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-[#965CF5] mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:scale-105">
            <div className="bg-gradient-to-r from-[#965CF5] to-[#8A5FF4] p-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <Briefcase className="text-[#FDFAF6]" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#FDFAF6] mb-2">
                    Summer Intern – LinuxWorld Creator Program
                  </h3>
                  <div className="flex flex-wrap gap-4 text-[#FDFAF6]/90">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>LinuxWorld Informatics Pvt Ltd.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>June 2025 – Present</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8">
              <h4 className="text-xl font-semibold text-[#0B1D51] mb-6">
                Key Responsibilities & Achievements
              </h4>
              <div className="space-y-4">
                {responsibilities.map((responsibility, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-[#965CF5] mt-1 flex-shrink-0" size={20} />
                    <p className="text-[#0B1D51]/80 leading-relaxed">{responsibility}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-[#965CF5]/5 rounded-xl border border-[#965CF5]/20">
                <h5 className="font-semibold text-[#0B1D51] mb-2">Technologies & Tools</h5>
                <div className="flex flex-wrap gap-2">
                  {['Docker', 'Kubernetes', 'AWS', 'Jenkins', 'Linux', 'DevOps', 'AI/ML'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#965CF5]/10 text-[#965CF5] rounded-full text-sm font-medium hover:bg-[#965CF5]/20 transform hover:scale-105 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;