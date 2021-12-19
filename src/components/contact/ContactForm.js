import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import ReCAPTCHA from "react-google-recaptcha";
import swal from "sweetalert";
import { CircularProgress } from "@mui/material";
const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
const ContactForm = () => {
  const [status, setStatus] = React.useState("");
  const submitFormHandler = async (event) => {
    event.preventDefault();
    setStatus("loading");
    await sleep(3000);
    setStatus("completed");
  };
  React.useEffect(() => {
    if (status === "completed") {
      swal(
        "Success!",
        "We'll get back to you in 1-2 business days.!",
        "success"
      );
    }
  }, [status]);
  return (
    <Box>
      <form>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <div data-aos="fade-right" data-aos-duration={700}>
              <TextField
                fullWidth
                type="text"
                label="First name"
                id="firstName"
              />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div data-aos="fade-right" data-aos-duration={700}>
              <TextField
                fullWidth
                type="text"
                label="Last name"
                id="lastName"
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div data-aos="fade-right" data-aos-duration={700}>
              <TextField fullWidth type="email" label="Email" id="email" />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div data-aos="fade-right" data-aos-duration={700}>
              <TextField
                minRows={6}
                fullWidth
                multiline
                type="text"
                label="Message"
                id="message"
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <ReCAPTCHA sitekey="6LfEk50dAAAAACRVErvAkl4Wki0bjqlwe2BPMN7w" />
          </Grid>

          <Grid item xs={12}>
            <div data-aos="fade-up" data-aos-duration={700}>
              <Button
                onClick={submitFormHandler}
                sx={{
                  boxShadow: "rgb(140 152 164 / 10%) 0px 12px 15px",
                  textTransform: "none",
                  minWidth: "150px",
                }}
                variant="contained"
                size="large"
                disabled={status === "loading"}
              >
                {status === "loading" && (
                  <CircularProgress sx={{ mr: 1, color: "#fff" }} size={24} />
                )}
                Submit
              </Button>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div data-aos="zoom-in" data-aos-duration={700}>
              <Typography color="#677788" variant="body1">
                We'll get back to you in 1-2 business days.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <div data-aos="zoom-in" data-aos-duration={700}>
              <Typography variant="body2">
                By clicking on "submit" you agree to our{" "}
                <Link href="#" color="#1e2022" fontWeight={700}>
                  Privacy Policy
                </Link>
                ,{" "}
                <Link href="#" color="#1e2022" fontWeight={700}>
                  Data Policy
                </Link>{" "}
                and{" "}
                <Link href="#" color="#1e2022" fontWeight={700}>
                  Cookie Policy
                </Link>
                .
              </Typography>
            </div>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default ContactForm;
