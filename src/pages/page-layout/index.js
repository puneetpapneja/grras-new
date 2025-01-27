import React, { useEffect } from 'react';
import Header from 'components/header';
import PropTypes from 'prop-types';
import { Outlet, useLocation } from 'react-router';
import { Grid2 } from '@mui/material';
import Footer from 'components/footer';
import BreadcrumbComponent from 'components/breadcrumb';
const PageLayout = ({ children }) => {
  const location = useLocation();
  useEffect(() => {}, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);
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
