import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { sanitizeHTML } from 'utils';

// Styled component for the step boxes
const StepBox = styled(Box)(({ theme, clickable }) => ({
  backgroundColor: '#ffffff',
  color: '#000',
  padding: theme.spacing(2),
  textAlign: 'center',
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  width: '300px', // Box width
  border: '1px solid #e0e0e0',
  position: 'relative',
  zIndex: 1, // Ensure it appears on top
  cursor: clickable ? 'pointer' : 'default', // Add pointer cursor for clickable steps
  transition: 'transform 0.2s ease', // Add a hover effect
  '&:hover': {
    transform: clickable ? 'scale(1.05)' : 'none' // Scale step box if clickable
  }
}));

// Vertical line in the center
const VerticalLine = styled(Box)(() => ({
  position: 'absolute',
  width: '4px',
  backgroundColor: '#000',
  top: 0,
  bottom: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 0 // Ensure it appears behind
}));

// Connector line linking step box to vertical line
const ConnectorLine = styled(Box)(({ side }) => ({
  position: 'absolute',
  height: '2px',
  backgroundColor: '#000',
  top: '50%',
  transform: 'translateY(-50%)',
  width: 'calc(50% - 100px)', // Adjust distance to connect step box
  [side === 'left' ? 'right' : 'left']: '50%', // Extend to/from the vertical line
  zIndex: 0 // Place below the step box
}));

const LearningPath = ({ steps }) => {
  const handleStepClick = (step) => {
    if (step.clickable) {
      alert(`You clicked on: ${step.title}`);
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      position="relative"
      width="100%"
      minHeight="100vh"
      pt={4}
    >
      {/* Vertical line */}
      <VerticalLine />
      {steps.map((step, index) => (
        <Box
          key={index}
          display="flex"
          flexDirection={index % 2 === 0 ? 'row' : 'row-reverse'} // Alternates sides
          alignItems="center"
          position="relative"
          mb={4}
          width="100%"
        >
          {/* Connector line */}
          <ConnectorLine side={index % 2 === 0 ? 'left' : 'right'} />
          {/* Step box */}
          <StepBox clickable={step.clickable} onClick={() => handleStepClick(step)}>
            <Typography variant="h6">{step.title}</Typography>
            {step.description && (
              <Typography
                variant="body2"
                mt={1}
                dangerouslySetInnerHTML={{ __html: sanitizeHTML(step.description) }}
              ></Typography>
            )}
          </StepBox>
        </Box>
      ))}
    </Box>
  );
};

LearningPath.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      clickable: PropTypes.bool // New clickable flag
    })
  ).isRequired
};

export default LearningPath;
