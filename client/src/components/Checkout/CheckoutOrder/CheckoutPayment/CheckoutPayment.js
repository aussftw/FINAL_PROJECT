import React, { useState } from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import withStyles from "@material-ui/core/styles/withStyles";
import { Box, Typography } from "@material-ui/core";
import {TextValidator} from "react-material-ui-form-validator";
import useStyles from "./useStyles";
import theme from "../../../../theme";
import AmericanExpress from "./pics/AmericanExpress.png";
import PayPal from "./pics/PayPal.png";
import MasterCard from "./pics/mastercard.png";
import Visa from "./pics/visa.png";

const GreenCheckbox = withStyles({
  root: {
    color:theme.palette.primary.main,
    "&$checked": {
      color: theme.palette.primary.main,
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);


const CheckoutPayments = () => {
  const [state, setState] = useState({
    cash: true,
    card: false,
  });
  const [cardData, setCardData] = useState({
    cardNumber1: "",
    cardNumber2: "",
    cardNumber3: "",
    cardNumber4: "",
    month: "01",
    year: "20",
    CV: "",
  });

  const handleChange = event => {
    if(event.target.value === "cash" ) {
      setState({ ...state, [event.target.value]: event.target.checked, card: !event.target.checked});
    } else {
      setState({ ...state, [event.target.value]: event.target.checked, cash: !event.target.checked});
    }
  };
  const handleInputsChange = event => {
    if (!isNaN(event.target.value)) {
      setCardData({ ...cardData, [event.target.name]: event.target.value});
    }
  };

  const classes = useStyles();

  return (
    <div className={classes.paymentWrapper}>
      <FormGroup row className={classes.checkboxForm}>
        <Typography className={classes.paymentText}>Choose payment : </Typography>
        <div>
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
        </div>
      </FormGroup>
      <>
        {state.card && (
          <div className={classes.creditCardConteiner}>
            <div>
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
                      value={cardData.cardNumber1}
                      name="cardNumber1"
                      onChange={event => handleInputsChange(event)}
                      className={classes.creditCardNumbersItem}
                      size="small"
                      variant="outlined"
                      inputProps={{
                        className: classes.creditCardInput,
                        maxLength: 4,
                      }}
                      validators={["required", "matchRegexp:^3[47][0-9]{2}|4[0-9]{3}|5[1-5][0-9]{2}$"]}
                      errorMessages={[]}
                    />
                    <TextValidator
                      value={cardData.cardNumber2}
                      name="cardNumber2"
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
                      value={cardData.cardNumber3}
                      name="cardNumber3"
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
                      value={cardData.cardNumber4}
                      name="cardNumber4"
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
                  <Typography className={classes.creditCardTitle}>
                    VALID THRU
                    <Typography component="span" className={classes.creditCardTitleCV}>CVC2 / CVV2</Typography>
                  </Typography>
                  <div className={classes.creditCardDataGroup}>
                    <div className={classes.creditCardDataGroupBox}>
                      <TextValidator
                        value={cardData.month}
                        name="month"
                        onChange={event => handleInputsChange(event)}
                        className={classes.creditCardDatesItem}
                        size="small"
                        variant="outlined"
                        inputProps={{
                          className: classes.creditCardDateInput,
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
                          className: classes.creditCardDateInput,
                          maxLength: 2,
                        }}
                        validators={["required", "matchRegexp:^2[0-9]$"]}
                        errorMessages={[]}
                      />
                    </div>
                    <TextValidator
                      value={cardData.CV}
                      name="CV"
                      onChange={event => handleInputsChange(event)}
                      className={classes.creditCardCVInputBoxMini}
                      size="small"
                      variant="outlined"
                      inputProps={{
                        className: classes.creditCardCVInput,
                        maxLength: 3,
                        type: "password",
                        autoComplete: "password"
                      }}
                      validators={["required", "matchRegexp:^[0-9]{3}$"]}
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
                    className={classes.creditCardCVInputBox}
                    size="small"
                    variant="outlined"
                    inputProps={{
                      className: classes.creditCardCVInput,
                      maxLength: 3,
                      type: "password",
                      autoComplete: "password"
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
