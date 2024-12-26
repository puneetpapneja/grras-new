import React, { useState, useEffect } from 'react';
import { Typography, Box, Card, CardContent, Button, Grid, useTheme, useMediaQuery } from '@mui/material';

const testimonials = [
  {
    name: 'John Doe',
    feedback: 'This platform is amazing! The instructors were knowledgeable, and the learning environment was perfect.',
    role: 'Software Engineer',
  },
  {
    name: 'Jane Smith',
    feedback: 'I had a great experience! The content was engaging, and I gained valuable skills. The platform is very user-friendly, and I loved the community aspect.',
    role: 'Project Manager',
  },
  {
    name: 'Michael Johnson',
    feedback: 'Highly recommend this training center. It has helped me enhance my career opportunities. The environment is welcoming and very professional.',
    role: 'Data Analyst',
  },
  {
    name: 'Alice Brown',
    feedback: 'The best training platform I’ve used! The content was easy to follow, and I feel more confident in my career.',
    role: 'UX Designer',
  },
  {
    name: 'David Lee',
    feedback: 'Excellent content and support from instructors. I highly recommend this platform for anyone looking to upskill.',
    role: 'Product Manager',
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [expandedIndexes, setExpandedIndexes] = useState([]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const testimonialsToShow = isMobile ? 1 : 3; // Show 1 testimonial on mobile, 3 on larger screens
  const totalGroups = Math.ceil(testimonials.length / testimonialsToShow); // Total groups of testimonials

  // Get the testimonials for the current group
  const displayedTestimonials = testimonials.slice(
    index * testimonialsToShow,
    index * testimonialsToShow + testimonialsToShow
  );

  const handleChangeIndex = (newIndex) => {
    setIndex(newIndex);
  };

  const toggleShowMore = (idx) => {
    setExpandedIndexes((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % totalGroups);
    }, 5000); // Auto-slide every 5 seconds
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
        Our Learners Speak
      </Typography>

      {/* Grid layout for proper alignment */}
      <Grid container spacing={4} justifyContent="center">
        {displayedTestimonials.map((testimonial, idx) => {
          const isExpanded = expandedIndexes.includes(idx);
          const feedback = testimonial.feedback;

          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={idx}
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Card
                sx={{
                  width: '100%',
                  maxWidth: 350,
                  boxShadow: 6,
                  padding: 3,
                  textAlign: 'center',
                  backgroundColor: 'white',
                  borderRadius: 3,
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 10,
                  },
                }}
              >
                <CardContent>
                  <Typography variant="body1" gutterBottom>
                    {feedback.length > 120 && !isExpanded
                      ? `${feedback.substring(0, 120)}...`
                      : feedback}
                  </Typography>

                  {feedback.length > 120 && (
                    <Button
                      onClick={() => toggleShowMore(idx)}
                      size="small"
                      sx={{
                        textTransform: 'none',
                        marginTop: 1,
                        color: 'blue',
                      }}
                    >
                      {isExpanded ? 'Show Less' : 'Show More'}
                    </Button>
                  )}

                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 'bold', marginTop: 2, color: 'black' }}
                  >
                    {testimonial.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {testimonial.role}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      {/* Pagination dots */}
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>
        {Array.from({ length: totalGroups }).map((_, i) => (
          <Box
            key={i}
            onClick={() => handleChangeIndex(i)}
            sx={{
              width: 14,
              height: 14,
              borderRadius: '50%',
              backgroundColor: index === i ? '#f44336' : 'gray',
              margin: 1,
              cursor: 'pointer',
              transition: 'background-color 0.3s',
              '&:hover': {
                backgroundColor: '#f44336',
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Testimonials;
