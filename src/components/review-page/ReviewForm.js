import React from "react";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import Circle from "@mui/icons-material/Circle";

import CustomRad from "./CustomRad";
import { styled } from "@mui/material/styles";
import swal from "sweetalert";
import { LinearProgress } from "@mui/material";

const month = [
  "Noverber 2021",
  "October 2021",
  "September 2021",
  "August 2021",
  "July 2021",
  "June 2021",
  "May 2021",
  "April 2021",
  "March 2021",
  "February 2021",
  "January 2021",
  "December 2020",
];
const withWhom = [
  "Couples",
  "Family (young children)",
  "Family (teens)",
  "Friends",
  "Bussiness",
  "Solo",
];
const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};
const Input = styled("input")({
  display: "none",
});
const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
const ReviewForm = (props) => {
  const [status, setStatus] = React.useState("");
  const submitFormHandler = async (event) => {
    event.preventDefault();
    setStatus("loading");
    await sleep(3000);
    setStatus("completed");
  };
  React.useEffect(() => {
    if (status === "completed") {
      swal("Success!", "You have reviewed successfully!", "success");
    }
  }, [status]);
  return (
    <form onSubmit={submitFormHandler}>
      <Stack spacing={2} mt={props.notMT ? 0 : 4}>
        <Box>
          <Typography variant="subtitle1">Rate Your Experience</Typography>
        </Box>
        <HoverRating />
        <Divider />
        <Stack spacing={1}>
          <Typography component="p" variant="subtitle2" color="text.secondary">
            Leave a review{" "}
            <Typography component="span" variant="body2">
              (required)
            </Typography>
          </Typography>
          <TextField
            size="small"
            minRows={6}
            id="reviewContent"
            multiline
            required
            type="text"
            variant="outlined"
            placeholder="Highlight your experience"
          />
        </Stack>
        <Stack spacing={1}>
          <Typography component="p" variant="subtitle2" color="text.secondary">
            Give your review a title{" "}
            <Typography component="span" variant="body2">
              (required)
            </Typography>
          </Typography>
          <TextField
            size="small"
            required
            id="title"
            type="text"
            variant="outlined"
            placeholder="Summarize your experience"
          />
        </Stack>
        <Stack spacing={1}>
          <Typography component="p" variant="subtitle2" color="text.secondary">
            When did you go?{" "}
            <Typography component="span" variant="body2">
              (required)
            </Typography>
          </Typography>
          <TextField
            size="small"
            required
            id="title"
            select
            variant="outlined"
            placeholder="Summarize your experience"
          >
            {month.map((x, index) => (
              <MenuItem id={index} value={x}>
                {x}
              </MenuItem>
            ))}
          </TextField>
        </Stack>
        {!props.notSingleReview ? (
          <>
            {" "}
            <Stack spacing={1}>
              <Typography
                component="p"
                variant="subtitle2"
                color="text.secondary"
              >
                Who was with you?{" "}
                <Typography component="span" variant="body2">
                  (required)
                </Typography>
              </Typography>
              <TextField
                size="small"
                required
                id="title"
                select
                variant="outlined"
                placeholder="Select one"
              >
                {withWhom.map((x, index) => (
                  <MenuItem id={index} value={x}>
                    {x}
                  </MenuItem>
                ))}
              </TextField>
            </Stack>
            <Typography component="p" variant="subtitle1" fontWeight="600">
              Could you say a little more about it?{" "}
              <Typography
                component="span"
                color="text.secondary"
                variant="subtitle2"
              >
                (optional)
              </Typography>
            </Typography>
            <Divider />
            <Grid container>
              <Grid item xs={12} md={6}>
                <Typography
                  color="text.secondary"
                  variant="subtitle2"
                  component="p"
                >
                  Did the tour company require{" "}
                  <Typography
                    color="primary"
                    variant="subtitle2"
                    component="span"
                  >
                    temperature checks for tour participants
                  </Typography>{" "}
                  upon arrival?
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack justifyContent="flex-end" direction="row">
                  <CustomRad />
                </Stack>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12} md={6}>
                <Typography
                  color="text.secondary"
                  variant="subtitle2"
                  component="p"
                >
                  Were{" "}
                  <Typography
                    color="primary"
                    variant="subtitle2"
                    component="span"
                  >
                    face masks provided
                  </Typography>{" "}
                  for tour participants?
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack justifyContent="flex-end" direction="row">
                  <CustomRad />
                </Stack>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12} md={6}>
                <Typography
                  color="text.secondary"
                  variant="subtitle2"
                  component="p"
                >
                  Was{" "}
                  <Typography
                    color="primary"
                    variant="subtitle2"
                    component="span"
                  >
                    hand sanitizer readily available
                  </Typography>{" "}
                  to tour guests and staff?
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack justifyContent="flex-end" direction="row">
                  <CustomRad />
                </Stack>
              </Grid>
            </Grid>{" "}
          </>
        ) : (
          <></>
        )}
        <Divider />
        <Typography component="p" variant="subtitle2" color="text.secondary">
          Upload a photo
        </Typography>
        <Box sx={{ border: "1px dashed #fafafa" }}>
          <label htmlFor="icon-button-file">
            <Input accept="image/*" id="icon-button-file" type="file" />
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              sx={{
                width: "150px",
                height: "150px",
                borderRadius: "4px",
                border: "2px dashed #e0e0e0",
              }}
            >
              <PhotoCamera />
            </IconButton>
          </label>
        </Box>

        <Divider />
        <Stack direction="row">
          <Checkbox
            a
            sx={{ mt: 0, alignItems: "flex-start", pt: 0 }}
            defaultChecked
          />
          <Typography
            component="p"
            color="text.secondary"
            variant="caption"
            fontWeight="500"
          >
            I certify that this review is based on my own experience and is my
            genuine opinion of this establishment and that I have no personal or
            business relationship with this establishment, and have not been
            offered any incentive or payment originating from the establishment
            to write this review. I understand that Tripadvisor has a
            zero-tolerance policy on fake reviews.{" "}
            <Typography
              fontWeight={600}
              href="#"
              component="a"
              color="primary"
              variant="caption"
            >
              Learn more
            </Typography>
          </Typography>
        </Stack>

        <Button
          type="submit"
          variant="contained"
          sx={{ textTranform: "unset" }}
          fullWidth
          disabled={status === "loading"}
        >
          Submit your review
        </Button>
      </Stack>
      {status === "loading" && <LinearProgress />}
    </form>
  );
};
function HoverRating() {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  return (
    <Box
      sx={{
        width: 200,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        icon={<Circle sx={{ color: "#00aa6c" }} fontSize="inherit" />}
        emptyIcon={
          <Circle
            sx={{ color: "#00aa6c", opacity: "0.55" }}
            fontSize="inherit"
          />
        }
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
  );
}
export default ReviewForm;
