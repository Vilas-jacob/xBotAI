import { Box, Button, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import Icon from "../assets/Icon.png";
import EditIcon from "../assets/EditIcon.png";
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';


function SideBar({setChat, closeMenu}) {
    const isMobile = useMediaQuery('(max-width:800px)');
  return (
    <>
      <Box
        direction={"row"}
        
       // spacing={1}
        alignItems={"center"}
        justifyContent={"space-between"}
        py={1}
        px={2}
      >
        {isMobile && (
            <Button
                endIcon={<CloseIcon />}
                    sx={{
                        width: 1,
                        justifyContent: 'flex-end',
                        
                    }}
                    onClick={closeMenu}
            >Close</Button>
        )}
        <Link to={'/'} style={{textDecoration: 'none'}}>
             <Stack
          direction={"row"}
          spacing={3}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
          bgcolor: "primary.main",
          "&:hover ": {
            bgcolor: "primary.bg",
          },
        }}
        onClick={()=>{setChat([])
            closeMenu()
        }}
        >
          <Box component={"img"} src={Icon} height={44} width={44} />
          <Typography
            variant={"heading"}
            fontSize={{ xs: 16, md: 20 }}
            color={"text.primary"}
          >
            New Chat
          </Typography>
          <Box component={"img"} src={EditIcon} height={30} width={30} />
        </Stack>

        </Link>
       
      
      </Box>
        <Box p={{ xs: 2, md: 3 }}>
          <Link to={"/ConvoHistory"}>
            <Button variant="contained" sx={{ width: 1 }}>
              Past Conversations
            </Button>
          </Link>
        </Box>
    </>
  );
}

export default SideBar;
