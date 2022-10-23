import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Navbar from './components/Navbar';

import { Box, ThemeProvider } from '@mui/material';
import { Link, Route, Routes } from 'react-router-dom';

import theme from './themes/theme';
import Footer from './components/Footer';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
