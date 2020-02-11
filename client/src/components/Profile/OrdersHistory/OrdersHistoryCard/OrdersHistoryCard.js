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

const OrdersHistoryCard = ({ orderNo, date, products, name, lastName, phone, email, address, totalSum, status, canceled }) => {
  const classes = useStyles();
  const matches = useMediaQuery(theme => theme.breakpoints.up("md"));
  const equal = useMediaQuery(theme => theme.breakpoints.up("sm"));

  const [expanded, setExpanded] = useState(false);
  const [expandedInner, setExpandedInner] = useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const handleChangeInner = panel => (event, isExpanded) => {
    setExpandedInner(isExpanded ? panel : false);
  };

  const statusText = canceled ? "canceled" : status;

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
        {matches && (
          <div className={classes.img_wrapper}>
            <img src={products[0].product.imageUrls[0]} className={classes.img} alt={products[0].product.name} />
            {products.length > 1 && (<img src={products[1].product.imageUrls[0]} className={classes.img} alt={products[1].product.name} />)}
            {products.length > 2 && (<img src={products[2].product.imageUrls[0]} className={classes.img} alt={products[2].product.name} />)}
            {products.length > 3 && (<Typography className={classes.after_img}>...</Typography>)}
          </div>
        )}
        {matches && (<Typography className={classes.data}>{`Total: $${totalSum.toFixed(2)}`}</Typography>)}
        {equal && (<Typography className={classes.data}>{`Status: ${statusText}`}</Typography>)}
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
          <ExpansionPanel
            expanded={expandedInner === "panel1"}
            onChange={handleChangeInner("panel1")}
            className={classes.panel}
          >
            <ExpansionPanelSummary
              className={classes.content}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className={classes.order}>order details</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.products}>
              <Typography className={classes.details}>{`Status: ${statusText}`}</Typography>
              <Typography className={classes.details}>{`Customer: ${name} ${lastName}`}</Typography>
              <Typography className={classes.details}>{`Phone: ${phone}`}</Typography>
              <Typography className={classes.details}>{`Email: ${email}`}</Typography>
              <Typography className={classes.details}>{`Delivery address: ${address}`}</Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <Typography className={classes.total}>{`Total: $${totalSum.toFixed(2)}`}</Typography>
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default OrdersHistoryCard;
