import React from 'react';
import NotFoundPage from 'pages/not-found';
import PageLayout from 'pages/page-layout';
import { COURSE_LABEL, REDHAT } from 'utils/constants';

const HomePage = React.lazy(() => import('pages/home'));
const RedHatPage = React.lazy(() => import('pages/redhat'));
const CoursesPage = React.lazy(() => import('pages/courses'));

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
    element: <RedHatPage />,
    label: ({ slug }) => COURSE_LABEL[slug]
  }
];

export const getRoutes = () => [
  {
    path: '/',
    element: <PageLayout />,
    errorElement: <NotFoundPage />,
    children: routes
  }
];
