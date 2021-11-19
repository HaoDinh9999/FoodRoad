import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
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
        backgroundImage: `url("https://minimals.cc/static/overlay.svg"), url("https://minimals.cc/static/about/hero.jpg")`,
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
          <Typography fontWeight={700} color="primary" variant="h2">
            Who
          </Typography>
          <Typography fontWeight={700} color="white" variant="h2">
            we are?
          </Typography>
          <Typography mt={4} fontWeight={500} color="white" variant="h5">
            Let's work together and make awesome site easily
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroAbout;
