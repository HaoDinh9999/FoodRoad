import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import Map from "../components/contact/Map";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  React.useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <Container fixed>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box sx={{ padding: "64px 16px" }}>
            <Box mb={4}>
              <Typography fontWeight={700} mb={2} variant="h3">
                Contact us
              </Typography>
              <Typography color="#677788" variant="body1">
                Rather than worrying about switching offices every couple years,
                you can instead stay in the same location and grow-up from your
                shared coworking space to an office that takes up an entire
                floor.
              </Typography>
            </Box>
            <ContactForm />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Map
            containerElement={
              <Box sx={{ width: "100%", height: "100%", minHeight: "500px" }} />
            }
            mapElement={<div style={{ height: `100%` }} />}
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDTmfDgMnwy0r6GOBCIoJ8Ct2QHGoVkb1c&callback=initMap`}
            loadingElement={<div style={{ height: `100%` }} />}
          />
        </Grid>
      </Grid>
      <Divider />
      <Grid item xs={12}>
        <Box sx={{ padding: "64px 16px" }}>
          <ContactInfo />
        </Box>
      </Grid>
    </Container>
  );
};

export default Contact;
