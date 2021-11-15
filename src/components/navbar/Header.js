import React from "react";
import AppBar from "@mui/material/AppBar";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Popover from "@mui/material/Popover";

import ScopedCssBaseline from "@mui/material/ScopedCssBaseline";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import LoginPopup from "../popup/LoginPopup";

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 2 : 0,
    sx: trigger
      ? {
          background: "white",
          transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        }
      : {
          background: "transparent",
          transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        },
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
const Header = (props) => {
  const [openLogin, setOpenLogin] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  return (
    <ScopedCssBaseline>
      <ElevationScroll {...props}>
        <AppBar
        // color=""
        //   sx={{
        //     background: "white",
        //     transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        //   }}
        >
          <Container fixed>
            <Toolbar>
              <Typography
                sx={{ fontWeight: 700 }}
                variant="h5"
                className={classes.logo}
              >
                Food Road
                <i className="fab fa-typo3" />
              </Typography>
              <Stack alignItems="center" direction="row" spacing={4}>
                <NavLink
                  to="/home"
                  activeClassName={classes["link--active"]}
                  className={classes.link}
                >
                  Home
                </NavLink>
                <NavLink
                  activeClassName={classes["link--active"]}
                  to="/tours"
                  className={classes.link}
                >
                  Tours
                </NavLink>
                <NavLink
                  activeClassName={classes["link--active"]}
                  to="/about"
                  className={classes.link}
                >
                  About
                </NavLink>
                <NavLink
                  activeClassName={classes["link--active"]}
                  to="/contact"
                  className={classes.link}
                >
                  Contact
                </NavLink>
                <NavLink
                  activeClassName={classes["link--active"]}
                  to="/faqs"
                  className={classes.link}
                >
                  FAQ
                </NavLink>
                {!localStorage.getItem("isLogin") === true && (
                  <Stack direction="row" spacing={1}>
                    <Button
                      onClick={() => {
                        setOpenLogin(true);
                      }}
                      variant="outlined"
                    >
                      Login
                    </Button>
                    <Button href="/sign-up" variant="contained">
                      Sign up
                    </Button>
                  </Stack>
                )}
                {localStorage.getItem("isLogin") && (
                  // <Stack direction="row" spacing={1}>
                  // <Button
                  //   onClick={() => {
                  //     localStorage.removeItem("isLogin");
                  //     window.location.reload();
                  //   }}
                  //   variant="outlined"
                  // >
                  //   Đăng xuất
                  // </Button>
                  // </Stack>\
                  <>
                    <Avatar
                      alt="Remy Sharp"
                      onMouseEnter={handlePopoverOpen}
                      // onMouseLeave={handlePopoverClose}
                      sx={{ width: 32, height: 32 }}
                      src="https://vnn-imgs-f.vgcloud.vn/2020/04/13/23/suzy-tinh-dau-quoc-dan-so-huu-khoi-tai-san-chuc-trieu-do.jpg"
                    />
                    <Popover
                      id="mouse-over-popover"
                      open={open}
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      onClose={handlePopoverClose}
                      disableRestoreFocus
                    >
                      <Stack spacing={1} sx={{ width: "150px" }}>
                        <Button
                          href="/profile"
                          onClick={() => {}}
                          variant="text"
                          sx={{
                            color: "#555",
                            textTransform: "none",
                            fontWeight: 300,
                            justifyContent: "flex-start",
                            paddingLeft: "20px",
                          }}
                        >
                          <i
                            style={{ marginRight: "8px" }}
                            class="far fa-user-circle"
                          ></i>
                          Profile
                        </Button>
                        <Button
                          onClick={() => {
                            localStorage.removeItem("isLogin");
                            window.location.reload();
                          }}
                          variant="text"
                          sx={{
                            color: "#555",
                            textTransform: "none",
                            fontWeight: 300,
                            justifyContent: "flex-start",
                            paddingLeft: "20px",
                          }}
                        >
                          <i
                            style={{ marginRight: "8px" }}
                            class="fas fa-sign-out-alt"
                          ></i>
                          Log Out
                        </Button>
                      </Stack>
                    </Popover>
                  </>
                )}
              </Stack>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
      <Box sx={{ height: "64px" }} />
      <LoginPopup
        open={openLogin}
        onClose={() => {
          setOpenLogin(false);
        }}
      />
    </ScopedCssBaseline>
  );
};

export default Header;
