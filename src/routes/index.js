import React from 'react';
import NotFoundPage from 'pages/not-found';
import PageLayout from 'pages/page-layout';

const HomePage = React.lazy(() => import('pages/home'));

const orgAppOwnerRoutes = [
  {
    path: '/',
    element: <HomePage />
  }
];

const superUserRoutes = [];

export const getRoutes = (hasSuperUser) => [
  {
    path: '/',
    element: <PageLayout />,
    errorElement: <NotFoundPage />,
    children: hasSuperUser ? superUserRoutes : orgAppOwnerRoutes
  }
];
