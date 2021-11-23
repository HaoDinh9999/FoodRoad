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
import GoogleIcon from '@mui/icons-material/Google';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
export default function FormDialog(props) {
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
            style={{ color: "black", paddingBottom: "5px", fontSize: "15px" , fontWeight: "bold"}}
          >
            E-mail or Username
          </Typography>
          <input
            type="email"
            id="Email"
            name="Email"
            placeholder="Enter your e-mail or username"
          ></input>
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
            style={{ color: "black", paddingBottom: "5px", fontSize: "15px", fontWeight: "bold"}}
          >
            Password
          </Typography>
          <input
            type="password"
            id="Password"
            name="Password"
            placeholder="Enter your password"
          ></input>
        </div>

        <div class="textinput">
          <Button
            variant="contained"
            fullWidth
            onClick={loginHandler}
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
        <Divider sx={{color:"#808080", fontSize: "14px"}}> or Sign In with </Divider>
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
              color: "black"
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
          <a href="sign-up">Create an Account</a>
        </Box>
      </Box>
      </DialogContent>
    </Dialog>
  );
}
