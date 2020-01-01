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
    if (qty < 100) {
      setQty(qty + 1);
    }
  };

  const dec = () => {
    if (qty > 0) {
      setQty(qty - 1);
    }
  };

  return (
    <Container className={classes.qtyContainer} maxWidth="lg">
      <Typography> Qty:</Typography>
      <Box>
        <IconButton color="" aria-label="More">
          <AddSharpIcon onClick={() => inc()} />
        </IconButton>
        <InputBase
          // className={classes.input}
          onChange={e => setQty(+e.target.value)}
          value={qty}
          type="tel"
        />
        <IconButton color="" aria-label="Less">
          <RemoveSharpIcon onClick={() => dec()} />
        </IconButton>
      </Box>
    </Container>
  );
};

export default QtyCounter;
