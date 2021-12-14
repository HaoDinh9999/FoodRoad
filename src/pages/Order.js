import React from "react";
import {
  Link,
  Typography,
  Container,
  Grid,
  Box,
  Stack,
  Divider,
  Checkbox,
  TextField,
  FormControlLabel,
  Button,
} from "@mui/material";
import OrderOption from "../components/order/OrderOptions";
import OrderList from "../components/order/OrderList";
import OrderHistoryList from "../components/order/OrderHistoryList";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Breadcrumbs } from "@mui/material";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import useMediaQuery from "@mui/material/useMediaQuery";
import HomeIcon from "@mui/icons-material/Home";
import DropDownOrder from "../components/order/DropDownOrder";
const Order = () => {
  const matches = useMediaQuery("(min-width:1200px)");
  return (
    <Box sx={{ backgroundColor: "#F6F9FC", pt: 4, minHeight: "100vh" }}>
      <Container fixed sx={{ mb: 1, mt: 1, backgroundColor: "#F6F9FC" }}>
        <Box display="flex">
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />

          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Link underline="hover" key="1" color="inherit" href="/">
              FoodRoad
            </Link>
            , ,
            <Typography key="3" color="black">
              Orders
            </Typography>
          </Breadcrumbs>
        </Box>
        <Grid mt={4} spacing={2} container>
          {/* <Grid item xs={12} md={3} l={3}>
            {matches ? <OrderOption /> : <DropDownOrder />}
          </Grid> */}
          <Grid item xs={12} md={12} lg={3}>
            <Stack
              spacing={1}
              px={4}
              py={2}
              sx={{ background: "#fff" }}
              direction="column"
            >
              <Typography fontSize="1rem" variant="subtitle2">
                Status
              </Typography>
              <Stack
                sx={{ "& .MuiFormControlLabel-label": { fontSize: "14px" } }}
                pl={2}
              >
                <FormControlLabel
                  control={<Checkbox size="small" defaultChecked />}
                  label="Processed"
                />
                <FormControlLabel
                  control={<Checkbox size="small" defaultChecked />}
                  label="Processing"
                />
                <FormControlLabel
                  control={<Checkbox size="small" defaultChecked />}
                  label="Cancelled"
                />
              </Stack>
              <Divider sx={{ borderColor: "rgb(243, 245, 249)", p: 0 }} />
              <Typography fontSize="1rem" variant="subtitle2">
                Price range
              </Typography>
              <Grid alignItems="center" container>
                <Grid item xs={5}>
                  <TextField
                    fullWidth
                    sx={{ ".MuiInputBase-sizeSmall": { fontSize: "14px" } }}
                    size="small"
                    type="number"
                  />
                </Grid>
                <Grid item xs={2}>
                  <Typography textAlign="center">-</Typography>
                </Grid>

                <Grid item xs={5}>
                  <TextField
                    fullWidth
                    sx={{ ".MuiInputBase-sizeSmall": { fontSize: "14px" } }}
                    size="small"
                    type="number"
                  />
                </Grid>
              </Grid>
              <Box></Box>
              <Button variant="contained">Apply</Button>
            </Stack>
          </Grid>
          <Grid item xs={12} md={12} lg={1}></Grid>
          <Grid item xs={12} md={12} lg={8} sx={{ minHeight: "400px" }}>
            <Router>
              <Switch>
                <Route path="/order" exact component={OrderList} />
                <Route
                  exact
                  path="/order/history"
                  component={OrderHistoryList}
                />
              </Switch>
            </Router>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Order;
