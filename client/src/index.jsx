import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material';

import { UserProvider } from './components/global/UserContext.jsx';

import App from './App';

// import reportWebVitals from './reportWebVitals';

const theme = createTheme({
  palette: {
    primary: {
      main: "#8471FF", // purple
      warning: "#F2C547", // yellow
      info: "#3FDBFF", // blue
      success: "#7BB972" // green
    },
    secondary: {
      main: "#FF7778", // pink
    }
  },
  typography: {
    button: {
      margin: "0.5rem"
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
        <UserProvider>
          <App />
        </UserProvider>
      </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();