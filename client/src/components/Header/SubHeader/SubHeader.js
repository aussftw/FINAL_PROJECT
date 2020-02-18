import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Box from "@material-ui/core/Box";
import MenuListComposition from "../Dropdown/Dropdown";
import getLinks from "../../../store/actions/Links";
import useStyles from "./useStyles";



// import CustomizedSearch from "../Search/Search";

const SubHeader = ({getLinks, links}) => {

  const classes = useStyles();

    useEffect(() => {
      if(links.length === 0 ){
      getLinks();
      }
    }, [getLinks, links.length]);


  return (
    <div>
      <div className={classes.MarginTopWrap} />
      {links.length > 0 ? (
        <Box
          display="flex"
          justifyContent="center"
          className={classes.subheader}
        >
          <Box>
            {links.map(item => {
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
        <div className={classes.subheader} />
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    links: state.linksReducer.links,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getLinks: () => dispatch(getLinks()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SubHeader);
