import React, { useEffect, useState } from 'react';
import './TypingEffect.css';

const TypingEffect = () => {
  const slogan = "Empower Your Savings: Energize Your Impact!";
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 150; // Speed of typing in milliseconds
  const deletingSpeed = 75; // Speed of deleting in milliseconds
  const pauseTime = 1500; // Time to pause before deleting
  const loopDelay = 500; // Delay before restarting the typing effect

  useEffect(() => {
    let index = 0; // Current index for typing
    let timeoutId; // To store the timeout ID for cleanup

    const type = () => {
      if (!isDeleting) {
        if (index < slogan.length) {
          setDisplayedText(slogan.slice(0, index + 1));
          index++;
          timeoutId = setTimeout(type, typingSpeed);
        } else {
          // Pause before starting to delete
          timeoutId = setTimeout(() => {
            setIsDeleting(true);
          }, pauseTime);
        }
      } else {
        if (index > 0) {
          setDisplayedText(slogan.slice(0, index - 1));
          index--;
          timeoutId = setTimeout(type, deletingSpeed);
        } else {
          // Pause before starting to type again
          timeoutId = setTimeout(() => {
            setIsDeleting(false);
          }, loopDelay);
        }
      }
    };

    type(); // Start the typing effect

    return () => {
      clearTimeout(timeoutId); // Cleanup the timeout on unmount
    };
  }, [isDeleting, slogan]);

  return (
    <h1 className="text-3xl font-bold text-white glow-effect">{displayedText}</h1>
  );
};

export default TypingEffect;
