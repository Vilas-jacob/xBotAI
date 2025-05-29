import { Stack, Typography, Box, Grid } from '@mui/material';
import React from 'react';
import Icon from '../assets/Icon.png';
import QuickQuestions from './QuickQuestions';

function InitialChat() {
  const quickQuestions = [
    {
      question: 'Hi, what is the weather',
      subtext: 'Get immediate AI generated response',
    },
    {
      question: 'Hi, what is my location',
      subtext: 'Get immediate AI generated response',
    },
    {
      question: 'Hi, what is the temperature',
      subtext: 'Get immediate AI generated response',
    },
    {
      question: 'Hi, how are you',
      subtext: 'Get immediate AI generated response',
    },
  ];

  return (
    <>
      <Stack
        spacing={2}
        p={{ xs: 2, md: 3 }}
        sx={{ 
          mt: 2,
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Stack justifyContent={'center'} alignItems={'center'} spacing={2}>
          <Typography variant='h3' color='primary.dark'>
            How Can I Help You Today?
          </Typography>
          <Box
            component={'img'}
            src={Icon}
            height={{ xs: 60,sm:50, md: 120 }}
            width={{ xs: 60,sm:50, md: 120 }}
          />
        </Stack>
        <Grid container spacing={2} justifyContent="center" sx={{ width: '100%' }}>
          {quickQuestions.map((quick, index) => (
            <Grid 
              item 
              key={index} 
              xs={12} 
              sm={6}   
            >
              <QuickQuestions question={quick.question} subText={quick.subtext} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </>
  );
}

export default InitialChat;
