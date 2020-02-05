import React from "react";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ProfileMenu from "../Header/ProfileMenu/ProfileMenu";
import { modalOpen } from '../../store/actions/loginActions';
import useStyles from "./useStyles";

const LoginButton = ({
  isAuthenticated,
  user,
  modalOpen
}) => {
  const handleModal = () => {
    modalOpen();
  };

  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      {isAuthenticated ? (
        <div className={classes.wrapper}>
          <div className={classes.span}>
            <Typography component="span">Welcome,&nbsp;</Typography>
            <Typography component="span" noWrap>{` ${user.firstName}`}</Typography>
          </div>
          <ProfileMenu />
        </div>
      ) : (
        <Button className={classes.btn} variant="contained" type="button" onClick={handleModal}>
            Sign In
        </Button>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.loginReducer.isAuthenticated,
    user: state.loginReducer.user,
  };
};

export default connect(mapStateToProps , { modalOpen })(
  LoginButton
);
