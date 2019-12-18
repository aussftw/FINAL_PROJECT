import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


import MenuListComposition from './Dropdown'






const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function CustomizedSearch() {
  const classes = useStyles();

  return (
      <Paper component="form" className={classes.root}>
        {/*<IconButton className={classes.iconButton} aria-label="menu">*/}
        {/*  <MenuIcon />*/}
        {/*</IconButton>*/}
<MenuListComposition/>

        <InputBase
            className={classes.input}
            placeholder="Search Products"
            inputProps={{ 'aria-label': 'search google maps' }}
        />
        <IconButton  type="submit" className={classes.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
        {/*<Divider className={classes.divider} orientation="vertical" />*/}
        {/*<IconButton color="primary" className={classes.iconButton} aria-label="directions">*/}

        {/*</IconButton>*/}
      </Paper>
  );
}