import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

import HomeIcon from "@mui/icons-material/Home";

import BookingCard from "../components/booking/BookingCard";
import CustomerInfoForm from "../components/booking/CustomerInfoForm";
import { useHistory } from "react-router-dom";
import BenefitSection from "../components/booking/BenefitSection";
const Booking = () => {
  const history = useHistory();
  return (
    <Container sx={{ paddingTop: "40px", paddingBottom: "40px" }}>
      <Box mb={2} display="flex" alignItems="center">
        <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          <Link
            underline="hover"
            color="inherit"
            href="/"
            onClick={(event) => {
              event.preventDefault();
              history.push("/");
            }}
          >
            Home
          </Link>
          <Typography color="text.primary">Checkout</Typography>
        </Breadcrumbs>
      </Box>
      <Grid container spacing={2}>
        <Grid item md={8} xs={12}>
          <CustomerInfoForm />
        </Grid>
        <Grid item md={4} xs={12}>
          <BookingCard />
        </Grid>
      </Grid>
      <BenefitSection />
    </Container>
  );
};

export default Booking;
