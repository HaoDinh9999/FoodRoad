import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import BookingCard from "../components/booking/BookingCard";
import CustomerInfoForm from "../components/booking/CustomerInfoForm";
import { useHistory } from "react-router-dom";
import BenefitSection from "../components/booking/BenefitSection";
const Booking = () => {
  const history = useHistory();
  return (
    <Container sx={{ paddingTop: "40px", paddingBottom: "40px" }}>
      <Breadcrumbs separator="›" aria-label="breadcrumb" mb={2}>
        <Link
          sx={{ fontFamily: "Roboto, sans-serif;" }}
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
