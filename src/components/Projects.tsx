import { ExternalLink, Github, Monitor } from 'lucide-react';

interface Project {
  name: string;
  description: string;
  technologies: string[];
  liveLink?: string;
  sourceCode: string;
  hosting?: string;
  image: string;
}

const projects: Project[] = [
  {
    name: 'Netflix Clone',
    description:
      'A responsive front-end clone of Netflix designed to mimic the UI and user experience of the original platform. Includes modern layout, hover effects, and a mobile-friendly design.',
    technologies: ['HTML5', 'CSS3'],
    liveLink: 'http://netfilx-clone-pi.vercel.app',
    sourceCode: 'https://github.com/codewithdipeshh/netfilx.clone',
    hosting: 'Vercel',
    image: 'https://cdn.mos.cms.futurecdn.net/7npJW7oQSdk8qw3RkN4SGM.jpg',
  },
  {
    name: 'E-Commerce Hub',
    description:
      'A fully functional e-commerce storefront with product management and Stripe payment integration.',
    technologies: ['HTML', 'CSS', 'Django', 'PostgreSQL', 'Stripe API'],
    sourceCode: 'https://github.com/codewithdipeshh/codewithdipeshh',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="dvproj">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

        .dvproj {
          position: relative;
          padding: 6.5rem 0;
          overflow: hidden;
          background: linear-gradient(160deg, #05070f 0%, #0a0e24 45%, #120a2e 100%);
          font-family: 'Inter', sans-serif;
        }

        .dvproj__glow {
          position: absolute;
          width: 520px;
          height: 520px;
          border-radius: 50%;
          top: -160px;
          right: -140px;
          background: radial-gradient(circle, rgba(139,92,246,0.24) 0%, transparent 70%);
          filter: blur(90px);
          pointer-events: none;
        }
        .dvproj__grid {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(253,250,246,0.05) 1px, transparent 1px);
          background-size: 28px 28px;
          mask-image: radial-gradient(ellipse 75% 55% at 50% 0%, black 30%, transparent 85%);
          pointer-events: none;
        }

        .dvproj__eyebrow {
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
        .dvproj__eyebrow::before {
          content: '';
          width: 28px;
          height: 1.5px;
          background: linear-gradient(90deg, #965CF5, transparent);
        }
        .dvproj__heading {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: clamp(2.25rem, 4vw, 3.25rem);
          color: #f6f3ec;
          letter-spacing: -0.02em;
          line-height: 1.08;
          margin-top: 14px;
        }

        .dvproj__card {
          position: relative;
          border-radius: 18px;
          background: #ffffff;
          overflow: hidden;
          border: 1px solid rgba(196,181,255,0.12);
          box-shadow: 0 30px 60px -30px rgba(0,0,0,0.55);
          transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
        }
        .dvproj__card:hover {
          transform: translateY(-6px);
          box-shadow: 0 36px 70px -28px rgba(139,92,246,0.35);
          border-color: rgba(196,181,255,0.4);
        }

        .dvproj__media {
          position: relative;
          overflow: hidden;
          aspect-ratio: 16 / 10;
        }
        .dvproj__media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        .dvproj__card:hover .dvproj__media img {
          transform: scale(1.06);
        }
        .dvproj__media::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 55%, rgba(11,29,81,0.55) 100%);
        }
        .dvproj__index {
          position: absolute;
          top: 14px;
          left: 14px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          padding: 5px 11px;
          border-radius: 999px;
          background: rgba(5,7,15,0.55);
          backdrop-filter: blur(6px);
          color: #c4b5ff;
          border: 1px solid rgba(196,181,255,0.25);
          z-index: 1;
        }

        .dvproj__body {
          padding: 28px;
        }
        .dvproj__title {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 21px;
          color: #0B1D51;
          letter-spacing: -0.01em;
        }
        .dvproj__desc {
          margin-top: 10px;
          font-size: 14.5px;
          line-height: 1.7;
          color: rgba(11,29,81,0.68);
        }

        .dvproj__chip {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11.5px;
          padding: 5px 11px;
          border-radius: 999px;
          border: 1px solid rgba(150,92,245,0.22);
          background: rgba(150,92,245,0.07);
          color: #7c4fd6;
        }

        .dvproj__hosting {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          color: rgba(11,29,81,0.45);
        }
        .dvproj__hosting b {
          color: #7c4fd6;
          font-weight: 600;
        }

        .dvproj__btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          border-radius: 10px;
          font-weight: 600;
          font-size: 13.5px;
          transition: transform 0.2s ease, background 0.2s ease, color 0.2s ease;
        }
        .dvproj__btn:hover { transform: translateY(-2px); }
        .dvproj__btn--solid {
          background: #965CF5;
          color: #fdfaf6;
        }
        .dvproj__btn--solid:hover { background: #7c3aed; }
        .dvproj__btn--outline {
          border: 1.5px solid #965CF5;
          color: #7c4fd6;
        }
        .dvproj__btn--outline:hover {
          background: #965CF5;
          color: #fdfaf6;
        }
      `}</style>

      <div className="dvproj__glow" />
      <div className="dvproj__grid" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <span className="dvproj__eyebrow">Projects</span>
          <h2 className="dvproj__heading">Selected work</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={project.name} className="dvproj__card">
              <div className="dvproj__media">
                <span className="dvproj__index">0{index + 1}</span>
                <img src={project.image} alt={project.name} />
              </div>

              <div className="dvproj__body">
                <div className="flex items-center gap-2">
                  <Monitor className="text-[#965CF5]" size={20} />
                  <h3 className="dvproj__title">{project.name}</h3>
                </div>

                <p className="dvproj__desc">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="dvproj__chip">
                      {tech}
                    </span>
                  ))}
                </div>

                {project.hosting && (
                  <p className="dvproj__hosting mt-3">
                    Hosted on <b>{project.hosting}</b>
                  </p>
                )}

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="dvproj__btn dvproj__btn--solid"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dvproj__btn dvproj__btn--outline"
                  >
                    <Github size={16} />
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