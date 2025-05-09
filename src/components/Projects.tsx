import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  categories: string[];
  image: string;
  link: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Adobe Experience Cloud",
    description: "Led the redesign of key enterprise products, improving user experience and workflow efficiency.",
    categories: ["Product Design", "Enterprise UX"],
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "#"
  },
  {
    id: 2,
    title: "Microsoft Azure Portal",
    description: "Designed cloud service interfaces focusing on simplifying complex technical workflows.",
    categories: ["UX Design", "Cloud Services"],
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "#"
  },
  {
    id: 3,
    title: "Financial Dashboard",
    description: "Created an intuitive interface for managing personal finances and investments.",
    categories: ["UI Design", "Data Visualization"],
    image: "https://images.pexels.com/photos/7567529/pexels-photo-7567529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "#"
  },
  {
    id: 4,
    title: "Healthcare Platform",
    description: "Developed a patient-centered platform improving healthcare access and management.",
    categories: ["Healthcare UX", "Web App"],
    image: "https://images.pexels.com/photos/3846035/pexels-photo-3846035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "#"
  }
];

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
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
          Selected Projects
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto font-light"
        >
          A collection of projects that showcase my expertise in design and development.
        </motion.p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-xl cursor-pointer"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <motion.div 
              className="relative aspect-[4/3] overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center"
              >
                <div className="text-white text-center p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="font-light mb-4">{project.description}</p>
                  <motion.a 
                    href={project.link}
                    className="inline-flex items-center gap-1 text-sm border-b border-white pb-1"
                    whileHover={{ x: 5 }}
                  >
                    View Project <ArrowUpRight size={14} />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
            <div className="mt-4">
              <h3 className="text-xl font-medium">{project.title}</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.categories.map((category, index) => (
                  <span 
                    key={index} 
                    className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        viewport={{ once: true }}
        className="flex justify-center mt-16"
      >
        <motion.a 
          href="#"
          className="flex items-center gap-2 px-6 py-3 border border-black dark:border-white rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View All Projects
          <ArrowUpRight size={16} />
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default Projects;