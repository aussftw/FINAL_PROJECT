import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core";

import Box from "@material-ui/core/Box";
import { getLinks } from "../../store/actions";
import MenuListComposition from "./Dropdown";

const useStyles = makeStyles(theme => ({
  subheader: {
    marginTop: "65px",
    minHeight: "25px",
    padding: "10px 24px",
    backgroundColor: theme.palette.secondary.light,
  },
  link: {
    display: "inline-block",
    padding: "0 20px",
    color: theme.palette.secondary.main,
    textTransform: "uppercase",
    textDecoration: "none",
    "&:hover": {
      color: theme.palette.primary.main,
      borderBottom: `1px solid ${theme.palette.primary.main}`,
    },
  },
}));

function SubHeader(props) {
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
      {props.links.links.length > 0 ? (
        <Box
          display="flex"
          justifyContent="center"
          className={classes.subheader}
        >
          <Box>
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
}

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
