import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";

import classes from "./AllSales.module.css";
import CardSales from "./CardSales";
const AllSales = (props) => {
  return (
    <section id="sale-home">
      <Container fixed>
        <Grid
          sx={{
            overflow: "hidden",
            minHeight: 500,
            width: "100%",
            margin: "0 auto ",
            padding: "40px 0",
          }}
          spacing={2}
          container
        >
          <Grid item xs={12} lg={3}>
            <Box
              sx={{
                backgroundColor: "#f3a46b",
                height: "100%",
                width: "100%",
                padding: "40px",
                textAlign: "center",
              }}
            >
              <Typography
                sx={{ textTransform: "uppercase" }}
                variant="subtitle1"
                color="white"
              >
                Last Minute !
              </Typography>
              <Typography sx={{ fontWeight: 700 }} variant="h3" color="white">
                Summer SALE
              </Typography>
              <Grid container sx={{ margin: "40px 0" }}>
                <Grid item xs={6}>
                  <Stack>
                    <h2 className={classes["sale-time"]}>000</h2>
                    <p className={classes["sale-unit"]}>Days</p>
                  </Stack>
                </Grid>
                <Grid item xs={6}>
                  <Stack>
                    <h2 className={classes["sale-time"]}>00</h2>
                    <p className={classes["sale-unit"]}>Hours</p>
                  </Stack>
                </Grid>
                <Grid item xs={6}>
                  <Stack>
                    <h2 className={classes["sale-time"]}>00</h2>
                    <p className={classes["sale-unit"]}>Minutes</p>
                  </Stack>
                </Grid>
                <Grid item xs={6}>
                  <Stack>
                    <h2 className={classes["sale-time"]}>000</h2>
                    <p className={classes["sale-unit"]}>Seconds</p>
                  </Stack>
                </Grid>
              </Grid>
              <a href="#" className={classes["sale-link"]}>
                CHECK NOW
              </a>
            </Box>
          </Grid>
          <Grid item xs={12} lg={9}>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={6}>
                <CardSales
                  imgSrc="https://images.foody.vn/res/g71/706383/prof/s640x400/foody-upload-api-foody-mobile-3-190620092910.jpg"
                  price={62}
                  title="TASTE OF THE NIGHT"
                  time="5:30 PM - 10:00 PM"
                  description="Step off the beaten track and travel through the maze of Saigon to seek for the real authentic food, which, just by the look, can make your mouth water... And, just so you know, this is where food lovers meet each other on the back of the motorbikes. Hang on tight, cause here comes Saigon Food Tour!!!"
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <CardSales
                  imgSrc="https://images.foody.vn/res/g71/706383/prof/s640x400/foody-upload-api-foody-mobile-3-190620092910.jpg"
                  price={49}
                  title="SAIGON BACKSTREETS"
                  time="8:30 AM - 1:00 PM"
                  description="Embark on our special tour for Saigon lovers! Start off your journey on the back of a bike driven by a professional guide through the heart of the city and enjoy changes of Saigon life form quiet to busy vibes. Put yourself in a different perspective from those on other touristic routes! Local experience guaranteed!"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default AllSales;
