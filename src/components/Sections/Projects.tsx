import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2, Brain, Database, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Document Analysis",
      description: "An advanced document processing system using NLP and computer vision to extract and analyze information from various document types.",
      image: "/projects/doc-analysis.jpg",
      technologies: ["Python", "TensorFlow", "OpenCV", "FastAPI", "React"],
      github: "https://github.com/C0DER-B0T",
      demo: "https://doc-analysis-demo.com",
      category: "AI/ML"
    },
    {
      title: "Real-time Object Detection",
      description: "A real-time object detection system using YOLOv5 for video surveillance and analysis.",
      image: "/projects/object-detection.jpg",
      technologies: ["Python", "PyTorch", "OpenCV", "Docker", "AWS"],
      github: "https://github.com/C0DER-B0T",
      demo: "https://object-detection-demo.com",
      category: "Computer Vision"
    },
    {
      title: "ML Model Deployment Platform",
      description: "A scalable platform for deploying and monitoring machine learning models in production.",
      image: "/projects/ml-platform.jpg",
      technologies: ["Python", "Kubernetes", "TensorFlow", "React", "MongoDB"],
      github: "https://github.com/C0DER-B0T",
      demo: "https://ml-platform-demo.com",
      category: "MLOps"
    },
    {
      title: "Natural Language Processing API",
      description: "A comprehensive NLP API for text analysis, sentiment analysis, and language understanding.",
      image: "/projects/nlp-api.jpg",
      technologies: ["Python", "Transformers", "FastAPI", "Docker", "PostgreSQL"],
      github: "https://github.com/C0DER-B0T",
      demo: "https://nlp-api-demo.com",
      category: "NLP"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my work in AI/ML and software development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
            >
              <div className="relative h-48">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="absolute inset-0"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 * i }}
                      viewport={{ once: true }}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    whileHover={{ x: 5 }}
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Code
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    whileHover={{ x: 5 }}
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.a
            href="https://github.com/C0DER-B0T"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5 mr-2" />
            View More Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 