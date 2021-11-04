import React from "react";

import Container from "@mui/material/Container";
import classes from "./Gallery.module.css";
import GalleryImageList from "./GalleryImageList";
const Gallery = () => {
  return (
    <>
      <div className={classes["gallery-banner"]}>
        <div className={classes["gallery-banner-gradient"]}>
          <div className={classes["gallery-title"]}>
            <h1>Gallery</h1>
            <p>Our adventures in pictures</p>
          </div>
        </div>
      </div>
      <Container fixed sx={{ margin: "40px auto" }}>
        <GalleryImageList />
      </Container>
    </>
  );
};

export default Gallery;
