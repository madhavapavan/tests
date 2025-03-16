import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  const skills = [
    { name: 'React', level: 90, icon: '⚛️', description: 'Building complex UIs with React hooks, context API, and state management libraries.' },
    { name: 'JavaScript', level: 85, icon: '🟨', description: 'Modern ES6+, async/await, functional programming, and DOM manipulation.' },
    { name: 'CSS/SCSS', level: 80, icon: '🎨', description: 'Creating responsive layouts, animations, and implementing design systems.' },
    { name: 'Tailwind CSS', level: 85, icon: '🌊', description: 'Rapidly building custom interfaces without leaving HTML.' },
    { name: 'Framer Motion', level: 75, icon: '✨', description: 'Creating fluid animations and interactive UI components.' },
    { name: 'Three.js', level: 65, icon: '🔮', description: 'Implementing 3D graphics and animations for web applications.' },
    { name: 'GSAP', level: 70, icon: '🎭', description: 'Creating high-performance animations with precise control.' },
    { name: 'Git/GitHub', level: 80, icon: '🔄', description: 'Version control, collaboration, and CI/CD workflows.' },
  ];

  return (
    <section id="skills" className="py-20 z-10 relative"> {/* Ensure z-10 and relative positioning */}
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title text-center mx-auto"
        >
          My Skills
        </motion.h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="skill-card relative h-40"
            >
              <div className="skill-card-inner w-full h-full">
                <div className="skill-card-front card flex flex-col justify-between">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold flex items-center">
                      <span className="mr-2">{skill.icon}</span> {skill.name}
                    </h3>
                    <span className="text-accent font-bold">{skill.level}%</span>
                  </div>

                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <motion.div
                      className="bg-accent h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.3 }}
                    ></motion.div>
                  </div>
                </div>

                <div className="skill-card-back card flex items-center justify-center p-6">
                  <p className="text-secondary">{skill.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;