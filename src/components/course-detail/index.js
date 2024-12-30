import React, { useState, useRef } from 'react';
import { Box, Button, Typography, Tab, Tabs } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download'; // Import the download icon
import { styled } from '@mui/system';
import { COURSE_DETAILS } from 'utils/constants';
import RequestInfo from 'components/request-info';
import UniqueOffering from 'components/unique-offerings';
import PropTypes from 'prop-types';

const StyledButton = styled(Button)(() => ({
  backgroundColor: 'black',
  color: 'white',
  margin: '10px',
  flex: '1 1 auto',
  '&:hover': {
    backgroundColor: '#333'
  }
}));

const StyledTab = styled(Tab)(() => ({
  textAlign: 'left',
  color: 'white',
  '&.Mui-selected': {
    color: 'red',
    borderBottom: '2px solid red !important'
  }
}));

const CourseDetail = ({ slug }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const courseDetail = COURSE_DETAILS[slug];
  const buttonsRef = useRef(null); // Reference to track buttons' position

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box sx={{ backgroundColor: 'white', paddingBottom: '20px' }}>
      {/* Banner Image */}
      <Box
        sx={{
          width: '100%',
          height: { xs: '150px', md: '300px' },
          backgroundImage: 'url(https://picsum.photos/1200/300)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          marginBottom: '20px'
        }}
      />

      {/* Sticky Title */}
      <Box
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          backgroundColor: 'white',
          padding: '10px 0',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
          borderBottom: '1px solid #e0e0e0'
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          {courseDetail?.name}
        </Typography>
      </Box>

      {/* Top Buttons */}
      <Box
        ref={buttonsRef} // Attach the ref to track the buttons' position
        sx={{
          position: 'sticky',
          top: 40, // Buttons will stick below the title
          zIndex: 1000,
          backgroundColor: 'white',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
          gap: '10px',
          padding: '10px 0',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}
      >
        <StyledButton onClick={() => scrollToSection('overview')}>Overview</StyledButton>
        <StyledButton onClick={() => scrollToSection('request-info')}>
          Request More Info
        </StyledButton>
        <StyledButton onClick={() => scrollToSection('course-info')}>
          Course Information
        </StyledButton>
        <StyledButton onClick={() => scrollToSection('download-content')}>
          <DownloadIcon sx={{ marginRight: '8px' }} /> Download Content
        </StyledButton>
      </Box>

      {/* Course Sections */}
      <Box id="overview" sx={{ marginBottom: '40px' }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
          Overview
        </Typography>
        <Typography>{courseDetail?.about}</Typography>
      </Box>
      {/* Tabs */}
      <Box id="course-info" sx={{ marginBottom: '40px' }}>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          orientation="horizontal"
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            backgroundColor: 'black',
            color: 'white',
            borderRadius: '4px',
            marginBottom: '20px',
            '& .MuiTabs-indicator': {
              backgroundColor: 'red' // Change the indicator color to red
            }
          }}
        >
          <StyledTab label="Course Info" />
          <StyledTab label="Learning Path" />
          <StyledTab label="Student Feedback" />
          <StyledTab label="FAQ" />
        </Tabs>

        {/* Tab Panels */}
        {selectedTab === 0 && (
          <Box sx={{ padding: { xs: '10px', md: '20px' }, color: 'black' }}>
            <Typography variant="h6">Overview</Typography>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
          </Box>
        )}
        {selectedTab === 1 && (
          <Box sx={{ padding: { xs: '10px', md: '20px' }, color: 'black' }}>
            <Typography variant="h6">Request Info</Typography>
            <Typography>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
            </Typography>
          </Box>
        )}
        {selectedTab === 2 && (
          <Box sx={{ padding: { xs: '10px', md: '20px' }, color: 'black' }}>
            <Typography variant="h6">Course Info</Typography>
            <Typography>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
            </Typography>
          </Box>
        )}
        {selectedTab === 3 && (
          <Box sx={{ padding: { xs: '10px', md: '20px' }, color: 'black' }}>
            <Typography variant="h6">Download</Typography>
            <Typography>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.
            </Typography>
          </Box>
        )}
      </Box>
      <UniqueOffering />
      <Box id="request-info" sx={{ marginBottom: '10px' }}>
        <RequestInfo />
      </Box>
    </Box>
  );
};

CourseDetail.propTypes = {
  slug: PropTypes.string
};

export default CourseDetail;
