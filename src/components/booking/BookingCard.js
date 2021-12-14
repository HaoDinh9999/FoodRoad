import React from "react";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import swal from "sweetalert";
import Button from "@mui/material/Button";

import classes from "./BookingCard.module.css";

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

const BookingCard = (props) => {
  const [status, setStatus] = React.useState("");
  const submitFormHandler = async (event) => {
    event.preventDefault();
    setStatus("loading");
    await sleep(3000);
    setStatus("completed");
  };
  React.useEffect(() => {
    if (status === "completed") {
      swal("Success!", "You have booked successfully!", "success");
    }
  }, [status, props]);
  return (
    <>
      <Paper sx={{ minHeight: "500px" }}>
        <img
          alt="Card"
          className={classes["booking-img"]}
          src="https://www.saigonfoodtour.com/uploads/products/8/saigon_backstreets.jpg"
        />
        <div className={classes["booking-content"]}>
          <h3>Sai Gon Backstreet</h3>
          <Stack spacing={2}>
            <Stack spacing={1}>
              <label htmlFor="numOfAdult">
                Number of adult <span>*</span>
              </label>
              <TextField
                id="numOfAdult"
                type="number"
                size="small"
                fullWidth
                required
              />
            </Stack>
            <Stack spacing={1}>
              <label htmlFor="numOfC712">
                Number of children (7 - 12) <span>*</span>
              </label>
              <TextField
                id="numOfC712"
                type="number"
                size="small"
                fullWidth
                required
              />
            </Stack>
            <Stack spacing={1}>
              <label htmlFor="numOfC56">
                Number of children (5 - 6) <span>*</span>
              </label>
              <TextField
                id="numOfC56"
                type="number"
                size="small"
                fullWidth
                required
              />
            </Stack>

            <hr />
            <Stack spacing={1}>
              <label htmlFor="coupon">Coupon</label>
              <Stack direction="row" spacing={1}>
                <TextField id="coupon" size="small" fullWidth />
                <Button
                  className={classes["btn-apply"]}
                  size="small"
                  variant="contained"
                >
                  Apply
                </Button>
              </Stack>
            </Stack>

            <hr />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h4 className={classes["booking-total"]}>Total cost:</h4>
              <p className={classes["booking-price"]}>100$</p>
            </Box>
            <Button
              onClick={submitFormHandler}
              size="large"
              variant="contained"
              disabled={status === "loading"}
            >
              Book now
            </Button>
          </Stack>
        </div>
      </Paper>
      {status === "loading" && <LinearProgress />}
    </>
  );
};

export default BookingCard;
