import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import "./LoginPopup.css";
import Slide from "@mui/material/Slide";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { LinearProgress } from "@mui/material";
import SignupPopup from "./SignupPopup";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";
import Swal from "sweetalert2";
import { red } from "@mui/material/colors";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
export default function FormDialog(props) {
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const handleClose = (event, reason) => {
    setOpenSnackbar(false);
  };

  const [email, setEmail] = React.useState(null);
  const [emailValidate, setEmailValidate] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [passwordValidate, setPasswordValidate] = React.useState(null);

  function CheckValidate(email, password) {
    if (emailValidate && passwordValidate && email != null && password != null) loginHandler();
  }

  const [openSignup, setOpenSignup] = React.useState(false);
  const [status, setStatus] = React.useState(null);
  const loginHandler = async () => {
    setStatus("loading");
    await sleep(5000);
    setStatus("completed");
  };
  React.useEffect(() => {
    if (status === "completed") {
      window.location.reload();
      localStorage.setItem("isLogin", true);
    }
  }, [status, props]);
  React.useEffect(() => {
    if (password == null) {
      setPasswordValidate(true);
      return;
    }
    if (
      String(password).length >= 6 &&
      String(password).length <= 20
    ) 
      setPasswordValidate(true);
    else setPasswordValidate(false);
  }, [password])
  React.useEffect(() => {
    if (email == null) {
      setEmailValidate(true);
      return;
    }
    if (
      email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    )
      setEmailValidate(true);
    else setEmailValidate(false);
  }, [email])
  
  return (
      <Dialog
        open={props.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={props.onClose}
        maxWidth="xs"
        fullWidth
        PaperProps={{
          style: {
            backgroundColor: "white",
            borderStyle: "none",
            borderColor: "#808080",
            borderWidth: 2,
            borderRadius: 30,
          },
        }}
      >
        <form
      onSubmit={(event) => {
        event.preventDefault();
        CheckValidate(email, password);
      }}
    >
        {status === "loading" && <LinearProgress />}
        <DialogTitle>
          <Typography
            variant="subtitle1"
            align="center"
            style={{ color: "#808080", fontWeight: "bold" }}
          >
            WELCOME
          </Typography>

          <Typography
            variant="h5"
            align="center"
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: "24px",
              paddingBottom: "10px",
            }}
          >
            Log into your account
          </Typography>
        </DialogTitle>
        <DialogContent>
          <div class="textinput">
            {/* <TextField
            variant="outlined"
            margin="dense"
            id="username"
            label="E-Mail"
            type="email"
            fullWidth
          /> */}
            <Typography
              style={{
                color: "black",
                paddingBottom: "5px",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              E-mail or Username
            </Typography>
            <input
              class="logininput"
              type="email"
              id="Email"
              name="email"
              placeholder="Enter your e-mail or username"
              
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
            {emailValidate == false && (
              <Box pt={1}>
                <Typography fontSize={15} color="red">
                  Example: Foodroad@gmail.com
                </Typography>
              </Box>
            )}
          </div>
          <div class="textinput">
            {/* <TextField
            variant="outlined"
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
          /> */}
            <Typography
              style={{
                color: "black",
                paddingBottom: "5px",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              Password
            </Typography>
            <input
              class="logininput"
              type="password"
              minLength={6}
              
              id="Password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
            {passwordValidate == false && (
              <Box pt={1}>
                <Typography fontSize={15} color="red">
                  Password must be between 6-20 characters
                </Typography>
              </Box>
            )}
          </div>

          <div class="textinput">
            <Button
              variant="contained"
              fullWidth
              type="submit"
              style={{
                height: "50px",
                textTransform: "none",
                fontSize: "20px",
                fontWeight: "bold",
                borderRadius: "24px",
              }}
            >
              Log In
            </Button>
          </div>
          <Box pt="10px" pb="20px">
            <Divider sx={{ color: "#808080", fontSize: "14px" }}>
              {" "}
              or Sign In with{" "}
            </Divider>
          </Box>
          <Box>
            <Stack spacing="15px">
              <Button
                variant="contained"
                fullWidth
                style={{
                  height: "50px",
                  textTransform: "none",
                  fontSize: "22px",
                  fontWeight: "bold",
                  borderRadius: "24px",
                  backgroundColor: "#ededed",
                  color: "black",
                }}
              >
                <Box pr="10px">
                  <i class="fab fa-google fa-x"></i>
                </Box>
                Google
              </Button>
              <Button
                variant="contained"
                fullWidth
                style={{
                  height: "50px",
                  textTransform: "none",
                  fontSize: "20px",
                  fontWeight: "bold",
                  borderRadius: "24px",
                  backgroundColor: "black",
                }}
              >
                <Box pr="10px">
                  <i class="fab fa-apple fa-lg"></i>
                </Box>
                Apple
              </Button>
            </Stack>

            <Box p="10px" pt="20px" display="flex">
              <Box pr="5px">
                <Typography variant="subtitle5" style={{ color: "#808080" }}>
                  Not registered yet?
                </Typography>
              </Box>
              <a
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setOpenSignup(true);
                }}
              >
                Create an Account
              </a>
            </Box>
          </Box>
        </DialogContent>
        <SignupPopup
          open={openSignup}
          onClose={() => {
            setOpenSignup(false);
          }}
        />
        <Snackbar
          open={openSnackbar}
          autoHideDuration={2000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Successfully signed up!
          </Alert>
        </Snackbar>
        </form>
      </Dialog>
  );
}
