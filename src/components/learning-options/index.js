import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid2, Box, Button } from '@mui/material';

const data = [
  {
    title: 'Classroom Training',
    description: 'Traditional, instructor-led learning offered in popular global destinations.',
    image: 'assets/images/classroom.jpg'
  },
  {
    title: 'Fly-Me-A-Trainer (FMAT)',
    description:
      'Flexible on-site learning for larger groups. Fly an expert instructor directly to your location, anywhere in the world.',
    image: 'assets/images/classroom.jpg'
  },
  {
    title: 'Live Online Classes',
    description:
      'Flexible virtual learning with expert instructors from the comfort of your own space.',
    image: 'assets/images/classroom.jpg'
  },
  {
    title: 'Flexi',
    description:
      'Self-paced learning with edited lectures, courseware, hands-on labs, and optional instructor-led doubt clearing sessions.',
    image: 'assets/images/classroom.jpg'
  }
];

const LearningOptions = () => {
  return (
    <Box sx={{ padding: 4 }}>
      {/* Centered Heading */}
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          marginBottom: 4,
          fontWeight: 'bold',
          color: 'black'
        }}
      >
        Learning Options for You
      </Typography>

      {/* Responsive Grid2 */}
      <Grid2 container spacing={3} justifyContent="center">
        {data.map((item, index) => (
          <Grid2
            item
            key={index}
            xs={12}
            sm={6}
            md={4}
            lg={3} // Adjusts the number of cards per row based on screen size
          >
            <Card
              sx={{
                width: 280, // Fixed width
                height: 350, // Fixed height
                textAlign: 'center',
                boxShadow: 3,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Hover animation
                '&:hover': {
                  transform: 'scale(1.05)', // Slight scaling effect
                  boxShadow: 6 // Elevated shadow
                }
              }}
            >
              <CardMedia component="img" height="250" image={item.image} alt={item.title} />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>

      {/* Centered Button */}
      <Box sx={{ textAlign: 'center', marginTop: 4 }}>
        <Button variant="contained" sx={{ borderRadius: 20, backgroundColor: 'black' }}>
          Learn More
        </Button>
      </Box>
    </Box>
  );
};

export default LearningOptions;
