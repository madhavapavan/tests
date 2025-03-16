import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          <motion.div 
            variants={itemVariants}
            className="md:w-1/2"
          >
            <h2 className="section-title text-left">About Me</h2>
            <p className="text-secondary mb-6 text-left">
              Hello! I'm Madhava, a passionate frontend developer with a keen eye for creating 
              beautiful, functional, and user-centered digital experiences. With a background in 
              computer science and a love for creative problem-solving, I bridge the gap between 
              engineering and design.
            </p>
            <p className="text-secondary mb-6 text-left">
              I specialize in building responsive web applications using modern JavaScript frameworks, 
              particularly React. I'm dedicated to writing clean, efficient code and constantly 
              learning new technologies to stay at the forefront of web development.
            </p>
            <p className="text-secondary text-left">
              When I'm not coding, you can find me exploring new design trends, contributing to 
              open-source projects, or enjoying outdoor activities to recharge my creative energy.
            </p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="md:w-1/2 grid grid-cols-2 gap-4"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="aspect-square bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
                alt="Coding setup" 
                className="w-full h-full object-cover mix-blend-overlay"
              />
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="aspect-square bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
                alt="Web development" 
                className="w-full h-full object-cover mix-blend-overlay"
              />
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="aspect-square bg-gradient-to-br from-cyan-400 to-emerald-500 rounded-lg overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
                alt="Design work" 
                className="w-full h-full object-cover mix-blend-overlay"
              />
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="aspect-square bg-gradient-to-br from-emerald-500 to-yellow-500 rounded-lg overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
                alt="Code on screen" 
                className="w-full h-full object-cover mix-blend-overlay"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About