import React, { useState } from 'react';
import { Dialog, DialogContent, DialogActions, Typography, Button, Box } from '@mui/material';

const BannerModal = () => {
  const [isBannerVisible, setBannerVisible] = useState(true); // Always visible on reload

  const handleCloseBanner = () => {
    setBannerVisible(false); // Close the modal on button click
  };

  return (
    <Dialog
      open={isBannerVisible}
      onClose={handleCloseBanner}
      aria-labelledby="banner-title"
      aria-describedby="banner-description"
    >
      <DialogContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          padding: '24px'
        }}
      >
        <Typography id="banner-title" variant="h6" gutterBottom>
          Welcome to Our Website!
        </Typography>
        <Typography id="banner-description" variant="body2" sx={{ marginBottom: 2 }}>
          We’re glad you’re here. Enjoy your visit!
        </Typography>
      </DialogContent>
      <DialogActions>
        <Box sx={{ margin: 'auto' }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleCloseBanner}
            sx={{ textTransform: 'none' }}
          >
            Close
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default BannerModal;
