import React, { useEffect } from "react";
// import Button from "@material-ui/core/Button";
import axios from "axios";
import useStyles from "./useStyles";

export default function WishList() {
  const classes = useStyles();

  // const tokenAuth = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMDc1NDlhMGM4OTBhMWQ1ODg3YzY2MCIsImZpcnN0TmFtZSI6IkV1Z2VuIiwibGFzdE5hbWUiOiJNYXJrb3YiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE1Nzg2ODE4OTgsImV4cCI6MTU3ODcxNzg5OH0.yfEejPI2Y7Z91PpdPfnUxR5XM6GP1fZ9ayuOuWbpcFQ";

  useEffect(() => {
    // axios.defaults.headers.common.Authorization = tokenAuth;
    axios
      .get("/wishlist")
      // eslint-disable-next-line no-console
      .then(wishlist => console.log(wishlist))
      .catch(err => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2 className={classes.title}>Wishlist</h2>
      <div className={classes.root}>
        <div className={classes.list}>{}</div>
      </div>
    </div>
  );
}
