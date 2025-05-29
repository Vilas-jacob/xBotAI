import { Stack, Typography } from '@mui/material'
import React from 'react'

function QuickQuestions({question,subText}) {
  return (
    <>
    <Stack
        bgcolor={'primary.light'}
        padding={{xs:2, md:4}}
        borderRadius={5}
        boxShadow={3}
        spacing={1}
        alignItems={'center'}
        sx={{cursor:'pointer'}}
    >
        <Typography variant='h4' fontSize={{xs:18,md:24}} fontWeight={600}>{question}</Typography>

        <Typography variant='h5' color={'text.secondary'}  fontSize={{xs:12,md:18}}>{subText}</Typography>
    </Stack>
    </>
  )
}

export default QuickQuestions