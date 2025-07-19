import { motion as Motion } from 'framer-motion';

export default function Navbar({ 
  activeSection, 
  scrollToAbout, 
  scrollToSkills, 
  scrollToProjects, 
  scrollToContact 
}) {
  return (
    <Motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full bg-white bg-opacity-90 backdrop-blur-sm shadow-sm z-50"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold text-blue-600">AJ.dev</div>
          
          <div className="flex space-x-1">
            <NavItem 
              active={activeSection === 'home'} 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Home
            </NavItem>
            <NavItem active={activeSection === 'about'} onClick={scrollToAbout}>
              About
            </NavItem>
            <NavItem active={activeSection === 'skills'} onClick={scrollToSkills}>
              Skills
            </NavItem>
            <NavItem active={activeSection === 'projects'} onClick={scrollToProjects}>
              Projects
            </NavItem>
            <NavItem active={activeSection === 'contact'} onClick={scrollToContact}>
              Contact
            </NavItem>
          </div>
        </div>
      </div>
    </Motion.nav>
  );
}

function NavItem({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
        active 
          ? 'text-blue-600 bg-blue-50' 
          : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
      }`}
    >
      {children}
    </button>
  );
}