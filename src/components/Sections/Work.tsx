import { motion } from 'framer-motion';
import { Briefcase, Code2, Users, Rocket } from 'lucide-react';

const Work = () => {
  const experiences = [
    {
      role: "Senior AI/ML Engineer",
      company: "Google AI",
      period: "2022 - Present",
      description: "Leading the development of advanced machine learning models for natural language processing and computer vision applications.",
      responsibilities: [
        "Developed and deployed state-of-the-art NLP models",
        "Led a team of 5 ML engineers",
        "Improved model accuracy by 25%",
        "Implemented automated ML pipelines"
      ],
      technologies: ["TensorFlow", "PyTorch", "BERT", "Transformers", "Kubernetes"]
    },
    {
      role: "Machine Learning Engineer",
      company: "Microsoft Research",
      period: "2020 - 2022",
      description: "Worked on developing innovative AI solutions for enterprise applications and research projects.",
      responsibilities: [
        "Built computer vision models for object detection",
        "Optimized model performance for edge devices",
        "Published research papers on ML optimization",
        "Mentored junior ML engineers"
      ],
      technologies: ["Python", "TensorFlow", "OpenCV", "Docker", "Azure ML"]
    }
  ];

  return (
    <section id="work" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey in AI and Machine Learning
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-6 text-white h-full"
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <Briefcase className="w-6 h-6" />
                      <h3 className="text-xl font-bold">{exp.role}</h3>
                    </div>
                    <p className="text-lg font-medium mb-2">{exp.company}</p>
                    <p className="text-blue-100">{exp.period}</p>
                  </motion.div>
                </div>
                
                <div className="md:w-2/3">
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {exp.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                        <Users className="w-5 h-5 mr-2 text-blue-600" />
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * i }}
                            viewport={{ once: true }}
                            className="flex items-start space-x-2 text-gray-600 dark:text-gray-300"
                          >
                            <Rocket className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                            <span>{resp}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                        <Code2 className="w-5 h-5 mr-2 text-blue-600" />
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.1 * i }}
                            viewport={{ once: true }}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work; 