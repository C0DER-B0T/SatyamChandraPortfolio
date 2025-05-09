import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Master's in Computer Science",
      specialization: "Artificial Intelligence & Machine Learning",
      institution: "Stanford University",
      year: "2020 - 2022",
      description: "Focused on advanced machine learning algorithms, deep learning, and AI system design. Graduated with distinction.",
      achievements: [
        "Published research paper on Neural Architecture Search",
        "Led AI research team in national competition",
        "Developed novel approach to transfer learning"
      ]
    },
    {
      degree: "Bachelor's in Computer Science",
      specialization: "Software Engineering",
      institution: "MIT",
      year: "2016 - 2020",
      description: "Specialized in software development with focus on AI and machine learning applications.",
      achievements: [
        "Dean's List for academic excellence",
        "First place in AI hackathon",
        "Research assistant in ML lab"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My academic journey in computer science and artificial intelligence
          </p>
        </motion.div>

        <div className="space-y-12">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {edu.degree}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">
                          {edu.specialization}
                        </p>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {edu.year}
                      </span>
                    </div>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                      {edu.institution}
                    </p>
                    <p className="mt-4 text-gray-600 dark:text-gray-300">
                      {edu.description}
                    </p>
                    <div className="mt-4">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * i }}
                            viewport={{ once: true }}
                            className="flex items-center space-x-2 text-gray-600 dark:text-gray-300"
                          >
                            <Award className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
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

export default Education; 