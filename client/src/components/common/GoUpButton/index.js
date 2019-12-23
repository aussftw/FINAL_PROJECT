import React from 'react';

import Fab from '@material-ui/core/Fab';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  flex: {
    display: 'flex',
    justifyContent: 'space-between',

  },

  //button!!!!!!
  fab: {
    position: 'absolute',
    color: 'green',

  },
}));


export default function GoUpButton() {
  const classes = useStyles();

  const styleS = {

    backgroundImage: `url(${"favicon/favicon.ico"})`,
    width: '50px',
    height: '50px',
    zIndex: '1',
  };

  return(
      <div>
        <Fab variant="extended" classes={classes.fab}>
          <ExpandLessIcon/>
        </Fab>
        <Fab variant="extended" classes={classes.fab} style={styleS}>
        </Fab>
      </div>
  )
}