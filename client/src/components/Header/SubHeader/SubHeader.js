import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Box from "@material-ui/core/Box";
import useStyles from "./useStyles";

import { getLinks } from "../../../store/actions";
import MenuListComposition from "../Dropdown/Dropdown";
// import CustomizedSearch from "../Search/Search";

const SubHeader = props => {
  useEffect(() => {
    props.getLinks();
    // eslint-disable-next-line
  }, []);

  const classes = useStyles();

  // const renderLink = React.useMemo(
  //     () =>
  //         React.forwardRef((linkProps, ref) => (
  //             // With react-router-dom@^6.0.0 use `ref` instead of `innerRef`
  //             // See https://github.com/ReactTraining/react-router/issues/6056
  //             <Link to={to} {...linkProps} innerRef={ref} />
  //         )),
  //     [to],
  // );

  return (
    <div>
      <div className={classes.searchMobileWrap}>
        {/* <CustomizedSearch className={classes.searchMobile} /> */}
      </div>
      {/* eslint-disable-next-line react/destructuring-assignment */}
      {props.links.links.length > 0 ? (
        <Box
          display="flex"
          justifyContent="center"
          className={classes.subheader}
        >
          <Box>
            {/* eslint-disable-next-line react/destructuring-assignment */}
            {props.links.links.map(item => {
              return item.links.length === 1 ? (
                <Link
                  key={item._id}
                  className={classes.link}
                  to={item.links[0].url}
                >
                  {item.title}
                </Link>
              ) : (
                <MenuListComposition
                  key={item._id}
                  menuTitle={item.title}
                  menuItems={item.links}
                  className={classes.link}
                />
              );
            })}
          </Box>
        </Box>
      ) : (
        <div />
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    links: state.linksReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getLinks: () => dispatch(getLinks()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SubHeader);
