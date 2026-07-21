import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Linkedin, Github, Send, User, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  // 1. Declare state hooks at the very top of the component
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 2. Handle input state updates
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 3. Form Submit Handler using EmailJS
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.sendForm(
        'service_dacg4xl',          // Your service ID
        'template_ibvkspt',         // Your template ID
        e.currentTarget,            // The actual HTML form element
        'WaK3Myd5oNHoMvFo6'         // Your public key
      );

      console.log('EmailJS result:', result);
      alert("Message sent successfully! I'll get back to you soon.");

      // Reset form on success
      setFormData({ name: '', email: '', message: '' });
    } catch (error: any) {
      console.error('EmailJS Error:', error?.text || error);
      alert('Failed to send message. Please check the console.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="dvcontact">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');

        .dvcontact {
          position: relative;
          padding: 6.5rem 0;
          overflow: hidden;
          background: linear-gradient(160deg, #05070f 0%, #0a0e24 45%, #120a2e 100%);
          font-family: 'Inter', sans-serif;
        }

        .dvcontact__glow {
          position: absolute;
          width: 560px;
          height: 560px;
          border-radius: 50%;
          top: -180px;
          right: -160px;
          background: radial-gradient(circle, rgba(139,92,246,0.22) 0%, transparent 70%);
          filter: blur(90px);
          pointer-events: none;
        }
        .dvcontact__grid {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(253,250,246,0.05) 1px, transparent 1px);
          background-size: 28px 28px;
          mask-image: radial-gradient(ellipse 75% 55% at 50% 0%, black 30%, transparent 85%);
          pointer-events: none;
        }

        .dvcontact__eyebrow {
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
        .dvcontact__eyebrow::before {
          content: '';
          width: 28px;
          height: 1.5px;
          background: linear-gradient(90deg, #965CF5, transparent);
        }
        .dvcontact__heading {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: clamp(2.25rem, 4vw, 3.25rem);
          color: #f6f3ec;
          letter-spacing: -0.02em;
          line-height: 1.08;
          margin-top: 14px;
        }
        .dvcontact__sub {
          margin-top: 10px;
          font-size: 15.5px;
          color: rgba(246,243,236,0.6);
        }

        .dvcontact__formcard {
          background: #ffffff;
          border-radius: 20px;
          padding: 34px;
          box-shadow: 0 30px 60px -28px rgba(0,0,0,0.5);
          border: 1px solid rgba(196,181,255,0.15);
        }

        .dvcontact__label {
          display: block;
          font-size: 13px;
          font-weight: 600;
          color: #0B1D51;
          margin-bottom: 8px;
        }
        .dvcontact__field-wrap {
          position: relative;
        }
        .dvcontact__field-icon {
          position: absolute;
          left: 13px;
          top: 14px;
          color: rgba(11,29,81,0.35);
        }
        .dvcontact__input {
          width: 100%;
          padding: 12px 16px 12px 42px;
          border-radius: 11px;
          border: 1.5px solid rgba(11,29,81,0.14);
          background: #fdfaf6;
          font-size: 14.5px;
          color: #0B1D51;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .dvcontact__input:focus {
          border-color: #965CF5;
          box-shadow: 0 0 0 4px rgba(150,92,245,0.14);
        }
        .dvcontact__input::placeholder { color: rgba(11,29,81,0.35); }

        .dvcontact__submit {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 13px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 15px;
          background: linear-gradient(135deg, #8b5cf6, #7c3aed);
          color: #fdfaf6;
          box-shadow: 0 10px 26px -10px rgba(139,92,246,0.6);
          transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
        }
        .dvcontact__submit:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 14px 30px -8px rgba(139,92,246,0.7);
        }
        .dvcontact__submit:disabled {
          opacity: 0.55;
          cursor: not-allowed;
        }

        .dvcontact__infocard {
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(196,181,255,0.16);
          border-radius: 20px;
          padding: 34px;
          height: 100%;
        }
        .dvcontact__infotitle {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 24px;
          color: #f6f3ec;
          margin-bottom: 14px;
        }
        .dvcontact__infotext {
          font-size: 14.5px;
          line-height: 1.7;
          color: rgba(246,243,236,0.65);
          margin-bottom: 30px;
        }

        .dvcontact__link {
          display: flex;
          align-items: center;
          gap: 14px;
          color: rgba(246,243,236,0.8);
          transition: color 0.25s ease;
        }
        .dvcontact__link:hover { color: #c4b5ff; }
        .dvcontact__link + .dvcontact__link { margin-top: 20px; }

        .dvcontact__link-icon {
          flex-shrink: 0;
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(150,92,245,0.1);
          border: 1px solid rgba(196,181,255,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.25s ease, border-color 0.25s ease;
        }
        .dvcontact__link:hover .dvcontact__link-icon {
          background: rgba(150,92,245,0.2);
          border-color: rgba(196,181,255,0.45);
        }
        .dvcontact__link-text {
          font-size: 14.5px;
          font-weight: 500;
        }
      `}</style>

      <div className="dvcontact__glow" />
      <div className="dvcontact__grid" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="dvcontact__eyebrow" style={{ justifyContent: 'center' }}>Contact</span>
          <h2 className="dvcontact__heading">Get in touch</h2>
          <p className="dvcontact__sub">
            Have something to discuss? Send me a message and let's talk.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="dvcontact__formcard">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="dvcontact__label">Your Name</label>
                <div className="dvcontact__field-wrap">
                  <User className="dvcontact__field-icon" size={18} />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="dvcontact__input"
                    placeholder="Enter your name"
                    autoComplete="name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="dvcontact__label">Your Email</label>
                <div className="dvcontact__field-wrap">
                  <Mail className="dvcontact__field-icon" size={18} />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="dvcontact__input"
                    placeholder="Enter your email"
                    autoComplete="email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="dvcontact__label">Your Message</label>
                <div className="dvcontact__field-wrap">
                  <MessageSquare className="dvcontact__field-icon" size={18} />
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="dvcontact__input resize-none"
                    placeholder="Enter your message"
                  />
                </div>
              </div>

              <button type="submit" disabled={isSubmitting} className="dvcontact__submit">
                <Send size={18} />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="dvcontact__infocard">
            <h3 className="dvcontact__infotitle">Let's connect</h3>
            <p className="dvcontact__infotext">
              I'm always open to discussing new opportunities, collaborating on interesting
              projects, or just having a chat about technology and development.
            </p>

            <div>
              <a href="mailto:dipeshverma81122@gmail.com" className="dvcontact__link">
                <span className="dvcontact__link-icon">
                  <Mail size={18} />
                </span>
                <span className="dvcontact__link-text">dipeshverma81122@gmail.com</span>
              </a>

              <a
                href="https://www.linkedin.com/in/dipesh-verma-70b8ba2b7/"
                target="_blank"
                rel="noopener noreferrer"
                className="dvcontact__link"
              >
                <span className="dvcontact__link-icon">
                  <Linkedin size={18} />
                </span>
                <span className="dvcontact__link-text">LinkedIn Profile</span>
              </a>

              <a
                href="https://github.com/codewithdipeshh/codewithdipeshh"
                target="_blank"
                rel="noopener noreferrer"
                className="dvcontact__link"
              >
                <span className="dvcontact__link-icon">
                  <Github size={18} />
                </span>
                <span className="dvcontact__link-text">GitHub Repository</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;