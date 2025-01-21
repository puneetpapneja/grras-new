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
  { image: 'https://picsum.photos/1200/1200', title: 'Top Employer 2023' },
  { image: 'https://picsum.photos/1200/1200', title: 'Innovative Company of the Year' },
  { image: 'https://picsum.photos/1200/1200', title: 'Best Workplace Culture Award' },
  { image: 'https://picsum.photos/1200/1200', title: 'Excellence in Service Award' },
  { image: 'https://picsum.photos/1200/1200', title: 'Leader in Industry Standards' },
  { image: 'https://picsum.photos/1200/1200', title: 'Customer Satisfaction Excellence' },
  { image: 'https://picsum.photos/1200/1200', title: 'Employee Choice Award' }
];

const Awards = () => {
  const [index, setIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const awardsPerPage = isMobile ? 1 : 4; // Show 1 award on mobile, 4 on larger screens
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
          flexWrap: 'nowrap',
          justifyContent: 'center',
          overflow: 'hidden'
        }}
      >
        {displayedAwards.map((award, idx) => (
          <Box
            key={idx}
            sx={{
              flex: '1 1 100%', // Ensures one card occupies the full width in mobile view
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '16px'
            }}
          >
            <Card
              sx={{
                boxShadow: 6,
                textAlign: 'center',
                width: '100%',
                maxWidth: isMobile ? '90%' : 250, // Adjust width based on screen size
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
                  height: 140,
                  objectFit: 'cover',
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
                    textOverflow: 'ellipsis'
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
