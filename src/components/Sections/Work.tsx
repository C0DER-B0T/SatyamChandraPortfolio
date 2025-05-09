import { motion } from 'framer-motion';
import { Briefcase, Code2, Users, Rocket, Award, Lightbulb } from 'lucide-react';

const Work = () => {
  const experiences = [
    {
      role: "AI/ML Research Intern",
      company: "IIT Roorkee AI Lab",
      period: "2025 - Present",
      description: "Actively contributing to cutting-edge AI research while continuously expanding my knowledge in machine learning and artificial intelligence. Working alongside experienced researchers to develop innovative solutions.",
      responsibilities: [
        "Implementing and experimenting with state-of-the-art machine learning models",
        "Contributing to research in computer vision and natural language processing",
        "Participating in AI/ML workshops and knowledge sharing sessions",
        "Documenting research findings and technical implementations"
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "Computer Vision", "NLP"]
    },
    {
      role: "Data Science Project Lead",
      company: "AI Innovation Hub",
      period: "2024 - 2025",
      description: "Led a team in developing AI solutions while focusing on practical implementation and continuous learning. Demonstrated strong problem-solving abilities and technical expertise in real-world projects.",
      responsibilities: [
        "Developed and deployed machine learning models with 90% accuracy",
        "Led end-to-end project development from concept to deployment",
        "Collaborated with team members to solve complex technical challenges",
        "Presented technical solutions and findings to stakeholders"
      ],
      technologies: ["Machine Learning", "Data Analysis", "Python", "SQL", "AWS"]
    },
    {
      role: "AI Development Intern",
      company: "TechStart Solutions",
      period: "2024",
      description: "Gained hands-on experience in AI development while actively learning industry best practices and tools. Demonstrated quick learning ability and technical proficiency in implementing AI solutions.",
      responsibilities: [
        "Built and deployed machine learning models for practical applications",
        "Implemented efficient data processing pipelines",
        "Created comprehensive technical documentation",
        "Participated in agile development and code reviews"
      ],
      technologies: ["Python", "Scikit-learn", "Docker", "Git", "REST APIs"]
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
            Learning Journey & Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My path in AI and Machine Learning: Combining academic excellence with practical experience
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12 bg-blue-50 dark:bg-blue-900/30 rounded-xl p-6 text-center"
        >
          <div className="flex items-center justify-center mb-4">
            <Lightbulb className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Passionate Learner & Problem Solver
          </h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            As a dedicated student with a strong foundation in AI/ML, I combine academic knowledge with practical experience. My curiosity drives me to continuously learn and apply new technologies to solve real-world challenges.
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
                        Key Contributions
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
                        Technical Skills & Tools
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