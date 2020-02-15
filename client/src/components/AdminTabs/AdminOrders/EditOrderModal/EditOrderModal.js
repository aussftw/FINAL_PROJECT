import React, { useState } from "react";
import Backdrop from "@material-ui/core/Backdrop";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import IconButton from "@material-ui/core/IconButton";
import axios from "axios";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import MenuItem from "@material-ui/core/MenuItem";
import useStyles from "./useStyles";


const EditOrderModal = ({ open, handleModal, handleOpenSnackbar, order}) => {
  const classes = useStyles();

  const [editedOrder, setEditedOrder] = useState({enabled: order.enabled, status: order.status});

  const handleSwitchChange = event => {
    setEditedOrder({ ...editedOrder, enabled: event.target.checked });
  };
  const handleStatusChange = event => {
    setEditedOrder({ ...editedOrder, status: event.target.value  });
  };

  const editOrder = () => {
    console.log(editedOrder);
    console.log(order._id);
    // axios
    //   .put(`/api/orders/cancel/${order.id}`)
    //   .then(resp => {
        const success = {type:'success', message:`The order ${order.orderNo} was successfully changed`}
        handleOpenSnackbar(success);
    //     console.log(resp);
    //   })
    //   .catch(err => {
    //     const error = {type:'error', message:`Error! ${order.orderNo} wasn’t deleted.`}
    //     handleOpenSnackbar(error);
    //     console.log("orders", err.response);
    //   });
    handleModal();
  };


  const modal = () => {
    return (
      <Modal
        open={open}
        onClose={handleModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box className={classes.modalBox}>
            <Typography
              component="h3"
              align="center"
              style={{ padding: "4px" }}
            >
                Edit order №
              {order.orderNo}
            </Typography>
            <IconButton
              component="span"
              onClick={handleModal}
              className={classes.closeBtn}
            >
              <CloseIcon />
            </IconButton>

            <FormControl component="div" fullWidth>
          
              <FormControlLabel
                value="Product Availability"
                control={(
                  <Switch
                    id="enabled"
                    color="primary"
                    checked={order.enabled}
                    onChange={handleSwitchChange}
                    value="enabled"
                  />
                )}
                label="Product Availability"
                labelPlacement="start"
              />
              <Box className={classes.inputSmallBox}>
                
                <TextField
                  className={classes.inputSmall}
                  id="category"
                  label="Category"
                  size="small"
                  select
                  value={editedOrder.status}
                  onChange={handleStatusChange}
                >
                  <MenuItem value="In progress">In progress</MenuItem>
                  <MenuItem value="Processed">Processed</MenuItem>
                  <MenuItem value="Shipped">Shipped</MenuItem>
                  <MenuItem value="Recevied">Recevied</MenuItem>
                </TextField>
                
              </Box>
              
              <Button variant="contained" type="submit" onClick={editOrder}>
                Submit
              </Button>
            </FormControl>
          </Box>
        </Fade>
      </Modal>
    );
  };


  return (
    <div>
      {modal()}
    </div>
  );

};

export default EditOrderModal;
/*
<Fade in={open}>
  <Box className={classes.modalBox}>
    <Typography
      component="h2"
      align="center"
      className={classes.message}
    >
      `Are you sure you want cancel order № ${}`
    </Typography>

    <IconButton
      component="span"
      onClick={handleModal}
      className={classes.closeBtn}
    >
      <CloseIcon />
    </IconButton>

    <Button variant="contained" fullWidth onClick={cancelOrder}>
      Cancel
    </Button>
  </Box>
</Fade> */
