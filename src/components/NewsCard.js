import { Box, CardMedia } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import moment from 'moment';

const NewsCard = ({ news }) => {
  const { urlToImage, title, author, publishedAt } = news;
  return (
    <Card id={news.id} sx={{ display: 'flex', width: 400, margin: 5 }}>
      <CardMedia
        component="img"
        sx={{ width: 150, height: 225 }}
        image={urlToImage}
        alt="Movie poster"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h6">
            {title}
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: 'justify' }}
          >
            {author}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {moment(publishedAt).format('DD MMMM YYYY')}
          </Typography>
          {/* <Box
            sx={{
              width: 200,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Rating
              name="read-only"
              precision={0.1}
              value={news.vote_average / 2}
              max={5}
              readOnly
            />
            <Box sx={{ ml: 2 }}>{news.vote_average}</Box>
          </Box> */}
        </CardContent>
      </Box>
    </Card>
  );
};

export default NewsCard;
