import { Box } from '@mui/material';
import CourseDetail from 'components/course-detail';
import React from 'react';
import { useParams } from 'react-router-dom';

const Course = () => {
  const { slug } = useParams();
  return (
    <Box sx={{ padding: 4, backgroundColor: 'white', minHeight: '100vh' }}>
      <CourseDetail slug={slug} />
    </Box>
  );
};

export default Course;
