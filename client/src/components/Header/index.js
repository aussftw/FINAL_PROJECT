import React from 'react';

import CustomizedSearch from './Search'
import TemporaryDrawer from './BurgerPanel'

import {fade, makeStyles} from '@material-ui/core/styles';

import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';


const useStyles = makeStyles(theme => ({
  flex: {
    display: 'flex',
    justifyContent: 'space-between',

  },
  // grow: {
  //   flexGrow: 1,
  // },
  // menuButton: {
  //   marginRight: theme.spacing(2),
  // },

  // inputRoot: {
  //   color: 'inherit',
  // },
  // inputInput: {
  //   padding: theme.spacing(1, 1, 1, 7),
  //   transition: theme.transitions.create('width'),
  //   width: '100%',
  //   [theme.breakpoints.up('md')]: {
  //     width: 200,
  //   },
  // },
  // sectionDesktop: {
  //   display: 'none',
  //   [theme.breakpoints.up('md')]: {
  //     display: 'flex',
  //   },
  // },
  // sectionMobile: {
  //   display: 'flex',
  //   [theme.breakpoints.up('md')]: {
  //     display: 'none',
  //   },
  // },
}));

export default function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
      <Menu
          anchorEl={anchorEl}
          anchorOrigin={{vertical: 'top', horizontal: 'right'}}
          id={menuId}
          keepMounted
          transformOrigin={{vertical: 'top', horizontal: 'right'}}
          open={isMenuOpen}
          onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      </Menu>
  );

  // const mobileMenuId = 'primary-search-account-menu-mobile';
  // const renderMobileMenu = (
  //     <Menu
  //         anchorEl={mobileMoreAnchorEl}
  //         anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
  //         id={mobileMenuId}
  //         keepMounted
  //         transformOrigin={{ vertical: 'top', horizontal: 'right' }}
  //         open={isMobileMenuOpen}
  //         onClose={handleMobileMenuClose}
  //     >
  //       <MenuItem>
  //         <IconButton aria-label="show 4 new mails" color="inherit">
  //           <Badge badgeContent={4} color="secondary">
  //             <MailIcon />
  //           </Badge>
  //         </IconButton>
  //         <p>Messages</p>
  //       </MenuItem>
  //       <MenuItem>
  //         <IconButton aria-label="show 11 new notifications" color="inherit">
  //           <Badge badgeContent={11} color="secondary">
  //             <NotificationsIcon />
  //           </Badge>
  //         </IconButton>
  //         <p>Notifications</p>
  //       </MenuItem>
  //       <MenuItem onClick={handleProfileMenuOpen}>
  //         <IconButton
  //             aria-label="account of current user"
  //             aria-controls="primary-search-account-menu"
  //             aria-haspopup="true"
  //             color="inherit"
  //         >
  //           <AccountCircle />
  //         </IconButton>
  //         <p>Profile</p>
  //       </MenuItem>
  //     </Menu>
  // );

  return (
      <div>
        <AppBar color="white" position="fixed">
          <Toolbar className={classes.flex}>
            <TemporaryDrawer/>
            <Typography>LOGO</Typography>
            <CustomizedSearch/>
            <div/>
            <div>
              <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={8} color="secondary">
                  <MailIcon/>
                </Badge>
              </IconButton>
              <IconButton aria-label="show 17 new notifications" color="inherit">
                <Badge badgeContent={5} color="secondary">
                  <NotificationsIcon/>
                </Badge>
              </IconButton>
              <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
              >
                <AccountCircle/>
              </IconButton>

              {/*<div className={classes.sectionMobile}>*/}
              {/*  <IconButton*/}
              {/*      aria-label="show more"*/}
              {/*      aria-controls={mobileMenuId}*/}
              {/*      aria-haspopup="true"*/}
              {/*      onClick={handleMobileMenuOpen}*/}
              {/*      color="inherit"*/}
              {/*  >*/}
              {/*    <MoreIcon />*/}
              {/*  </IconButton>*/}
              {/*</div>*/}
            </div>
          </Toolbar>
        </AppBar>
        {/*{renderMobileMenu}*/}
        {renderMenu}

      </div>
  );
}