import React, { useState } from "react";

import {
  Container,
  Typography,
  Box,
  IconButton,
  InputBase,
} from "@material-ui/core";

import AddSharpIcon from "@material-ui/icons/AddSharp";
import RemoveSharpIcon from "@material-ui/icons/RemoveSharp";
import useStyles from "./useStyles";

const QtyCounter = () => {
  const classes = useStyles();
  const [qty, setQty] = useState(1);

  const inc = () => {
    if (qty < 99) {
      setQty(qty + 1);
    }
  };

  const dec = () => {
    if (qty > 0 && qty !== 1) {
      setQty(qty - 1);
    }
  };

  const changeQuantity = (e) => {
   if (!isNaN(+e.target.value) && e.target.value !== "0" && e.target.value !== "")  {
     setQty(+e.target.value)
   }
  };

  return (
    <Container className={classes.root} maxWidth="lg">
      <Typography className={classes.title}> Qty:</Typography>
      <Box>
        <IconButton aria-label="Less" onClick={() => dec()}>
          <RemoveSharpIcon />
        </IconButton>
        <InputBase
          className={classes.input}
          onChange={e => changeQuantity(e)}
          value={qty}
          type="tel"
          inputProps={{
            maxLength: 2,
            pattern: "[0-9]",
          }}
        />
        <IconButton aria-label="More" onClick={() => inc()}>
          <AddSharpIcon />
        </IconButton>
      </Box>
    </Container>
  );
};

export default QtyCounter;
