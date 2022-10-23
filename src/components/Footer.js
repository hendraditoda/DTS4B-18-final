import * as React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';

const Footer = () => {
  return (
    <>
      <Paper
        sx={{
          marginTop: 'calc(10% + 60px)',
          position: 'fixed',
          bottom: 0,
          width: '100%',
        }}
        component="footer"
        square
        variant="outlined"
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: 'center',
              display: 'flex',
              my: 1,
            }}
          >
            {/* <div>
              <Image
                priority
                src="/Logo.svg"
                width={75}
                height={30}
                alt="Logo"
              />
            </div> */}
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              justifyContent: 'center',
              display: 'flex',
              mb: 2,
            }}
          >
            <Typography variant="caption" color="initial">
              Copyright ©2022 News Portal
            </Typography>
          </Box>
        </Container>
      </Paper>
    </>
  );
};

export default Footer;
