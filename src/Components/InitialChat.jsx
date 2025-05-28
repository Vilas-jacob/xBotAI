import { Stack, Typography, Box } from '@mui/material'
import React from 'react';
import Icon from '../assets/Icon.png';

function InitialChat() {
  return (
    <>
    <Stack>
        <Stack>
            <Typography>How Can I Help You Today?</Typography>
            <Box
                component={'img'}
                src={Icon}
            />
        </Stack>
    </Stack>
    </>
  )
}

export default InitialChat