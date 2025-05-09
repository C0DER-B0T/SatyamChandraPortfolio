import { motion } from 'framer-motion';
import { Home, User, GraduationCap, Briefcase, Code2, FolderOpen, Award, Mail } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  scrollTab?: string;
}

const Navbar = ({ activeTab, onTabChange, scrollTab }: NavbarProps) => {
  const tabs = [
    { id: 'home', label: 'Home', icon: <Home className="w-5 h-5" /> },
    { id: 'about', label: 'About', icon: <User className="w-5 h-5" /> },
    { id: 'education', label: 'Education', icon: <GraduationCap className="w-5 h-5" /> },
    { id: 'work', label: 'Work', icon: <Briefcase className="w-5 h-5" /> },
    { id: 'skills', label: 'Skills', icon: <Code2 className="w-5 h-5" /> },
    { id: 'projects', label: 'Projects', icon: <FolderOpen className="w-5 h-5" /> },
    { id: 'certifications', label: 'Certifications', icon: <Award className="w-5 h-5" /> },
    { id: 'contact', label: 'Contact', icon: <Mail className="w-5 h-5" /> }
  ];

  return (
    <nav className="fixed top-0 left-0 h-screen w-20 bg-white dark:bg-gray-800 shadow-lg z-50">
      <div className="flex flex-col items-center py-8 space-y-8">
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`relative p-3 rounded-lg transition-colors duration-300 ${
              activeTab === tab.id
                ? 'text-blue-600 dark:text-blue-400'
                : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {tab.icon}
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-blue-100 dark:bg-blue-900 rounded-lg -z-10"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            {/* Glowing pulse animation when tab is activated by scroll */}
            {scrollTab === tab.id && (
              <motion.div
                className="absolute inset-0 rounded-lg -z-20"
                initial={{ scale: 1, opacity: 0.7 }}
                animate={{ scale: 1.4, opacity: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                style={{ background: 'radial-gradient(circle, #60a5fa88 0%, transparent 80%)' }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar; 