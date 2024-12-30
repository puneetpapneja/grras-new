import React, { useState, useEffect } from 'react';
import {
  Typography,
  Box,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
  CardMedia
} from '@mui/material';

const awards = [
  { image: 'https://picsum.photos/1200/1200', title: 'Great Place to Work Certified' },
  { image: 'https://picsum.photos/1200/1200', title: 'Great Place to Work Certified' },
  { image: 'https://picsum.photos/1200/1200', title: 'Great Place to Work Certified' },
  { image: 'https://picsum.photos/1200/1200', title: 'Great Place to Work Certified' },
  { image: 'https://picsum.photos/1200/1200', title: 'Great Place to Work Certified' },
  { image: 'https://picsum.photos/1200/1200', title: 'Great Place to Work Certified' },
  { image: 'https://picsum.photos/1200/1200', title: 'Great Place to Work Certified' },
  { image: 'https://picsum.photos/1200/1200', title: 'Great Place to Work Certified' }
];

const Awards = () => {
  const [index, setIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const awardsPerPage = isMobile ? 2 : 4; // Show 2 awards on mobile, 4 on larger screens
  const totalGroups = Math.ceil(awards.length / awardsPerPage);

  const displayedAwards = awards.slice(
    index * awardsPerPage,
    index * awardsPerPage + awardsPerPage
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % totalGroups);
    }, 4000); // Change awards every 4 seconds
    return () => clearInterval(timer); // Cleanup interval on unmount
  }, [totalGroups]);

  return (
    <Box sx={{ padding: 4, maxWidth: '1200px', margin: 'auto' }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: 'bold', marginBottom: 4, color: 'black' }}
      >
        Our Awards
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between' // Adjusted to ensure the cards are spaced correctly
        }}
      >
        {displayedAwards.map((award, idx) => (
          <Box
            key={idx}
            sx={{
              flex: '1 1 calc(25% - 16px)', // Ensures 4 cards in a row on larger screens
              marginBottom: '16px', // Ensures proper spacing for rows
              boxSizing: 'border-box' // Prevents width issues by including padding and margin
            }}
          >
            <Card
              sx={{
                boxShadow: 6,
                textAlign: 'center',
                width: '100%', // Ensures the card occupies full width in its grid
                maxWidth: 250, // Limit card width on larger screens
                borderRadius: 3,
                padding: 2,
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 10
                }
              }}
            >
              <CardMedia
                component="img"
                image={award.image}
                alt={award.title}
                sx={{
                  height: 140, // Fixed height to keep aspect ratio consistent
                  objectFit: 'cover', // Ensures the image fully occupies the space
                  marginBottom: 2
                }}
              />
              <CardContent sx={{ padding: 1 }}>
                <Typography
                  variant="h7"
                  sx={{
                    color: 'black',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis' // Ensures the text does not wrap
                  }}
                >
                  {award.title}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>

      {/* Pagination dots */}
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>
        {Array.from({ length: totalGroups }).map((_, i) => (
          <Box
            key={i}
            onClick={() => setIndex(i)}
            sx={{
              width: 14,
              height: 14,
              borderRadius: '50%',
              backgroundColor: index === i ? '#f44336' : 'gray',
              margin: 1,
              cursor: 'pointer',
              transition: 'background-color 0.3s',
              '&:hover': {
                backgroundColor: '#f44336'
              }
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Awards;
