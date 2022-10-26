import axios from 'axios';

// const API_KEY = 'c5e1cc1c180e4724b4f53ffddf120acc';
// const baseUrl = 'https://newsapi.org/v2';

// const mytimes = axios.create({
//   baseURL: baseUrl,
//   params: {
//     'api-key': API_KEY,
//   },
// });

export const DEFAULT_PARAMS = {
  sortBy: 'popularity',
};

const newsApi = axios.create({
  baseURL: 'https://newsapi.org/v2',
  headers: {
    'X-Api-Key': process.env.REACT_APP_NEWS_API_KEY,
  },
});

export default newsApi;
