import React from 'react';
import {TilesItem} from '../TilesItem/TilesItem';
import {makeStyles} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },

});

export const TilesPanel = () => {
  const classes = makeStyles();

  return (
    <div className={classes.root}>
      <GridList container spacing={2} >
        <GridListTile item >
          <TilesItem text={'Shamrock'}   />
        </GridListTile>
        <GridListTile item >
          <TilesItem text={'Geraniums'} />
        </GridListTile>
        <GridListTile item >
          <TilesItem text={'Bermuda'}  />
        </GridListTile>
        <GridListTile item >
          <TilesItem text={'Plants'}  />
        </GridListTile>
        <GridListTile item >
          <TilesItem text={'Natural'}  />
        </GridListTile>
      </GridList>
    </div>
  )
};
