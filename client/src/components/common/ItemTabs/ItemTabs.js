import React, { useState, useEffect } from "react";
import * as axios from "axios";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Comments from "../Comments/Comments";

import useStyles from "./useStyles";

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

const ItemTabs = ({ description, id }) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [comments, setComments] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    axios
      .get(`/api/comments/product/${id}`)
      .then(response => {
          setComments(response.data);
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.log(err.response);
      });
  }, [id]);

  return (
    <Box className={classes.tabsComponent}>
      <Tabs
        className={classes.tabsList}
        value={value}
        onChange={handleChange}
        aria-label="item description and comments"
        indicatorColor="primary"
      >
        <Tab
          label={<span className={classes.tabText}>Description</span>}
          {...a11yProps(0)}
        />
        <Tab
          label={(
            <span className={classes.tabText}>
              Comments (
              {comments.length}
              )
            </span>
          )}
          {...a11yProps(1)}
        />
      </Tabs>
      <Box
        className={classes.contentBox}
        component="div"
        role="tabpanel"
        hidden={value !== 0}
        aria-labelledby={`simple-tab-${0}`}
      >
        {value === 0 && (
          <Box>
            <Typography className={classes.descriptionText}>
              {description}
            </Typography>
          </Box>
        )}
      </Box>
      <Box
        className={classes.contentBox}
        component="div"
        role="tabpanel"
        hidden={value !== 1}
        aria-labelledby={`simple-tab-${1}`}
      >
        {value === 1 && <Comments comments={comments} id={id} />}
      </Box>
    </Box>
  );
};

export default ItemTabs;
