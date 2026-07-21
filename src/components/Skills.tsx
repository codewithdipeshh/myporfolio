import { Code, Database, PenTool as Tool } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: JSX.Element;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    icon: <Code size={22} />,
    skills: ['JavaScript', 'Python', 'HTML5', 'CSS3', 'Linux'],
  },
  {
    title: 'Frameworks & Libraries',
    icon: <Tool size={22} />,
    skills: ['React', 'Node.js', 'Express.js', 'Tailwind CSS'],
  },
  {
    title: 'Tools, Cloud & Databases',
    icon: <Database size={22} />,
    skills: ['Git', 'Docker', 'MongoDB', 'AWS'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="dvskills">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

        .dvskills {
          position: relative;
          padding: 6.5rem 0;
          background: #fdfaf6;
          overflow: hidden;
          font-family: 'Inter', sans-serif;
        }

        .dvskills__dotfield {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(11,29,81,0.06) 1px, transparent 1px);
          background-size: 26px 26px;
          mask-image: radial-gradient(ellipse 70% 55% at 50% 100%, black 0%, transparent 70%);
          pointer-events: none;
        }

        .dvskills__eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px;
          font-weight: 600;
          letter-spacing: 0.18em;
          color: #7c4fd6;
          text-transform: uppercase;
        }
        .dvskills__eyebrow::before {
          content: '';
          width: 28px;
          height: 1.5px;
          background: linear-gradient(90deg, #965CF5, transparent);
        }

        .dvskills__heading {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: clamp(2.25rem, 4vw, 3.25rem);
          color: #0B1D51;
          letter-spacing: -0.02em;
          line-height: 1.08;
          margin-top: 14px;
        }

        .dvskills__card {
          background: #ffffff;
          border: 1px solid rgba(11,29,81,0.08);
          border-radius: 18px;
          padding: 30px;
          box-shadow: 0 20px 42px -30px rgba(11,29,81,0.3);
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .dvskills__card:hover {
          transform: translateY(-4px);
          border-color: rgba(150,92,245,0.35);
          box-shadow: 0 26px 50px -26px rgba(150,92,245,0.3);
        }

        .dvskills__icon {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: rgba(150,92,245,0.08);
          border: 1px solid rgba(150,92,245,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #965CF5;
          margin-bottom: 22px;
        }

        .dvskills__title {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 600;
          font-size: 18px;
          color: #0B1D51;
          margin-bottom: 18px;
        }

        .dvskills__chip {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12.5px;
          padding: 7px 13px;
          border-radius: 999px;
          border: 1px solid rgba(150,92,245,0.22);
          background: rgba(150,92,245,0.06);
          color: #7c4fd6;
          transition: background 0.2s ease, border-color 0.2s ease;
        }
        .dvskills__chip:hover {
          background: rgba(150,92,245,0.14);
          border-color: rgba(150,92,245,0.4);
        }
      `}</style>

      <div className="dvskills__dotfield" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <span className="dvskills__eyebrow">Skills</span>
          <h2 className="dvskills__heading">What I work with</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="dvskills__card">
              <div className="dvskills__icon">{category.icon}</div>
              <h3 className="dvskills__title">{category.title}</h3>
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <span key={skill} className="dvskills__chip">
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