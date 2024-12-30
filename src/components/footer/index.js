import React from 'react';
import { Box, Container, Grid2, Typography, Link, Divider } from '@mui/material';
import SocialMedia from 'components/social-media';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'black',
        color: 'white',
        padding: '40px 0',
        borderTop: '4px solid #f44336'
      }}
    >
      <Container maxWidth="lg">
        <Grid2 container spacing={4}>
          {/* Social Links Section */}
          <Grid2 item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              sx={{ marginBottom: 2, fontWeight: 'bold', textTransform: 'uppercase' }}
            >
              Follow Us
            </Typography>
            <SocialMedia />
          </Grid2>

          {/* Quick Links Section */}
          <Grid2 item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              sx={{ marginBottom: 2, fontWeight: 'bold', textTransform: 'uppercase' }}
            >
              Learning Options
            </Typography>
            <Box>
              <Link
                href="#"
                color="inherit"
                sx={{ display: 'block', marginBottom: 1, '&:hover': { color: '#f44336' } }}
              >
                Online Courses
              </Link>
              <Link
                href="#"
                color="inherit"
                sx={{ display: 'block', marginBottom: 1, '&:hover': { color: '#f44336' } }}
              >
                Bootcamps
              </Link>
              <Link
                href="#"
                color="inherit"
                sx={{ display: 'block', marginBottom: 1, '&:hover': { color: '#f44336' } }}
              >
                Certifications
              </Link>
            </Box>
          </Grid2>

          {/* Top Courses Section */}
          <Grid2 item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              sx={{ marginBottom: 2, fontWeight: 'bold', textTransform: 'uppercase' }}
            >
              Top Courses
            </Typography>
            <Box>
              <Link
                href="#"
                color="inherit"
                sx={{ display: 'block', marginBottom: 1, '&:hover': { color: '#f44336' } }}
              >
                Full Stack Web Development
              </Link>
              <Link
                href="#"
                color="inherit"
                sx={{ display: 'block', marginBottom: 1, '&:hover': { color: '#f44336' } }}
              >
                Data Science
              </Link>
              <Link
                href="#"
                color="inherit"
                sx={{ display: 'block', marginBottom: 1, '&:hover': { color: '#f44336' } }}
              >
                Machine Learning
              </Link>
              <Link
                href="#"
                color="inherit"
                sx={{ display: 'block', marginBottom: 1, '&:hover': { color: '#f44336' } }}
              >
                UI/UX Design
              </Link>
            </Box>
          </Grid2>
          {/* Top Courses Section */}

          <Grid2 item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              sx={{ marginBottom: 2, fontWeight: 'bold', textTransform: 'uppercase' }}
            >
              Our Location
            </Typography>
            <Box sx={{ overflow: 'hidden', borderRadius: '8px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.2487101153915!2d75.74307307468452!3d26.927328776638458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5d0e5555555%3A0xc45671d79cdb76ba!2sGrras%20Solution%20Pvt%20Ltd%20-%20Advanced%20IT%20Training%20%26%20Certification%20Center!5e0!3m2!1sen!2sin!4v1735228993622!5m2!1sen!2sin"
                width="400"
                height="300"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </Box>
          </Grid2>
        </Grid2>

        {/* Footer Bottom */}
        <Divider sx={{ margin: '20px 0', backgroundColor: '#f44336' }} />
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: 'white' }}>
            © {new Date().getFullYear()} Your Company Name. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
