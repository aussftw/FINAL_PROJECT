import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core";

import Box from "@material-ui/core/Box";
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

export default function SubHeader(props) {
  const { categories } = props;
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
    <Box display="flex" justifyContent="center" className={classes.subheader}>
      <Box>
        <Link className={classes.link} to="/">
          Home
        </Link>
        <MenuListComposition
          menuTitle="Shop"
          plantCategories={categories}
          className={classes.link}
        />
        <Link className={classes.link} to="/second">
          About Us
        </Link>
        <Link className={classes.link} to="/third">
          Contacts
        </Link>
      </Box>
    </Box>
  );
}
