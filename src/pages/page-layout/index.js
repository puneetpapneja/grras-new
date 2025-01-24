import React, { useEffect } from 'react';
import Header from 'components/header';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router';
import { Grid2 } from '@mui/material';
import Footer from 'components/footer';
import BreadcrumbComponent from 'components/breadcrumb';
import { useLocation } from 'react-router-dom';

const PageLayout = ({ children }) => {
  useEffect(() => {}, []);
  return (
    <Grid2 className="full-height">
      <Header />
      <BreadcrumbComponent />
      {children ? children : <Outlet />}
      <Footer />
    </Grid2>
  );
};

PageLayout.propTypes = {
  children: PropTypes.element
};

export default PageLayout;
