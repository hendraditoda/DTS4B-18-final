import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';

// import nytimes from '../apis/newsApi';
import NewsCard from '../components/NewsCard';

const NewsList = ({ news, category }) => {
  // const [news, setNews] = useState([]);

  // useEffect(() => {
  //   const fetchNews = async () => {
  //     try {
  //       const fetchedNews = await nytimes.get('/mostpopular/v2/viewed/1.json');
  //       console.log('test', fetchedNews);
  //       setNews(fetchedNews.data.results);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchNews();
  // }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        mt: 5,
        backgroundColor: 'red',
      }}
    >
      {news.map((news) => (
        <NewsCard news={news}></NewsCard>
      ))}
    </Box>
  );
};

export default NewsList;
