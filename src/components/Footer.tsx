import { Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-12 px-6 border-t border-gray-200 dark:border-gray-800"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
              &copy; {currentYear} Satyam Chandra. All rights reserved.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex space-x-6"
          >
            <motion.a 
              href="https://github.com/C0DER-B0T" 
              target="_blank" 
              rel="noreferrer" 
              className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="GitHub"
            >
              <Github size={20} />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/satyam-chandra-953857356?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
              target="_blank" 
              rel="noreferrer" 
              className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a 
              href="https://x.com/satyam_cha4w" 
              target="_blank" 
              rel="noreferrer" 
              className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="X"
            >
              <Twitter size={20} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;