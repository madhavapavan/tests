import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import MatrixText from './MatrixText';
import {
  GithubButton,
  GmailButton,
  LeetCodeButton,
  GeeksforGeeksButton,
  LinkedInButton,
} from './SocialButtons';

const Hero = () => {
  const [blackHoleLoaded, setBlackHoleLoaded] = useState(false);
  const [matrixComplete, setMatrixComplete] = useState(false);

  const [text] = useTypewriter({
    words: [
      'Frontend Developer',
      'React Specialist',
      'UI/UX Enthusiast',
      'Data Analyst',
      'Python Developer',
      'Machine Learning Engineer',
    ],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 70,
    deleteSpeed: 50,
  });

  // Detect when black hole video is loaded
  useEffect(() => {
    const video = document.querySelector('video');
    const handleLoadedData = () => setBlackHoleLoaded(true);
    video.addEventListener('loadeddata', handleLoadedData);
    if (video.readyState >= 2) setBlackHoleLoaded(true); // 2 = HAVE_CURRENT_DATA
    return () => video.removeEventListener('loadeddata', handleLoadedData);
  }, []);

  // Variants for social icons container
  const socialContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.8, // Adjusted to start after black hole with slight delay
        when: 'beforeChildren',
        staggerChildren: 0.2, // 0.2s delay between each child
      },
    },
  };

  // Variants for individual social icons
  const socialItemVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section id="home" className="hero-section relative">
      {/* Black Hole Video */}
      <motion.video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-51%] h-[120%] w-[120%] left-0 z-[0] object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: blackHoleLoaded ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <source src="/blackhole.webm" type="video/webm" />
        Your browser does not support the video tag.
      </motion.video>

      {/* Hero Content */}
      <motion.div
        className="z-10 left-[0%] text-left relative w-full max-w-xl px-8 py-16"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: blackHoleLoaded ? 0 : -100, opacity: blackHoleLoaded ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: blackHoleLoaded ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold mb-4 text-secondary"
        >
          <MatrixText
            text="Madhava"
            onComplete={() => setMatrixComplete(true)}
          />
        </motion.h1>

        <motion.h2
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: blackHoleLoaded ? 0 : -50, opacity: blackHoleLoaded ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.7 }} // Starts after black hole
          className="text-2xl md:text-3xl font-medium text-secondary mb-8"
        >
          I'm a{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {text}
          </span>
          <Cursor cursorColor="#646cff" />
        </motion.h2>

        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: blackHoleLoaded ? 0 : -50, opacity: blackHoleLoaded ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.9 }} // Starts after "I'm a..."
          className="mt-8"
        >
          <a href="#contact" className="btn btn-primary mr-4 interactive">
            Contact Me
          </a>
          <a href="#projects" className="btn btn-outline interactive">
            View Projects
          </a>
        </motion.div>
      </motion.div>

      {/* Floating Social Icons */}
      <motion.div
        className="absolute right-8 top-1/4 flex flex-col gap-8 z-20 w-[110px] items-end"
        variants={socialContainerVariants}
        initial="hidden"
        animate={blackHoleLoaded ? 'visible' : 'hidden'} // Tied to blackHoleLoaded
      >
        <motion.div variants={socialItemVariants}>
          <GithubButton />
        </motion.div>
        <motion.div variants={socialItemVariants}>
          <GmailButton />
        </motion.div>
        <motion.div variants={socialItemVariants}>
          <LeetCodeButton />
        </motion.div>
        <motion.div variants={socialItemVariants}>
          <GeeksforGeeksButton />
        </motion.div>
        <motion.div variants={socialItemVariants}>
          <LinkedInButton />
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: blackHoleLoaded ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 1.5 }} // Adjusted delay to fit sequence
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10"
      >
        <span className="text-secondary text-sm mb-2">Scroll Down</span>
        <svg
          className="w-6 h-6 text-accent animate-bounce-slow"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;