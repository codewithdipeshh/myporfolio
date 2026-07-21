import { useState, useEffect } from 'react';
import { Download, Eye, Mail, ArrowDown } from 'lucide-react';

const ROLES = ['MERN Developer', 'React Engineer', 'Node.js Builder'];

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [phase, setPhase] = useState<'typing' | 'pausing' | 'deleting'>('typing');

  const fullText = ROLES[roleIndex];

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === 'typing') {
      if (charIndex < fullText.length) {
        timeout = setTimeout(() => {
          setDisplayText(fullText.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, 70);
      } else {
        timeout = setTimeout(() => setPhase('pausing'), 1400);
      }
    } else if (phase === 'pausing') {
      timeout = setTimeout(() => setPhase('deleting'), 900);
    } else if (phase === 'deleting') {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayText(fullText.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, 35);
      } else {
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
        setPhase('typing');
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, phase, fullText]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="dvhero">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

        .dvhero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: linear-gradient(160deg, #05070f 0%, #0a0e24 45%, #120a2e 100%);
          font-family: 'Inter', sans-serif;
        }

        .dvhero__glow-a,
        .dvhero__glow-b {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          pointer-events: none;
        }
        .dvhero__glow-a {
          width: 480px;
          height: 480px;
          top: -120px;
          left: -100px;
          background: radial-gradient(circle, rgba(139,92,246,0.28) 0%, transparent 70%);
        }
        .dvhero__glow-b {
          width: 560px;
          height: 560px;
          bottom: -180px;
          right: -160px;
          background: radial-gradient(circle, rgba(196,181,255,0.14) 0%, transparent 70%);
        }

        .dvhero__grid {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(253,250,246,0.06) 1px, transparent 1px);
          background-size: 28px 28px;
          mask-image: radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 90%);
          pointer-events: none;
        }

        .dvhero__eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          border-radius: 999px;
          border: 1px solid rgba(139,92,246,0.35);
          background: rgba(139,92,246,0.08);
          font-size: 12px;
          letter-spacing: 0.06em;
          color: #c4b5ff;
          font-weight: 500;
        }
        .dvhero__eyebrow-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #4ade80;
          box-shadow: 0 0 0 3px rgba(74,222,128,0.18);
        }
        @media (prefers-reduced-motion: no-preference) {
          .dvhero__eyebrow-dot { animation: dvhero-pulse 2.2s ease-in-out infinite; }
        }
        @keyframes dvhero-pulse {
          0%, 100% { box-shadow: 0 0 0 3px rgba(74,222,128,0.18); }
          50% { box-shadow: 0 0 0 6px rgba(74,222,128,0.08); }
        }

        .dvhero__name {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: clamp(2.75rem, 5.5vw, 4.5rem);
          line-height: 1.02;
          color: #f6f3ec;
          letter-spacing: -0.02em;
        }

        .dvhero__role-row {
          display: flex;
          align-items: baseline;
          gap: 10px;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 600;
          font-size: clamp(1.4rem, 2.4vw, 2rem);
        }
        .dvhero__role-label { color: rgba(246,243,236,0.55); }
        .dvhero__role-text {
          background: linear-gradient(90deg, #a78bfa, #c4b5ff);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .dvhero__cursor {
          display: inline-block;
          width: 2px;
          height: 1em;
          background: #c4b5ff;
          margin-left: 2px;
          transform: translateY(2px);
        }
        @media (prefers-reduced-motion: no-preference) {
          .dvhero__cursor { animation: dvhero-blink 1s step-end infinite; }
        }
        @keyframes dvhero-blink { 50% { opacity: 0; } }

        .dvhero__lead {
          font-size: 17px;
          line-height: 1.7;
          color: rgba(246,243,236,0.62);
          max-width: 42ch;
        }

        .dvhero__btn {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 13px 26px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 14.5px;
          transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease, border-color 0.25s ease;
          cursor: pointer;
        }
        .dvhero__btn:focus-visible {
          outline: 2px solid #c4b5ff;
          outline-offset: 3px;
        }
        .dvhero__btn--primary {
          background: linear-gradient(135deg, #8b5cf6, #7c3aed);
          color: #fdfaf6;
          border: 1px solid rgba(196,181,255,0.4);
          box-shadow: 0 8px 24px -8px rgba(139,92,246,0.6);
        }
        .dvhero__btn--primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px -6px rgba(139,92,246,0.75);
        }
        .dvhero__btn--outline {
          background: transparent;
          border: 1px solid rgba(196,181,255,0.35);
          color: #c4b5ff;
        }
        .dvhero__btn--outline:hover {
          background: rgba(139,92,246,0.1);
          transform: translateY(-2px);
        }
        .dvhero__btn--ghost {
          background: transparent;
          border: 1px solid transparent;
          color: rgba(246,243,236,0.7);
        }
        .dvhero__btn--ghost:hover {
          color: #f6f3ec;
          border-color: rgba(246,243,236,0.18);
        }

        .dvhero__card-wrap {
          position: relative;
        }
        .dvhero__card-glow {
          position: absolute;
          inset: -30px;
          background: radial-gradient(circle at 30% 20%, rgba(139,92,246,0.35), transparent 60%);
          filter: blur(40px);
          z-index: 0;
        }
        .dvhero__card {
          position: relative;
          z-index: 1;
          border-radius: 16px;
          padding: 1px;
          background: linear-gradient(140deg, rgba(196,181,255,0.5), rgba(139,92,246,0.05) 40%, rgba(196,181,255,0.25));
          box-shadow: 0 30px 60px -25px rgba(0,0,0,0.6);
        }
        .dvhero__card-inner {
          border-radius: 15px;
          background: rgba(10,10,25,0.82);
          backdrop-filter: blur(14px);
          overflow: hidden;
        }
        .dvhero__card-tab {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 16px;
          border-bottom: 1px solid rgba(246,243,236,0.08);
        }
        .dvhero__dot { width: 9px; height: 9px; border-radius: 50%; }
        .dvhero__card-filename {
          margin-left: 8px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11.5px;
          color: rgba(246,243,236,0.4);
        }
        .dvhero__code {
          font-family: 'JetBrains Mono', monospace;
          font-size: 13.5px;
          line-height: 1.9;
          padding: 22px 20px;
        }
        .dvhero__code .c-kw { color: #c4b5ff; }
        .dvhero__code .c-fn { color: #93c5fd; }
        .dvhero__code .c-str { color: #86efac; }
        .dvhero__code .c-punc { color: rgba(246,243,236,0.45); }
        .dvhero__code .c-com { color: rgba(246,243,236,0.32); font-style: italic; }
        .dvhero__code .c-indent { padding-left: 22px; display: block; }

        .dvhero__stack {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 18px;
        }
        .dvhero__chip {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11.5px;
          padding: 6px 12px;
          border-radius: 999px;
          border: 1px solid rgba(196,181,255,0.2);
          background: rgba(139,92,246,0.06);
          color: rgba(246,243,236,0.7);
        }

        .dvhero__scrollcue {
          position: absolute;
          bottom: 28px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          color: rgba(246,243,236,0.35);
          font-size: 11px;
          letter-spacing: 0.1em;
        }
        @media (prefers-reduced-motion: no-preference) {
          .dvhero__scrollcue-icon { animation: dvhero-bob 1.8s ease-in-out infinite; }
        }
        @keyframes dvhero-bob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(5px); }
        }
      `}</style>

      <div className="dvhero__glow-a" />
      <div className="dvhero__glow-b" />
      <div className="dvhero__grid" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-5">
              <span className="dvhero__eyebrow">
                <span className="dvhero__eyebrow-dot" />
                Open to opportunities · Jaipur, India
              </span>

              <h1 className="dvhero__name">Dipesh Verma</h1>

              <div className="dvhero__role-row">
                <span className="dvhero__role-label">I build as a</span>
                <span className="dvhero__role-text">{displayText}</span>
                <span className="dvhero__cursor" />
              </div>

              <p className="dvhero__lead">
                I design and build full-stack web applications — clean interfaces
                on the front end, solid APIs and data models on the back end.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => scrollToSection('contact')}
                className="dvhero__btn dvhero__btn--primary"
              >
                <Mail size={17} />
                Contact Me
              </button>

              <a
                href="https://publuu.com/flip-book/973143/2138069"
                className="dvhero__btn dvhero__btn--outline"
              >
                <Download size={17} />
                Download Resume
              </a>

              <button
                onClick={() => scrollToSection('projects')}
                className="dvhero__btn dvhero__btn--ghost"
              >
                <Eye size={17} />
                View My Work
              </button>
            </div>
          </div>

          {/* Right Content - refined code card */}
          <div className="dvhero__card-wrap">
            <div className="dvhero__card-glow" />
            <div className="dvhero__card">
              <div className="dvhero__card-inner">
                <div className="dvhero__card-tab">
                  <span className="dvhero__dot" style={{ background: '#ff5f57' }} />
                  <span className="dvhero__dot" style={{ background: '#febc2e' }} />
                  <span className="dvhero__dot" style={{ background: '#28c840' }} />
                  <span className="dvhero__card-filename">developer.ts</span>
                </div>
                <div className="dvhero__code">
                  <span className="c-com">// full-stack, end to end</span>
                  <br />
                  <span className="c-kw">const</span> developer ={' '}
                  <span className="c-str">"Dipesh Verma"</span>
                  <span className="c-punc">;</span>
                  <br />
                  <br />
                  <span className="c-kw">function</span>{' '}
                  <span className="c-fn">buildProduct</span>
                  <span className="c-punc">() {'{'}</span>
                  <span className="c-indent">
                    <span className="c-kw">return</span>{' '}
                    <span className="c-str">"reliable"</span>{' '}
                    <span className="c-punc">+</span>{' '}
                    <span className="c-str">"well-crafted UI"</span>
                    <span className="c-punc">;</span>
                  </span>
                  <span className="c-punc">{'}'}</span>
                </div>
              </div>
            </div>

            <div className="dvhero__stack">
              {['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB'].map((tech) => (
                <span key={tech} className="dvhero__chip">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="dvhero__scrollcue">
        <span>SCROLL</span>
        <ArrowDown size={14} className="dvhero__scrollcue-icon" />
      </div>
    </section>
  );
};

export default Hero;