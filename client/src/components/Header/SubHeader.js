import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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

// axios.defaults.baseURL = 'http://cards.danit.com.ua/';

// function getCards(){
//
//   // const token =localStorage.getItem('token') ;
//   // console.log(token);
//   // const token ='8eca04c25c57' ;
//
//   axios.get('http://cards.danit.com.ua/cards',  {
//     headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMDNjOTJmMTlmMjIzMDM1MDFhM2Q1MiIsImZpcnN0TmFtZSI6IkFsaW5hIiwibGFzdE5hbWUiOiJZZWdhbmlhbiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTU3NzMwNjQ5OCwiZXhwIjoxNTc3MzQyNDk4fQ.iAop8unGYVm4QwRfIgO-0fh3_l6PTLL-VgSXPXap21Q` }
//   })
//     .then((response) => {
//       console.log(response);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

function get() {
  axios
    .get("/catalog", {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMDNjOTJmMTlmMjIzMDM1MDFhM2Q1MiIsImZpcnN0TmFtZSI6IkFsaW5hIiwibGFzdE5hbWUiOiJZZWdhbmlhbiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTU3NzMwNjQ5OCwiZXhwIjoxNTc3MzQyNDk4fQ.iAop8unGYVm4QwRfIgO-0fh3_l6PTLL-VgSXPXap21Q`,
      },
    })
    .then(catalog => {
      console.log(catalog);
    })
    .catch(err => {
      console.log(err);
    });
}

export default function SubHeader() {
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
        <button onClick={get}>22</button>
        <Link className={classes.link} to="/">
          Home
        </Link>
        <MenuListComposition
          menuTitle="Shop"
          plantCategories={get}
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
