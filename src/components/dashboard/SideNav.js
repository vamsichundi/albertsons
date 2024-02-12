import React from "react";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";

const SideNav = () => {
  return (
    <div>
      <Drawer variant="permanent">
        <List>
          <ListItem button>
            <ListItemText primary="Sidebar Item 1" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Sidebar Item 2" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Sidebar Item 3" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default SideNav;
