import { motion } from 'framer-motion';
import { 
  Code2, 
  Database, 
  Cloud, 
  Cpu, 
  GitBranch, 
  Layers, 
  Server, 
  Terminal 
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="w-6 h-6" />,
      skills: [
        { name: "Python", level: 95 },
        { name: "JavaScript/TypeScript", level: 90 },
        { name: "C++", level: 85 },
        { name: "R", level: 80 }
      ]
    },
    {
      title: "Machine Learning",
      icon: <Cpu className="w-6 h-6" />,
      skills: [
        { name: "TensorFlow", level: 95 },
        { name: "PyTorch", level: 90 },
        { name: "Scikit-learn", level: 95 },
        { name: "Keras", level: 90 }
      ]
    },
    {
      title: "Deep Learning",
      icon: <Layers className="w-6 h-6" />,
      skills: [
        { name: "Neural Networks", level: 95 },
        { name: "CNN", level: 90 },
        { name: "RNN/LSTM", level: 85 },
        { name: "Transformers", level: 90 }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6" />,
      skills: [
        { name: "AWS", level: 90 },
        { name: "Azure", level: 85 },
        { name: "Docker", level: 90 },
        { name: "Kubernetes", level: 85 }
      ]
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 90 },
        { name: "Redis", level: 80 },
        { name: "Elasticsearch", level: 85 }
      ]
    },
    {
      title: "Tools & Others",
      icon: <Terminal className="w-6 h-6" />,
      skills: [
        { name: "Git", level: 95 },
        { name: "Linux", level: 90 },
        { name: "CI/CD", level: 85 },
        { name: "Agile", level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Technical skills and professional expertise in AI/ML development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * i }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 * i }}
                        viewport={{ once: true }}
                        className="h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
          <p className="text-lg">
            I'm constantly expanding my skill set and staying up-to-date with the latest advancements in AI/ML technologies. My commitment to continuous learning ensures that I can deliver cutting-edge solutions to complex problems.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 