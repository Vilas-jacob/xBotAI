import React, { useState } from 'react';
import NavBar from '../Components/NavBar';
import InitialChat from '../Components/InitialChat';
import SideBar from '../Components/SideBar';
import { Box } from '@mui/material';

function Home() {
    const [menuOpen,setMenuOpen]=useState(false);
  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        width: '100vw',
        flexDirection: { xs: 'column', md: 'row' },
        overflow:'hidden',
      }}
    >
      
      <Box
        sx={{
          flexBasis: { xs: '100%', md: '20%' }, 
          bgcolor: 'primary.light',
          height: { xs: 'auto', md: '100vh' },
          borderRight: { md: 1 },
          borderColor: 'divider',
          overflowY: 'auto',
          position: { xs: 'fixed', md: 'relative' },
          top: 0,
          left: 0,
          zIndex: 1300, 
          transform: {
            xs: menuOpen ? 'translateX(0)' : 'translateX(-100%)',
            md: 'translateX(0)',
          },
          transition: 'transform 400ms ease',
          boxShadow: { xs: menuOpen ? '2px 0 5px rgba(0,0,0,0.3)' : 'none', md: 'none' },
        }}
      >
        <SideBar setChat={() => {}} closeMenu={() => setMenuOpen(false)} />
      </Box>

      
      <Box
        sx={{
          flexBasis: { xs: '100%', md: '80%' }, 
          display: 'flex',
          flexDirection: 'column',
          height: { xs: '100vh', md: '100vh' },
          overflowY: 'auto',
          rowGap: {xs:4,md:6},
          marginLeft: { xs: 0, md: 0 },
        }}
      >
        <NavBar handleMobileMenu={setMenuOpen} />
        <InitialChat />
      </Box>
    </Box>
  );
}

export default Home;
