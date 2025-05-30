import { Stack, Typography, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { useOutletContext } from "react-router";
import { Link } from "react-router-dom";
function NavBar({ handleMobileMenu }) {
  const isMobile = useMediaQuery("(max-width:800px)");
  return (
    <Stack
      component={"header"}
      p={{ xs: 2, md: 3 }}
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      
    >
      <Stack
        direction={"row"} alignItems={"center"} spacing={2}
      >
        {isMobile && (
          <MenuIcon
            onClick={() => handleMobileMenu((prev) => !prev)}
            sx={{ color: "#9785BA" }}
          />
        )}

        <Link to={"/"} style={{ textDecoration: "none" }}>
          <Typography variant="h1" component={"h1"}>
            Bot AI
          </Typography>
        </Link>
      </Stack>
    </Stack>
  );
}

export default NavBar;
