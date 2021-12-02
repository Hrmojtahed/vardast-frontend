import {
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { colors } from "../../utils/color";

const Sidebar = () => {
  return (
    <div>
      <Grid
        md={12}
        sx={{
          width: "auto",
          height: "calc(100vh - 70px)",
          backgroundColor: colors.darken_1,
        }}
      >
        <List>
          <ListItemButton>
            <ListItemIcon>
              <DashboardIcon sx={{ color: colors.darken_4 }} />
            </ListItemIcon>
            <ListItemText primary="داشبورد"></ListItemText>
          </ListItemButton>
        </List>
      </Grid>
    </div>
  );
};

export default Sidebar;
