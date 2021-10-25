import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import img1 from "../../../assets/img/img-1.jpg";
import img2 from "../../../assets/img/img-2.jpg";
import img3 from "../../../assets/img/img-3.jpg";
import img from "../../../assets/img/hero.jpg";
import classes from "./HeroSection.module.css";
import Stack from "@mui/material/Stack";
const HeroSection = () => {
  return (
    <section className={classes.section}>
      <Grid
        container
        sx={{
          overflow: "hidden",
          maxWidth: 1200,
          margin: "0 auto ",
          padding: "40px 0",
        }}
      >
        <Grid
          item
          md={6}
          sx={{
            margin: "auto 0",
            padding: "16px",
          }}
        >
          <Stack spacing={2}>
            <Typography variant="h3" sx={{ fontWeight: 700 }}>
              Experience the food and culture of Sai Gon
            </Typography>
            <Typography
              color="text.secondary"
              variant="subtitle1"
              sx={{ fontWeight: 500 }}
            >
              A team of experienced tourism professionals will provide you with
              the best advice and tips
            </Typography>

            <Stack direction="row" spacing={2}>
              <Button size="large" variant="contained">
                Explorer tour
              </Button>
              <Button variant="outlined" size="large">
                <i
                  class="far fa-play-circle"
                  style={{ marginRight: "4px" }}
                ></i>
                Watch us
              </Button>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6} sx={{ padding: "16px" }}>
          <Grid container rowSpacing={1} columnSpacing={2}>
            <Grid item xs={12} sm={6} md={5}>
              <img alt="img" src={img} className={classes["hero-img"]} />
            </Grid>
            <Grid item xs={12} sm={6} md={7}>
              <img alt="img" src={img1} className={classes["hero-img"]} />
            </Grid>
            <Grid item xs={12} sm={6} md={7}>
              <img alt="img" src={img2} className={classes["hero-img"]} />
            </Grid>
            <Grid item xs={12} sm={6} md={5}>
              <img alt="img" src={img3} className={classes["hero-img"]} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};

export default HeroSection;
