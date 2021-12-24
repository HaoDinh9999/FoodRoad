import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Stack from "@mui/material/Stack";
const NotFound = () => {
  return (
    <Container fixed sx={{ width: "100%", minHeight: "calc(100vh - 64px)" }}>
      <Grid
        container
        sx={{
          overflow: "hidden",
          margin: "0 auto ",
          padding: "40px 0",
        }}
      >
        <Grid
          item
          md={6}
          xs={12}
          sx={{
            margin: "auto 0",
            padding: "16px",
          }}
        >
          <Stack spacing={2}>
            <Typography variant="h1" sx={{ fontWeight: 500 }}>
              404
            </Typography>
            <Typography
              color="text.secondary"
              variant="h5"
              sx={{ color: "#677788" }}
            >
              Oops! Looks like you followed a bad link. If you think this is a
              problem with us, please{" "}
              <a
                style={{ textDecoration: "none", color: "#1976D2" }}
                href="/contact"
              >
                tell us
              </a>
            </Typography>

            <Stack direction="row" spacing={2}>
              <Button href="/" size="large" variant="contained">
                Back home
              </Button>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6} sx={{ padding: "16px" }}>
          <Box>
            <img
              style={{
                width: "100%",
                height: "100%",
                filter: "none",
              }}
              src="https://assets.maccarianagency.com/svg/illustrations/drawkit-illustration6.svg"
            ></img>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NotFound;
