import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import overlay from "../../assets/img/overlay.svg";
import hero from "../../assets/img/hero-about.jpg";
const HeroAbout = () => {
  return (
    <Box
      sx={{
        height: {
          md: "560px",
          xs: "auto",
        },
        padding: {
          xs: "80px 0",
          md: 0,
        },
        backgroundImage: `url(${overlay}), url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <Container sx={{ height: "100%", position: "relative" }} maxWidth="lg">
        <Box
          sx={{
            position: { md: "absolute", xs: "unset" },
            maxWidth: { md: "300px", xs: "unset" },
            bottom: "80px",
            textAlign: { md: "left", xs: "center" },
          }}
        >
          <div data-aos="fade-right">
            <Typography fontWeight={700} color="primary" variant="h2">
              Who
            </Typography>
          </div>
          <div data-aos="fade-right">
            {" "}
            <Typography fontWeight={700} color="white" variant="h2">
              we are?
            </Typography>
          </div>
          <div data-aos="zoom-in-down">
            <Typography mt={4} fontWeight={500} color="white" variant="h5">
              Let's work together and make awesome site easily
            </Typography>
          </div>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroAbout;
