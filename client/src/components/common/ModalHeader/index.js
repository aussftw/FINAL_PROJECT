import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import theme from '../../../theme';

const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: theme.palette.primary.light,
    padding: '10px',
  },
  link: {
    fontSize: '24px',
    textDecoration: 'none',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    color: theme.palette.primary.dark,
  },
  linkActive: {
    fontSize: '24px',
    textDecoration: 'none',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    color: theme.palette.primary.dark,
    transform: 'scale(1.4)',
  },
});

const ModalHeader = ({login, reg}) => {

  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <NavLink
        to="/login"
        className={login ? classes.linkActive : classes.link}
      >
        Login
      </NavLink>
      <NavLink
        to="/registration"
        className={reg ? classes.linkActive : classes.link}
      >
        Registration
      </NavLink>
    </div>
  );
};

export default ModalHeader;
