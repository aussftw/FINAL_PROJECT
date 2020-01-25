import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
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
import axios from "axios";
import {
  searchPhrases,
  searchPhrasesFailure,
} from "../../../store/actions/Search";
import useStyles from "./useStyles";

const TemporaryDrawer = props => {
  // eslint-disable-next-line no-shadow
  const { links, searchPhrases, searchPhrasesFailure } = props;
  const classes = useStyles();

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

  const filter = category => {
    setState({ ...state, left: false });
    axios
      .get(`/api/products/filter?categories=${category}`)
      .then(products => {
        searchPhrases(products.data.products);
      })
      .catch(err => {
        searchPhrasesFailure(err);
      });
  };

  const sideList = side => (
    <div className={classes.list} role="presentation">
      <div className={classes.sideMenuHeader}>
        <h5 className={classes.sideMenuTitle}>Menu</h5>
        <IconButton
          color="inherit"
          aria-label="close drawer"
          onClick={toggleDrawer(side, false)}
        >
          <CloseIcon />
        </IconButton>
      </div>

      <Box>

        {links.map(item => {
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
              <ExpansionPanelSummary
                expandIcon={<ArrowDropDownIcon />}
                href="/#"
              >
                {item.title}
              </ExpansionPanelSummary>
              {item.links.map(menuItem => {
                return (
                  <ExpansionPanelDetails
                    key={menuItem._id}
                    className={classes.nestedList}
                  >
                    <Typography
                      component={Link}
                      to={menuItem.url}
                      onClick={()=>{filter(menuItem.description)}}
                      className={classes.dropdownText}
                    >
                      {menuItem.description}
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
    <div className={classes.burgerMenuMobile}>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer("left", true)}
        href=''
      >
        <MenuIcon />
      </IconButton>
      <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
        {sideList("left")}
      </Drawer>
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
    searchPhrases: data => dispatch(searchPhrases(data)),
    searchPhrasesFailure: err => dispatch(searchPhrasesFailure(err)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TemporaryDrawer);
