import React from 'react';
import { Box, Typography, List, ListItem } from '@mui/material';
import PropTypes from 'prop-types';

const KeyHighlights = ({ items }) => {
  return (
    <Box sx={{ marginBottom: { xs: '10px', md: '20px' } }}>
      {/* Section Title */}
      <Typography
        variant="h6"
        sx={{
          fontWeight: 'bold',
          fontSize: { xs: '16px', md: '20px' },
          marginBottom: { xs: '8px', md: '10px' }
        }}
      >
        Key Highlights:
      </Typography>

      {/* Highlights List */}
      <List sx={{ paddingLeft: '16px' }}>
        {items.map((item, index) => (
          <ListItem
            key={index}
            sx={{
              display: 'list-item', // Ensures the prefix is displayed
              listStyleType: 'none', // Remove default list style
              padding: 0,
              marginBottom: { xs: '4px', md: '6px' }
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '14px', md: '16px' },
                lineHeight: 1.2 // Controlled line height
              }}
            >
              - {item}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

KeyHighlights.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default KeyHighlights;
