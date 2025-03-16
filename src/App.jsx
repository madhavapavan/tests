import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import StarsCanvas from './components/StarsCanvas'; // Import StarsCanvas
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > window.innerHeight * 0.7) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Custom cursor and navbar */}
      <CustomCursor />
      <Navbar />

      {/* Main content */}
      <main className="relative z-13"> {/* Added z-10 to keep content above stars */}
        <Hero />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 py-16"
        >
          <About className="z-10" />
          <Skills  className="z-10" />
          <Projects />
          <Timeline className=""/>
          <Contact />
        </motion.div>
      </main>

      <footer className="bg-transparent py-6 text-center text-secondary relative z-10">
        <p>© {new Date().getFullYear()} Madhava. All rights reserved.</p>
      </footer>

      {/* Stars background across entire page */}
      <StarsCanvas className="z-[-112] pointer-events-none" /> {/* Ensure StarsCanvas has z-[9999] and pointer-events-none */}

      {/* Adding the bg color to the body */}
      <style>{`
        body {
          background-color: #030014;
          overflow-y: scroll;
          overflow-x: hidden;
        }
      `}</style>
    </>
  );
}

export default App;
