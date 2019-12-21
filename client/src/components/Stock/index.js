import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextBlock from "./TextBlock";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    border: "none",
  },
  visible: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  paper: {
    height: 240,
    // width: 100,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    boxShadow: "none",
  },
}));

const styleF = {
  backgroundImage: `url(${"img/banner1.jpg"})`,
};

const styleS = {
  backgroundImage: `url(${"img/banner2.jpg"})`,
};

export default function Stock() {
  const [spacing] = React.useState(2);
  const classes = useStyles();

  // eslint-disable-next-line no-unused-vars

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid container justify="center" spacing={spacing}>
        <Grid item xs={12} sm={5}>
          <Paper className={classes.paper} style={styleF} />
        </Grid>
        <Grid item xs={5} sm={3}>
          <Paper className={classes.paper} style={styleS} />
        </Grid>
        <Grid item xs={7} sm={4}>
          <Paper className={classes.paper}>
            <TextBlock />
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
}
