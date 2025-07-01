import React, { useEffect, useState, memo } from "react";
import { motion } from "framer-motion";
import useDocumentTitle from "../hooks/useDocumentTitle";

// Section-specific data
const skills = [
  { name: "React/Next.js", level: 95, color: "#61DAFB" },
  { name: "TypeScript", level: 90, color: "#3178C6" },
  { name: "Node.js", level: 88, color: "#339933" },
  { name: "Python", level: 85, color: "#3776AB" },
  { name: "AWS", level: 80, color: "#FF9900" },
  { name: "Docker", level: 85, color: "#2496ED" },
];

const projects = [
  { title: "E-Commerce Platform", description: "Full-stack e-commerce solution with modern UI, payment integration, and admin dashboard.", tech: ["Next.js", "TypeScript", "Node.js", "MongoDB"], category: "Full Stack", featured: true },
  { title: "AI Chat Application", description: "Real-time chat application with AI integration and smart responses.", tech: ["React", "Python", "PostgreSQL", "Docker"], category: "AI/ML", featured: true },
  { title: "Portfolio Dashboard", description: "Interactive dashboard for tracking investments and market analysis.", tech: ["React", "TypeScript", "Node.js"], category: "Web App", featured: false }
];

const contactItems = [
  { label: "Email", value: "hello@fuyun.dev", icon: "📧" },
  { label: "Location", value: "China", icon: "📍" },
  { label: "Available", value: "9 AM - 6 PM (UTC+8)", icon: "🕒" }
];

// Reusable Button Component
const Button = ({ children, onClick, primary = false, className = '' }) => (
  <button onClick={onClick} className={`${primary ? 'primary-button' : 'secondary-button'} ${className}`}>
    {children}
  </button>
);

// Memoized section components to prevent re-renders
const HeroSection = memo(({ scrollToSection }) => (
  <section id="hero" className="hero">
    <div className="hero-content">
      <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8 }} className="hero-avatar">
        👨‍💻
      </motion.div>
      <motion.h1 initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.3 }} className="hero-title">
        Hi, I'm <span className="gradient-text">Fuyun</span>
      </motion.h1>
      <motion.p initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} className="hero-subtitle">
        Full Stack Developer & Creator
      </motion.p>
      <motion.p initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.7 }} className="hero-description">
        Passionate about building amazing digital experiences with modern technologies. I create beautiful, functional, and user-friendly applications.
      </motion.p>
      <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.9 }} className="hero-buttons">
        <Button onClick={() => scrollToSection('projects')} primary>View My Work</Button>
        <Button onClick={() => scrollToSection('contact')}>Get In Touch</Button>
      </motion.div>
    </div>
  </section>
));

const AboutSection = memo(() => (
  <section id="about" className="section">
    <div className="section-content">
      <h2 className="section-title gradient-text">About Me</h2>
      <div className="about-grid">
        <div className="about-text">
          <p className="paragraph">I'm a passionate full-stack developer with expertise in modern web technologies. My journey in tech started with curiosity about how things work behind the scenes.</p>
          <p className="paragraph">Today, I specialize in React, Node.js, and cloud technologies, constantly learning and adapting to new tools and frameworks to deliver exceptional user experiences.</p>
          <div className="tech-tags">
            {["React", "Next.js", "TypeScript", "Node.js", "Python", "AWS"].map(tech => <span key={tech} className="tech-tag">{tech}</span>)}
          </div>
        </div>
        <div className="stats-grid">
          {[
            { number: "50+", label: "Projects" },
            { number: "3+", label: "Years Exp" },
            { number: "100%", label: "Satisfaction" },
            { number: "24/7", label: "Support" }
          ].map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
));

const SkillsSection = memo(() => (
  <section id="skills" className="section">
    <div className="section-content">
      <h2 className="section-title gradient-text">My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div key={skill.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} className="skill-card">
            <div className="skill-header">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-level">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} transition={{ duration: 1.5, ease: 'easeOut' }} viewport={{ once: true }} className="skill-progress" style={{ background: skill.color }} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
));

const ProjectsSection = memo(({ isMobile }) => (
  <section id="projects" className="section">
    <div className="section-content">
      <h2 className="section-title gradient-text">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} className={`project-card ${project.featured ? 'project-card-featured' : ''}`}>
            {project.featured && <span className="featured-badge">Featured</span>}
            <div className="project-content">
              <span className="project-category">{project.category}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="tech-stack">
                {project.tech.map(tech => <span key={tech} className="tech-badge">{tech}</span>)}
              </div>
              <div className="project-actions">
                <button className="project-button">View Code</button>
                <button className="project-button primary-project-button">Live Demo</button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
));

const ContactSection = memo(() => (
  <section id="contact" className="section">
    <div className="section-content">
      <h2 className="section-title gradient-text">Get In Touch</h2>
      <div className="contact-grid">
        <div className="contact-info">
          <h3 className="contact-title">Let's Connect</h3>
          <p className="contact-text">Whether you're looking to hire a developer, collaborate on a project, or just want to say hello, I'd love to hear from you.</p>
          <div className="contact-links">
            {contactItems.map(contact => (
              <div key={contact.label} className="contact-item">
                <span className="contact-icon">{contact.icon}</span>
                <div>
                  <div className="contact-label">{contact.label}</div>
                  <div className="contact-value">{contact.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" required className="form-input" />
          <input type="email" placeholder="Your Email" required className="form-input" />
          <textarea placeholder="Your Message" rows="6" required className="form-input" style={{ resize: 'vertical' }} />
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </div>
  </section>
));

const PageFooter = memo(({ scrollToSection }) => (
  <footer className="footer">
    <div className="footer-content">
      <p className="footer-text">© {new Date().getFullYear()} Fuyun. Made with ❤️ using React</p>
      <button className="back-to-top" onClick={() => scrollToSection('hero')} aria-label="Back to top">↑</button>
    </div>
  </footer>
));

// Main PersonalPage Component
const PersonalPage = () => {
  useDocumentTitle("Fuyun - Full Stack Developer & Creator");
  
  const [isMobile, setIsMobile] = useState(false);
  const [currentSection, setCurrentSection] = useState('hero');

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth <= 768);
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setCurrentSection(section);
          return;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('resize', checkIsMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = ['hero', 'about', 'skills', 'projects', 'contact'];

  return (
    <div className="personal-container">
      <nav className="nav">
        <div className="nav-content">
          <div className="nav-logo gradient-text">Fuyun</div>
          {!isMobile && (
            <div className="nav-links">
              {navItems.map(section => (
                <button key={section} onClick={() => scrollToSection(section)} className={`nav-link ${currentSection === section ? 'active' : ''}`}>
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      <main>
        <HeroSection scrollToSection={scrollToSection} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection isMobile={isMobile} />
        <ContactSection />
      </main>
      
      <PageFooter scrollToSection={scrollToSection} />
    </div>
  );
};

export default PersonalPage; 