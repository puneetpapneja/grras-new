// import { Column, FlexGrid, Row } from '@carbon/react';
import { Box, Button, Container } from '@mui/material';
import React from 'react';

const HomePage = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url("https://picsum.photos/1200/1200")', // Replace with your image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexGrow: 1
        }}
      >
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            padding: '10px 20px',
            fontSize: '18px',
            background: 'rgba(0, 0, 0, 0.7)',
            '&:hover': {
              background: 'rgba(0, 0, 0, 0.9)'
            }
          }}
        >
          Get Surprise
        </Button>
      </Container>
    </Box>
  );
};

export default HomePage;
