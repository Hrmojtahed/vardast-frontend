import * as React from "react";
import AppBar from "@mui/material/AppBar";

import Typography from "@mui/material/Typography";

import { colors } from "../../utils/color";
import { Container, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Navbar = () => {
  const xsBreakPoint = useMediaQuery("(min-width:600px)");
  const useStyles = makeStyles({
    gridLogo: {
      height: "100%",
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: xsBreakPoint ? colors.darken_5 : "transparent",
    },
    appBar: {
      height: 70,
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      zIndex: 1000,
      position: "relative",
    },
    maxWidth: {
      maxWidth: 1440,
      marginRight: "auto",
      marginLeft: "auto",
      display: "flex",
      flexDirection: "row",
    },
    nav: {
      height: "100%",
    },
  });
  const classes = useStyles();
  return (
    <AppBar
      className={classes.appBar}
      position="static"
      sx={{ backgroundColor: colors.darken_4, padding: 0, margin: 0 }}
    >
      <Container
        disableGutters
        className={[classes.maxWidth]}
        sx={{
          margin: 0,
          padding: 0,
          height: "100%",
        }}
      >
        <Grid md={3} sm={6} xs={12} className={classes.gridLogo}>
          <Typography
            className={classes.gridLogo}
            variant="h4"
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
        <Grid
          className={classes.nav}
          md={9}
          sm={6}
          sx={{ display: { xs: "none", sm: "flex" } }}
        ></Grid>
      </Container>
    </AppBar>
  );
};

export default Navbar;
