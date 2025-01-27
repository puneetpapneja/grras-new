import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/system';

const ScrollToTopButton = styled(Button)(({ theme, showButton }) => ({
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  zIndex: 1000,
  backgroundColor: 'black', // Black background
  color: theme.palette.common.white, // White arrow icon
  width: '50px', // Square button size
  height: '50px',
  fontSize: '30px', // Larger icon size
  display: showButton ? 'flex' : 'none', // Show button when scrolled down
  justifyContent: 'center', // Center the icon
  alignItems: 'center', // Center the icon
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)', // Soft shadow for floating effect
  transition: 'opacity 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease', // Smooth transitions for opacity and scaling
  cursor: 'pointer',
  animation: showButton ? 'fadeIn 1s ease, bounce 1s ease' : 'none', // Fade and bounce animation
  '&:hover': {
    backgroundColor: '#333', // Darker black when hovered
    transform: 'scale(1.1)', // Slightly grow on hover
    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)' // Enhance shadow on hover
  },
  '&:active': {
    transform: 'scale(0.95)', // Shrink on click
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.3)' // Reduce shadow on click
  },
  '@keyframes bounce': {
    '0%, 20%, 50%, 80%, 100%': {
      transform: 'translateY(0)'
    },
    '40%': {
      transform: 'translateY(-12px)' // Higher bounce
    },
    '60%': {
      transform: 'translateY(-6px)'
    }
  },
  '@keyframes fadeIn': {
    '0%': {
      opacity: 0,
      transform: 'translateY(40px)' // Start below screen
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)' // End in position
    }
  }
}));

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  // Show the button when scrolling down and hide when scrolling up
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true); // Show button when scrolled more than 300px
    } else {
      setShowButton(false); // Hide button when near top
    }
  };

  // Scroll to the top when button is clicked
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Attach scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <ScrollToTopButton showButton={showButton} onClick={handleScrollToTop}>
      ↑ {/* Up arrow icon */}
    </ScrollToTopButton>
  );
};

export default ScrollToTop;
