import { motion as Motion } from 'framer-motion';

export default function SkillBar({ name, level, delay = 0 }) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="font-medium">{name}</span>
        <span>{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <Motion.div 
          className="bg-blue-600 h-3 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, delay }}
        />
      </div>
    </div>
  );
}