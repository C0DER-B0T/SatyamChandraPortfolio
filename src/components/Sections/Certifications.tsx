import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "TensorFlow Developer Certificate",
      issuer: "Google",
      date: "2023",
      credential: "tensorflow-cert",
      description: "Professional certification for building and training ML models using TensorFlow",
      skills: ["TensorFlow", "Deep Learning", "Neural Networks", "ML Models"]
    },
    {
      title: "AWS Certified Machine Learning Specialist",
      issuer: "Amazon Web Services",
      date: "2022",
      credential: "aws-ml-specialty",
      description: "Expertise in building, training, and deploying ML models on AWS",
      skills: ["AWS", "SageMaker", "MLOps", "Cloud Computing"]
    },
    {
      title: "Deep Learning Specialization",
      issuer: "deeplearning.ai",
      date: "2021",
      credential: "deep-learning-specialization",
      description: "Comprehensive deep learning certification covering neural networks and advanced architectures",
      skills: ["Deep Learning", "CNN", "RNN", "Transformers"]
    },
    {
      title: "Microsoft Certified: Azure AI Engineer Associate",
      issuer: "Microsoft",
      date: "2022",
      credential: "azure-ai-engineer",
      description: "Building and deploying AI solutions on Microsoft Azure",
      skills: ["Azure", "AI Services", "Cognitive Services", "MLOps"]
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional certifications and specialized training in AI/ML
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                      <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {cert.title}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {cert.date}
                  </span>
                </div>

                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  {cert.description}
                </p>

                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                    Skills & Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 * i }}
                        viewport={{ once: true }}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <motion.a
                  href={`https://verify.credential.net/${cert.credential}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                  whileHover={{ x: 5 }}
                >
                  Verify Certificate
                  <ExternalLink className="w-4 h-4 ml-2" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications; 