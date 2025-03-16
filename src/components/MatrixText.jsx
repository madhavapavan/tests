import { useState, useEffect, useRef } from 'react';

const MatrixText = ({ text, onComplete }) => {
  const [displayText, setDisplayText] = useState('');
  const animationFrameRef = useRef(null);
  const startTimeRef = useRef(null);
  const duration = 3500; // Increased from 3000ms (3s) to 6000ms (6s) for slower animation
  const targetText = text || 'Madhava';

  useEffect(() => {
    const randomChars = '运福吉祥财喜寿康安瑞旺昌零一二三四五六七八九十日月火';
    const totalFrames = Math.floor(duration / 8); // ~60 FPS (16.67ms per frame)
    const textLength = targetText.length;
    const charsPerFrame = textLength / totalFrames; // How many chars resolve per frame

    let currentIndex = 0;
    let resolvedText = '';

    const animate = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;

      // Calculate progress (0 to 1)
      const progress = Math.min(elapsed / duration, 1);

      // Determine how many characters should be resolved
      const resolvedCount = Math.floor(progress * textLength);
      if (resolvedCount > currentIndex) {
        resolvedText = targetText.slice(0, resolvedCount);
        currentIndex = resolvedCount;
      }

      // Generate random characters for unresolved portion
      let randomText = '';
      for (let i = resolvedCount; i < textLength; i++) {
        randomText += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
      }

      // Update display text
      setDisplayText(resolvedText + randomText);

      // Continue animation or complete
      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        setDisplayText(targetText); // Ensure final text is exact
        onComplete && onComplete();
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [text, onComplete]);

  return <span className="matrix-text">{displayText}</span>;
};

export default MatrixText;