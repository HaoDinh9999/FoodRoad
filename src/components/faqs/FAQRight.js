import React from "react";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import { Grid } from "@mui/material";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { height, padding, width } from "@mui/system";
import Container from "@mui/material/Container";
import CardTourItem from "../layoutHome/cardtour/CardTourItem";
import { alpha, styled } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";
import { LinearProgress } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

const FAQRight = () => {
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };
  const [status, setStatus] = React.useState(null);
  const loginHandler = async () => {
    setStatus("loading");
    await sleep(5000);
    setStatus("completed");
    setOpen(true);
  };
  const RedditTextField = styled((props) => (
    <TextField InputProps={{ disableUnderline: true }} {...props} />
  ))(({ theme }) => ({
    "& .MuiFilledInput-root": {
      border: "1px solid #e2e2e1",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
      transition: theme.transitions.create([
        "border-color",
        "background-color",
        "box-shadow",
      ]),
      "&:hover": {
        backgroundColor: "#fff",
      },
      "&.Mui-focused": {
        backgroundColor: "#fff",
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
        borderColor: theme.palette.primary.main,
      },
    },
  }));
  return (
    <>
      <Grid container sm={12}>
        <Stack
          spacing={1}
          padding="0px 30px 20px 30px"
          sx={{
            width: "100%",
            boxShadow: 3,
            borderRadius: 2,
            backgroundColor: "#fc8129",
          }}
        >
          <Typography
            marginTop="18px"
            display="flex"
            justifyContent="center"
            fontWeight="bold"
            sx={{
              fontFamily: "Monospace",
              fontStyle: "italic",
              fontSize: "20px",
            }}
          >
            Not found your question?
          </Typography>
          <Typography
            display="flex"
            justifyContent="center"
            fontWeight="regular"
            color="#fff"
          >
            Fill in form
          </Typography>
          <RedditTextField
            label="Email"
            id="email-input"
            variant="filled"
            style={{ marginTop: 11 }}
          />
          <RedditTextField
            label="Name"
            id="name-input"
            variant="filled"
            style={{ marginTop: 11 }}
          />
          <RedditTextField
            id="name-input"
            variant="filled"
            multiline
            rows={3}
            style={{ marginTop: 11 }}
          />

          <Button variant="contained" color="error" onClick={loginHandler}>
            Send question
          </Button>
          {status === "loading" && <LinearProgress />}
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              Sent your question success !
            </Alert>
          </Snackbar>
        </Stack>
        <Grid
          item
          container
          marginTop="20px"
          sm={12}
          xs={12}
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item sm={12} xs={12}>
            <CardTourItem url="/images/Food1.jpg"></CardTourItem>
          </Grid>
          <Grid item sm={12} xs={12}>
            <CardTourItem url="/images/Food2.jpg"></CardTourItem>
          </Grid>
          <Grid item sm={12} xs={12}>
            <CardTourItem url="/images/Food3.jpg"></CardTourItem>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default FAQRight;
