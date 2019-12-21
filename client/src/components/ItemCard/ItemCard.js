import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
  Tooltip,
} from "@material-ui/core";
import { StarBorder } from "@material-ui/icons";
import Rating from "@material-ui/lab/Rating";
// import theme from '../../theme.js';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 240,
  },
  cardContent: {
    paddingTop: 8,
  },
  media: {
    height: 200,
  },
  title: {
    fontSize: 14,
    color: theme.palette.secondary.dark,
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  rating: {
    color: theme.palette.primary.main,
    iconEmpty: {
      color: theme.palette.primary.main,
    },
  },
}));

const CardTooltipText = value => {
  if (value === undefined) return "Not yet rated";
  const rate = Math.round(value * 100) / 100;

  return `Rated ${rate} out of 5`;
};

const ItemCard = ({ title, value }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea className={classes.actionArea}>
        <CardMedia
          className={classes.media}
          image="/img/10-310x270.jpg"
          title="Plant"
        />
        <CardContent className={classes.cardContent}>
          <Typography
            className={classes.title}
            gutterBottom
            noWrap
            align="center"
          >
            {title}
          </Typography>
          <Tooltip title={CardTooltipText(value)}>
            <Box align="center">
              <Rating
                className={classes.rating}
                name="rating"
                value={value}
                size="small"
                precision={0.5}
                readOnly
                emptyIcon={
                  <StarBorder color="primary" style={{ fontSize: 18 }} />
                }
              />
            </Box>
          </Tooltip>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ItemCard;
