import React, { useState } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Cards from 'react-credit-cards';
import useStyles from "./useStyles";
import theme from '../../../../theme';
import 'react-credit-cards/es/styles-compiled.css';
import withStyles from '@material-ui/core/styles/withStyles';

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

  const handleChange = event => {
    setState({ ...state, [event.target.value]: event.target.checked });
  };

  const classes = useStyles();

  return (
    <div className={classes.paymentWrapper}>
      <FormGroup row className={classes.checkboxForm}>
        <p className={classes.paymentText}>Choose payment : </p>
        <FormControlLabel
          className={classes.checkboxLabel}
          control={
            <GreenCheckbox
              checked={state.cash}
              onChange={e => handleChange(e)}
              value="cash"
            />
          }
          label="Cash"
        />
        <FormControlLabel
          className={classes.checkboxLabel}
          control={
            <GreenCheckbox
              checked={state.card}
              onChange={e => handleChange(e)}
              value="card"
              className={classes.checkbox}
            />
          }
          label="Card"
        />
      </FormGroup>
      <>
        {state.card ? (
          <p>abcdefg</p>
        ) : ("")}
      </>
    </div>
  );
};

export default CheckoutPayments;
