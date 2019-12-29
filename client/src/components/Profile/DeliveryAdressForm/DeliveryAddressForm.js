import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import useStyles from "./useStyles";

export default function DeliveryAddressForm() {
  const classes = useStyles();
  const [address, setAdress] = useState("");

  const savePassword = event => {
    event.preventDefault();
    // axios
  };

  return (
    <div>
      <h2 className={classes.title}>Delivery Address</h2>
      <div className={classes.root}>
        <form className={classes.form} noValidate={false} autoComplete="off">
          <TextField
            id="standard-read-only-input"
            required
            label="Delivery address"
            value={address}
            variant="outlined"
            inputProps={{ minlength: 10, maxlength: 100 }}
            placeholder="Your address"
            onChange={event => setAdress(event.target.value)}
          />
          <Button type="submit" onSubmit={savePassword}>
            ADD ADDRESS
          </Button>
        </form>
      </div>
    </div>
  );
}
