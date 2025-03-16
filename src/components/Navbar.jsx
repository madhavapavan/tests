import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#timeline' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        {/* Logo */}
        <a href="#home" className="h-auto w-auto flex flex-row items-center gap-[-2]">
          <img
            src="/vite.png" // Ensure this path is correct
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            <span className="text-accent font-bold">_ </span>
            Madhava
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex w-full h-full items-center justify-center absolute left-0">
          <div className="flex items-center justify-center w-auto h-auto border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] rounded-full text-gray-200">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="cursor-pointer hover:text-[#7042f8] transition-colors duration-300 interactive mx-4"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-gray-200 interactive"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-[#0300145e] backdrop-blur-md border-t border-[#7042f861]"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-200 hover:text-[#7042f8] transition-colors duration-300 py-2 interactive"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            {/* Social Icons (Mobile) */}
            <div className="flex flex-row gap-5 justify-center pt-4">
              {Socials.map((social) => (
                <a href="#" key={social.name} target="_blank" rel="noopener noreferrer">
                  <img
                    src={social.src}
                    alt={social.name}
                    width={24}
                    height={24}
                    className="cursor-pointer hover:opacity-80 transition-opacity"
                  />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;