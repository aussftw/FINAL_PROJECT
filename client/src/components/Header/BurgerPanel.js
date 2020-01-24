import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

import Drawer from "@material-ui/core/Drawer";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";

import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles(() => ({
  list: {
    width: 250,
    padding: "20px 10px",
  },
  sideMenuHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    paddingLeft: "24px",
  },
  sideMenuText: {
    display: "block",
    padding: "12px 24px",
    color: "black",
    textDecoration: "none",
  },
  fullList: {
    width: "auto",
  },
  nestedList: {
    paddingLeft: "15%",
  },
}));

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div className={classes.list} role="presentation">
      <div className={classes.sideMenuHeader}>
        <h5>Menu</h5>
        <IconButton color="inherit" aria-label="close drawer">
          <CloseIcon
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
          />
        </IconButton>
      </div>

      <Box>
        <Link href="/#" className={classes.sideMenuText}>
          Home
        </Link>
        <ExpansionPanel style={{ boxShadow: "none" }}>
          <ExpansionPanelSummary expandIcon={<ArrowDropDownIcon />}>
            Shop
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.nestedList}>
            <Typography>Succulents</Typography>
          </ExpansionPanelDetails>
          <ExpansionPanelDetails className={classes.nestedList}>
            <Typography>Aloe</Typography>
          </ExpansionPanelDetails>
          <ExpansionPanelDetails className={classes.nestedList}>
            <Typography>Emergents</Typography>
          </ExpansionPanelDetails>
          <ExpansionPanelDetails className={classes.nestedList}>
            <Typography>Geraniums</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <Link href="/#" className={classes.sideMenuText}>
          About Us
        </Link>

        <Link href="/#" className={classes.sideMenuText}>
          Contacts
        </Link>
      </Box>
    </div>
  );

  // const fullList = side => (
  //     <div
  //         className={classes.fullList}
  //         role="presentation"
  //         onClick={toggleDrawer(side, false)}
  //         onKeyDown={toggleDrawer(side, false)}
  //     >
  //       <List>
  //         {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
  //             <ListItem button key={text}>
  //               <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
  //               <ListItemText primary={text} />
  //             </ListItem>
  //         ))}
  //       </List>
  //       <Divider />
  //       <List>
  //         {['All mail', 'Trash', 'Spam'].map((text, index) => (
  //             <ListItem button key={text}>
  //               <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
  //               <ListItemText primary={text} />
  //             </ListItem>
  //         ))}
  //       </List>
  //     </div>
  // );

  return (
    <div>
      <IconButton edge="start" color="inherit" aria-label="open drawer">
        <MenuIcon onClick={toggleDrawer("left", true)} />
      </IconButton>

      <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
        {sideList("left")}
      </Drawer>
    </div>
  );
}
