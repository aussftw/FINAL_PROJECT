import React from 'react';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Button from '@material-ui/core/Button';
import CheckoutPayments from './CheckoutPayment/CheckoutPayment';
import useStyles from "./useStyles";

const CheckoutOrder = ({ user, isAuthenticated, handleChange, handleSubmit }) => {
  const classes = useStyles();

  return (
      <>
        {isAuthenticated ? (
          <>
            <p className={classes.infoForUser}>
       <span>{user.firstName}</span
       > , Fill in this form, please.</p>
          </>
        ) : (
          <>
            <p className={classes.infoForUser}>You are new User.</p>
            < p className={classes.infoForUser}>Fill in this form, please.</p>
          </>
        )}
        <ValidatorForm
          noValidate={false}
          autoComplete="off"
          className={classes.form}
          onSubmit={handleSubmit}
        >
          <TextValidator
            label="First Name"
            variant="outlined"
            name="firstName"
            value={user.firstName}
            onChange={e => handleChange(e)}
            className={classes.textField}
            validators={[
              'required',
              'matchRegexp:^[`\'"()A-Za-zd.s_-]{2,25}$',
            ]}
            errorMessages={[
              'this field is required',
              'Your name must be more then 2 characters, including only latin letters',
            ]}
          />
          <TextValidator
            label="Email"
            variant="outlined"
            name="email"
            value={user.email}
            onChange={e => handleChange(e)}
            className={classes.textField}
            validators={['required', 'isEmail']}
            errorMessages={['this field is required', 'email is not valid']}
          />
          <TextValidator
            label="Telephone"
            variant="outlined"
            name="telephone"
            value={user.telephone === undefined ? '' : user.telephone}
            onChange={handleChange}
            className={classes.textField}
            validators={['required', 'matchRegexp:^[0-9-+\\s()]{13}$']}
            errorMessages={[
              'this field is required',
              'phone is not valid, need +380... format',
            ]}
          />
          <TextValidator
            label="Delivery address"
            variant="outlined"
            name="address"
            value={user.address === undefined ? '' : user.address}
            onChange={e => handleChange(e)}
            className={classes.textField}
          />
          <CheckoutPayments />
          <Button className={classes.submitBtn} type="submit">Checkout</Button>
        </ValidatorForm>
      </>
  );
};



export default CheckoutOrder;
