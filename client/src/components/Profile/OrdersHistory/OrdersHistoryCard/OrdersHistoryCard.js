import React, { useState } from "react";
import v4 from "uuid";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import OrdersHistoryCardItem from "./OrdersHistoryCardItem/OrdersHistoryCardItem";
import useStyles from "./useStyles";

const OrdersHistoryCard = ({ orderNo, date, products, totalSum, status }) => {
  const classes = useStyles();
  const matches = useMediaQuery(theme => theme.breakpoints.up("md"));
  const equal = useMediaQuery(theme => theme.breakpoints.up("sm"));

  const [expanded, setExpanded] = useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <ExpansionPanel
      expanded={expanded === "panel1"}
      onChange={handleChange("panel1")}
      className={classes.panel}
    >
      <ExpansionPanelSummary
        className={classes.content}
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography className={classes.order}>{`№ ${orderNo}`}</Typography>
        <Typography className={classes.data}>{date}</Typography>
        <div className={classes.img_wrapper}>
          {matches && (<img src={products[0].product.imageUrls[0]} className={classes.img} alt={products[0].product.name} />)}
          {matches && products.length > 1 && (<img src={products[1].product.imageUrls[0]} className={classes.img} alt={products[1].product.name} />)}
          {matches && products.length > 2 && (<img src={products[2].product.imageUrls[0]} className={classes.img} alt={products[2].product.name} />)}
          {matches && products.length > 3 && (<Typography className={classes.after_img}>...</Typography>)}
        </div>
        {matches && (<Typography className={classes.data}>{`Total: $${totalSum.toFixed(2)}`}</Typography>)}
        {equal && (<Typography className={classes.data}>{`Status: ${status}`}</Typography>)}
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={classes.products}>
        {products.map(item => {
          return (
            <OrdersHistoryCardItem
              key={v4()}
              id={item.product._id}
              itemNo={item.product.itemNo}
              img={item.product.imageUrls[0]}
              title={item.product.name}
              qty={item.cartQuantity}
              price={item.product.currentPrice}
            />
          );
        })}
        <div className={classes.footer}>
          <Typography
            className={classes.status}
          >{`Status: ${status}`}</Typography>
          <Typography className={classes.total}>{`Total: $${totalSum.toFixed(
            2
          )}`}</Typography>
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default OrdersHistoryCard;
