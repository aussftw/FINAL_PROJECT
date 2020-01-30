import React,{useState} from "react";
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import CustomizedSearch from "../Search/Search";
import useStyles from "./useStyles"

const MobileSearch = (  ) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    if(anchorEl){
      setAnchorEl(null)
    }else {
      setAnchorEl(event.currentTarget)
    }
  };

  const open = Boolean(anchorEl);
  const id = open ? 'transitions-popper' : undefined;


  return (
    <div>
      <IconButton
        className={classes.mobileSearch}
        aria-label="show search"
        color="inherit"
        aria-describedby={id}
        type="button"
        onClick={handleClick}
      >
        <SearchIcon />
      </IconButton>
      <Popper id={id} open={open} anchorEl={anchorEl} transition placement="bottom-start">
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <div className={classes.popperSearch}>
              <CustomizedSearch />
            </div>
          </Fade>
          )}
      </Popper>
    </div>
  );
};

export default MobileSearch;
