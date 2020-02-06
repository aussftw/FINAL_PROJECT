import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";

import FilterByCategory from "./FilterByCategory";
import FilterByColor from "./FilterByColor";
import FilterBySize from "./FilterBySize";
import FilterByPrice from "./FilterByPrice";
import { useStyles } from "./useStyles";

const ModalFiltersAdaptive = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button className={classes.btn} variant="contained" onClick={handleOpen}>
        Filters
      </Button>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <FilterByCategory />
            <FilterByColor />
            <FilterBySize />
            <FilterByPrice />
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default ModalFiltersAdaptive;
