import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { getRoutes } from './routes';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Banner from 'components/banner';
import TopButton from 'components/top-button';

const App = () => {
  const theme = createTheme({
    typography: {
      fontFamily: 'Roboto, Arial, sans-serif Open Sans' // Replace with your desired font family
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <TopButton />
        <Banner />
        <RouterProvider router={createBrowserRouter(getRoutes())} />
      </React.Fragment>
    </ThemeProvider>
  );
};

export default App;
