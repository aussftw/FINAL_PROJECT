import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { getCategories, getLinks } from "../../store/actions";

const useStyles = makeStyles(() => ({
  list: {
    width: 250,
    padding: "20px 10px",
  },
  sideMenuTitle: {
    margin: "0",
    alignSelf: "center",
  },
  sideMenuHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    paddingLeft: "24px",
  },
  sideMenuText: {
    display: "block",
    padding: "12px 24px",
    color: "black",
    textDecoration: "none",
  },
  dropdownText: {
    color: "black",
    textDecoration: "none",
  },
  nestedList: {
    paddingLeft: "15%",
  },
}));

function TemporaryDrawer(props) {
  const classes = useStyles();

  useEffect(() => {
    props.getLinks();
    props.getCategories();
    // eslint-disable-next-line
  }, []);

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div className={classes.list} role="presentation">
      <div className={classes.sideMenuHeader}>
        <h5 className={classes.sideMenuTitle}>Menu</h5>
        <IconButton
          color="inherit"
          aria-label="close drawer"
          onClick={toggleDrawer(side, false)}
          onKeyDown={toggleDrawer(side, false)}
        >
          <CloseIcon />
        </IconButton>
      </div>

      <Box>
        {props.links.links.map(item => {
          return item.links.length <= 1 ? (
            <Link
              key={item._id}
              className={classes.sideMenuText}
              to={item.links[0].url}
            >
              {item.title}
            </Link>
          ) : (
            <ExpansionPanel key={item._id} style={{ boxShadow: "none" }}>
              <ExpansionPanelSummary expandIcon={<ArrowDropDownIcon />}>
                {item.title}
              </ExpansionPanelSummary>
              {props.categories.categories.map(menuItem => {
                return (
                  <ExpansionPanelDetails
                    key={menuItem.id}
                    className={classes.nestedList}
                  >
                    <Typography>
                      <Link className={classes.dropdownText} to="/#">
                        {menuItem.name}
                      </Link>
                    </Typography>
                  </ExpansionPanelDetails>
                );
              })}
            </ExpansionPanel>
          );
        })}
      </Box>
    </div>
  );

  return (
    <div>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer("left", true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
        {sideList("left")}
      </Drawer>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    links: state.linksReducer,
    categories: state.categoriesReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getLinks: () => dispatch(getLinks()),
    getCategories: () => dispatch(getCategories()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TemporaryDrawer);
