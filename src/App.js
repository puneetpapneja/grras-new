import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { getRoutes } from './routes';
import { useSelector } from 'react-redux';

const App = () => {
  const userDtls = useSelector((state) => state?.user);

  return (
    <React.Fragment>
      <RouterProvider router={createBrowserRouter(getRoutes(userDtls?.hasSuperUser))} />
    </React.Fragment>
  );
};

export default App;
