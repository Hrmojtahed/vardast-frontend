import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { colors } from "../../utils/color";
import { Grid } from "@mui/material";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: colors.darken_4, padding: 0, margin: 0 }}
    >
      <Toolbar disableGutters>
        <Grid md={3} sm={6} xs={12} sx={{ backgroundColor: colors.darken_5 }}>
          <Typography
            variant="h5"
            noWrap
            component="h5"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "flex" },
              fontFamily: "iranyekan",
              fontWeight: 850,
            }}
          >
            وردست
          </Typography>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
