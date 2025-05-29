import { useState } from 'react';
import './App.css';
import { createTheme, CssBaseline, Grid, ThemeProvider } from '@mui/material';
import { getThemePallete } from './theme/ThemePallete';
import { Outlet } from 'react-router';

function App() {
  const theme = createTheme(getThemePallete('light'));
  const [chat, setChat] = useState([]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid container sx={{background:'linear-gradient(rgba(215, 199, 244, 0.2), rgba(151, 133, 186, 0.2))'}}>
          <Grid item xs={12}>
            <Outlet context={{ chat: chat, setChat: setChat }} />
          </Grid>
        </Grid>
      </ThemeProvider>
      <CssBaseline />
    </>
  );
}

export default App;
