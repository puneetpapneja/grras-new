import PageLayout from 'pages/page-layout';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <PageLayout>
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <h1>404 - Page Not Found</h1>
          <p>Oops! The page you are looking for does not exist.</p>
          <Link to="/" style={{ textDecoration: 'none', color: '#007BFF' }}>
            Go Back to Home
          </Link>
        </div>
      </PageLayout>
    </div>
  );
};

export default NotFoundPage;
