import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
}

interface Skill {
  id: number;
  name: string;
  level: number;
}

const experienceData: Experience[] = [
  {
    id: 1,
    company: "Adobe",
    role: "Senior Product Designer",
    period: "2021 - Present",
    description: "Leading design for enterprise products. Collaborate with cross-functional teams to create intuitive user experiences."
  },
  {
    id: 2,
    company: "Microsoft",
    role: "UX Designer",
    period: "2018 - 2021",
    description: "Designed user interfaces for cloud services. Conducted user research and usability testing to improve product experiences."
  },
  {
    id: 3,
    company: "Freelance",
    role: "UI/UX Consultant",
    period: "2016 - 2018",
    description: "Worked with startups and small businesses to establish brand identity and create engaging digital experiences."
  }
];

const skillsData: Skill[] = [
  { id: 1, name: "UI Design", level: 95 },
  { id: 2, name: "UX Research", level: 85 },
  { id: 3, name: "Frontend Development", level: 80 },
  { id: 4, name: "Prototyping", level: 90 },
  { id: 5, name: "User Testing", level: 75 }
];

const About = () => {
  const [animated, setAnimated] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('skills-section');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight && !animated) {
          setAnimated(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [animated]);
  
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
          About Me
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto font-light"
        >
          I'm a product designer with over 5 years of experience creating digital experiences that people love.
        </motion.p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6">My Background</h3>
          <div className="space-y-6 text-gray-700 dark:text-gray-300 font-light">
            <p>
              I specialize in creating intuitive, user-centered digital products that solve real problems. With a background in both design and development, I bridge the gap between aesthetics and functionality.
            </p>
            <p>
              My approach combines strategic thinking with creative execution. I believe in designing with purpose and intention, always keeping the end user in mind throughout the process.
            </p>
            <p>
              When I'm not designing, you can find me exploring new technologies, contributing to open-source projects, or enjoying nature through hiking and photography.
            </p>
          </div>
          
          <h3 className="text-2xl font-bold mt-12 mb-6">Experience</h3>
          <div className="space-y-8">
            {experienceData.map((experience, index) => (
              <motion.div 
                key={experience.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.8 }}
                viewport={{ once: true }}
                className="border-l-2 border-gray-200 dark:border-gray-800 pl-6"
              >
                <h4 className="text-xl font-medium">{experience.company}</h4>
                <div className="flex justify-between items-center mt-1 mb-2">
                  <p className="text-gray-600 dark:text-gray-400">{experience.role}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">{experience.period}</p>
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-light">{experience.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6">Skills</h3>
          <div id="skills-section" className="space-y-6">
            {skillsData.map((skill, index) => (
              <motion.div 
                key={skill.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-4"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-gray-500">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-black dark:bg-white rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: animated ? `${skill.level}%` : "0%" }}
                    transition={{ duration: 1, delay: 0.2 * index }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
          
          <h3 className="text-2xl font-bold mt-12 mb-6">Tools & Technologies</h3>
          <div className="flex flex-wrap gap-3">
            {[
              "Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator",
              "HTML", "CSS", "JavaScript", "React", "TypeScript",
              "Git", "Framer", "Webflow", "Protopie"
            ].map((tool, index) => (
              <motion.span 
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.05 * index, duration: 0.4 }}
                viewport={{ once: true }}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
              >
                {tool}
              </motion.span>
            ))}
          </div>
          
          <h3 className="text-2xl font-bold mt-12 mb-6">Education</h3>
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-medium">Master of Interaction Design</h4>
              <p className="text-gray-600 dark:text-gray-400">Carnegie Mellon University</p>
              <p className="text-sm text-gray-500 dark:text-gray-500">2016 - 2018</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-medium">Bachelor of Computer Science</h4>
              <p className="text-gray-600 dark:text-gray-400">University of California, Berkeley</p>
              <p className="text-sm text-gray-500 dark:text-gray-500">2012 - 2016</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;