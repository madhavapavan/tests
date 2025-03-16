import { useEffect, Suspense, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useTexture } from '@react-three/drei'

// Lazy load the 3D components to improve initial load time
const ProjectBox = ({ texture, ...props }) => {
  const colorMap = useTexture(texture)
  
  return (
    <mesh {...props} rotation={[0, Math.PI / 4, 0]}>
      <boxGeometry args={[2.5, 1.5, 0.1]} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  )
}

const ProjectCard = ({ project, index }) => {
  const [hovered, setHovered] = useState(false)
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="z-10 card h-full flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.2 }
      }}
    >
      <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
        <Canvas className="absolute inset-0">
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <Suspense fallback={null}>
            <ProjectBox 
              texture={project.image} 
              position={[0, 0, 0]}
              scale={hovered ? 1.1 : 1}
            />
            <OrbitControls 
              enableZoom={false} 
              enablePan={false}
              autoRotate={hovered}
              autoRotateSpeed={5}
            />
          </Suspense>
        </Canvas>
      </div>
      
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-secondary mb-4 flex-grow">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, i) => (
          <span 
            key={i} 
            className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex gap-4 mt-auto">
        {project.demo && (
          <a 
            href={project.demo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary text-sm py-1 px-3 interactive"
          >
            Live Demo
          </a>
        )}
        {project.github && (
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline text-sm py-1 px-3 interactive"
          >
            GitHub
          </a>
        )}
      </div>
    </motion.div>
  )
}

const Projects = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online store with product listings, cart functionality, and checkout process.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
      technologies: ['React', 'Redux', 'Tailwind CSS', 'Stripe API'],
      demo: 'https://example.com',
      github: 'https://github.com'
    },
    {
      title: 'Task Management App',
      description: 'A productivity application for organizing tasks with drag-and-drop functionality and team collaboration.',
      image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
      technologies: ['React', 'Firebase', 'Framer Motion', 'React DnD'],
      demo: 'https://example.com',
      github: 'https://github.com'
    },
    {
      title: 'Weather Dashboard',
      description: 'An interactive weather application with real-time data visualization and location-based forecasts.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
      technologies: ['React', 'Chart.js', 'OpenWeather API', 'Geolocation'],
      demo: 'https://example.com',
      github: 'https://github.com'
    },
    {
      title: 'Portfolio Website',
      description: 'A creative portfolio showcasing projects and skills with interactive animations and 3D elements.',
      image: '/Projects/image.png',
      technologies: ['React', 'Three.js', 'GSAP', 'Framer Motion'],
      demo: 'https://example.com',
      github: 'https://github.com'
    }
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title text-center mx-auto"
        >
          My Projects
        </motion.h2>
        
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects