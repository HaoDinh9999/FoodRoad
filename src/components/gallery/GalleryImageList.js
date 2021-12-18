import React, { useState, useCallback } from "react";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";

import TextField from "@mui/material/TextField";

import classes from "./GalleryImageList.module.css";
import ImageViewer from "react-simple-image-viewer";

const tours = [
  "All the tours",
  "Taste of the night",
  "Sai Gon backstreet",
  "Sai Gon by night",
  "Tast of the morning",
  "Vegan tour",
];

const GalleryImageList = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  return (
    <>
      <Grid container spacing={2}>
        <Grid display="flex" justifyContent="flex-end" item xs={12}>
          <TextField
            defaultValue="All the tours"
            label="Tours"
            size="small"
            select
          >
            {tours.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        {itemData.map((item, index) => (
          <Grid item sm={12} md={6} lg={4}>
            <img
              key={item.img}
              onClick={openImageViewer.bind(null, index)}
              className={classes["gallery-image"]}
              src={`${item.img}?w=500&h=500&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </Grid>
        ))}
      </Grid>
      {isViewerOpen && (
        <ImageViewer
          backgroundStyle={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
          src={itemData.map((e) => e.img + "?w=500&h=500&fit=crop&auto=format")}
          currentIndex={currentImage}
          disableScroll={true}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
        />
      )}
    </>
  );
};
const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];
export default GalleryImageList;
