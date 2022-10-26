import React from 'react';
// import CssBaseline from '@mui/material/CssBaseline';
// import Container from '@mui/material/Container';
// import TopNews from '../Components/TopNews';
// import News from '../Components/News';
// import SortSelect from '../Components/SortSelect';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getNews } from '../Features/newsSlice';
import { Backdrop, CircularProgress } from '@mui/material';

import { Box, ThemeProvider } from '@mui/material';
import { Link, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import theme from '../themes/theme';
import Footer from '../components/Footer';
import NewsList from '../containers/NewsList';

const Loading = () => {
  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default function Home({ category }) {
  const { loading, news } = useSelector((state) => ({ ...state.app }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews({ category }));
  }, [category]);

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Navbar />
          <NewsList />
          <Footer />
        </div>
      </ThemeProvider>
    </React.Fragment>
  );
}
