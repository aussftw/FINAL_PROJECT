import React from 'react';
import {Link} from "react-router-dom";

import {makeStyles} from '@material-ui/core/styles';
import {Tooltip} from "@material-ui/core";
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'inline-block',
  },
  dropdownIcon: {
    fontSize: '1rem',
  },
  menuList: {
    marginTop: '10px'
  },
}));

export default function MenuListComposition(props) {
  const {menuTitle, plantCategories, className} = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
      <div className={classes.root}>

{/*? : если в коллекции новые поступления есть*/}
        <Tooltip title='New' placement="top" open arrow>
        <Link
            ref={anchorRef}
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
            className={className}
        >{menuTitle}{open ? <ExpandLessIcon className={classes.dropdownIcon}/> :
            <ExpandMoreIcon className={classes.dropdownIcon}/>}
        </Link>
        </Tooltip>

          <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({TransitionProps, placement}) => (
              <Grow
                  {...TransitionProps}
                  style={{transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'}}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                        autoFocusItem={open}
                        id="menu-list-grow"
                        onKeyDown={handleListKeyDown}
                        className={classes.menuList}>
                      {plantCategories.map((menuItem, index) => {
                        return (
                            <MenuItem key={'menuItem' + index} onClick={handleClose}>
                              <Link className={className}>{menuItem}</Link>
                            </MenuItem>
                        )
                      })
                      }
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
          )}
        </Popper>
      </div>
  );
}