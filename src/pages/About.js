import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import HeroAbout from "../components/about/HeroAbout";
import TeamSection from "../components/about/TeamSection";

export default function About() {
  return (
    <>
      <HeroAbout />
      <Container fixed sx={{ paddingTop: 20, paddingBottom: 10 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={7}>
            <Box display={{ xs: "none", md: "block", paddingRight: "56px" }}>
              <Grid alignItems="flex-end" container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{ "& img": { width: "100%", borderRadius: "12px" } }}
                  >
                    <img src="https://minimals.cc/static/about/what-1.jpg" />
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{ "& img": { width: "100%", borderRadius: "12px" } }}
                  >
                    <img src="https://minimals.cc/static/about/what-2.jpg" />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={5}>
            <Typography
              mb={3}
              sx={{ textAlign: { md: "left", xs: "center" } }}
              fontWeight="700"
              color="text.primary"
              variant="h3"
            >
              Our story
            </Typography>
            <Typography mb={2} color="text.secondary" variant="body1">
              We have been growing and evolving over the last one year. We
              founded Saigon Food Tour in Jan 2014, a child of Footsteps
              Indochina Travel. We are new but we rapidly receive many supports
              and love from our customers, our authentic local food vendors we
              know, and our lovely talented guides. Our aim is to help you
              experience truly local food and Saigonese life. Along the journey,
              we will help you get closer to the local and learn about our
              eating customs, our traditions.
            </Typography>
            <Typography mb={2} color="text.secondary" variant="body1">
              We have not reached our vision yet and it is going to be a long
              tough ride. But it has truly been a pleasure for everyone here at
              Saigon Food Tour to show you why we are so in love with Vietnam,
              especially Vietnam food. We hope to continue with what could
              possibly be described as the best “job” on the planet for many
              years to come
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <TeamSection />
    </>
  );
}
