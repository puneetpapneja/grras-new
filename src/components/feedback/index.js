import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import Rating from '@mui/material/Rating';

// Styled component for FeedbackBox
const FeedbackBox = styled(Box)(({ theme }) => ({
  backgroundColor: '#f5f5f5',
  color: '#000',
  padding: theme.spacing(2),
  textAlign: 'left',
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  width: '300px', // Fixed width
  height: '200px', // Fixed height
  border: '1px solid #e0e0e0',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start', // Ensure content is at the top
  position: 'relative'
}));

const Feedback = ({ feedbacks }) => {
  const [expanded, setExpanded] = useState({}); // To track expanded state for each feedback

  const toggleShowMore = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      alignItems="flex-start"
      gap={2}
      p={2}
    >
      {feedbacks.map((feedback, index) => {
        const isExpanded = expanded[index] || false;
        const content = feedback.feedback;
        const maxContentLength = 200; // Limit for truncation
        const showMore = content.length > maxContentLength;

        return (
          <FeedbackBox key={index}>
            <Typography variant="h6" sx={{ lineHeight: '1.5' }}>
              {feedback.name}
            </Typography>
            {/* Render the star rating on a new line below the name */}
            <Rating value={feedback.start} readOnly size="small" sx={{ mt: 1 }} />
            {/* Render the feedback text below */}
            <Typography
              variant="body2"
              mt={1}
              sx={{
                overflow: isExpanded ? 'visible' : 'hidden',
                lineHeight: '1.5'
              }}
            >
              {isExpanded
                ? content
                : `${content.slice(0, maxContentLength)}${showMore ? '...' : ''}`}
            </Typography>
            {showMore && (
              <Button
                variant="text"
                size="small"
                onClick={() => toggleShowMore(index)}
                sx={{ alignSelf: 'flex-end', marginTop: 1 }}
              >
                {isExpanded ? 'Show Less' : 'Show More'}
              </Button>
            )}
          </FeedbackBox>
        );
      })}
    </Box>
  );
};

Feedback.propTypes = {
  feedbacks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      start: PropTypes.number.isRequired,
      feedback: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Feedback;
