// src/App.jsx
import { useState, useRef, useEffect } from 'react';
import { motion as Motion } from 'framer-motion'; // Fixed import with alias
import { FaGithub, FaLinkedin, FaEnvelope, FaGraduationCap, FaPython, FaDatabase, FaHtml5, FaCss3 } from 'react-icons/fa';
import { SiCplusplus, SiJavascript, SiNumpy, SiPandas, SiReact } from 'react-icons/si';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Custom icons for each skill
  const skills = [
    { 
      name: 'C++', 
      icon: <SiCplusplus className="text-2xl" />,
      color: 'from-blue-600 to-indigo-600'
    },
    { 
      name: 'Python', 
      icon: <FaPython className="text-2xl" />,
      color: 'from-yellow-500 to-amber-500'
    },
    { 
      name: 'React', 
      icon: <SiReact className="text-2xl" />,
      color: 'from-cyan-500 to-blue-500'
    },
    { 
      name: 'JavaScript', 
      icon: <SiJavascript className="text-2xl" />,
      color: 'from-yellow-400 to-amber-400'
    },
    { 
      name: 'SQL', 
      icon: <FaDatabase className="text-2xl" />,
      color: 'from-purple-500 to-fuchsia-500'
    },
    { 
      name: 'NumPy', 
      icon: <SiNumpy className="text-2xl" />,
      color: 'from-emerald-500 to-teal-500'
    },
    { 
      name: 'Pandas', 
      icon: <SiPandas className="text-2xl" />,
      color: 'from-red-500 to-orange-500'
    },
    { 
      name: 'HTML/CSS', 
      icon: (
        <div className="flex gap-1">
          <FaHtml5 className="text-2xl" />
          <FaCss3 className="text-2xl" />
        </div>
      ),
      color: 'from-orange-500 to-amber-500'
    },
  ];

  // Projects data
  const projects = [
    {
      title: 'Email-Automation-using-Python',
      description: 'A Python-based email automation system for sending personalized emails to multiple recipients via SMTP.',
      technologies: ['Python', 'JSON', 'SMTP'],
      github: 'https://github.com/adityasahu1109/Email-Automation-using-Python',
      gradient: 'from-purple-600/20 to-indigo-600/20'
    },
    {
      title: 'Course Management Sytem with GUI Implementation',
      description: 'A Course Management System built with Python\'s Tkinter for the UI and JSON for data storage.',
      technologies: ['Python', 'JSON', 'Tkinter'],
      github: 'https://github.com/adityasahu1109/CMS-tkinter',
      gradient: 'from-cyan-600/20 to-blue-600/20'
    },
    {
      title: 'Gemini 2.0',
      description: 'A React.js app replicating Google\'s Gemini AI chat interface, powered by Google\'s Generative AI API.',
      technologies: ['React', 'JavaScript', 'CSS', 'API'],
      github: 'https://github.com/adityasahu1109/gemini-clone',
      gradient: 'from-emerald-600/20 to-teal-600/20'
    },
    {
      title: 'Simple Calculator',
      description: 'A clean, responsive web-based calculator built with vanilla HTML, CSS, and JavaScript',
      technologies: ['HTML', 'JavaScript', 'CSS'],
      github: 'https://github.com/adityasahu1109/Simple-Calculator-2',
      gradient: 'from-amber-600/20 to-orange-600/20'
    }
  ];

  // Helper function to scroll to sections
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 font-sans">
      {/* Navigation */}
      <Motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-800"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Aditya's Portfolio
            </div>
            
            <div className="flex space-x-1">
              <NavItem 
                active={activeSection === 'home'} 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Home
              </NavItem>
              <NavItem active={activeSection === 'about'} onClick={() => scrollToSection(aboutRef)}>
                About
              </NavItem>
              <NavItem active={activeSection === 'skills'} onClick={() => scrollToSection(skillsRef)}>
                Skills
              </NavItem>
              <NavItem active={activeSection === 'projects'} onClick={() => scrollToSection(projectsRef)}>
                Projects
              </NavItem>
              <NavItem active={activeSection === 'contact'} onClick={() => scrollToSection(contactRef)}>
                Contact
              </NavItem>
            </div>
          </div>
        </div>
      </Motion.nav>
      
      {/* Hero Section */}
      <section 
        id="home" 
        className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20 pb-16"
      >
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="mb-6">
            <div className="inline-block px-4 py-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full text-sm font-medium mb-4">
              Software Developer
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="block">Hi, I'm </span>
            <span className="block bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent mt-2">
              Aditya Sahu
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Developer with expertise in C++, Python, SQL, and experience with React and JavaScript. Focused on creating efficient applications with a strong commitment to modern development practices and clean code.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(projectsRef)}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg font-medium shadow-lg hover:shadow-purple-500/30 transition-all"
            >
              View My Work
            </Motion.button>
            
            <Motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(contactRef)}
              className="px-6 py-3 bg-gray-800 border border-gray-700 rounded-lg font-medium hover:bg-gray-700/50 transition-colors"
            >
              Contact Me
            </Motion.button>
          </div>
        </Motion.div>
      </section>

      {/* About Section */}
      <section 
        id="about" 
        ref={aboutRef}
        className="py-20 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-indigo-600/20 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold mb-4">My Journey</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                 I am passionate about solving complex problems with elegant code. Currently,
                 I contribute to building scalable web applications and data processing systems
                 at TechInnovate, focusing on optimizing performance and scalability.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I combine technical expertise with creative problem-solving to deliver
                  efficient and user-friendly solutions. I thrive in collaborative environments
                  and am always eager to learn and master new technologies.
                </p>
              </div>
            </Motion.div>
            
            <Motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <FaGraduationCap className="mr-2 text-purple-400" />
                Education & Experience
              </h3>
              <div className="space-y-8">
                <div className="relative pl-8 border-l-2 border-purple-600">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full"></div>
                  <h4 className="font-bold text-lg">BTech. Computer Science & Engineering</h4>
                  <p className="text-gray-400">Visvesveraya National Institute of Technology Nagpur • 2024-2028</p>
                  <p className="mt-2 text-gray-300">
                    Specializing in algorithms, data structures, and software engineering principles.
                      Coursework includes Database Systems, Web Development, and related topics
                  </p>
                </div>
                
                <div className="relative pl-8 border-l-2 border-indigo-600">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-full"></div>
                  <h4 className="font-bold text-lg">Arcade Legend - 85 pts</h4>
                  <p className="text-gray-400">Google Cloud Arcade Facilitator'25 (Cohort 1)  • Apr 2025 - June 2025</p>
                  <p className="mt-2 text-gray-300">
                    Successfully participated in the Google Cloud Arcade Facilitator Program,
                     reaching the rank of Arcade Legend with 85 points. Demonstrated strong 
                     problem-solving skills and deepened my understanding of cloud computing while actively
                      engaging in the community.
                  </p>
                </div>
              </div>
            </Motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section 
        id="skills" 
        ref={skillsRef}
        className="py-20 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-600 to-blue-600 mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Proficient in a range of programming languages, frameworks, and tools
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <Motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`bg-gradient-to-br ${skill.color} rounded-xl p-[2px] shadow-lg`}
              >
                <div className="bg-gray-900 h-full rounded-xl p-4 flex flex-col items-center justify-center gap-2">
                  <div className="text-3xl">
                    {skill.icon}
                  </div>
                  <span className="font-medium">{skill.name}</span>
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section 
        id="projects" 
        ref={projectsRef}
        className="py-20 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className={`bg-gradient-to-br ${project.gradient} rounded-2xl p-[2px]`}
              >
                <div className="bg-gray-900 h-full rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-100 mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={project.github} 
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <FaGithub /> View on GitHub
                  </a>
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact" 
        ref={contactRef}
        className="py-20 px-4"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-amber-600/20 to-orange-600/20 rounded-2xl p-[2px]"
            >
              <div className="bg-gray-900 h-full rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <p className="text-gray-300 mb-6">
                  Interested in working together or have questions? Feel free to reach out!
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-gray-800 p-3 rounded-lg mr-4">
                      <FaEnvelope className="text-amber-400 text-xl" />
                    </div>
                    <div>
                      <p className="text-gray-400">Email</p>
                      <a href="mailto:adityasahu1109@gmail.com" className="text-gray-100 hover:text-amber-400 transition-colors">
                        adityasahu1109@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-gray-800 p-3 rounded-lg mr-4">
                      <FaGithub className="text-amber-400 text-xl" />
                    </div>
                    <div>
                      <p className="text-gray-400">GitHub</p>
                      <a href="https://github.com/adityasahu1109" className="text-gray-100 hover:text-amber-400 transition-colors">
                        github.com/adityasahu1109
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-gray-800 p-3 rounded-lg mr-4">
                      <FaLinkedin className="text-amber-400 text-xl" />
                    </div>
                    <div>
                      <p className="text-gray-400">LinkedIn</p>
                      <a href="https://linkedin.com/in/aditya-sahu-0aa898219" className="text-gray-100 hover:text-amber-400 transition-colors">
                        linkedin.com/in/aditya-sahu-0aa898219
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Motion.div>
            
            <Motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
                <form className="space-y-6">
                  <div>
                    <label className="block mb-2 font-medium text-gray-300">Name</label>
                    <input 
                      type="text" 
                      className="w-full p-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none text-gray-100"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium text-gray-300">Email</label>
                    <input 
                      type="email" 
                      className="w-full p-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none text-gray-100"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium text-gray-300">Message</label>
                    <textarea 
                      rows="5"
                      className="w-full p-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none text-gray-100"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  <Motion.button 
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 bg-gradient-to-r from-amber-600 to-orange-600 rounded-lg font-medium shadow-lg hover:shadow-amber-500/20 transition-all"
                  >
                    Send Message
                  </Motion.button>
                </form>
              </div>
            </Motion.div>
          </div>
        </div>
      </section>
  
      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Aditya Sahu. All rights reserved.</p>
          <p className="mt-2 text-sm">Designed and built with React, Vite, and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}

// Navigation Component
function NavItem({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
        active 
          ? 'text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg' 
          : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
      }`}
    >
      {children}
    </button>
  );
}