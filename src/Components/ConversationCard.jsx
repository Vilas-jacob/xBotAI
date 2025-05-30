import { Box, Stack, Typography } from '@mui/material'
import React from 'react';
import Avatar from '../assets/avatar.png';
import ThumbsUp from '../assets/ThumbsUp.png';
import ThumbsDown from '../assets/Thumbsdown.png';
import { format } from 'date-fns';
import Ai from '../assets/Icon.png';

function ConversationCard({chatDetails,readOnly=false}) {
  return (
    <>
        <Stack
            direction={'row'}
            p={{xs:1,sm:2,md:3}}
            spacing={{xs:1,sm:2,md:3}}
            borderRadius={5}
            boxShadow={'0 0 5px rgba(0,0,0,0.2)'}
            bgcolor={readOnly ? 'primary.main' : 'primary.light'}
            alignItems={'center'}
        >
            <Stack>
                <Box
                    component={'img'}
                    src={chatDetails.type == "AI" ? Ai : Avatar}
                    borderRadius={'50%'}
                    height={{xs:30, sm:40, md:60}}
                    width={{xs:30,sm:40, md:60}}
                />
            </Stack>
            <Stack>
                <Typography variant='h5' fontWeight={700}>{chatDetails.type == "AI" ? 'Soul AI' : 'You'}</Typography>
                <Typography variant='h6' >{chatDetails.text}</Typography>
                <Stack
                    direction={'row'}
                    gap={2}
                    alignItems={'center'}
                >
                    <Typography
                     color={'text.secondary'}
                     fontSize={{xs:8,sm:10,md:12}}
                     >
                       {format(chatDetails.time, 'hh:mm a')}
                    </Typography>
                    <Box 
                        component={'img'}                
                        src={ThumbsUp}
                        />
                           <Box
                        component={'img'}                
                        src={ThumbsDown}
                        />
                </Stack>
                
            </Stack>
        </Stack>
    </>
  )
}

export default ConversationCard