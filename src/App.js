import Routes from './Routes/Routes';

import { ThemeProvider } from '@mui/material';

import theme from './themes/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes />
      </div>
    </ThemeProvider>
  );
};

export default App;
