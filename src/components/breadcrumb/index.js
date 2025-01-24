import React from 'react';
import { useLocation, useParams, matchPath, Link } from 'react-router-dom';
import { Box, Breadcrumbs, Typography } from '@mui/material';
import { routes } from 'routes';
import HomeIcon from '@mui/icons-material/Home'; // Import the Home icon

const Breadcrumb = () => {
  const location = useLocation();
  const params = useParams();

  // Skip breadcrumb for home page
  if (location.pathname === '/') {
    return null;
  }

  const generateBreadcrumbs = () => {
    const pathSegments = location.pathname.split('/').filter((segment) => segment);

    const breadcrumbs = [
      {
        path: '/',
        label: <HomeIcon className="breadcrumb-link" sx={{ verticalAlign: 'middle' }} />
      }
    ];

    let cumulativePath = '';
    pathSegments.forEach((segment) => {
      cumulativePath += `/${segment}`;
      const route = routes.find((route) => matchPath(route.path, cumulativePath));
      if (route) {
        const label = typeof route.label === 'function' ? route.label({ ...params }) : route.label;
        breadcrumbs.push({ path: cumulativePath, label });
      }
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  return (
    <Box sx={{ padding: 2, maxWidth: '1200px', margin: 'auto' }}>
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<span style={{ display: 'flex', alignItems: 'center', color: 'black' }}>›</span>}
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px' // Adds spacing between the breadcrumb items
        }}
      >
        {breadcrumbs.map((breadcrumb, index) =>
          index <= breadcrumbs.length - 1 ? (
            <Link
              key={breadcrumb.path}
              className="breadcrumb-link"
              to={breadcrumb.path}
              style={{
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                display: 'block', // Makes the link behave responsively
                color: 'inherit', // Inherit text color from parent
                textDecoration: 'none',
                fontSize: '14px', // Adjust font size for smaller screens
                '@media (max-width: 600px)': {
                  fontSize: '12px' // Smaller font size on small screens
                }
              }}
            >
              {breadcrumb.label}
            </Link>
          ) : (
            <Typography
              key={breadcrumb.path}
              color="#f44336"
              sx={{
                display: 'flex',
                alignItems: 'center',
                fontSize: '14px',
                fontWeight: 'bold', // Highlight the last breadcrumb
                '@media (max-width: 600px)': {
                  fontSize: '12px' // Smaller font size on small screens
                }
              }}
            >
              {breadcrumb.label}
            </Typography>
          )
        )}
      </Breadcrumbs>
    </Box>
  );
};

export default Breadcrumb;
