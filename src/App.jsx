import { useState } from 'react'
import './App.css';
import { createTheme, CssBaseline, Grid, ThemeProvider } from '@mui/material';
import SideBar from './Components/SideBar';
import { getThemePallete } from './theme/ThemePallete';
import { Outlet } from 'react-router';

function App() {
 // const [count, setCount] = useState(0)
const theme = createTheme(getThemePallete('light'));
const [chat, setChat] = useState([]);
 const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid container sx={{background:'linear-gradient(rgba(215, 199, 244, 0.2), rgba(151, 133, 186, 0.2))'}} >
          <Grid 
            item xs={12} md={2.5}
                   sx={{
              bgcolor: 'primary.light',
              '@media (max-width:800px)': {
                width: '70%',
                transform: menuOpen ? 'translateX(0)' : 'translateX(-100%)',
                transition: 'transform 400ms ease',
              },
            }}
             position={{ xs: 'fixed', md: 'relative' }}
            height={'100vh'}
            zIndex={{ xs: 9999, md: 1 }}

          > 
               <SideBar setChat={setChat} closeMenu={()=>setMenuOpen(false)} />
          </Grid>
          <Grid item xs={12} md={10}>
            <Outlet
              context={{
                chat:chat,
                setChat:setChat,
                handleMobileMenu:setMenuOpen,
              }}
            />
          </Grid>
        </Grid>
      </ThemeProvider>
      <CssBaseline />
      
    </>
  )
}

export default App
