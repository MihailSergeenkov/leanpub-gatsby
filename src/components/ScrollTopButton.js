import React, { useState, useEffect } from 'react';

const styles = {
  root: {
    cursor: 'pointer',
    zIndex: 1000,
    position: 'fixed',
    right: '50px',
    bottom: '50px',
  },
};

const ScrollTopButton = () => {
  const [currentScroll, setCurrentScroll] = useState(0);

  const handleScroll = () => {
    setCurrentScroll(window.pageYOffset);
  };

  const handleClick = () => {
    window.scrollTo(window.pageXOffset, 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    currentScroll !== 0 && <button style={styles.root} onClick={handleClick}>UP</button>
  );
};

export default ScrollTopButton;
