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
import axios from "axios";
import {
  searchPhrases,
  searchPhrasesFailure,
} from "../../../store/actions/Search";
import useStyles from "./useStyles";

const MenuListComposition = props => {
  // eslint-disable-next-line no-shadow
  const {
    menuTitle,
    menuItems,
    className,
    searchPhrases,
    searchPhrasesFailure,
  } = props;

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const filter = category => {
    axios
      .get(`/api/products/filter?categories=${category}`)
      .then(products => {
        searchPhrases(products.data.products);
      })
      .catch(err => {
        searchPhrasesFailure(err);
      });
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

  // useEffect(() => {
  //   props.getCategories();
  //   // eslint-disable-next-line
  // }, []);

  return (
    <div className={classes.root}>
      {menuItems.length > 0 ? (
        // {props.categories.categories.length > 0 ? (
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
                    >
                      {menuItems.map(menuItem => {
                        return (
                          <MenuItem key={menuItem.id} onClick={handleClose}>
                            <Link
                              key={menuItem._id}
                              to={menuItem.url}
                              onClick={() => {
                                filter(menuItem.description);
                              }}
                              // onKeyDown={() => {
                              //   filter(menuItem.description);
                              // }}
                              // onKeyPress={() => {
                              //   filter(menuItem.description);
                              // }}
                              // onKeyPress={(ev) => {
                              //   if (ev.ctrlKey && ev.key === 'Enter') {
                              //     filter(menuItem.description);
                              //   }
                              // }}
                              className={className}
                            >
                              {menuItem.description}
                            </Link>
                          </MenuItem>
                        );
                      })}
                      {/* {props.categories.categories.map(menuItem => { */}
                      {/*  return ( */}
                      {/*    <MenuItem key={menuItem.id} onClick={handleClose}> */}
                      {/*      <Link */}
                      {/*        to="/#" */}
                      {/*        onClick={e => { */}
                      {/*          e.preventDefault(); */}
                      {/*          filter(menuItem.name); */}
                      {/*        }} */}
                      {/*        onKeyDown={e => { */}
                      {/*          e.preventDefault(); */}
                      {/*          filter(menuItem.name); */}
                      {/*        }} */}
                      {/*        className={className} */}
                      {/*      > */}
                      {/*        {menuItem.name} */}
                      {/*      </Link> */}
                      {/*    </MenuItem> */}
                      {/*  ); */}
                      {/* })} */}
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

// function mapStateToProps(state) {
//   return {
//     categories: state.categoriesReducer,
//     // searchResult: state.searchReducer,
//   };
// }
//
// function mapDispatchToProps(dispatch) {
//   return {
//     getCategories: () => dispatch(getCategories()),
//     searchPhrases: () => dispatch(searchPhrases()),
//   };
// }
export default connect(null, { searchPhrases, searchPhrasesFailure })(
  MenuListComposition
);
// export default connect(  mapStateToProps,  mapDispatchToProps)(MenuListComposition);
