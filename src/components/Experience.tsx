import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';

interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
  stack: string[];
}

const experiences: ExperienceEntry[] = [
  {
    role: 'Summer Intern – LinuxWorld Creator Program',
    company: 'LinuxWorld Informatics Pvt Ltd.',
    period: 'June 2025 – Present',
    responsibilities: [
      'Created technical content (blogs, tutorials, videos) on open-source and cloud-native tech.',
      'Hosted workshops, hackathons, webinars on Linux, DevOps, containerization.',
      'Contributed code, improved docs, resolved issues in open-source projects.',
      'Gained experience with Docker, Kubernetes, AWS, Jenkins, IaC tools.',
      'Explored Generative AI, Agentic AI, and ML applications.',
    ],
    stack: ['Docker', 'Kubernetes', 'AWS', 'Jenkins', 'Linux', 'DevOps', 'AI/ML'],
  },
  // Add further roles here — the timeline below renders however many entries exist.
];

const Experience = () => {
  return (
    <section id="experience" className="dvexp">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

        .dvexp {
          position: relative;
          padding: 6.5rem 0;
          background: #fdfaf6;
          overflow: hidden;
          font-family: 'Inter', sans-serif;
        }

        .dvexp__dotfield {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(11,29,81,0.06) 1px, transparent 1px);
          background-size: 26px 26px;
          mask-image: radial-gradient(ellipse 70% 55% at 15% 100%, black 0%, transparent 70%);
          pointer-events: none;
        }

        .dvexp__eyebrow {
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
        .dvexp__eyebrow::before {
          content: '';
          width: 28px;
          height: 1.5px;
          background: linear-gradient(90deg, #965CF5, transparent);
        }

        .dvexp__heading {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: clamp(2.25rem, 4vw, 3.25rem);
          color: #0B1D51;
          letter-spacing: -0.02em;
          line-height: 1.08;
          margin-top: 14px;
        }

        .dvexp__timeline {
          position: relative;
          max-width: 860px;
        }
        .dvexp__rail {
          position: absolute;
          left: 21px;
          top: 8px;
          bottom: 8px;
          width: 2px;
          background: linear-gradient(180deg, #965CF5, rgba(150,92,245,0.08));
        }

        .dvexp__entry {
          position: relative;
          padding-left: 64px;
        }
        .dvexp__entry + .dvexp__entry {
          margin-top: 3rem;
        }
        .dvexp__node {
          position: absolute;
          left: 6px;
          top: 6px;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #fdfaf6;
          border: 2px solid #965CF5;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 0 6px rgba(150,92,245,0.08);
        }
        .dvexp__node-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #965CF5;
        }

        .dvexp__meta {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 12.5px;
          color: rgba(11,29,81,0.55);
          margin-top: 8px;
          margin-bottom: 20px;
        }
        .dvexp__meta-item {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .dvexp__role {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 600;
          font-size: 22px;
          color: #0B1D51;
          letter-spacing: -0.01em;
        }

        .dvexp__card {
          background: #ffffff;
          border: 1px solid rgba(11,29,81,0.08);
          border-radius: 16px;
          padding: 28px;
          box-shadow: 0 20px 40px -28px rgba(11,29,81,0.25);
        }

        .dvexp__list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .dvexp__list-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 14.5px;
          line-height: 1.65;
          color: rgba(11,29,81,0.72);
        }

        .dvexp__stack-label {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 600;
          font-size: 13px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: rgba(11,29,81,0.45);
          margin-bottom: 12px;
        }
        .dvexp__chip {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          padding: 6px 12px;
          border-radius: 999px;
          border: 1px solid rgba(150,92,245,0.22);
          background: rgba(150,92,245,0.06);
          color: #7c4fd6;
          transition: background 0.2s ease, border-color 0.2s ease;
        }
        .dvexp__chip:hover {
          background: rgba(150,92,245,0.14);
          border-color: rgba(150,92,245,0.4);
        }
      `}</style>

      <div className="dvexp__dotfield" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <span className="dvexp__eyebrow">Experience</span>
          <h2 className="dvexp__heading">Where I've worked</h2>
        </div>

        <div className="dvexp__timeline">
          <div className="dvexp__rail" />

          {experiences.map((exp) => (
            <div key={exp.role} className="dvexp__entry">
              <div className="dvexp__node">
                <span className="dvexp__node-dot" />
              </div>

              <h3 className="dvexp__role">{exp.role}</h3>

              <div className="dvexp__meta">
                <span className="dvexp__meta-item">
                  <MapPin size={13} />
                  {exp.company}
                </span>
                <span className="dvexp__meta-item">
                  <Calendar size={13} />
                  {exp.period}
                </span>
              </div>

              <div className="dvexp__card">
                <div className="dvexp__list">
                  {exp.responsibilities.map((item) => (
                    <div key={item} className="dvexp__list-item">
                      <CheckCircle2 className="text-[#965CF5] mt-0.5 flex-shrink-0" size={16} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-7 pt-6 border-t border-[#0B1D51]/8">
                  <p className="dvexp__stack-label">Technologies & Tools</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map((tech) => (
                      <span key={tech} className="dvexp__chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;