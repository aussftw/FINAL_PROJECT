import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import useStyles from "../../../Header/SubHeader/useStyles";


const AdminOrdersProducts = ({ rowData, totalSum }) => {

  const classes = useStyles();

  return (
    <>
      <Box className={classes.wrapper}>
        {rowData.map((item) => {
        const ProdName = item.product.name;

        return (
          <Grid container>
            <Grid item xs={4} sm={4}>
              <Link 
                to={`/products/${item.product.itemNo}`}
                className={classes.link}
              >
                <Typography>
                  {ProdName.charAt(0).toUpperCase() + ProdName.slice(1)}
                </Typography>
              </Link>
            </Grid>
            <Grid item xs={3} sm={3}>
              {item.product.imageUrls.map((url) => {
                return <img alt={ProdName} src={url} style={{ width: "20%" }} />;
              })}
            </Grid>
            <Grid item xs={2} sm={2}>
              <Typography>
                {item.product.currentPrice}$ x {item.cartQuantity} = {item.cartQuantity * item.product.currentPrice} $
              </Typography>
            </Grid>
          </Grid>
        );
      })}
        <Typography>
          Total = {totalSum}
        </Typography>
      </Box>
    </>
  )

};

export default AdminOrdersProducts;

// <Grid container>
//   <Grid item xs={8} sm={8}>
//     {productsTable()}
//   </Grid>
//   <Grid item xs={1} sm={1}>
//     <Typography>
//       Total = {totalSum}
//     </Typography>
//   </Grid>
// </Grid>