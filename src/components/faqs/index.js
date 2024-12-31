import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Collapse, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

// Styled component for FAQBox
const FAQBox = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',
  color: '#000',
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  width: '100%', // Full width
  margin: 'auto',
  marginBottom: theme.spacing(3), // Add margin between FAQ items
  transition: 'all 0.3s ease', // Smooth transition for hover effect
  '&:hover': {
    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.15)' // Hover effect to lift the FAQ box
  }
}));

const FAQHeader = styled(Box)(({ theme, expanded }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(1, 0),
  cursor: 'pointer',
  backgroundColor: expanded ? '#f44336' : '#f9f9f9',
  color: expanded ? '#fff' : '#000',
  borderRadius: theme.shape.borderRadius,
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: expanded ? '#d32f2f' : '#e0e0e0' // Hover effect for background color
  }
}));

const FAQ = ({ faqs }) => {
  const [expandedIndex, setExpandedIndex] = useState(null); // Track expanded question

  const handleClick = (index) => {
    // Toggle the answer visibility (only one can be expanded at a time)
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" p={2}>
      {faqs.map((faq, index) => (
        <FAQBox key={index}>
          <FAQHeader expanded={expandedIndex === index} onClick={() => handleClick(index)}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              {faq.question}
            </Typography>
            <IconButton size="small">
              {expandedIndex === index ? (
                <ExpandLessIcon sx={{ color: expandedIndex === index ? '#fff' : '#000' }} />
              ) : (
                <ExpandMoreIcon sx={{ color: expandedIndex === index ? '#fff' : '#000' }} />
              )}
            </IconButton>
          </FAQHeader>
          {/* Collapse the answer */}
          <Collapse in={expandedIndex === index}>
            <Box p={2}>
              <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                {faq.answer}
              </Typography>
            </Box>
          </Collapse>
        </FAQBox>
      ))}
    </Box>
  );
};

FAQ.propTypes = {
  faqs: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired
    })
  ).isRequired
};

export default FAQ;
