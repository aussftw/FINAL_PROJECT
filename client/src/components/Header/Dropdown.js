import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Tooltip } from "@material-ui/core";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { connect } from "react-redux";
import { getCategories } from "../../store/actions";

const useStyles = makeStyles(() => ({
  root: {
    display: "inline-block",
  },
  dropdownIcon: {
    fontSize: "1rem",
  },
  menuList: {
    marginTop: "10px",
    zIndex: "20",
  },
}));

function MenuListComposition(props) {
  const { menuTitle, className } = props;

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

  useEffect(() => {
    props.getCategories();
    // eslint-disable-next-line
  }, []);

  return (
    <div className={classes.root}>
      {props.categories.categories.length > 0 ? (
        <div>
          {/* ? : если в коллекции новые поступления есть */}
          <Tooltip title="New" placement="top" arrow>
            <Link
              to="/#"
              ref={anchorRef}
              aria-controls={open ? "menu-list-grow" : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
              className={className}
            >
              {menuTitle}
              {open ? (
                <ExpandLessIcon className={classes.dropdownIcon} />
              ) : (
                <ExpandMoreIcon className={classes.dropdownIcon} />
              )}
            </Link>
          </Tooltip>

          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                // eslint-disable-next-line
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
                      className={classes.menuList}
                    >
                      {props.categories.categories.map(menuItem => {
                        return (
                          <MenuItem key={menuItem.id} onClick={handleClose}>
                            <Link href="/#" className={className}>
                              {menuItem.name}
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
}

function mapStateToProps(state) {
  return {
    categories: state.categoriesReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCategories: () => dispatch(getCategories()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuListComposition);
