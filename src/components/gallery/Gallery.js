import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import Stack from "@mui/material/Stack";

import Typography from "@mui/material/Typography";

import Container from "@mui/material/Container";
import classes from "./Gallery.module.css";
import GalleryImageList from "./GalleryImageList";
const Gallery = () => {
  return (
    <Box sx={{ backGround: "rgb(247, 250, 255)" }}>
      <div className={classes["gallery-banner"]}>
        <div className={classes["gallery-banner-gradient"]}>
          <div className={classes["gallery-title"]}>
            <h1>Gallery</h1>
            <p>Our adventures in pictures</p>
          </div>
        </div>
      </div>
      <Container fixed sx={{ margin: "40px auto" }}>
        <Paper variant="outlined" sx={{ p: "40px 50px", mb: 8 }}>
          <Stack spacing={2}>
            <Typography color="#677788" variant="body1">
              Dear our wonderful guests,
            </Typography>
            <Typography color="#677788" variant="body1">
              We have spent wonderful time together eating great food and we
              believe that our moments should be kept forever. Therefore, this
              gallery is dedicated for you. You can find your post-tour pictures
              here, which we will update monthly.
            </Typography>
            <Typography color="#677788" variant="body1">
              If you cannot find it, do not hesitate to check out our facebook{" "}
              {"&"}
              instagram:
            </Typography>
            <Typography color="#677788" variant="body1" component="p">
              {"-Facebook: "}
              <a href="https://www.facebook.com/saigonfoodtour">
                www.facebook.com/saigonfoodtour
              </a>
            </Typography>
            <Typography color="#677788" variant="body1">
              -Instagram:{" "}
              <a href="https://www.instagram.com/saigonfoodtour">
                www.instagram.com/saigonfoodtour
              </a>
            </Typography>
          </Stack>
        </Paper>
        <GalleryImageList />
      </Container>
    </Box>
  );
};

export default Gallery;
