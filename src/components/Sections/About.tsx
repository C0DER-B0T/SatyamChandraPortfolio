import { motion } from 'framer-motion';
import { Code2, Brain, Rocket, Lightbulb, BarChart2 } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI/ML Mastery",
      description: "Expert in developing state-of-the-art AI solutions, from deep learning models to complex neural networks. Specialized in computer vision, NLP, and reinforcement learning."
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "AI Problem Solver",
      description: "Passionate about tackling complex challenges through innovative AI solutions. Transforming theoretical concepts into practical, real-world applications."
    },
    {
      icon: <BarChart2 className="w-6 h-6" />,
      title: "Advanced Data Science & Analytics",
      description: "Expert in statistical analysis, predictive modeling, and data-driven decision making. Transforming complex data into actionable insights."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "AI Innovation Leader",
      description: "Pioneering new approaches in AI/ML, staying at the forefront of emerging technologies and methodologies in artificial intelligence."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A dedicated AI/ML Engineer specializing in developing cutting-edge artificial intelligence solutions and pushing the boundaries of what's possible with machine learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 dark:from-blue-400 dark:via-purple-500 dark:to-pink-400 rounded-2xl p-8 text-white shadow-xl backdrop-blur-md border border-blue-200 dark:border-blue-700"
        >
          <h3 className="text-2xl font-bold mb-4">My Mission</h3>
          <p className="text-lg">
            To revolutionize industries through advanced AI solutions and machine learning innovations. I'm committed to developing cutting-edge AI systems that solve real-world problems while maintaining the highest standards of ethical AI development and responsible innovation.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 