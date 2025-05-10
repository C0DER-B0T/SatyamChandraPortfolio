import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Updated: 2024 - Latest version with desktop recommendation and resume download fix
import Hero from './components/Sections/Hero';
import AIDemo from './components/Sections/AIDemo';
import About from './components/Sections/About';
import Education from './components/Sections/Education';
import Work from './components/Sections/Work';
import Skills from './components/Sections/Skills';
import Projects from './components/Sections/Projects';
import Certifications from './components/Sections/Certifications';
import Contact from './components/Sections/Contact';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider } from './context/ThemeContext';

const sectionIds = [
  'home',
  'ai-demo',
  'about',
  'education',
  'work',
  'skills',
  'projects',
  'certifications',
  'contact',
];

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const [scrollTab, setScrollTab] = useState('');
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      let found = false;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120) {
            if (activeTab !== sectionIds[i]) {
              setActiveTab(sectionIds[i]);
              setScrollTab(sectionIds[i]);
              if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
              scrollTimeout.current = setTimeout(() => setScrollTab(''), 1000);
            }
            found = true;
            break;
          }
        }
      }
      if (!found && activeTab !== 'home') {
        setActiveTab('home');
        setScrollTab('home');
        if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
        scrollTimeout.current = setTimeout(() => setScrollTab(''), 1000);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeTab]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    // Scroll to the corresponding section
    const element = document.getElementById(tab);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-white dark:bg-gray-900">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4"
        >
          Loading...
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-lg text-gray-600 dark:text-gray-400"
        >
          Use Desktop for Better Viewing Experience
        </motion.div>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Navbar activeTab={activeTab} onTabChange={handleTabChange} scrollTab={scrollTab} />
        <ThemeToggle />
        
        <main className="ml-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {activeTab === 'home' && <Hero />}
              {activeTab === 'ai-demo' && <AIDemo />}
              {activeTab === 'about' && <About />}
              {activeTab === 'education' && <Education />}
              {activeTab === 'work' && <Work />}
              {activeTab === 'skills' && <Skills />}
              {activeTab === 'projects' && <Projects />}
              {activeTab === 'certifications' && <Certifications />}
              {activeTab === 'contact' && <Contact />}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;