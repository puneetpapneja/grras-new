import React, { useState, useEffect } from 'react';
import { Box, Card, CardContent, Typography, useMediaQuery, Skeleton } from '@mui/material';
import { EmojiObjects, AccessAlarm, Shield, EmojiEvents } from '@mui/icons-material';
import { useSpring, animated } from 'react-spring';

const cardData = [
  {
    icon: <EmojiObjects style={{ fontSize: 40, color: '#FF0000' }} />,
    title: 'Customized Training Solutions',
    description: 'Tailored training programs designed to meet specific organizational needs.',
  },
  {
    icon: <AccessAlarm style={{ fontSize: 40, color: '#FF0000' }} />,
    title: 'Internship Training',
    description:
      'Certified internship training offering practical experience, industry knowledge, and skill development.',
  },
  {
    icon: <Shield style={{ fontSize: 40, color: '#FF0000' }} />,
    title: 'Authorized Red Hat Partner',
    description:
      'Official Red Hat partner providing certified training and expertise.',
  },
  {
    icon: <EmojiEvents style={{ fontSize: 40, color: '#FF0000' }} />,
    title: 'Industry-Recognized Certifications',
    description:
      'Prepare for certifications that enhance career opportunities and validate skills.',
  },
];

const CardComponent = () => {
  const matches = useMediaQuery('(max-width:900px)'); // Responsive design
  const springProps = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { tension: 150, friction: 20 },
  });

  // Loading state
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Simulate loading for 2 seconds
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box padding={2}>
      {/* Heading */}
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        style={{ fontWeight: 'bold', marginBottom: 16 }}
      >
        Grrass Unique Offerings
      </Typography>

      {/* Cards or Skeleton Loaders */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap={2}
        flexWrap={matches ? 'wrap' : 'nowrap'} // Wrap for smaller screens
      >
        {isLoading
          ? Array.from({ length: 4 }).map((_, index) => (
              <Card
                key={index}
                style={{
                  width: 250, // Matches the card dimensions
                  height: 180,
                  textAlign: 'center',
                  padding: '16px',
                }}
              >
                <CardContent>
                  <Skeleton variant="circular" width={40} height={40} style={{ margin: 'auto' }} />
                  <Skeleton
                    variant="text"
                    width="80%"
                    height={24}
                    style={{ margin: '16px auto' }}
                  />
                  <Skeleton variant="text" width="90%" height={16} />
                  <Skeleton variant="text" width="90%" height={16} />
                </CardContent>
              </Card>
            ))
          : cardData.map((card, index) => (
              <animated.div key={index} style={{ ...springProps, willChange: 'transform, opacity' }}>
                <Card
                  style={{
                    width: 250, // Card dimensions
                    height: 180,
                    textAlign: 'center',
                    padding: '16px',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '0px 6px 15px rgba(0, 0, 0, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0px 4px 10px rgba(0, 0, 0, 0.2)';
                  }}
                >
                  <CardContent>
                    {card.icon}
                    <Typography variant="h6" gutterBottom style={{ marginTop: 8 }}>
                      {card.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {card.description}
                    </Typography>
                  </CardContent>
                </Card>
              </animated.div>
            ))}
      </Box>
    </Box>
  );
};

export default CardComponent;
