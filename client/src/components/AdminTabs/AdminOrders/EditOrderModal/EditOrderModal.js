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


const EditOrderModal = ({ open, handleModal, handleOpenSnackbar, order, autoRefresh }) => {
  const classes = useStyles();

  const [editedOrder, setEditedOrder] = useState({ canceled: order.canceled, status: order.status });

  const handleSwitchChange = event => {
    setEditedOrder({ ...editedOrder, canceled: event.target.checked });
  };
  const handleStatusChange = event => {
    setEditedOrder({ ...editedOrder, status: event.target.value });
  };

  const editOrder = () => {
    if (order.status !== editedOrder.status) {
      axios
        .put(`/api/orders/${order._id}`, editedOrder)
        .then(resp => {
          const success = { type: "success", message: `The status of ${order.orderNo} was successfully changed` };
          handleOpenSnackbar(success);
          autoRefresh();
          console.log(resp);
        })
        .catch(err => {
          const error = { type: "error", message: `Error! ${order.orderNo} wasn’t changed.` };
          handleOpenSnackbar(error);
          console.log("orders", err.response);
        });
    }
    if (order.canceled !== editedOrder.canceled) {
      axios
        .put(`/api/orders/cancel/${order._id}`)
        .then(resp => {
          const success = { type: "success", message: `The order ${order.orderNo} was canceled` };
          handleOpenSnackbar(success);
          autoRefresh();
          console.log(resp);
        })
        .catch(err => {
          const error = { type: "error", message: `Error! ${order.orderNo} wasn’t canceled.` };
          handleOpenSnackbar(error);
          console.log("orders", err.response);
        });
    }
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
              className={classes.title}
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
              <Box className={classes.inputBox}>
                <FormControlLabel
                  value="Canceled"
                  control={(
                    <Switch
                      disabled={editedOrder.canceled}
                      checked={editedOrder.canceled}
                      value="enabled"
                      id="enabled"
                      color="primary"
                      onChange={handleSwitchChange}
                    />
                  )}
                  label="Canceled"
                  labelPlacement="start"
                />
                <TextField
                  disabled={editedOrder.canceled}
                  className={classes.input}
                  id="status"
                  label="Status"
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
              <Button variant="contained" type="submit" onClick={() => editOrder()}>
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