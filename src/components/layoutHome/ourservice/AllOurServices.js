import React from "react";
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import { Box, fontWeight, ThemeProvider } from "@mui/system";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { UilAmbulance } from "@iconscout/react-unicons";
import Button from "@mui/material/Button";
import { UilMessage } from "@iconscout/react-unicons";
import CardService from "./CardService";
import Container from "@mui/material/Container";
import { UilCommentInfo } from "@iconscout/react-unicons";
import { UilRestaurant } from "@iconscout/react-unicons";
import { UilCloudQuestion } from "@iconscout/react-unicons";
import { UilPhoneVolume } from "@iconscout/react-unicons";
import { UilUserCheck } from "@iconscout/react-unicons";
import { UilBookOpen } from "@iconscout/react-unicons";
const AllOurServices = () => {
  return (
    <section style={{ backgroundColor: "#555555", width: "100%" }}>
      <Container fixed>
        <Grid
          container
          sm={12}
          xs={12}
          md={12}
          padding="30px 00px 30px 0px"
          marginLeft="25px"
        >
          <Grid
            container
            item
            sm={12}
            justifyContent="center"
            marginRight="30px"
          >
            <Typography
              variant="h6"
              component="h2"
              style={{
                color: "#fff6",
                fontSize: "13px",
                fontWeight: "regular",
              }}
            >
              MULTIPLE BENEFITS INCLUDED
            </Typography>
          </Grid>
          <Grid
            container
            item
            sm={12}
            justifyContent="center"
            marginRight="30px"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Typography
              variant="h6"
              component="h2"
              zIndex="1000"
              style={{ color: "#fff", fontSize: "37px", fontWeight: "bold" }}
            >
              OUR SERVICES
            </Typography>
            <Box
              sx={{
                margin: "-18px 0px 0px 85px",
                position: "position",
                width: 180,
                height: 5,
                backgroundColor: "#1976d2",
                "&:hover": {
                  backgroundColor: "primary.main",
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            />
          </Grid>

          <Grid item sm={12} height="40px"></Grid>

          <Grid item sm={12} xs={12} md={4}>
            <CardService
              title="About"
              text="Information about us including membership, product introduction, our services."
              color1="#1BBC9B"
              icon={UilCommentInfo}
              href="/about"
            ></CardService>
          </Grid>
          <Grid item sm={12} xs={12} md={4}>
            <CardService
              title="Tours Food"
              text="Displays a list of food tours, and supports advanced filters for easy search. "
              color1="#ff6868"
              icon={UilRestaurant}
              href="/tours"
            ></CardService>
          </Grid>
          <Grid item sm={12} xs={12} md={4}>
            <CardService
              title="FAQs Included"
              text="Common questions will be answered here or you can send your questions to us ."
              color1="#14b9d5"
              icon={UilCloudQuestion}
              href="/faqs"
            ></CardService>
          </Grid>

          <Grid item sm={12} height="20px"></Grid>

          <Grid item sm={12} xs={12} md={4} paddingBottom="10px">
            <CardService
              title="Contact"
              text="You can contact us here, including address, phone number, other communication. "
              color1="#f3a46b"
              icon={UilPhoneVolume}
              href="/contact"
            ></CardService>
          </Grid>
          <Grid item sm={12} xs={12} md={4}>
            <CardService
              title="Customer Care"
              text="Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin rhonc us urna dictum."
              color1="#c755da"
              icon={UilUserCheck}
            ></CardService>
          </Grid>
          <Grid item sm={12} xs={12} md={4}>
            <CardService
              title="Blog news"
              text="News, blogs about food, delicious dishes, sharing experiences about food tours."
              color1="#ff6868"
              icon={UilBookOpen}
              href="/news"
            ></CardService>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default AllOurServices;
