import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import Link from "@mui/material/Link";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import Aos from "aos";
import "aos/dist/aos.css";
const ListInfo = () => {
  React.useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <Box marginTop="50px">
      <div data-aos="fade-up" data-aos-duration={900}>
        <h2>About</h2>
        <Grid container>
          <Grid item sm={8}>
            <Typography
              variant="h6"
              component="h2"
              sx={{
                fontSize: "18px",
                fontWeight: "light",
                marginTop: "15px",
              }}
            >
              If there’s one absolute must-do in Vietnam, it’s a food tour: The
              knowledge gained on a good culinary tour sets you up for your
              entire vacation. On this Ho Chi Minh City evening tour, cruise the
              city by night on a motorbike (with designated driver), get an
              intimate look at local life, and sample street food classics
              straight from the vendors.
            </Typography>
          </Grid>
          <Grid item sm={1}></Grid>
          <Grid container item sm={3} flexDirection="column" marginTop="10px">
            <Typography
              variant="h6"
              component="h2"
              sx={{ fontSize: "18px", fontWeight: "medium" }}
            >
              Available languages
            </Typography>
            <Typography
              variant="h6"
              component="h2"
              sx={{ fontSize: "18px", fontWeight: "light" }}
            >
              English
            </Typography>
          </Grid>

          <Grid item sm={4} marginTop="15px">
            <Typography
              variant="h6"
              component="h2"
              sx={{ fontSize: "18px", fontWeight: "medium" }}
            >
              Know before you go
            </Typography>
            <Box height="10px"></Box>
            <Typography
              variant="h6"
              component="h2"
              sx={{ fontSize: "18px", fontWeight: "light" }}
            >
              Duration: 3h 30m
            </Typography>
            <Typography
              variant="h6"
              component="h2"
              sx={{ fontSize: "18px", fontWeight: "light" }}
            >
              Mobile tickets accepted
            </Typography>
            <Typography
              variant="h6"
              component="h2"
              sx={{ fontSize: "18px", fontWeight: "light" }}
            >
              Instant confirmation
            </Typography>
          </Grid>
          <Grid item sm={4} marginTop="15px">
            <Typography
              variant="h6"
              component="h2"
              sx={{ fontSize: "18px", fontWeight: "medium" }}
            >
              Cancellation policy
            </Typography>
            <Box height="10px"></Box>
            <Typography
              variant="h6"
              component="h2"
              sx={{ fontSize: "18px", fontWeight: "light" }}
            >
              For a full refund, cancel at least 24 hours in advance of the
              start date of the experience.
            </Typography>
          </Grid>
          <Grid item sm={4}></Grid>
          <Grid item sm={12} marginTop="15px">
            <Typography
              variant="h6"
              component="h2"
              sx={{ fontSize: "18px", fontWeight: "medium" }}
            >
              Highlights
            </Typography>
            <Box height="10px"></Box>
            <Typography
              display="flex"
              variant="h6"
              component="h2"
              sx={{ fontSize: "18px", fontWeight: "light" }}
            >
              <li></li> Cruise Ho Chi Minh City by night on a motorbike with
              designated driver/guide
            </Typography>
            <Typography
              display="flex"
              variant="h6"
              component="h2"
              sx={{ fontSize: "18px", fontWeight: "light" }}
            >
              <li></li>Sample authentic Vietnamese street food straight from the
              vendors
            </Typography>
            <Typography
              display="flex"
              variant="h6"
              component="h2"
              sx={{ fontSize: "18px", fontWeight: "light" }}
            >
              <li></li>Learn about local life—and dishes!—from your personal
              guide
            </Typography>
            <Typography
              display="flex"
              variant="h6"
              component="h2"
              sx={{ fontSize: "18px", fontWeight: "light" }}
            >
              <li></li>Taste Vietnamese coffee, desserts, spring rolls, “pizza,”
              and so much more
            </Typography>
          </Grid>
          <Grid item sm={12} marginTop="15px">
            <Typography
              variant="h6"
              component="h2"
              sx={{ fontSize: "18px", fontWeight: "medium" }}
            >
              What to expect
            </Typography>
            <Box height="10px"></Box>
            <Typography
              variant="h6"
              component="h2"
              sx={{ fontSize: "18px", fontWeight: "light" }}
            >
              Your driver/guide collects you from your central Ho Chi Minh City
              hotel and explain how to ride safely on the back of a motorbike.
              Don your helmet, and you’re off through brightly lit boulevards,
              back alleys, and busy streets. Along the way, sample enough street
              food to add up to dinner.{" "}
            </Typography>
            <Box height="15px"></Box>

            <Typography
              variant="h6"
              component="h2"
              sx={{ fontSize: "18px", fontWeight: "light" }}
            >
              Learn about food customs, as you sit on plastic chairs, eating
              Vietnamese pancakes (banh xeo), spring rolls, and more. See
              historic residential buildings and learn the art of hand-poured
              coffee in a secret coffee shop. Tour narrow lanes, sample
              Vietnamese “pizza,” and try different sweet soup desserts before
              your guide drops you back at your hotel.
            </Typography>
          </Grid>
          <Button
            sx={{
              color: "#000",
              backgroundColor: "#fff",
              borderRadius: 10,
              padding: "10px 40px",
              marginTop: "30px",
              border: 2,
            }}
          >
            View more information
          </Button>
        </Grid>
      </div>
      <div data-aos="fade-up" data-aos-duration={900}>
        <Grid container sm={12} marginTop="60px" display="flex">
          <Grid item sm={12}>
            <h2>Important information</h2>
          </Grid>
          <Grid item sm={8} marginTop="20px">
            <Typography
              variant="h6"
              component="h2"
              sx={{ fontSize: "18px", fontWeight: "medium" }}
            >
              Inclusions
            </Typography>
            <Box height="10px"></Box>
            <Typography
              display="flex"
              variant="h6"
              component="h2"
              sx={{ fontSize: "18px", fontWeight: "light" }}
            >
              <li></li> Accident insurance
            </Typography>
            <Typography
              display="flex"
              variant="h6"
              component="h2"
              sx={{ fontSize: "18px", fontWeight: "light" }}
            >
              <li></li>Personal guide
            </Typography>
            <Typography
              display="flex"
              variant="h6"
              component="h2"
              sx={{ fontSize: "18px", fontWeight: "light" }}
            >
              <li></li>Hotel pickup and drop-off (selected hotels)
            </Typography>
            <Typography
              display="flex"
              variant="h6"
              component="h2"
              sx={{ fontSize: "18px", fontWeight: "light" }}
            >
              <li></li>Helmet
            </Typography>
            <Typography
              display="flex"
              variant="h6"
              component="h2"
              sx={{ fontSize: "18px", fontWeight: "light" }}
            >
              <li></li>Rain poncho (if needed)
            </Typography>
            <Typography
              display="flex"
              variant="h6"
              component="h2"
              sx={{ fontSize: "18px", fontWeight: "light" }}
            >
              <li></li>Dinner and drinks
            </Typography>
            <Box height="15px"></Box>
            <Typography
              variant="h6"
              component="h2"
              sx={{ fontSize: "18px", fontWeight: "medium" }}
            >
              Exclusions
            </Typography>
            <Box height="10px"></Box>
            <Typography
              display="flex"
              variant="h6"
              component="h2"
              sx={{ fontSize: "18px", fontWeight: "light" }}
            >
              <li></li> Entrance fees at some attractions
            </Typography>
            <Typography
              display="flex"
              variant="h6"
              component="h2"
              sx={{ fontSize: "18px", fontWeight: "light" }}
            >
              <li></li>Pickup and drop-off outside the city center
            </Typography>
            <Box height="15px"></Box>
            <Typography
              variant="h6"
              component="h2"
              sx={{ fontSize: "18px", fontWeight: "medium" }}
            >
              Additional information
            </Typography>
            <Box height="10px"></Box>
            <Typography
              display="flex"
              variant="h6"
              component="h2"
              sx={{ fontSize: "18px", fontWeight: "light" }}
            >
              <li></li> Confirmation will be received at time of booking
            </Typography>
            <Typography
              display="flex"
              variant="h6"
              component="h2"
              sx={{ fontSize: "18px", fontWeight: "light" }}
            >
              <li></li>Children under 6 years old must be accompanied by an
              adult
            </Typography>
            <Typography
              display="flex"
              variant="h6"
              component="h2"
              sx={{ fontSize: "18px", fontWeight: "light" }}
            >
              <li></li>Passengers weighing over 150kg, please consult with
              operator before booking
            </Typography>{" "}
            <Typography
              display="flex"
              variant="h6"
              component="h2"
              sx={{ fontSize: "18px", fontWeight: "light" }}
            >
              <li></li>Not wheelchair accessible
            </Typography>{" "}
            <Typography
              display="flex"
              variant="h6"
              component="h2"
              sx={{ fontSize: "18px", fontWeight: "light" }}
            >
              <li></li>Near public transportation
            </Typography>{" "}
            <Typography
              display="flex"
              variant="h6"
              component="h2"
              sx={{ fontSize: "18px", fontWeight: "light" }}
            >
              <li></li>Most travelers can participate
            </Typography>{" "}
            <Typography
              display="flex"
              variant="h6"
              component="h2"
              sx={{ fontSize: "18px", fontWeight: "light" }}
            >
              <li></li>This tour/activity will have a maximum of 30 travelers
            </Typography>
            <Button
              sx={{
                color: "#000",
                backgroundColor: "#fff",
                borderRadius: 10,
                padding: "10px 40px",
                marginTop: "30px",
                border: 2,
              }}
            >
              View details
            </Button>
          </Grid>
          <Grid item sm={4} marginTop="20px">
            <Typography
              variant="h6"
              component="h2"
              sx={{ fontSize: "18px", fontWeight: "medium" }}
            >
              Duration
            </Typography>
            <Box height="10px"></Box>
            <Typography
              variant="h6"
              component="h2"
              sx={{ fontSize: "18px", fontWeight: "light" }}
            >
              3h 30m
            </Typography>
            <Box height="15px"></Box>

            <Typography
              variant="h6"
              component="h2"
              sx={{ fontSize: "18px", fontWeight: "medium" }}
            >
              Departure details
            </Typography>
            <Box height="10px"></Box>
            <Typography
              variant="h6"
              component="h2"
              sx={{ fontSize: "18px", fontWeight: "light" }}
            >
              Traveler pickup is offered.
            </Typography>
            <Box height="10px"></Box>
            <Typography
              variant="h6"
              component="h2"
              sx={{ fontSize: "18px", fontWeight: "light" }}
            >
              Pick-up service is provided within District 1 and 3.
            </Typography>
            <Box height="10px"></Box>
            <Typography
              variant="h6"
              component="h2"
              sx={{ fontSize: "18px", fontWeight: "light" }}
            >
              Hotel pickup is offered. View the hotel list on our checkout page
              to see if yours is included among the pickup points.
            </Typography>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
};
export default ListInfo;
