import React, { useEffect } from 'react';
import Header from 'components/header';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router';
import { Grid2 } from '@mui/material';

const PageLayout = ({ children }) => {
  useEffect(() => {}, []);

  return (
    <Grid2 className="full-height">
      <Header />
      {children ? children : <Outlet />}
    </Grid2>
  );
};

PageLayout.propTypes = {
  children: PropTypes.element
};

export default PageLayout;
