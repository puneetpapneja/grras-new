import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { getRoutes } from './routes';
import { useSelector } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const App = () => {
  const userDtls = useSelector((state) => state?.user);
  const theme = createTheme({
    typography: {
      fontFamily: 'Roboto, Arial, sans-serif Open Sans' // Replace with your desired font family
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <RouterProvider router={createBrowserRouter(getRoutes(userDtls?.hasSuperUser))} />
      </React.Fragment>
    </ThemeProvider>
  );
};

export default App;
