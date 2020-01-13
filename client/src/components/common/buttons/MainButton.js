import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import theme from "../../../theme";

const ColorButton = withStyles(() => ({
  root: {
    fontSize: 12,
    fontWeight: 700,
    color: theme.palette.secondary.light,
    margin: 5,
    padding: "8px 18px",
    cursor: "pointer",
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}))(Button);

const MainButton = ({ text, onClick }) => {
  return <ColorButton onClick={onClick}>{text}</ColorButton>;
};

export default MainButton;
