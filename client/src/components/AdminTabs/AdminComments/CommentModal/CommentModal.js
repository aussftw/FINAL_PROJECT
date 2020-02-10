import React, {useEffect, useState} from "react";
import * as axios from "axios";

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop/Backdrop";
import Fade from "@material-ui/core/Fade";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import useStyles from "./useStyles";

const ModalComment = ({data, isOpen, onClose, refresh}) => {
    const classes = useStyles();
    const [commentValue, setCommentValue] = useState({
        id: "",
        name: "",
        login: "",
        firstName: "",
        lastName: "",
        comment: "",
    });

    const handleChange = event => {
        setCommentValue({ ...commentValue, comment: event.target.value });
    };

    const submitHandler = () => {
        const updatedComment = {content: commentValue.comment};
            axios
                .put(`/api/comments/${commentValue.id}`, updatedComment)
                .then(response => {
                    console.log(`Comment id:"${response.data._id}" changed successfully! New value: "${response.data.content}"`);
                    onClose();
                    refresh();
                })
                .catch(err => {
                    // eslint-disable-next-line no-console
                    console.log(err.response);
                });
    };

    useEffect(() => {
        if (data !== null) {
            setCommentValue({
                id: data._id,
                name: data.product.name,
                login: data.customer.login,
                firstName: data.customer.firstName,
                lastName: data.customer.lastName,
                comment: data.content,
            })
        }
    }, [data]);

    return (
      <Modal
        open={isOpen}
        onClose={onClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
                timeout: 500,
            }}
      >
        <Fade in={isOpen}>
          <Box className={classes.modal}>
            <Typography component="h3" align="center" style={{ padding: "4px" }}>
              Edit comment
            </Typography>
            <IconButton
              component="span"
              onClick={onClose}
              className={classes.closeBtn}
            >
              <CloseIcon />
            </IconButton>

            <FormControl component="div" className={classes.form} fullWidth>
              <Typography component="p" style={{paddingBottom: 16, textTransform: "capitalize"}}>
                {`Product: ${commentValue.name}`}
              </Typography>
              <Typography component="p">
                {`Login: ${commentValue.login}`}
              </Typography>
              <Typography component="p">
                {`First Name: ${commentValue.firstName}`}
              </Typography>
              <Typography component="p">
                {`Last Name: ${commentValue.lastName}`}
              </Typography>
              <TextField
                className={classes.input}
                id="comment"
                label="Comment"
                size="small"
                variant="outlined"
                multiline
                rows="10"
                value={commentValue.comment}
                onChange={handleChange}
              />
              <Button variant="contained" type="submit" onClick={submitHandler}>
                            Submit
              </Button>
            </FormControl>
          </Box>
        </Fade>
      </Modal>
    );
};

export default ModalComment;
