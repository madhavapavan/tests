import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  useEffect(() => {
    const handleMouseOver = () => {
      console.log('Mouse Over');
      setCursorVariant('hover');
    };
    const handleMouseOut = () => {
      console.log('Mouse Out');
      setCursorVariant('default');
    };

    const attachListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, input, textarea, [role="button"], .interactive'
      );

      interactiveElements.forEach((el) => {
        el.addEventListener('mouseover', handleMouseOver);
        el.addEventListener('mouseout', handleMouseOut);
      });
    };

    // Attach listeners initially
    attachListeners();

    // Use MutationObserver to detect new elements
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
          attachListeners(); // Re-attach listeners when new elements are added
        }
      }
    });

    // Start observing the document body for changes
    observer.observe(document.body, { childList: true, subtree: true });

    // Cleanup
    return () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, input, textarea, [role="button"], .interactive'
      );

      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseover', handleMouseOver);
        el.removeEventListener('mouseout', handleMouseOut);
      });

      observer.disconnect(); // Stop observing
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 6,
      y: mousePosition.y - 6,
      height: 12,
      width: 12,
      backgroundColor: 'rgba(100, 108, 255, 0.8)',
      mixBlendMode: 'screen',
      transition: {
        type: 'spring',
        mass: 0.05,    // Reduced from 0.1 for faster response
        stiffness: 1000, // Increased from 800 for quicker snap
        damping: 20,    // Reduced from 30 for less resistance
      },
    },
    hover: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12,
      height: 24,
      width: 24,
      backgroundColor: 'rgba(100, 108, 255, 0.8)',
      mixBlendMode: 'screen',
      transition: {
        type: 'spring',
        mass: 0.1,     // Reduced from 0.3 for faster response
        stiffness: 1000, // Increased from 800 for quicker snap
        damping: 20,    // Reduced from 30 for less resistance
      },
    },
  };

  const outlineVariants = {
    default: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      transition: {
        type: 'spring',
        mass: 0.3,     // Reduced from 0.6 for faster response
        stiffness: 300, // Increased from 200 for quicker snap
        damping: 30,    // Reduced from 40 for less resistance
      },
    },
    hover: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      height: 64,
      width: 64,
      opacity: 0.5,
      transition: {
        type: 'spring',
        mass: 0.3,     // Reduced from 0.6 for faster response
        stiffness: 300, // Increased from 200 for quicker snap
        damping: 30,    // Reduced from 40 for less resistance
      },
    },
  };

  return (
    <>
      <motion.div
        className="cursor-dot"
        variants={variants}
        animate={cursorVariant}
      />
      <motion.div
        className="cursor-outline"
        variants={outlineVariants}
        animate={cursorVariant}
      />
    </>
  );
};

export default CustomCursor;