import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import ReviewForm from "../review-page/ReviewForm";
import ReviewCard from "./ReviewCard";
import InputAdornment from "@mui/material/InputAdornment";
import Search from "@mui/icons-material/Search";
const WriteReview = () => {
  return (
    <Container sx={{ mt: 8, mb: 8 }} fixed>
      <Typography textAlign="center" variant="h5" color="text.secondary">
        Review a tour you've use
      </Typography>
      <TextField
        placeholder="Search your tour ... "
        sx={{ mt: 2 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
        size="small"
        fullWidth
      />
      <Stack mt={4} direction="column" spacing={2}>
        <ReviewCard
          img="https://www.saigonfoodtour.com/uploads/products/2/saigon_by_night_7.jpg"
          title="SAIGON BY NIGHT"
        />
        <ReviewCard
          img="https://www.saigonfoodtour.com/uploads/products/5/taste_of_the_night_4.jpg"
          title="TASTE OF THE NIGHT"
        />
        <ReviewCard
          img="https://www.saigonfoodtour.com/uploads/products/6/vegan_tour_3.jpg"
          title="VEGAN TOUR"
        />
      </Stack>
    </Container>
  );
};

export default WriteReview;
