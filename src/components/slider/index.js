import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

const imageMarks = [
  { value: 0, src: '/assets/images/slider-1.png', text: 'Empowering Minds, Shaping Futures.' },
  { value: 25, src: '/assets/images/slider-2.png', text: 'Learn Today, Lead Tomorrow.' }
];

const Slider = () => {
  const [value, setValue] = useState(0);

  const handleAutoSlide = () => {
    setValue((prevValue) => {
      const nextIndex =
        (imageMarks.findIndex((mark) => mark.value === prevValue) + 1) % imageMarks.length;
      return imageMarks[nextIndex].value;
    });
  };

  useEffect(() => {
    const interval = setInterval(handleAutoSlide, 3000); // Change every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const currentImageData = imageMarks.find((mark) => mark.value === value);

  return (
    <Box
      sx={{
        width: '100%',
        margin: 'auto',
        textAlign: 'center',
        padding: '0px 0',
        background: 'linear-gradient(145deg, #e0e0e0, #ffffff)',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        borderRadius: '15px'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          marginBottom: 3,
          borderRadius: '10px',
          overflow: 'hidden',
          height: { xs: '300px', sm: '350px', md: '400px' },
          width: '100%',
          background: '#f5f5f5'
        }}
      >
        {currentImageData ? (
          <>
            <img
              src={currentImageData.src}
              alt="Selected"
              style={{
                height: '100%',
                width: '100%',
                objectFit: 'cover',
                transition: 'opacity 1s ease-in-out'
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: { xs: '5%', sm: '10%' },
                transform: 'translateY(-50%)',
                color: 'white',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                padding: { xs: '5px 10px', sm: '10px 20px' },
                borderRadius: '10px'
              }}
            >
              <Typography
                variant="h5"
                component="div"
                sx={{ fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' } }}
              >
                {currentImageData.text}
              </Typography>
            </Box>
          </>
        ) : (
          <Typography variant="body1" color="textSecondary">
            Loading...
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default Slider;
