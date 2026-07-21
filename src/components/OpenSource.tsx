import { Award, Github } from 'lucide-react';

interface MiniProject {
  name: string;
  tech: string[];
  description: string;
}

const projects: MiniProject[] = [
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

const OpenSource = () => {
  return (
    <section id="opensource" className="dvos">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

        .dvos {
          position: relative;
          padding: 6.5rem 0;
          overflow: hidden;
          background: linear-gradient(160deg, #05070f 0%, #0a0e24 45%, #120a2e 100%);
          font-family: 'Inter', sans-serif;
        }

        .dvos__glow {
          position: absolute;
          width: 520px;
          height: 520px;
          border-radius: 50%;
          bottom: -180px;
          left: -140px;
          background: radial-gradient(circle, rgba(139,92,246,0.22) 0%, transparent 70%);
          filter: blur(90px);
          pointer-events: none;
        }
        .dvos__grid {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(253,250,246,0.05) 1px, transparent 1px);
          background-size: 28px 28px;
          mask-image: radial-gradient(ellipse 75% 55% at 50% 0%, black 30%, transparent 85%);
          pointer-events: none;
        }

        .dvos__eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px;
          font-weight: 600;
          letter-spacing: 0.18em;
          color: #c4b5ff;
          text-transform: uppercase;
        }
        .dvos__eyebrow::before {
          content: '';
          width: 28px;
          height: 1.5px;
          background: linear-gradient(90deg, #965CF5, transparent);
        }
        .dvos__heading {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: clamp(2.25rem, 4vw, 3.25rem);
          color: #f6f3ec;
          letter-spacing: -0.02em;
          line-height: 1.08;
          margin-top: 14px;
        }

        .dvos__card {
          position: relative;
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(196,181,255,0.14);
          border-radius: 16px;
          padding: 24px;
          transition: transform 0.3s ease, border-color 0.3s ease, background 0.3s ease;
        }
        .dvos__card:hover {
          transform: translateY(-4px);
          border-color: rgba(196,181,255,0.4);
          background: rgba(255,255,255,0.06);
        }

        .dvos__card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 600;
          font-size: 16.5px;
          color: #f6f3ec;
          transition: color 0.3s ease;
        }
        .dvos__card:hover .dvos__card-title {
          color: #c4b5ff;
        }

        .dvos__chip {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          padding: 4px 10px;
          border-radius: 999px;
          border: 1px solid rgba(150,92,245,0.28);
          background: rgba(150,92,245,0.12);
          color: #c4b5ff;
        }

        .dvos__desc {
          font-size: 13.5px;
          line-height: 1.65;
          color: rgba(246,243,236,0.62);
        }

        .dvos__badge {
          position: relative;
          border-radius: 20px;
          padding: 1px;
          background: linear-gradient(135deg, rgba(196,181,255,0.5), rgba(150,92,245,0.1) 45%, rgba(196,181,255,0.3));
        }
        .dvos__badge-inner {
          border-radius: 19px;
          background: linear-gradient(135deg, rgba(150,92,245,0.14), rgba(150,92,245,0.05));
          padding: 40px 32px;
          text-align: center;
        }
        .dvos__badge-icon {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: rgba(150,92,245,0.16);
          border: 1px solid rgba(196,181,255,0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 18px;
        }
        .dvos__badge-label {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #c4b5ff;
          margin-bottom: 10px;
        }
        .dvos__badge-title {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 22px;
          color: #f6f3ec;
          margin-bottom: 8px;
        }
        .dvos__badge-sub {
          font-size: 14px;
          color: rgba(246,243,236,0.62);
        }
      `}</style>

      <div className="dvos__glow" />
      <div className="dvos__grid" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <span className="dvos__eyebrow">Open Source</span>
          <h2 className="dvos__heading">Mini projects & experiments</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {projects.map((project) => (
            <div key={project.name} className="dvos__card">
              <div className="flex items-center gap-2 mb-4">
                <Github className="text-[#965CF5]" size={18} />
                <h3 className="dvos__card-title">{project.name}</h3>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span key={tech} className="dvos__chip">
                    {tech}
                  </span>
                ))}
              </div>

              <p className="dvos__desc">{project.description}</p>
            </div>
          ))}
        </div>

        {/* Achievement */}
        <div className="dvos__badge">
          <div className="dvos__badge-inner">
            <div className="dvos__badge-icon">
              <Award className="text-[#c4b5ff]" size={26} />
            </div>
            <p className="dvos__badge-label">Achievement</p>
            <p className="dvos__badge-title">DevSummit 2025 — Hackathon Participation</p>
            <p className="dvos__badge-sub">Recognized for innovative problem-solving</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;