import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Circle from "@mui/icons-material/Circle";
import Avatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import Rating from "@mui/material/Rating";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { useHistory } from "react-router-dom";
import ReviewForm from "../components/review-page/ReviewForm";
import { Home } from "@mui/icons-material";

const Review = () => {
  const history = useHistory();

  return (
    <Container fixed>
      <Box mt={4} mb={4}>
        <Box mb={2} display="flex" alignItems="center">
          <Home sx={{ mr: 0.5 }} fontSize="inherit" />

          <Breadcrumbs separator="›" aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              href="/tours"
              onClick={(event) => {
                event.preventDefault();
                history.push("/tours");
              }}
            >
              Tours
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/tours/detailtour"
              onClick={(event) => {
                event.preventDefault();
                history.push("/tours/detailtour");
              }}
            >
              Detail
            </Link>
            <Typography color="text.primary">Review</Typography>
          </Breadcrumbs>
        </Box>

        <Grid container mt={2} spacing={4}>
          <Grid item xs={12} md={7}>
            <Box mb={4} p={2}>
              <Box display="flex" sx={{ alignItems: "center" }}>
                <Box
                  mr={2}
                  sx={{
                    // width: "150px",
                    // height: "150px",
                    "& img": {
                      width: "200px",
                      height: "200px",
                      objectFit: "cover",
                    },
                  }}
                >
                  <img
                    alt="tour "
                    src="https://www.saigonfoodtour.com/uploads/products/6/vegan_tour_3.jpg"
                  />
                </Box>
                <Stack direction="column">
                  <Typography variant="h6" lineHeight={1.2}>
                    Small-Group Street Food Bike Tour of Hanoi Old Quarter
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    textOverflow="ellipsis"
                    overflow="hide"
                  >
                    Step off the beaten track and travel through the maze of
                    Saigon to seek for the real authentic food, which, just by
                    the look...
                  </Typography>
                </Stack>
              </Box>
              <ReviewForm />
            </Box>
          </Grid>

          <Grid item xs={12} md={5}>
            <Typography variant="subtitle1" fontWeight={600}>
              Recent reviews of this tour
            </Typography>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Travis Howard"
                  src="https://i.pravatar.cc/300?img=59"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Summer BBQ"
                secondary={
                  <>
                    <Rating
                      icon={<Circle sx={{ color: "#00aa6c" }} />}
                      emptyIcon={
                        <Circle sx={{ color: "rgba(0, 0, 0, 0.1)" }} />
                      }
                      name="read-only"
                      value={4}
                      readOnly
                    />
                    <p>
                      All of the guides were extremely polite and helpful. Not
                      only did we learn about the food, but also the Vietnamese
                      culture and language as...
                    </p>
                  </>
                }
              />
            </ListItem>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="David Villa"
                  src="https://i.pravatar.cc/300?img=67"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Summer BBQ"
                secondary={
                  <>
                    <Rating
                      icon={<Circle sx={{ color: "#00aa6c" }} />}
                      emptyIcon={
                        <Circle sx={{ color: "rgba(0, 0, 0, 0.1)" }} />
                      }
                      name="read-only"
                      value={4}
                      readOnly
                    />
                    <p>
                      All of the guides were extremely polite and helpful. Not
                      only did we learn about the food, but also the Vietnamese
                      culture and language as...
                    </p>
                  </>
                }
              />
            </ListItem>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Andy Jun" src="https://i.pravatar.cc/300?img=68" />
              </ListItemAvatar>
              <ListItemText
                primary="Summer BBQ"
                secondary={
                  <>
                    <Rating
                      icon={<Circle sx={{ color: "#00aa6c" }} />}
                      emptyIcon={
                        <Circle sx={{ color: "rgba(0, 0, 0, 0.1)" }} />
                      }
                      name="read-only"
                      value={4}
                      readOnly
                    />
                    <p>
                      All of the guides were extremely polite and helpful. Not
                      only did we learn about the food, but also the Vietnamese
                      culture and language as...
                    </p>
                  </>
                }
              />
            </ListItem>
            <Button
              href="/tours/detailtour#review"
              fullWidth
              variant="outlined"
            >
              View all
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Review;
