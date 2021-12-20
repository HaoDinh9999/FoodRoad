import React from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import Typography from "@mui/material/Typography";
import ReviewForm from "../review-page/ReviewForm";
const ReviewCard = (props) => {
  const [open, setOpen] = React.useState(false);
  return (
    <Paper variant="outlined">
      <Grid container on>
        <Grid item sx={12} md={3}>
          <img src={props.img} alt={props.title} id="IMG_16" width="100%" />
        </Grid>
        <Grid px={4} py={2} item sx={12} md={9}>
          <Stack direction="column">
            <Typography variant="h6" lineHeight={1.2}>
              {props.title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              textOverflow="ellipsis"
              overflow="hide"
            >
              Step off the beaten track and travel through the maze of Saigon to
              seek for the real authentic food, which, just by the look, can
              make your mouth water... And, just so you know, this is where food
              lovers meet each other on the back of the motorbikes. Hang on
              tight, cause here comes Saigon Food Tour!!!
            </Typography>
          </Stack>

          {!open && (
            <Button
              sx={{ mt: 4 }}
              onClick={() => {
                setOpen(true);
              }}
              variant="outlined"
            >
              Review your tour
            </Button>
          )}
          {open && <ReviewForm notSingleReview={true} />}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ReviewCard;
