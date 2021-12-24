import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import classes from "./CustomerInfoForm.module.css";
const CustomerInfoForm = () => {
  return (
    <Paper elevation={0} sx={{ minHeight: "500px", padding: "20px" }}>
      <Stack className={classes["cus-info"]} spacing={2}>
        <h2>Customer Information</h2>
        <Grid container columns={24}>
          <Grid item xs={24} md={11}>
            <Stack spacing={1}>
              <label htmlFor="firstName">
                First Name <span>*</span>
              </label>
              <TextField id="firstName" size="small" fullWidth required />
            </Stack>
          </Grid>
          <Grid sx={{ height: "16px" }} item xs={24} md={2}></Grid>
          <Grid item xs={24} md={11}>
            <Stack spacing={1}>
              <label htmlFor="lastName">
                Last Name <span>*</span>
              </label>
              <TextField id="lastName" size="small" fullWidth required />
            </Stack>
          </Grid>
        </Grid>
        <Stack spacing={1}>
          <FormControl component="fieldset">
            <label>
              Gender <span>*</span>
            </label>
            <RadioGroup
              defaultValue="female"
              row
              aria-label="gender"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                sx={{ fontWeight: 300 }}
                value="female"
                control={
                  <Radio
                    sx={{
                      "& .MuiSvgIcon-root": {
                        fontSize: 16,
                      },
                    }}
                  />
                }
                label="Female"
              />
              <FormControlLabel
                sx={{ fontWeight: 300 }}
                value="male"
                control={
                  <Radio
                    sx={{
                      "& .MuiSvgIcon-root": {
                        fontSize: 16,
                      },
                    }}
                  />
                }
                label="Male"
              />
              <FormControlLabel
                sx={{ fontWeight: 300 }}
                value="other"
                control={
                  <Radio
                    sx={{
                      "& .MuiSvgIcon-root": {
                        fontSize: 16,
                      },
                    }}
                  />
                }
                label="Other"
              />
            </RadioGroup>
          </FormControl>
        </Stack>
        <Stack spacing={1}>
          <label htmlFor="country">
            Country <span>*</span>
          </label>
          <TextField id="country" size="small" fullWidth required />
        </Stack>
        <Grid container columns={24}>
          <Grid item xs={24} md={11}>
            <Stack spacing={1}>
              <label htmlFor="email">
                Email <span>*</span>
              </label>
              <TextField
                type="email"
                id="email"
                size="small"
                fullWidth
                required
              />
            </Stack>
          </Grid>
          <Grid sx={{ height: "16px" }} item xs={24} md={2}></Grid>
          <Grid item xs={24} md={11}>
            <Stack spacing={1}>
              <label htmlFor="phone">
                Phone <span>*</span>
              </label>
              <TextField id="phone" size="small" fullWidth required />
            </Stack>
          </Grid>
        </Grid>
        <h2>Additional Infomation</h2>
        <Stack spacing={1}>
          <label htmlFor="request">Special request / Food Allergy</label>
          <TextField
            minRows={5}
            maxRows={12}
            multiline
            id="request"
            size="small"
            fullWidth
          />
        </Stack>
        <h2>Where Are You Staying</h2>
        <Stack spacing={1}>
          <label htmlFor="hotelName">Hotel name</label>
          <TextField id="hotelName" size="small" fullWidth />
        </Stack>
        <Stack spacing={1}>
          <label htmlFor="hotelAddress">Hotel address</label>
          <TextField id="hotelAddress" size="small" fullWidth />
        </Stack>
        <Stack spacing={1}>
          <label htmlFor="roomNum">Room number</label>
          <TextField id="roomNum" size="small" fullWidth />
        </Stack>
      </Stack>
    </Paper>
  );
};

export default CustomerInfoForm;
