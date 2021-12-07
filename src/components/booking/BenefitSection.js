import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import BenefitCard from "./BenefitCard";

const BenefitSection = () => {
  return (
    <Box
      sx={{
        paddingTop: "40px",
        paddingBottom: "40px",
        borderTop: "solid #eee 1px",
      }}
    >
      <Typography sx={{ textAlign: "center", fontWeight: "500" }} variant="h4">
        Why book with us
      </Typography>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={12} md={4}>
          <BenefitCard
            icon="fas fa-wallet"
            title="Lowest Price Guarantee"
            content="Find it cheaper? We'll refund the difference"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <BenefitCard
            icon="fas fa-headset"
            title="24/7 Global Support"
            content="Get the answers you need, when you need them"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <BenefitCard
            icon="fas fa-shield-alt"
            title="Book Securely"
            content="We use SSL encryption to keep your data secure"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default BenefitSection;
