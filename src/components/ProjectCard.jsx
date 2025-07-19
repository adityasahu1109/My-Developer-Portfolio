import { motion as Motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

export default function ProjectCard({ project }) {
  return (
    <Motion.div 
      whileHover={{ y: -10 }}
      className="border rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow bg-white"
    >
      <h3 className="text-xl font-bold text-blue-600">{project.title}</h3>
      <p className="mt-2 text-gray-600">{project.description}</p>
      
      <div className="mt-4 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span 
            key={tech}
            className="px-3 py-1 bg-gray-100 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <a 
        href={project.github} 
        target="_blank" 
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 text-blue-500 hover:text-blue-700 transition-colors"
      >
        <FaGithub /> View on GitHub
      </a>
    </Motion.div>
  );
}