import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const PersonalPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentSection, setCurrentSection] = useState('hero');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Fuyun - Full Stack Developer & Creator";
    
    const checkIsMobile = () => setIsMobile(window.innerWidth <= 768);
    checkIsMobile();
    
    window.addEventListener('resize', checkIsMobile);
    
    // 滚动监听
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = [
    { name: "React/Next.js", level: 95, color: "#61DAFB" },
    { name: "TypeScript", level: 90, color: "#3178C6" },
    { name: "Node.js", level: 88, color: "#339933" },
    { name: "Python", level: 85, color: "#3776AB" },
    { name: "AWS", level: 80, color: "#FF9900" },
    { name: "Docker", level: 85, color: "#2496ED" },
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with modern UI, payment integration, and admin dashboard.",
      tech: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
      category: "Full Stack",
      featured: true
    },
    {
      title: "AI Chat Application", 
      description: "Real-time chat application with AI integration and smart responses.",
      tech: ["React", "Python", "PostgreSQL", "Docker"],
      category: "AI/ML",
      featured: true
    },
    {
      title: "Portfolio Dashboard",
      description: "Interactive dashboard for tracking investments and market analysis.",
      tech: ["React", "TypeScript", "Node.js"],
      category: "Web App",
      featured: false
    }
  ];

  return (
    <div style={styles.container}>
      {/* 导航栏 */}
      <nav style={styles.nav}>
        <div style={styles.navContent}>
          <div style={styles.logo}>Fuyun</div>
          <div style={styles.navLinks}>
            {['hero', 'about', 'skills', 'projects', 'contact'].map(section => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                style={{
                  ...styles.navLink,
                  color: currentSection === section ? '#667eea' : '#94a3b8'
                }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* 英雄区域 */}
      <section id="hero" style={styles.hero}>
        <div style={styles.heroContent}>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={styles.avatar}
          >
            👨‍💻
          </motion.div>
          
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            style={styles.heroTitle}
          >
            Hi, I'm <span style={styles.gradient}>Fuyun</span>
          </motion.h1>
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={styles.heroSubtitle}
          >
            Full Stack Developer & Creator
          </motion.p>
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            style={styles.heroDescription}
          >
            Passionate about building amazing digital experiences with modern technologies. 
            I create beautiful, functional, and user-friendly applications.
          </motion.p>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            style={styles.heroButtons}
          >
            <button 
              style={styles.primaryButton}
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </button>
            <button 
              style={styles.secondaryButton}
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </button>
          </motion.div>
        </div>
      </section>

      {/* 关于我 */}
      <section id="about" style={styles.section}>
        <div style={styles.sectionContent}>
          <h2 style={styles.sectionTitle}>About Me</h2>
          <div style={styles.aboutGrid}>
            <div style={styles.aboutText}>
              <p style={styles.paragraph}>
                I'm a passionate full-stack developer with expertise in modern web technologies. 
                My journey in tech started with curiosity about how things work behind the scenes.
              </p>
              <p style={styles.paragraph}>
                Today, I specialize in React, Node.js, and cloud technologies, constantly learning 
                and adapting to new tools and frameworks to deliver exceptional user experiences.
              </p>
              <div style={styles.techTags}>
                {["React", "Next.js", "TypeScript", "Node.js", "Python", "AWS"].map(tech => (
                  <span key={tech} style={styles.techTag}>{tech}</span>
                ))}
              </div>
            </div>
            <div style={styles.statsGrid}>
              {[
                { number: "50+", label: "Projects" },
                { number: "3+", label: "Years Exp" },
                { number: "100%", label: "Satisfaction" },
                { number: "24/7", label: "Support" }
              ].map((stat, index) => (
                <div key={index} style={styles.statCard}>
                  <div style={styles.statNumber}>{stat.number}</div>
                  <div style={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 技能 */}
      <section id="skills" style={styles.section}>
        <div style={styles.sectionContent}>
          <h2 style={styles.sectionTitle}>My Skills</h2>
          <div style={styles.skillsGrid}>
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={styles.skillCard}
              >
                <div style={styles.skillHeader}>
                  <span style={styles.skillName}>{skill.name}</span>
                  <span style={styles.skillLevel}>{skill.level}%</span>
                </div>
                <div style={styles.skillBar}>
                  <div 
                    style={{
                      ...styles.skillProgress,
                      width: `${skill.level}%`,
                      background: skill.color
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 项目 */}
      <section id="projects" style={styles.section}>
        <div style={styles.sectionContent}>
          <h2 style={styles.sectionTitle}>My Projects</h2>
          <div style={styles.projectsGrid}>
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                style={{
                  ...styles.projectCard,
                  gridColumn: project.featured && !isMobile ? 'span 2' : 'span 1'
                }}
              >
                {project.featured && (
                  <span style={styles.featuredBadge}>Featured</span>
                )}
                <div style={styles.projectContent}>
                  <span style={styles.projectCategory}>{project.category}</span>
                  <h3 style={styles.projectTitle}>{project.title}</h3>
                  <p style={styles.projectDescription}>{project.description}</p>
                  <div style={styles.techStack}>
                    {project.tech.map(tech => (
                      <span key={tech} style={styles.techBadge}>{tech}</span>
                    ))}
                  </div>
                  <div style={styles.projectActions}>
                    <button style={styles.projectButton}>View Code</button>
                    <button style={{...styles.projectButton, ...styles.primaryProjectButton}}>
                      Live Demo
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 联系 */}
      <section id="contact" style={styles.section}>
        <div style={styles.sectionContent}>
          <h2 style={styles.sectionTitle}>Get In Touch</h2>
          <div style={styles.contactGrid}>
            <div style={styles.contactInfo}>
              <h3 style={styles.contactTitle}>Let's Connect</h3>
              <p style={styles.contactText}>
                Whether you're looking to hire a developer, collaborate on a project, 
                or just want to say hello, I'd love to hear from you.
              </p>
              <div style={styles.contactLinks}>
                {[
                  { label: "Email", value: "hello@fuyun.dev", icon: "📧" },
                  { label: "Location", value: "China", icon: "📍" },
                  { label: "Available", value: "9 AM - 6 PM (UTC+8)", icon: "🕒" }
                ].map(contact => (
                  <div key={contact.label} style={styles.contactItem}>
                    <span style={styles.contactIcon}>{contact.icon}</span>
                    <div>
                      <div style={styles.contactLabel}>{contact.label}</div>
                      <div style={styles.contactValue}>{contact.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <form style={styles.contactForm}>
              <input 
                type="text" 
                placeholder="Your Name" 
                style={styles.formInput}
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                style={styles.formInput}
              />
              <textarea 
                placeholder="Your Message" 
                rows="6" 
                style={{...styles.formInput, resize: 'vertical'}}
              />
              <button type="submit" style={styles.submitButton}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <p style={styles.footerText}>
            © 2024 Fuyun. Made with ❤️ using React
          </p>
          <button 
            style={styles.backToTop}
            onClick={() => scrollToSection('hero')}
          >
            ↑
          </button>
        </div>
      </footer>
    </div>
  );
};

// 样式对象
const styles = {
  container: {
    background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
    color: 'white',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    lineHeight: 1.6,
  },
  
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    background: 'rgba(15, 15, 35, 0.9)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    zIndex: 1000,
    padding: '1rem 0',
  },
  
  navContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 2rem',
  },
  
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  
  navLinks: {
    display: 'flex',
    gap: '2rem',
  },
  
  navLink: {
    background: 'none',
    border: 'none',
    color: '#94a3b8',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: '500',
    transition: 'color 0.3s ease',
  },
  
  hero: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '0 2rem',
  },
  
  heroContent: {
    maxWidth: '800px',
  },
  
  avatar: {
    fontSize: '4rem',
    marginBottom: '2rem',
  },
  
  heroTitle: {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  
  gradient: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  
  heroSubtitle: {
    fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
    color: '#667eea',
    marginBottom: '1.5rem',
    fontWeight: '500',
  },
  
  heroDescription: {
    fontSize: '1.1rem',
    color: '#94a3b8',
    marginBottom: '2.5rem',
    lineHeight: 1.8,
  },
  
  heroButtons: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  
  primaryButton: {
    padding: '12px 32px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    border: 'none',
    borderRadius: '50px',
    color: 'white',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    boxShadow: '0 10px 25px rgba(102, 126, 234, 0.3)',
  },
  
  secondaryButton: {
    padding: '12px 32px',
    background: 'transparent',
    border: '2px solid #667eea',
    borderRadius: '50px',
    color: '#667eea',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  
  section: {
    padding: '5rem 2rem',
  },
  
  sectionContent: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  
  sectionTitle: {
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '3rem',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  
  aboutGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '3rem',
    alignItems: 'start',
  },
  
  aboutText: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  
  paragraph: {
    fontSize: '1.1rem',
    color: '#94a3b8',
    margin: 0,
  },
  
  techTags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginTop: '1rem',
  },
  
  techTag: {
    padding: '0.5rem 1rem',
    background: 'rgba(102, 126, 234, 0.1)',
    border: '1px solid rgba(102, 126, 234, 0.3)',
    borderRadius: '25px',
    color: '#667eea',
    fontSize: '0.9rem',
    fontWeight: '500',
  },
  
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1rem',
  },
  
  statCard: {
    padding: '1.5rem',
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '15px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    textAlign: 'center',
    transition: 'transform 0.3s ease',
  },
  
  statNumber: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#667eea',
    marginBottom: '0.5rem',
  },
  
  statLabel: {
    fontSize: '0.9rem',
    color: '#94a3b8',
  },
  
  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.5rem',
  },
  
  skillCard: {
    padding: '1.5rem',
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '15px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
  
  skillHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem',
  },
  
  skillName: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: 'white',
  },
  
  skillLevel: {
    fontSize: '0.9rem',
    color: '#94a3b8',
    fontWeight: '600',
  },
  
  skillBar: {
    height: '8px',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '4px',
    overflow: 'hidden',
  },
  
  skillProgress: {
    height: '100%',
    borderRadius: '4px',
    transition: 'width 1.5s ease',
  },
  
  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2rem',
  },
  
  projectCard: {
    position: 'relative',
    padding: '2rem',
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '20px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    overflow: 'hidden',
  },
  
  featuredBadge: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    padding: '0.3rem 0.8rem',
    background: 'rgba(255, 215, 0, 0.2)',
    color: 'gold',
    border: '1px solid gold',
    borderRadius: '15px',
    fontSize: '0.8rem',
    fontWeight: '600',
  },
  
  projectContent: {
    position: 'relative',
    zIndex: 2,
  },
  
  projectCategory: {
    display: 'inline-block',
    padding: '0.3rem 0.8rem',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    borderRadius: '15px',
    fontSize: '0.8rem',
    fontWeight: '600',
    marginBottom: '1rem',
  },
  
  projectTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '1rem',
  },
  
  projectDescription: {
    color: '#94a3b8',
    marginBottom: '1.5rem',
    lineHeight: 1.6,
  },
  
  techStack: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginBottom: '2rem',
  },
  
  techBadge: {
    padding: '0.3rem 0.8rem',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '15px',
    fontSize: '0.8rem',
    color: '#94a3b8',
  },
  
  projectActions: {
    display: 'flex',
    gap: '1rem',
  },
  
  projectButton: {
    padding: '0.8rem 1.5rem',
    background: 'transparent',
    border: '1px solid #667eea',
    borderRadius: '25px',
    color: '#667eea',
    fontSize: '0.9rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  
  primaryProjectButton: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    border: 'none',
  },
  
  contactGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '3rem',
  },
  
  contactInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  
  contactTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '1rem',
  },
  
  contactText: {
    fontSize: '1.1rem',
    color: '#94a3b8',
    lineHeight: 1.8,
  },
  
  contactLinks: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '1rem',
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '10px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
  
  contactIcon: {
    fontSize: '1.5rem',
  },
  
  contactLabel: {
    fontSize: '0.9rem',
    color: '#94a3b8',
  },
  
  contactValue: {
    fontSize: '1rem',
    color: 'white',
    fontWeight: '600',
  },
  
  contactForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    padding: '2rem',
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '20px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
  
  formInput: {
    padding: '1rem',
    background: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '10px',
    color: 'white',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  },
  
  submitButton: {
    padding: '1rem 2rem',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    border: 'none',
    borderRadius: '10px',
    color: 'white',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
  },
  
  footer: {
    padding: '2rem',
    background: 'rgba(0, 0, 0, 0.3)',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  },
  
  footerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  footerText: {
    color: '#94a3b8',
    fontSize: '0.9rem',
  },
  
  backToTop: {
    padding: '0.5rem 1rem',
    background: 'rgba(102, 126, 234, 0.1)',
    border: '1px solid rgba(102, 126, 234, 0.3)',
    borderRadius: '50px',
    color: '#667eea',
    fontSize: '1.2rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
};

export default PersonalPage; 