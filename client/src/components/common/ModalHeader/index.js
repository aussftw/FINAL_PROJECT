import React from 'react';
import { NavLink } from 'react-router-dom';

import useStyles from './useStyles';

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
