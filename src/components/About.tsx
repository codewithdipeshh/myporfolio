import { Code, Lightbulb, Target } from 'lucide-react';

const pillars = [
  {
    icon: Code,
    title: 'Clean Code',
    description:
      'I write maintainable, scalable code that follows best practices and modern development standards.',
  },
  {
    icon: Lightbulb,
    title: 'AI Integration',
    description:
      'Combining AI knowledge with Mern Stack development to create intelligent, user-centric solutions.',
  },
  {
    icon: Target,
    title: 'User-Focused',
    description:
      'Every project is built with the end user in mind, ensuring excellent usability and experience.',
  },
];

const About = () => {
  return (
    <section id="about" className="dvabout">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');

        .dvabout {
          position: relative;
          padding: 6.5rem 0;
          background: #fdfaf6;
          overflow: hidden;
          font-family: 'Inter', sans-serif;
        }

        .dvabout__dotfield {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(11,29,81,0.06) 1px, transparent 1px);
          background-size: 26px 26px;
          mask-image: radial-gradient(ellipse 70% 55% at 85% 0%, black 0%, transparent 70%);
          pointer-events: none;
        }

        .dvabout__eyebrow {
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
        .dvabout__eyebrow::before {
          content: '';
          width: 28px;
          height: 1.5px;
          background: linear-gradient(90deg, #965CF5, transparent);
        }

        .dvabout__heading {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: clamp(2.25rem, 4vw, 3.25rem);
          color: #0B1D51;
          letter-spacing: -0.02em;
          line-height: 1.08;
          margin-top: 14px;
        }

        .dvabout__intro {
          position: relative;
          padding-left: 28px;
          border-left: 3px solid #965CF5;
        }
        .dvabout__intro p {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(1.15rem, 1.6vw, 1.45rem);
          font-weight: 500;
          line-height: 1.55;
          color: #0B1D51;
          letter-spacing: -0.01em;
        }
        .dvabout__intro .accent {
          color: #7c4fd6;
        }

        .dvabout__lead {
          margin-top: 22px;
          font-size: 15.5px;
          line-height: 1.8;
          color: rgba(11,29,81,0.62);
          max-width: 52ch;
        }

        .dvabout__pillar {
          position: relative;
          padding: 26px 4px 26px 24px;
          border-top: 1px solid rgba(11,29,81,0.08);
          transition: padding-left 0.3s ease;
        }
        .dvabout__pillar:first-child { border-top: none; }
        .dvabout__pillar::before {
          content: '';
          position: absolute;
          left: 0;
          top: 26px;
          bottom: 26px;
          width: 2px;
          background: transparent;
          transition: background 0.3s ease;
        }
        .dvabout__pillar:hover {
          padding-left: 32px;
        }
        .dvabout__pillar:hover::before {
          background: linear-gradient(180deg, #965CF5, #C4B5FF);
        }

        .dvabout__pillar-row {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }
        .dvabout__pillar-icon {
          flex-shrink: 0;
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(150,92,245,0.08);
          border: 1px solid rgba(150,92,245,0.18);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .dvabout__pillar-title {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 600;
          font-size: 17px;
          color: #0B1D51;
          margin-bottom: 6px;
        }
        .dvabout__pillar-desc {
          font-size: 14.5px;
          line-height: 1.65;
          color: rgba(11,29,81,0.6);
        }
      `}</style>

      <div className="dvabout__dotfield" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-14">
          <span className="dvabout__eyebrow">About</span>
          <h2 className="dvabout__heading">Who I am, in short</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: editorial intro */}
          <div className="dvabout__intro">
            <p>
              A <span className="accent">B.Tech student specializing in AI</span> and a
              dedicated <span className="accent">Mern Stack Developer</span>, focused on
              building clean, responsive, user-centric websites.
            </p>
            <p className="dvabout__lead">
              My technical foundation in HTML, CSS, JavaScript, and modern frameworks —
              paired with a growing depth in artificial intelligence — lets me approach
              development challenges with an analytical, slightly unconventional
              perspective. Currently looking to bring that perspective to real-world
              projects.
            </p>
          </div>

          {/* Right: pillar list */}
          <div>
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.title} className="dvabout__pillar">
                  <div className="dvabout__pillar-row">
                    <div className="dvabout__pillar-icon">
                      <Icon className="text-[#965CF5]" size={20} />
                    </div>
                    <div>
                      <h3 className="dvabout__pillar-title">{pillar.title}</h3>
                      <p className="dvabout__pillar-desc">{pillar.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;