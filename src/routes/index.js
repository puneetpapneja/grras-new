import React from 'react';
import NotFoundPage from 'pages/not-found';
import PageLayout from 'pages/page-layout';
import { COURSE_LABEL, REDHAT } from 'utils/constants';
import HomePage from 'pages/home';
import RedHatPage from 'pages/redhat';
import AwsPage from 'pages/aws';
import CoursePage from 'pages/course';
import CoursesPage from 'pages/courses';

// const HomePage = React.lazy(() => import('pages/home'));
// const RedHatPage = React.lazy(() => import('pages/redhat'));
// const AwsPage = React.lazy(() => import('pages/aws'));
// const CoursePage = React.lazy(() => import('pages/course'));
// const CoursesPage = React.lazy(() => import('pages/courses'));

export const routes = [
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/redhat',
    element: <CoursesPage courses={REDHAT} parent="Red Hat" />,
    label: 'Red Hat'
  },
  {
    path: '/redhat/:slug',
    element: <RedHatPage />,
    label: ({ slug }) => COURSE_LABEL[slug]
  },
  {
    path: '/AWS',
    element: <CoursesPage />,
    label: 'AWS'
  },
  {
    path: '/aws/:slug',
    element: <AwsPage />,
    label: ({ slug }) => COURSE_LABEL[slug]
  },
  {
    path: '/course/:slug',
    element: <CoursePage />,
    label: ({ slug }) => COURSE_LABEL[slug]
  }
];

export const getRoutes = () => [
  {
    path: '/',
    element: <PageLayout />,
    errorElement: <NotFoundPage />,
    children: [
      ...routes, // Ensure all routes, including dynamic ones, are added here
      { path: '*', element: <NotFoundPage /> } // Catch-all for undefined routes
    ]
  }
];
