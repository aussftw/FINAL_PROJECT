import React from 'react';
import { TilesItem } from '../TilesItem/TilesItem';
import { makeStyles } from '@material-ui/core';
import GridListTile from '@material-ui/core/GridListTile';
import GridList from '@material-ui/core/GridList';

const useStyles = makeStyles({
  box: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  tileBox: {
    maxWidth: '643px',
    height: '800px',
  },
});

export const TilesPanel = () => {
  const classes = useStyles();

  return (
    <div className={classes.box}>
      <GridList cellHeight={245} className={classes.tileBox}>
        <GridListTile cols={2} rows={2}>
          <TilesItem text={'Shamrock'} img={"https://madebyhand.in/wordpress/plantly/wp-content/uploads/2019/12/cat1.png"}/>
        </GridListTile>
        <GridListTile cols={2} rows={1}>
          <TilesItem text={'Geraniums'} img={'https://madebyhand.in/wordpress/plantly/wp-content/uploads/2019/12/cat2.jpg'}/>
        </GridListTile>
      </GridList>
      <GridList className={classes.tileBox} cellHeight={245}>
        <GridListTile cols={1} rows={1}>
          <TilesItem text={'Bermuda'} img={"https://madebyhand.in/wordpress/plantly/wp-content/uploads/2019/12/cat4.jpg"}/>
        </GridListTile>
        <GridListTile cols={1} rows={1}>
          <TilesItem text={'Plants'} img={"https://madebyhand.in/wordpress/plantly/wp-content/uploads/2019/12/cat3.jpg"}/>
        </GridListTile>
        <GridListTile cols={2} rows={2}>
          <TilesItem text={'Natural'} img={"https://madebyhand.in/wordpress/plantly/wp-content/uploads/2019/12/cat5.png"}/>
        </GridListTile>
      </GridList>
    </div>
  );
};
