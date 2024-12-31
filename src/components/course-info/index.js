import React from 'react';
import { Box, Typography, List, ListItem } from '@mui/material';
import PropTypes from 'prop-types';

const CourseInfo = ({ data }) => {
  return (
    <Box sx={{ marginBottom: { xs: '10px', md: '20px' } }}>
      {data.map((item, index) => (
        <React.Fragment key={index}>
          {/* Heading */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              fontSize: { xs: '16px', md: '20px' }
            }}
          >
            {item.heading}
          </Typography>

          {/* Content List */}
          <List sx={{ marginBottom: { xs: '10px', md: '15px' }, paddingLeft: '16px' }}>
            {item.content.map((contentItem, contentIndex) => (
              <ListItem
                key={contentIndex}
                sx={{
                  display: 'list-item', // Ensures the bullet prefix is displayed
                  listStyleType: 'disc', // Uses a bullet point as the prefix
                  padding: 0,
                  marginBottom: { xs: '2px', md: '4px' } // Reduced space between items
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '14px', md: '16px' },
                    lineHeight: 1.2 // Reduced line height
                  }}
                >
                  {contentItem}
                </Typography>
              </ListItem>
            ))}
          </List>
        </React.Fragment>
      ))}
    </Box>
  );
};

CourseInfo.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string.isRequired,
      content: PropTypes.arrayOf(PropTypes.string).isRequired
    })
  ).isRequired
};

export default CourseInfo;
