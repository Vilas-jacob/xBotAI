import { Box, Button, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import Icon from "../assets/Icon.png";
import EditIcon from "../assets/EditIcon.png";
import AddCommentIcon from '@mui/icons-material/AddComment';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

function SideBar({ setChat, closeMenu }) {
  const isMobile = useMediaQuery('(max-width:800px)');

  return (
    <Box>
      
      {isMobile && (
        <Button
          endIcon={<CloseIcon />}
          sx={{
            width: 1,
            justifyContent: 'flex-end',
            color: 'text.primary',
            mb: 1,
          }}
          onClick={closeMenu}
        >
          Close
        </Button>
      )}

      
      <Link to={'/'} style={{ textDecoration: 'none' }}>
        <Stack
          onClick={() => {
            setChat([]);
            closeMenu();
          }}
          sx={{
            bgcolor: 'primary.main',
            '&:hover': {
              bgcolor: 'primary.bg',
            },
          }}
          direction={'row'}
          spacing={1}
          alignItems={'center'}
          justifyContent={'space-between'}
          py={2}
          px={{ xs: 2, md: 3 }}
        >
          <Stack direction={'row'} gap={1} alignItems={'center'}>
            <Box
              component={'img'}
              src={Icon}
              height={42}
              width={42}
              flexShrink={0}
            />
            <Typography
              variant={'h6'}
              fontSize={{ xs: 16, md: 20 }}
              color={'text.primary'}
            >
              New Chat
            </Typography>
          </Stack>
         <Box component={"img"} src={EditIcon} height={30} width={30} />
        </Stack>
      </Link>

      
      <Box p={{ xs: 2, md: 3 }}>
        <Link to={'/history'}>
          <Button
            variant="contained"
            sx={{ width: 1 }}
            onClick={closeMenu}
          >
            Past Conversations
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default SideBar;
