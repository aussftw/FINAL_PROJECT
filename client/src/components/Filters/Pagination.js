import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    table: {
      listStyle: "none",
      display: "flex",
      width: "15%",
      margin: "20px 30%",
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
    <nav>
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
