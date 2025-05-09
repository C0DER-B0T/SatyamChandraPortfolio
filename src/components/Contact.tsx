import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thanks for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="container mx-auto px-6"
    >
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Get In Touch
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto font-light"
        >
          Have a project in mind or want to say hello? Feel free to reach out. I'm always open to discussing new opportunities.
        </motion.p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
          
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-start space-x-4"
            >
              <Mail className="mt-1 text-gray-600 dark:text-gray-400" size={20} />
              <div>
                <h4 className="font-medium">Email</h4>
                <a 
                  href="mailto:hello@satyamchandra.com" 
                  className="text-gray-700 dark:text-gray-300 hover:underline"
                >
                  hello@satyamchandra.com
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-start space-x-4"
            >
              <Phone className="mt-1 text-gray-600 dark:text-gray-400" size={20} />
              <div>
                <h4 className="font-medium">Phone</h4>
                <a 
                  href="tel:+15555555555" 
                  className="text-gray-700 dark:text-gray-300 hover:underline"
                >
                  +1 (555) 555-5555
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-start space-x-4"
            >
              <MapPin className="mt-1 text-gray-600 dark:text-gray-400" size={20} />
              <div>
                <h4 className="font-medium">Location</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  San Francisco, California
                </p>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <h3 className="text-2xl font-bold mb-6">Follow Me</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 font-light">
              Let's connect on social media.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer" 
                className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Twitter
              </motion.a>
              <motion.a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                LinkedIn
              </motion.a>
              <motion.a 
                href="https://dribbble.com" 
                target="_blank" 
                rel="noreferrer" 
                className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Dribbble
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input 
                type="text" 
                id="name" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-transparent rounded-md focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input 
                type="email" 
                id="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-transparent rounded-md focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea 
                id="message" 
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-transparent rounded-md focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white resize-none"
              />
            </motion.div>
            
            <motion.button 
              type="submit"
              className="flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black border border-transparent rounded-full hover:bg-transparent hover:border-black hover:text-black dark:hover:bg-transparent dark:hover:border-white dark:hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
              <Send size={16} />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;