import React from "react";
import Box from "@material-ui/core/Box";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import useStyles from "./useStyles";

const FilterByCategory = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.bg}>
        <div>
          <div className={classes.root} />
          <List
            component="nav"
            aria-label="secondary mailbox folders"
            className=""
          >
            <ListItemText primary="PRODUCT CATEGORIES" />
            <Divider className={classes.divider} />
            <ListItem button>
              <ListItemText primary="Shamdock" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="Geranimus" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="Bermuda" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="Plants" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="Natural" />
            </ListItem>
            <Divider />
          </List>
        </div>
      </Box>
    </>
  );
};

export default FilterByCategory;
