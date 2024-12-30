import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Styled Components for Theme
const StyledCard = styled(Card)(() => ({
  backgroundColor: '#1c1c1c',
  color: '#fff',
  transition: 'transform 0.3s, box-shadow 0.3s',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  '&:hover': {
    transform: 'scale(1.05)'
    // boxShadow: "0 10px 20px rgba(255, 0, 0, 0.6)",
  }
}));

const StyledCardMedia = styled(CardMedia)({
  height: 140
});

const StyledCardContent = styled(CardContent)({
  textAlign: 'center',
  flexGrow: 1
});

const Courses = ({ courses = [], parent = 'Our' }) => {
  return (
    <Box sx={{ padding: 4, backgroundColor: 'white', minHeight: '100vh' }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ color: 'black', fontWeight: 'bold', marginBottom: 4 }}
      >
        Explore {parent} Courses
      </Typography>
      {/* Using Box for the grid-like layout */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          gap: 3
        }}
      >
        {courses.map((course, index) => (
          <Box
            key={index}
            sx={{
              width: { xs: '100%', sm: '48%', md: '23%' },
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Link to={course.link} style={{ textDecoration: 'none' }}>
              <StyledCard>
                <StyledCardMedia image={course.image} title={course.title} />
                <StyledCardContent>
                  <Typography variant="h6">{course.title}</Typography>
                  <Typography variant="body2" color="rgba(255,255,255,0.7)">
                    {course.description}
                  </Typography>
                </StyledCardContent>
              </StyledCard>
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

Courses.propTypes = {
  parent: PropTypes.string,
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      description: PropTypes.string
    })
  )
};

export default Courses;
