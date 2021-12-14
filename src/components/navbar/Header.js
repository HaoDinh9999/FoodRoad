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
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ScopedCssBaseline from "@mui/material/ScopedCssBaseline";
import { NavLink, useHistory } from "react-router-dom";
import classes from "./Header.module.css";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import LoginPopup from "../popup/LoginPopup";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";

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
  const history = useHistory();
  const drawerWidth = 240;
  const [openLogin, setOpenLogin] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const drawer = (
    <div>
      <Toolbar>
        <Typography
          sx={{ fontWeight: 700, cursor: "pointer" }}
          variant="h5"
          component="span"
          className={classes.logo}
          onClick={() => {
            history.push("/");
          }}
        >
          Food Road
          <i className="fab fa-typo3" />
        </Typography>
      </Toolbar>

      <Divider />
      <Stack
        sx={{ padding: "20px", paddingTop: 0 }}
        mt={2}
        // alignItems="center"
        direction="column"
        spacing={4}
      >
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
        <NavLink
          activeClassName={classes["link--active"]}
          to="/gallery"
          className={classes.link}
        >
          Gallery
        </NavLink>
        <NavLink
          activeClassName={classes["link--active"]}
          to="/news"
          className={classes.link}
        >
          News
        </NavLink>
      </Stack>
      <Divider />
      {!localStorage.getItem("isLogin") === true && (
        <Stack
          mt={2}
          sx={{ paddingLeft: "20px", paddingRight: "20px" }}
          direction="column"
          spacing={1}
        >
          <Button
            fullWidth
            onClick={() => {
              setOpenLogin(true);
            }}
            variant="outlined"
          >
            Login
          </Button>

          <Button fullWidth href="/sign-up" variant="contained">
            Sign up
          </Button>
        </Stack>
      )}
      {localStorage.getItem("isLogin") && (
        <Stack
          mt={2}
          sx={{ paddingLeft: "20px", paddingRight: "20px" }}
          direction="column"
          spacing={1}
        >
          <Button
            fullWidth
            onClick={() => {
              localStorage.removeItem("isLogin");
              window.location.reload();
            }}
            variant="outlined"
          >
            Logout
          </Button>
        </Stack>
      )}
    </div>
  );
  const container =
    props.window !== undefined ? () => props.window().document.body : undefined;
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
            <Toolbar sx={{ justifyContent: "space-between" }} disableGutters>
              <Stack alignItems="center" spacing={1} direction="row">
                <IconButton
                  color="default"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { md: "none" } }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                  sx={{ fontWeight: 700, cursor: "pointer" }}
                  variant="h5"
                  component="span"
                  className={classes.logo}
                  onClick={() => {
                    history.push("/");
                  }}
                >
                  Food Road
                  <i className="fab fa-typo3" />
                </Typography>
              </Stack>
              <Box display="flex" alignItems="center">
                <Stack
                  sx={{ mr: 4, display: { xs: "none", md: "flex" } }}
                  alignItems="center"
                  direction="row"
                  spacing={4}
                >
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
                  <NavLink
                    activeClassName={classes["link--active"]}
                    to="/gallery"
                    className={classes.link}
                  >
                    Gallery
                  </NavLink>
                  <NavLink
                    activeClassName={classes["link--active"]}
                    to="/news"
                    className={classes.link}
                  >
                    News
                  </NavLink>
                </Stack>
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
                  <>
                    <Avatar
                      alt="Remy Sharp"
                      onClick={handlePopoverOpen}
                      sx={{ width: 32, height: 32, cursor: "pointer" }}
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
                          onClick={(event) => {
                            event.preventDefault();
                            history.push("/profile");
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
                            class="far fa-user-circle"
                          ></i>
                          Profile
                        </Button>
                        <Button
                          href="/order"
                          onClick={(event) => {
                            event.preventDefault();
                            history.push("/order");
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
                            class="fas fa-history"
                          ></i>
                          History
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
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
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
Header.propTypes = {
  window: PropTypes.func,
};
export default Header;
