import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import * as axios from "axios";

import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";
import Tooltip from "@material-ui/core/Tooltip";
import StarBorder from "@material-ui/icons/StarBorder";
import useStyles from "./useStyles";

const RatingModule = ({id, rate, isAuthenticated}) => {
    const classes = useStyles();
    const [voted, setVoted] = useState(true);
    const [rating, setRating] = useState(rate);

    const cardTooltipText = () => {
        if (!voted) { return "please rate this product" }
        if (rating === undefined || rating === 0) { return "not yet rated" }
        return `rated ${rating.toFixed(2)} out of 5`;
    };

    const ratingHandler = (event) => {
        setVoted(true);
        const {value} = event.target;
        axios
            .put(`/api/rating/${id}`, {value})
            .then(response => {
                if (response.data) {
                    setRating(response.data.rate.rating);
                }
            })
            .catch(err => {
                // eslint-disable-next-line no-console
                console.log(err.response);
            });
    };

    useEffect(() => {
        if (isAuthenticated && id) {
            axios
                .get("/api/rating")
                .then(response => {
                    setVoted(response.data.products.some(item => {
                        return item._id === id;
                    }));
                })
                .catch(err => {
                    // eslint-disable-next-line no-console
                    console.log(err.response);
                });
        } else {
            setVoted(true);
        }
        setRating(rate);
    }, [id, isAuthenticated, rate]);

    return (
      <Tooltip placement="top" title={cardTooltipText()}>
        <Box>
          <Rating
            className={classes.rating}
            name="ratingModule"
            value={rating}
            size="medium"
            readOnly={voted}
            precision={1}
            emptyIcon={
              <StarBorder color="primary" style={{ fontSize: 24}} />
                    }
            onChange={ratingHandler}
          />
        </Box>
      </Tooltip>
    )
};

function mapStateToProps(state) {
    return {
        isAuthenticated: state.loginReducer.isAuthenticated,
    };
}
export default connect(mapStateToProps)(RatingModule);
