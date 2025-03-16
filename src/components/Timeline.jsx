import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const TimelineItem = ({ item, index, isLeft }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  useEffect(() => {
    if (inView) {
      gsap.to(`#timeline-item-${index}`, {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: 'power2.out'
      })
    }
  }, [inView, index])

  return (
    <div 
      id={`timeline-item-${index}`}
      ref={ref}
      className={`z-10 timeline-item relative w-full md:w-[45%] mb-12 pl-8 opacity-0 
        ${isLeft 
          ? 'md:ml-auto md:mr-[50%] md:pr-12' 
          : 'md:mr-auto md:ml-[50%] md:pl-12'
        }`}
      style={{ 
        transform: isLeft ? 'translateX(-50px)' : 'translateX(50px)'
      }}
    >
      <div className="card">
        <div className={`flex items-center mb-2 ${isLeft ? 'md:flex-row-reverse flex-row' : 'flex-row'}`}>
          <span className="text-accent text-sm font-mono">{item.period}</span>
          <span className={`px-2 py-1 bg-accent/20 text-accent text-xs rounded-full 
  ${isLeft ? 'md:mr-auto md:left-[20px] md:absolute' : 'md:ml-auto'} ml-auto`}>
  {item.type}
</span>

        </div>
        <h3 className={`text-xl font-bold mb-1 ${isLeft ? 'md:text-right text-left' : 'text-left'}`}>{item.title}</h3>
        <h4 className={`text-lg text-secondary mb-3 ${isLeft ? 'md:text-right text-left' : 'text-left'}`}>{item.organization}</h4>
        <p className={`text-secondary ${isLeft ? 'md:text-right text-left' : 'text-left'}`}>{item.description}</p>
      </div>
    </div>
  )
}

const Timeline = () => {
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

  const timelineItems = [
    {
      type: 'Internship',
      title: 'MERN Stack Intern',
      organization: 'Excler',
      period: 'May 2024 - Jun 2024',
      description: 'Learned MERN stack concepts and explored full-stack development best practices.'
    },
    {
      type: 'Internship',
      title: 'Frontend Developer Intern',
      organization: 'Codeway Solutions',
      period: 'Feb 2024 - Mar 2024',
      description: 'Worked on individual projects using HTML, CSS, and JavaScript to develop interactive web applications.'
    },
    {
      type: 'Education',
      title: 'B.Tech in CSE (AI & DS)',
      organization: 'Vishnu Institute of Technology',
      period: '2022 - 2026',
      description: 'Studying artificial intelligence and data science with a focus on software development and machine learning.'
    },
    {
      type: 'Education',
      title: 'Intermediate (MPC)',
      organization: 'Sri Chaitanya Junior College, Vijayawada',
      period: '2020 - 2022',
      description: 'Completed the MPC stream with a strong foundation in mathematics and physics, scoring 92.9%.'
    },
    {
      type: 'Education',
      title: 'High School',
      organization: 'Sri Chaitanya Techno School, Rajahmundry',
      period: '2019 - 2020',
      description: 'Excelled in academics, achieving a 95% score in high school education.'
    }
  ]

  return (
    <section id="timeline" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title text-center mx-auto"
        >
          Experience & Education
        </motion.h2>
        
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="relative mt-12"
        >
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-accent/30 transform -translate-x-1/2"></div>
          
          {timelineItems.map((item, index) => (
            <TimelineItem 
              key={index} 
              item={item} 
              index={index}
              isLeft={index % 2 === 0}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Timeline
