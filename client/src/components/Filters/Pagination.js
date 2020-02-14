import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
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
    backgroundColor: theme.palette.primary.main,
    borderRadius: "50%",
    transition: "0.5s ease",
    "&:hover": {
      backgroundColor: "#33691e",
    },
    "& a": {
      textDecoration: "none",
      fontWeight: 500,
      color: "white",
    },
  },
  tableItemActive: {
    margin: "5px",
    padding: "5px 12px",
    cursor: "pointer",
    backgroundColor: theme.palette.primary.dark,
    borderRadius: "50%",
    transition: "0.5s ease",
    "& a": {
      textDecoration: "none",
      fontWeight: 500,
      color: "white",
    },
  },
}));

const Pagination = ({ productsPerPage, totalProducts, paginate, filters }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(
    filters.currentPage - 1
  );

  const classes = useStyles();

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i += 1) {
    pageNumbers.push(i);
  }

  return (
    <nav className={classes.wrapper}>
      <ul className={classes.table}>
        {pageNumbers.map((number, index) => (
          <li
            className={
              selectedIndex === index
                ? classes.tableItemActive
                : classes.tableItem
            }
            index={index}
            key={number}
            onClick={() => {
              paginate(number);
              setSelectedIndex(index);
              // setPageIndex(index);
            }}
            selected={selectedIndex === index}
          >
            {/* eslint-disable-next-line */}
            <a className={classes.itemLink} href="#">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

function mapStateToProps(state) {
  return {
    filters: state.filterReducer,
  };
}

export default connect(mapStateToProps)(Pagination);
