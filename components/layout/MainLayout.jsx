import React from "react";
import Navbar from "../shared/Navbar";
import styles from "../../styles/mainLayout.module.css";
import Sidebar from "../shared/Sidebar";
import { Grid } from "@mui/material";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Grid container className={styles.maxWidth}>
        <Grid md={3}>
          <Sidebar />
        </Grid>
        <Grid md={9}>{children}</Grid>
      </Grid>
    </div>
  );
};

export default MainLayout;
