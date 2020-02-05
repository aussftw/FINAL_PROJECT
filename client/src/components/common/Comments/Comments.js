import React, { useState, useEffect, useCallback, useRef } from "react";
import { connect } from "react-redux";
import moment from "moment-timezone";
import * as axios from "axios";

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Collapse from "@material-ui/core/Collapse";
import Fade from "@material-ui/core/Fade";

import useStyles from "./useStyles";
import {modalOpen} from "../../../store/actions/loginActions";

const Comments = ({ comments, id, isAuthenticated, modalOpen }) => {
  const classes = useStyles();
  const [allComments, setAllComments] = useState([]);
  const [perPage, setPerPage] = useState(10);
  const [write, setWrite] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [customerCommentText, setCustomerCommentText] = useState("");
  const [customerCommentError, setCustomerCommentError] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const commentInput = useRef(null);

  const handleModal = () => {
    modalOpen();
  };

  const writeHandler = () => {
    setWrite(!write);
    setTimeout(() => {
      commentInput.current.focus();
    }, 200);

  };

  const customerCommentTextHandler = event => {
    setCustomerCommentText(event.target.value);
  };

  const submittedThanksOff = () => {
    setSubmitted(false);
  };

  const submittedThanksHandler = () => {
    setSubmitted(true);
    setTimeout(submittedThanksOff, 3000);
  };

  const readMoreHandler = () => {
    setPerPage(perPage + 10);
  };

  const commentsGenerator = useCallback(
    (newComment = false) => {
      const tempArray = comments;
      if (newComment) {
        tempArray.unshift(newComment);
      }
      setAllComments(
        tempArray.map(item => {
          const dateFormat = moment.tz(item.date, "Europe/Kiev").format().split("T", 1);

          return (
            <li key={item._id}>
              <Box className={classes.commentBox}>
                <Box className={classes.customerNameBox}>
                  <Typography className={classes.customerName} component="span">
                    {item.customer.firstName}
                    {item.customer.lastName}
                  </Typography>
                  <Typography className={classes.commentDate} component="span">
                    {dateFormat}
                  </Typography>
                </Box>
                <Box className={classes.customerCommentBox}>
                  <Typography
                    className={classes.customerComment}
                    component="span"
                  >
                    {item.content}
                  </Typography>
                </Box>
              </Box>
            </li>
          );
        })
      );
    },
      // eslint-disable-next-line react-hooks/exhaustive-deps
    [comments]
  );

  const customerTextErrorOff = () => {
    setCustomerCommentError("");
  };

  const submitHandler = () => {
    if (customerCommentText.length > 2) {
        const request = { product: id, content: customerCommentText};
      axios
        .post(`/api/comments`, request)
        .then(response => {
          commentsGenerator(response.data);
          setWrite(false);
          setCustomerCommentText("");
          submittedThanksHandler();
        })
        .catch(err => {
          // eslint-disable-next-line no-console
          console.log(err.response);
        });

    } else {
      setCustomerCommentError("Comment too short write more please");
      setTimeout(customerTextErrorOff, 3000);
    }
  };

  useEffect(() => {
    commentsGenerator();
  }, [commentsGenerator]);

  useEffect(() => {
    if (perPage < allComments.length) {
      setLoadMore(true);
    } else {
      setLoadMore(false);
    }
  }, [allComments.length, perPage]);

  return (
    <>
      {isAuthenticated ? (
        <Button variant="outlined" disabled={write} onClick={writeHandler}>
          write comment
        </Button>
      ) : (
        <Button variant="text" onClick={handleModal}>
          Please login to leave a comment
        </Button>
      )}
      <Collapse in={write}>
        <>
          <TextField
            id="customer-comment"
            inputRef={commentInput}
            label="Write your comment here"
            multiline
            rows="4"
            variant="outlined"
            fullWidth
            margin="normal"
            value={customerCommentText}
            error={!!customerCommentError}
            helperText={customerCommentError}
            onChange={customerCommentTextHandler}
          />
          <Box className={classes.commentButtons}>
            <Button
              variant="contained"
              onClick={submitHandler}
              style={{ marginRight: 16 }}
            >
              Submit comment
            </Button>
            <Button variant="text" onClick={()=>{setWrite(false)}}>
              Cancel
            </Button>
          </Box>
        </>
      </Collapse>
      <Fade in={submitted} timeout={1000}>
        <Box className={classes.thanksBox}>
          <Typography className={classes.thanksText} component="span">
            Thank you for leaving feedback!
          </Typography>
        </Box>
      </Fade>
      {comments.length ? (
        <>
          <ul className={classes.list}>{allComments.slice(0, perPage)}</ul>
          {loadMore && (
            <Box className={classes.centeredBox}>
              <Button variant="contained" onClick={readMoreHandler}>
                more comments
              </Button>
            </Box>
          )}
        </>
      ) : (
        <Typography className={classes.noComments} component="p">
          No comments yet
        </Typography>
      )}
    </>
  );
};

function mapStateToProps(state) {
  return {
    isAuthenticated: state.loginReducer.isAuthenticated,
  };
}

export default connect(mapStateToProps, { modalOpen })(Comments);
