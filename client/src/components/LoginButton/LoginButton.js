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
            <Typography component="span">Welcome,</Typography>
            <Typography component="span">{` ${user.firstName} ${user.lastName}`}</Typography>
          </div>
          {/*<Link to="/profile" className={classes.link}>*/}
          {/*  <IconButton>*/}
          {/*    <AccountCircle />*/}
          {/*  </IconButton>*/}
          {/*</Link>*/}
          <ProfileMenu />
        </div>
      ) : (
          <Button className={classes.btn} variant="outlined" type="button" onClick={handleModal}>
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
