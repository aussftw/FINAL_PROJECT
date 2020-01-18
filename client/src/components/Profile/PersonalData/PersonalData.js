import React, { useState } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import axios from "axios";
import { editDataSuccess, editDataFailure } from "../../../store/actions";
import useStyles from "./useStyles";
// eslint-disable-next-line no-shadow
function PersonalData({ userData, editDataSuccess, editDataFailure }) {
  const classes = useStyles();
  const [isEditable, setIsEditable] = useState(false);
  const [value, setValue] = useState({
    firstName: userData.firstName,
    lastName: userData.lastName,
    email: userData.email,
    telephone: userData.telephone,
  });
  const [message, setMessage] = useState("");
  // useEffect(() => {
  // axios.get("/customers/customer")
  //   .then(loggedInCustomer => {
  //     setValue({
  //       firstName: loggedInCustomer.data.firstName,
  //       lastName: loggedInCustomer.data.lastName,
  //       email: loggedInCustomer.data.email,
  //       telephone: loggedInCustomer.data.telephone,
  //   });
  // })
  //     .catch(error => setMessage(`Error: ${error.message}`));
  // }, []);
  const editData = event => {
    event.preventDefault();
    setMessage("");
    setIsEditable(true);
  };
  const updatedCustomer = {
    firstName: value.firstName,
    lastName: value.lastName,
    email: value.email,
    telephone: value.telephone,
  };
  const saveData = event => {
    event.preventDefault();
    setMessage("");
    axios
      .put("/customers", updatedCustomer)
      .then(updatedUser => {
        // eslint-disable-next-line
        console.log(updatedUser);
        editDataSuccess(updatedUser.data);
      })
      .catch(error => {
        console.log(error);
        editDataFailure(error);
        setMessage(`Error: ${error.message}`);
      });
    setIsEditable(false);
  };
  const handleChange = event => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <h2 className={classes.title}>Personal Details</h2>
      <div className={classes.root}>
        <ValidatorForm
          className={classes.form}
          noValidate={false}
          autoComplete="off"
          onSubmit={saveData}
        >
          <TextValidator
            id="customer-name-input"
            disabled={!isEditable}
            label="First Name"
            value={value.firstName}
            variant={isEditable ? "outlined" : "standard"}
            inputProps={{
              name: "firstName",
              minLength: 2,
              pattern: "^[`'\"()A-Za-zd.s_-]{2,50}$",
            }}
            onChange={handleChange}
            validators={["required", "matchRegexp:^[`'\"()A-Za-zd.s_-]{2,50}$"]}
            errorMessages={[
              "this field is required",
              "Your name must be more then 2 characters, including only latin letters",
            ]}
          />
          <TextValidator
            id="customer-last-name-input"
            disabled={!isEditable}
            label="Last Name"
            value={value.lastName}
            variant={isEditable ? "outlined" : "standard"}
            inputProps={{
              name: "lastName",
              minLength: 2,
              pattern: "^[`'\"()A-Za-zd.s_-]{2,50}$",
            }}
            onChange={handleChange}
            validators={["required", "matchRegexp:^[`'\"()A-Za-zd.s_-]{2,50}$"]}
            errorMessages={[
              "this field is required",
              "Your last name must be more then 2 characters, including only latin letters",
            ]}
          />
          <TextValidator
            id="customer-email-input"
            disabled={!isEditable}
            label="Email"
            value={value.email}
            variant={isEditable ? "outlined" : "standard"}
            inputProps={{
              name: "email",
              type: "email",
              pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
            }}
            onChange={handleChange}
            validators={["required", "isEmail"]}
            errorMessages={["this field is required", "email is not valid"]}
          />
          <TextValidator
            id="customer-phone-input"
            disabled={!isEditable}
            label="Phone Number"
            type="tel"
            value={value.telephone}
            variant={isEditable ? "outlined" : "standard"}
            inputProps={{
              name: "telephone",
              type: "tel",
              pattern: "^[0-9-+\\s()]*$",
              minLength: 10,
              maxLength: 18,
            }}
            onChange={handleChange}
            validators={["required", "matchRegexp:^[0-9-+\\s()]{10,18}$"]}
            errorMessages={["this field is required", "phone is not valid"]}
          />
          {isEditable ? (
            <Button type="submit">SAVE DATA</Button>
          ) : (
            <Button onClick={editData}>EDIT PERSONAL DATA</Button>
          )}
        </ValidatorForm>
        {Boolean(message) && <p className={classes.message}>{message}</p>}
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    user: state.user.userData,
  };
}
export default connect(mapStateToProps, { editDataSuccess, editDataFailure })(
  PersonalData
);
