import React from 'react';
import {TilesButton} from '../TilesButton/TilesButton';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
  card: {

  }
});

export const TilesItem = ({ text, img }) => {
  const classes = useStyles();

  return (
    <div>
      <a href={img} className={classes}>
        <TilesButton text={text} />
      </a>
    </div>
  );
};
