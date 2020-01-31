import React from "react";
import { Link } from "react-router-dom";
// import { Tooltip } from "@material-ui/core";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { connect } from "react-redux";
import {selectCategory} from "../../../store/actions/Filters";
import useStyles from "./useStyles";

const MenuListComposition = props => {
  const {menuTitle,menuItems,className,selectCategory} = props;

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const filter = category => {
    selectCategory(category)
  };

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
    if (event.key === "Tab") {
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
      {menuItems.length > 0 ? (
        <div>
          {/* ? : если в коллекции новые поступления есть */}
          {/* <Tooltip title="New" placement="top" arrow> */}
          <Link
            to="/#"
            ref={anchorRef}
            aria-controls={open ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            onClick={e => {
              e.preventDefault();
              handleToggle();
            }}
            className={className}
          >
            {menuTitle}
            {open ? (
              <ExpandLessIcon className={classes.dropdownIcon} />
            ) : (
              <ExpandMoreIcon className={classes.dropdownIcon} />
            )}
          </Link>
          {/* </Tooltip> */}

          <Popper
            className={classes.menuList}
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="menu-list-grow"
                      onKeyDown={handleListKeyDown}
                    >
                      {menuItems.map(menuItem => {
                        return (
                          <MenuItem key={menuItem._id} onClick={handleClose}>
                            <Link
                              to={menuItem.url}
                              onClick={() => {
                                filter(menuItem.description);
                              }}
                              className={className}
                            >
                              {menuItem.description}
                            </Link>
                          </MenuItem>
                        );
                      })}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
};

export default connect(null, {selectCategory})(MenuListComposition);
