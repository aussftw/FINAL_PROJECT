import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    wrapper: {
      display: "flex",
      justifyContent: "center",
    },
    table: {
      listStyle: "none",
      display: "flex",
      justifyContent: "center",
      // width: "15%",
      padding: 0,
      margin: "20px 30%",
      [theme.breakpoints.down("sm")]: {
        width: "20%",
        display: "grid",
        "grid-template-columns": "1fr 1fr 1fr 1fr 1fr 1fr",
      },
      [theme.breakpoints.down("xs")]: {
        width: "20%",
        display: "grid",
        "grid-template-columns": "1fr 1fr 1fr 1fr 1fr",
      },
    },
    tableItem: {
      margin: "5px",
      padding: "5px 12px",
      cursor: "pointer",
      backgroundColor: "#689f38",
      borderRadius: "50%",
      transition: "0.5s ease",
      "&:hover":{
          backgroundColor: "#33691e",
      },
    "& a": {
      textDecoration: "none",
      fontWeight: 500,
      color: "white",
      }
    }
  })
);

const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
  const classes = useStyles();

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i += 1) {
    pageNumbers.push(i);
  }
  return (
    <nav className={classes.wrapper}>
      <ul className={classes.table}>
        {pageNumbers.map(number => (
          <li className={classes.tableItem} key={number} onClick={() => paginate(number)}>
            {/* eslint-disable-next-line */}
            <a className={classes.itemLink}  href="#">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
