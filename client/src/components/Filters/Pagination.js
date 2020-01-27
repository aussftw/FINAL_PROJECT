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
      border: "1px solid green",
      padding: "5px 12px",
    },
    itemLink: {
      textDecoration: "none",
      color: "black",
      fontWeight: 500,
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
          <li className={classes.tableItem} key={number}>
            {/* eslint-disable-next-line */}
            <a className={classes.itemLink} onClick={() => paginate(number)} href="#">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
