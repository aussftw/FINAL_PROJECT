import React from "react";
import { Link } from "react-router-dom";
// import axios from "axios";

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

// function post() {
//
//   const Succulents = [
//
//   ];
//   Succulents.forEach(function(item) {
//     axios
//       .post("/products",item,{
//              headers: {
//                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMDNjOTJmMTlmMjIzMDM1MDFhM2Q1MiIsImZpcnN0TmFtZSI6IkFsaW5hIiwibGFzdE5hbWUiOiJZZWdhbmlhbiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTU3NzM3NzU1NSwiZXhwIjoxNTc3NDEzNTU1fQ.v9hONNr7dhx4rV57CZXznFRoziJZVuU24KoJ4Zh51vo",
//              } })
//       .then(newProduct => {
//         console.log(newProduct);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//
//   });

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
        {/* <button onClick={post}>22</button> */}
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
