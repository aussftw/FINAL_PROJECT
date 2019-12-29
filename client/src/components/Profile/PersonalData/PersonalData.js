import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import useStyles from "./useStyles";

const user = {
  name: "Customer",
  lastName: "Customerov",
  email: "customer@mail.com",
  phone: "+11 123 33 44",
};

export default function PersonalData({ customer = user }) {
  const classes = useStyles();
  const [isEditable, setIsEditable] = useState(false);
  // const [ nameValue, setNameValue] = useState(customer.name);
  // const [ lastNameValue, setLastNameValue] = useState(customer.lastName);
  // const [ emailValue, setEmailValue] = useState(customer.email);
  // const [ phoneValue, setPhoneValue] = useState(customer.phone);

  const [value, setValue] = useState({
    name: customer.name,
    lastName: customer.lastName,
    email: customer.email,
    phone: customer.phone,
  });

  const editData = event => {
    event.preventDefault();
    setIsEditable(true);
  };

  const saveData = event => {
    event.preventDefault();
    // if (!nameValue|| !lastNameValue || !emailValue || !phoneValue) {
    //   return null;
    // }
    setIsEditable(false);
  };

  const handleChange = event => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <h2 className={classes.title}>Personal Details</h2>
      <div className={classes.root}>
        <form className={classes.form} noValidate={false} autoComplete="off">
          <TextField
            id="customer-name-input"
            required
            disabled={!isEditable}
            label="First Name"
            value={value.name}
            variant={isEditable ? "outlined" : "standard"}
            /* eslint-disable-next-line no-useless-escape */
            inputProps={{
              name: "name",
              minlength: 2,
              pattern: "^[`'\"()A-Za-zd.s_-]{2,50}$",
            }}
            // onChange={event => setNameValue(event.target.value)}
            onChange={handleChange}
          />
          <TextField
            id="customer-last-name-input"
            required
            disabled={!isEditable}
            label="Last Name"
            value={value.lastName}
            variant={isEditable ? "outlined" : "standard"}
            /* eslint-disable-next-line no-useless-escape */
            inputProps={{
              name: "lastName",
              minlength: 2,
              pattern: "^[`'\"()A-Za-zd.s_-]{2,50}$",
            }}
            // onChange={event => setLastNameValue(event.target.value)}
            onChange={handleChange}
          />
          <TextField
            id="customer-email-input"
            required
            disabled={!isEditable}
            label="Email"
            value={value.email}
            // InputProps={{ readOnly: !isEditable, }}
            variant={isEditable ? "outlined" : "standard"}
            /* eslint-disable-next-line no-useless-escape */
            inputProps={{
              name: "email",
              type: "email",
              pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
            }}
            // onChange={event => setEmailValue(event.target.value)}
            onChange={handleChange}
          />
          <TextField
            id="customer-phone-input"
            required
            disabled={!isEditable}
            label="Phone Number"
            type="tel"
            value={value.phone}
            // InputProps={{readOnly: !isEditable}}
            variant={isEditable ? "outlined" : "standard"}
            inputProps={{
              name: "phone",
              type: "tel",
              pattern: "^[0-9-+\\s()]*$",
              minlength: 10,
              maxlength: 18,
            }}
            // onChange={event => setPhoneValue(event.target.value)}
            onChange={handleChange}
          />
          {isEditable ? (
            <Button type="submit" onClick={saveData}>
              SAVE DATA
            </Button>
          ) : (
            // onSubmit={saveData}>SAVE DATA</Button>
            <Button onClick={editData}>EDIT PERSONAL DATA</Button>
          )}
        </form>
      </div>
    </div>
  );
}
