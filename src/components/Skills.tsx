import React from 'react';
import { Code, Database, PenTool as Tool } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code size={24} />,
      skills: ['JavaScript', 'Python', 'HTML5', 'CSS3', 'Linux'],
      color: 'from-blue-500 to-purple-600',
    },
    {
      title: 'Frameworks & Libraries',
      icon: <Tool size={24} />,
      skills: ['React', 'Node.js', 'Express.js', 'Tailwind CSS'],
      color: 'from-green-500 to-teal-600',
    },
    {
      title: 'Tools & Databases',
      icon: <Database size={24} />,
      skills: ['Git', 'Docker', 'MongoDB'],
      color: 'from-orange-500 to-red-600',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-[#FDFAF6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0B1D51] mb-4">
            My Skills
          </h2>
          <div className="w-24 h-1 bg-[#965CF5] mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center text-white mb-6`}>
                {category.icon}
              </div>
              
              <h3 className="text-xl font-bold text-[#0B1D51] mb-6">{category.title}</h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-gradient-to-r from-[#965CF5]/10 to-[#8A5FF4]/10 text-[#0B1D51] rounded-full font-medium hover:from-[#965CF5]/20 hover:to-[#8A5FF4]/20 transform hover:scale-105 transition-all duration-300 cursor-default border border-[#965CF5]/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;