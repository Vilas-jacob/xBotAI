import { Stack, Typography, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { useOutletContext } from "react-router";
import { Link } from "react-router-dom";
function NavBar() {
  const isMobile = useMediaQuery("(max-width:800px)");
  const { handleMobileMenu } = useOutletContext();
  return (
    <Stack component={"header"}>
      <Stack
        direction={"col"}
        gap={2}
        justifyContent={"center"}
        alignItems={"center"}
        paddingLeft={2}
        paddingY={2}
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
