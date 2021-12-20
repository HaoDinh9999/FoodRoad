import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InputAdornment from "@mui/material/InputAdornment";
import { Grid } from "@mui/material";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { green } from "@mui/material/colors";

function Footer2() {
  const [state, setState] = React.useState({
    open: false,
    vertical: "bottom",
    horizontal: "left",
  });

  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      "&:hover": {
        bgcolor: green[700],
      },
    }),
  };

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <Box sx={{ backgroundColor: "#F8F6F6" }}>
      <Container maxWidth="lg">
        <Box sx={{ pt: 2, pb: 4 }}>
          <Box sx={{ pb: 1 }}>
            <Typography sx={{ fontWeight: 700 }} variant="h5">
              Food Road
              <i style={{ marginLeft: "4px" }} className="fab fa-typo3" />
            </Typography>
            <Typography variant="subtitle2" color="#999999">
              Experience the food and culture of Saigon
            </Typography>
          </Box>
          <Divider></Divider>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={3}>
            {/* <Box display="flex" sx={{flexDirection: 'row', pb: 5}} justifyContent="center"> */}
            <Box>
              <Stack spacing="8px">
                <Link
                  href="#"
                  fontWeight="bold"
                  underline="hover"
                  color="black"
                >
                  About Foodroad
                </Link>
                <Link
                  href="/order"
                  fontWeight="bold"
                  underline="hover"
                  color="black"
                >
                  Your Order
                </Link>
                <Link
                  href="/payments"
                  fontWeight="bold"
                  underline="hover"
                  color="black"
                >
                  Payments
                </Link>
                <Link
                  href="/news"
                  fontWeight="bold"
                  underline="hover"
                  color="black"
                >
                  Our News Blog
                </Link>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Box>
              <Stack spacing="8px">
                <Link
                  href="/faqs"
                  fontWeight="bold"
                  underline="hover"
                  color="black"
                >
                  FAQ
                </Link>
                <Link
                  href="/contact"
                  fontWeight="bold"
                  underline="hover"
                  color="black"
                >
                  Contact Us
                </Link>
                <Link
                  href="/policy"
                  fontWeight="bold"
                  underline="hover"
                  color="black"
                >
                  Privacy Policy
                </Link>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{ pr: 0 }} fullWidth>
              <Stack spacing="5px">
                <Typography fontWeight="bold">
                  Subscribe to our Newsletter
                </Typography>
                <Box display="flex" sx={{ pt: 2 }}>
                  <Box sx={{ pr: 1 }} style={{ width: "100%" }}>
                    <TextField
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <MailOutlineIcon />
                          </InputAdornment>
                        ),
                        style: { fontSize: "20px" },
                      }}
                      InputLabelProps={{ style: { fontSize: "20px" } }}
                      size="big"
                      id="standard-helperText"
                      label="Enter your e-mail here"
                      variant="standard"
                      fullWidth
                    />
                  </Box>
                  <Button
                    variant="contained"
                    disableElevation
                    style={{ width: "60%" }}
                    onClick={handleClick({
                      vertical: "bottom",
                      horizontal: "left",
                    })}
                    disabled={loading}
                  >
                    Subscribe
                  </Button>
                  <Snackbar
                    anchorOrigin={{ vertical, horizontal }}
                    autoHideDuration={6000}
                    open={open}
                    onClose={handleClose}
                    key={vertical + horizontal}
                  >
                    <Alert
                      onClose={handleClose}
                      severity="success"
                      variant="filled"
                      sx={{ width: "100%" }}
                    >
                      Subscribed!
                    </Alert>
                  </Snackbar>
                </Box>
              </Stack>
            </Box>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Box sx={{ pt: { xs: 0, sm: 5 }, height: "90%", width: "100%" }}>
              <a href="">
                <img
                  src="https://i.imgur.com/L1iu1b2.png"
                  height="100%"
                  width="100%"
                ></img>
              </a>
            </Box>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Box sx={{ pt: { xs: 0, sm: 5 }, height: "90%", width: "100%" }}>
              <a href="">
                <img
                  src="https://i.imgur.com/ii8CndV.png"
                  height="100%"
                  width="100%"
                ></img>
              </a>
            </Box>
          </Grid>

          <Grid item xs={6} sm={6}>
            <Box sx={{ pr: 0 }}>
              <Stack spacing="5px">
                <Box display="flex" flexDirection="row" sx={{ pt: 0 }}>
                  <Box sx={{ pr: "20%" }}>
                    <Typography color="#808080" fontSize="18px">
                      Call us:
                    </Typography>
                    <Typography fontSize="22px" fontWeight="bold">
                      +84 905137051
                    </Typography>
                  </Box>
                  <Box maxWidth="100%">
                    <Typography color="#808080" fontSize="18px">
                      E-mail us:
                    </Typography>
                    <Typography
                      fontSize="22px"
                      fontWeight="bold"
                      style={{ wordWrap: "break-word" }}
                    >
                      foodroad@gmail.com
                    </Typography>
                  </Box>
                </Box>
                <Box display="flex" sx={{ pt: 3 }}>
                  <Typography color="#808080" fontSize="18px">
                    Follow us on:
                  </Typography>
                  <Box sx={{ pl: 2 }}>
                    <Stack direction="row" spacing={2}>
                      <a
                        href="https://www.facebook.com/FoodRoadSaigon"
                        title="FoodRoad Facebook"
                        target="_blank"
                      >
                        {" "}
                        <i
                          class="fab fa-facebook fa-2x"
                          style={{ color: "#3b5998" }}
                        ></i>{" "}
                      </a>
                      <a
                        href="https://www.twitter.com/"
                        title="FoodRoad Twitter"
                        target="_blank"
                      >
                        {" "}
                        <i
                          class="fab fa-twitter fa-2x"
                          style={{ color: "#1DA1F2" }}
                        ></i>{" "}
                      </a>
                      <a
                        href="https://www.youtube.com/"
                        title="FoodRoad Youtube"
                        target="_blank"
                      >
                        {" "}
                        <i
                          class="fab fa-youtube fa-2x"
                          style={{ color: "#FF0000" }}
                        ></i>{" "}
                      </a>
                      <a
                        href="https://github.com/HaoDinh9999/FoodRoad"
                        title="FoodRoad Github"
                        target="_blank"
                      >
                        {" "}
                        <i class="fab fa-github fa-2x"></i>{" "}
                      </a>
                    </Stack>
                  </Box>
                </Box>
              </Stack>
            </Box>
          </Grid>
          {/* </Box> */}
        </Grid>
        <Box sx={{ pt: 3, pb: 3 }}>
          <Typography color="#BFBDBD" fontSize="12px">
            © Copyright 2014-2021 Foodroad - All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer2;
