import React from 'react';
import { TilesButton } from '../TilesButton/TilesButton';
import { makeStyles } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  img: {
    height: '100%',
    borderRadius: '10px',
  },
  mediaWrapper: {
    display: 'block',
    width: '100%',
    height: '100%',
  },
});

export const TilesItem = ({ text, img }) => {
  const classes = useStyles();

  return (
    <a href={'/'} className={classes.mediaWrapper}>
      <CardMedia component={'img'} src={img} alt={img} className={classes.img} />
      <TilesButton text={text} />
    </a>
  );
};
