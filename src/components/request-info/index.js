import React, { useState } from 'react';
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button,
  Grid2,
  Card,
  CardContent,
  CardHeader,
  Divider,
  FormHelperText
} from '@mui/material';
import { styled } from '@mui/system';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

// Custom Styles
const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: theme.spacing(2)
}));

const StyledToggleButton = styled(ToggleButton)(() => ({
  '&.Mui-selected': {
    backgroundColor: '#000', // Black for selected tab
    color: '#fff',
    '&:hover': {
      backgroundColor: '#333' // Darker black on hover
    }
  },
  '&:not(.Mui-selected)': {
    borderColor: '#000', // Black border for unselected tabs
    color: '#000'
  }
}));

const ContactButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  textTransform: 'none',
  fontWeight: 500,
  borderRadius: '20px',
  padding: '0.5rem 1.5rem',
  borderColor: '#000',
  color: '#000',
  '&:hover': {
    backgroundColor: '#f2f2f2'
  }
}));

const RequestInfo = () => {
  const [isCorporate, setIsCorporate] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    companyEmail: '',
    companyPhone: '',
    industry: '',
    message: '' // Added message field
  });
  const [errors, setErrors] = useState({});

  const handleSwitchChange = (_event, newSelection) => {
    if (newSelection !== null) {
      setIsCorporate(newSelection === 'Corporate');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone is required';
    if (isCorporate) {
      if (!formData.companyName) newErrors.companyName = 'Company Name is required';
      if (!formData.companyEmail) newErrors.companyEmail = 'Company Email is required';
      if (!formData.companyPhone) newErrors.companyPhone = 'Company Phone is required';
      if (!formData.industry) newErrors.industry = 'Industry is required';
    }
    if (!formData.message) newErrors.message = 'Message is required'; // Message validation for both types

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted with data: ', formData);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#fff',
        padding: 2
      }}
    >
      <Card sx={{ width: '100%', maxWidth: 900, borderRadius: 4 }}>
        <CardHeader
          title="Request More Information"
          titleTypographyProps={{
            variant: 'h4',
            color: 'black',
            textAlign: 'center',
            fontWeight: 600
          }}
          sx={{
            padding: '1.5rem 0'
          }}
        />
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '1rem',
            marginBottom: '1.5rem'
          }}
        >
          <ContactButton
            variant="outlined"
            href="mailto:your-email@example.com"
            startIcon={<EmailIcon />}
          >
            Email
          </ContactButton>
          <ContactButton
            variant="outlined"
            href="https://wa.me/1234567890"
            target="_blank"
            startIcon={<WhatsAppIcon sx={{ color: '#25D366' }} />}
          >
            WhatsApp
          </ContactButton>
        </Box>
        <Divider />

        <CardContent sx={{ padding: '2rem' }}>
          <StyledToggleButtonGroup
            value={isCorporate ? 'Corporate' : 'Individual'}
            exclusive
            onChange={handleSwitchChange}
          >
            <StyledToggleButton value="Individual">Individual</StyledToggleButton>
            <StyledToggleButton value="Corporate">Corporate</StyledToggleButton>
          </StyledToggleButtonGroup>

          <form onSubmit={handleSubmit}>
            <Grid2 container spacing={3}>
              {/* Common Fields */}
              <Grid2 item size={{ xs: 12, md: 4 }}>
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  error={!!errors.name}
                  helperText={errors.name}
                />
              </Grid2>
              <Grid2 item size={{ xs: 12, md: 4 }}>
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  error={!!errors.email}
                  helperText={errors.email}
                />
              </Grid2>
              <Grid2 item size={{ xs: 12, md: 4 }}>
                <TextField
                  label="Phone"
                  variant="outlined"
                  fullWidth
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  error={!!errors.phone}
                  helperText={errors.phone}
                />
              </Grid2>

              {/* Corporate Fields */}
              {isCorporate && (
                <>
                  <Grid2 item size={{ xs: 12, md: 4 }}>
                    <TextField
                      label="Company Name"
                      variant="outlined"
                      fullWidth
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      error={!!errors.companyName}
                      helperText={errors.companyName}
                    />
                  </Grid2>
                  <Grid2 item size={{ xs: 12, md: 4 }}>
                    <TextField
                      label="Company Email"
                      variant="outlined"
                      fullWidth
                      name="companyEmail"
                      value={formData.companyEmail}
                      onChange={handleInputChange}
                      error={!!errors.companyEmail}
                      helperText={errors.companyEmail}
                    />
                  </Grid2>
                  <Grid2 item size={{ xs: 12, md: 4 }}>
                    <TextField
                      label="Company Phone"
                      variant="outlined"
                      fullWidth
                      name="companyPhone"
                      value={formData.companyPhone}
                      onChange={handleInputChange}
                      error={!!errors.companyPhone}
                      helperText={errors.companyPhone}
                    />
                  </Grid2>
                  <Grid2 item size={{ xs: 12, md: 4 }}>
                    <FormControl fullWidth variant="outlined" error={!!errors.industry}>
                      <InputLabel>Industry</InputLabel>
                      <Select
                        label="Industry"
                        name="industry"
                        value={formData.industry}
                        onChange={handleInputChange}
                      >
                        <MenuItem value="Tech">Tech</MenuItem>
                        <MenuItem value="Finance">Finance</MenuItem>
                        <MenuItem value="Healthcare">Healthcare</MenuItem>
                        <MenuItem value="Retail">Retail</MenuItem>
                      </Select>
                      <FormHelperText>{errors.industry}</FormHelperText>
                    </FormControl>
                  </Grid2>
                </>
              )}

              <Grid2 item size={{ xs: 12, md: isCorporate ? 8 : 12 }}>
                <TextField
                  label="Message"
                  variant="outlined"
                  fullWidth
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  error={!!errors.message}
                  helperText={errors.message}
                  multiline
                  rows={4}
                />
              </Grid2>

              {/* Submit Button */}
              <Grid2 item size={{ xs: 12, md: 12 }} textAlign="center">
                <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    backgroundColor: '#000',
                    color: '#fff',
                    padding: '0.75rem 2rem',
                    borderRadius: '20px',
                    '&:hover': {
                      backgroundColor: '#333'
                    }
                  }}
                >
                  Submit
                </Button>
              </Grid2>
            </Grid2>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default RequestInfo;
