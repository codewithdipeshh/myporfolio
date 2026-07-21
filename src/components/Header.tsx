import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Projects', id: 'projects' },
  { name: 'Open Source', id: 'opensource' },
  { name: 'Skills', id: 'skills' },
  { name: 'Experience', id: 'experience' },
  { name: 'Contact', id: 'contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track which section is actually in view, instead of hardcoding "Home".
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`dvheader ${scrolled ? 'dvheader--scrolled' : ''}`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@600;700&family=Inter:wght@400;500;600&display=swap');

        .dvheader {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 999;
          font-family: 'Inter', sans-serif;
          background: transparent;
          border-bottom: 1px solid transparent;
          transition: background 0.35s ease, border-color 0.35s ease, backdrop-filter 0.35s ease;
        }
        .dvheader--scrolled {
          background: rgba(5,7,15,0.82);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(196,181,255,0.14);
        }

        .dvheader__logo {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 20px;
          color: #f6f3ec;
          letter-spacing: -0.01em;
        }
        .dvheader__logo span {
          color: #965CF5;
        }

        .dvheader__link {
          position: relative;
          padding: 8px 14px;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 500;
          color: rgba(246,243,236,0.7);
          transition: color 0.25s ease, background 0.25s ease;
        }
        .dvheader__link:hover {
          color: #f6f3ec;
          background: rgba(150,92,245,0.12);
        }
        .dvheader__link--active {
          color: #c4b5ff;
        }
        .dvheader__link-underline {
          position: absolute;
          left: 14px;
          right: 14px;
          bottom: 2px;
          height: 2px;
          border-radius: 2px;
          background: linear-gradient(90deg, #965CF5, #c4b5ff);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }
        .dvheader__link:hover .dvheader__link-underline,
        .dvheader__link--active .dvheader__link-underline {
          transform: scaleX(1);
        }

        .dvheader__menubtn {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #f6f3ec;
          border: 1px solid rgba(196,181,255,0.2);
          background: rgba(150,92,245,0.08);
          transition: background 0.25s ease;
        }
        .dvheader__menubtn:hover {
          background: rgba(150,92,245,0.18);
        }

        .dvheader__mobilenav {
          background: rgba(5,7,15,0.96);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(196,181,255,0.14);
          border-radius: 16px;
          margin-top: 10px;
          padding: 10px;
          margin-bottom: 14px;
        }
        .dvheader__mobilelink {
          display: block;
          width: 100%;
          text-align: left;
          padding: 12px 14px;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 500;
          color: rgba(246,243,236,0.75);
          transition: background 0.2s ease, color 0.2s ease;
        }
        .dvheader__mobilelink:hover {
          background: rgba(150,92,245,0.14);
          color: #f6f3ec;
        }
        .dvheader__mobilelink--active {
          color: #c4b5ff;
          background: rgba(150,92,245,0.1);
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="dvheader__logo">
            Dipesh<span> Verma</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`dvheader__link ${activeSection === item.id ? 'dvheader__link--active' : ''}`}
              >
                {item.name}
                <span className="dvheader__link-underline" />
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden dvheader__menubtn"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden dvheader__mobilenav">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`dvheader__mobilelink ${activeSection === item.id ? 'dvheader__mobilelink--active' : ''}`}
              >
                {item.name}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;