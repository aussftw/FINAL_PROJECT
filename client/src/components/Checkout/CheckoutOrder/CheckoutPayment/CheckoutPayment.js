import React, { useState } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import withStyles from '@material-ui/core/styles/withStyles';
import { Box, Typography } from "@material-ui/core";
import {TextValidator} from "react-material-ui-form-validator";
import useStyles from "./useStyles";
import theme from '../../../../theme';
import AmericanExpress from "../../../Footer/Payment/pics/AmericanExpress.png";
import PayPal from "../../../Footer/Payment/pics/PayPal.png";
import MasterCard from "../../../Footer/Payment/pics/mastercard.png";
import Visa from "../../../Footer/Payment/pics/visa.png";

const GreenCheckbox = withStyles({
  root: {
    color:theme.palette.primary.main,
    '&$checked': {
      color: theme.palette.primary.main,
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);


const CheckoutPayments = () => {
  const [state, setState] = useState({
    cash: false,
    card: false,
  });
  const [cardData, setCardData] = useState({
    input1: "0000",
    input2: "0000",
    input3: "0000",
    input4: "0000",
    month: "01",
    year: "20",
    CV: "000",
  });

  const handleChange = event => {
    if(event.target.value === "cash" ) {
      setState({ ...state, [event.target.value]: event.target.checked, card: !event.target.checked});
    } else {
      setState({ ...state, [event.target.value]: event.target.checked, cash: !event.target.checked});
    }

  };
  const handleInputsChange = event => {
    // eslint-disable-next-line no-restricted-globals
    if (!isNaN(event.target.value)) {
      setCardData({ ...cardData, [event.target.name]: event.target.value});
    }
  };

  const classes = useStyles();

  return (
    <div className={classes.paymentWrapper}>
      <FormGroup row className={classes.checkboxForm}>
        <p className={classes.paymentText}>Choose payment : </p>
        <FormControlLabel
          className={classes.checkboxLabel}
          control={(
            <GreenCheckbox
              checked={state.cash}
              onChange={e => handleChange(e)}
              value="cash"
            />
          )}
          label="Cash"
        />
        <FormControlLabel
          className={classes.checkboxLabel}
          control={(
            <GreenCheckbox
              checked={state.card}
              onChange={e => handleChange(e)}
              value="card"
              className={classes.checkbox}
            />
          )}
          label="Card"
        />
      </FormGroup>
      <>
        {state.card && (
          <div className={classes.creditCardConteiner}>
            <div className={classes.creditCardWrapper}>
              <div className={classes.creditCard}>
                <Box className={classes.paymentMethods}>
                  <img className={classes.paymentMethod} src={AmericanExpress} alt="American Express" />
                  <img className={classes.paymentMethod} src={PayPal} alt="PayPal" />
                  <img className={classes.paymentMethod} src={MasterCard} alt="Master Card" />
                  <img className={classes.paymentMethod} src={Visa} alt="Visa" />
                </Box>
                <div className={classes.creditCardBox}>
                  <Typography className={classes.creditCardTitle}>CARD NUMBER</Typography>
                  <div className={classes.creditCardNumbersGroup}>
                    <TextValidator
                      value={cardData.input1}
                      name="input1"
                      onChange={event => handleInputsChange(event)}
                      className={classes.creditCardNumbersItem}
                      size="small"
                      variant="outlined"
                      inputProps={{
                        className: classes.creditCardInput,
                        maxLength: 4,
                      }}
                      validators={["required", "matchRegexp:^[0-9]{4}$"]}
                      errorMessages={[]}
                    />
                    <TextValidator
                      value={cardData.input2}
                      name="input2"
                      onChange={event => handleInputsChange(event)}
                      className={classes.creditCardNumbersItem}
                      size="small"
                      variant="outlined"
                      inputProps={{
                        className: classes.creditCardInput,
                        maxLength: 4,
                      }}
                      validators={["required", "matchRegexp:^[0-9]{4}$"]}
                      errorMessages={[]}
                    />
                    <TextValidator
                      value={cardData.input3}
                      name="input3"
                      onChange={event => handleInputsChange(event)}
                      className={classes.creditCardNumbersItem}
                      size="small"
                      variant="outlined"
                      inputProps={{
                        className: classes.creditCardInput,
                        maxLength: 4,
                      }}
                      validators={["required", "matchRegexp:^[0-9]{4}$"]}
                      errorMessages={[]}
                    />
                    <TextValidator
                      value={cardData.input4}
                      name="input4"
                      onChange={event => handleInputsChange(event)}
                      className={classes.creditCardNumbersItem}
                      size="small"
                      variant="outlined"
                      inputProps={{
                        className: classes.creditCardInput,
                        maxLength: 4,
                      }}
                      validators={["required", "matchRegexp:^[0-9]{4}$"]}
                      errorMessages={[]}
                    />
                  </div>
                  <Typography className={classes.creditCardTitle}>VALID THRU</Typography>
                  <div className={classes.creditCardDataGroup}>
                    <TextValidator
                      value={cardData.month}
                      name="month"
                      onChange={event => handleInputsChange(event)}
                      className={classes.creditCardDatesItem}
                      size="small"
                      variant="outlined"
                      inputProps={{
                        className: classes.creditCardInput,
                        maxLength: 2,
                      }}
                      validators={["required", "matchRegexp:^0[1-9]$|^1[0-2]$"]}
                      errorMessages={[]}
                    />
                    <Typography component="span" className={classes.creditCardSpan}>/</Typography>
                    <TextValidator
                      value={cardData.year}
                      name="year"
                      onChange={event => handleInputsChange(event)}
                      className={classes.creditCardDatesItem}
                      size="small"
                      variant="outlined"
                      inputProps={{
                        className: classes.creditCardInput,
                        maxLength: 2,
                      }}
                      validators={["required", "matchRegexp:^2[0-9]$"]}
                      errorMessages={[]}
                    />
                  </div>
                </div>
              </div>
              <div className={classes.creditCardBack}>
                <div className={classes.creditCardBackMagneticStripe} />
                <div className={classes.creditCardBackStripes} />
                <div className={classes.creditCardCVBox}>
                  <Typography className={classes.creditCardTitle}>CVC2 / CVV2</Typography>
                  <TextValidator
                    value={cardData.CV}
                    name="CV"
                    onChange={event => handleInputsChange(event)}
                    className={classes.creditCardCVInput}
                    size="small"
                    variant="outlined"
                    inputProps={{
                      className: classes.creditCardInput,
                      maxLength: 3,
                    }}
                    validators={["required", "matchRegexp:^[0-9]{3}$"]}
                    errorMessages={[]}
                  />
                </div>

              </div>
            </div>

          </div>
        )}
      </>
    </div>
  );
};

export default CheckoutPayments;
