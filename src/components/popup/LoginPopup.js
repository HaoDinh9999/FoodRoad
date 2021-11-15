import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import "./LoginPopup.css";
import Slide from "@mui/material/Slide";
import Divider from "@mui/material/Divider";
import { LinearProgress } from "@mui/material";

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
          backgroundColor: "#28282B",
          borderStyle: "solid",
          borderColor: "#808080",
          borderWidth: 2,
          borderRadius: 10,
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
            color: "#fff",
            fontWeight: "bold",
            fontSize: "20px",
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
            style={{ color: "#fff", paddingBottom: "5px", fontSize: "15px" }}
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
            style={{ color: "#fff", paddingBottom: "5px", fontSize: "15px" }}
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
              borderRadius: "10px",
            }}
          >
            Log In
          </Button>
        </div>

        <Divider
          sx={{ bgcolor: (theme) => theme.palette.divider }}
          style={{
            border: "none",
            height: 1,
            margin: 0,
            backgroundColor: "#404040",
          }}
        />

        <div style={{ padding: "10px" }}>
          <Typography variant="subtitle5" style={{ color: "#808080" }}>
            Not registered yet?
          </Typography>
        </div>
        <div class="textinput">
          <Button
            variant="contained"
            fullWidth
            style={{
              height: "50px",
              textTransform: "none",
              fontSize: "20px",
              fontWeight: "bold",
              borderRadius: "10px",
              backgroundColor: "#42b72a",
            }}
          >
            Create New Account
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
