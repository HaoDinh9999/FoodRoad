import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import { Grid } from "@mui/material";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { padding, width } from "@mui/system";
import Container from "@mui/material/Container";
import CardNews from "./CardNews";
import CardNewRight from "./CardNewRight";
import zIndex from "@mui/material/styles/zIndex";

const AllNewsReview = () => {
  return (
    <Box marginLeft="-10px" paddingBottom="40px">
      <Container fixed>
        <Grid
          container
          sm={12}
          xs={12}
          marginBottom="-40px"
          marginTop="60px"
          justifyContent="center"
        >
          <Grid container sm={12} justifyContent="center">
            <Typography
              variant="h6"
              component="h2"
              style={{
                color: "#c2c2c2",
                fontSize: "13px",
                fontWeight: "Medium",
              }}
            >
              FROM THE BLOG
            </Typography>
            <Grid
              container
              item
              sm={12}
              justifyContent="center"
              zIndex="1000"
              marginLeft="20px"
            >
              <Typography
                variant="h6"
                component="h2"
                style={{ color: "#000", fontSize: "35px", fontWeight: "bold" }}
              >
                ARTICLE & NEWS
              </Typography>
            </Grid>
            <Box
              sx={{
                margin: "-19px 0px 10px 210px",
                position: "position",
                width: 100,
                height: 5,
                backgroundColor: "#1976d2",
                "&:hover": {
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            />
          </Grid>
        </Grid>
        <Grid
          container
          columnSpacing={2}
          sm={12}
          xs={12}
          display="flex"
          marginLeft="10px"
        >
          <Grid item sm={6} xs={12}>
            <CardNews
              color1="#fff"
              fontcolor1="#999"
              title1="#5c5b5b"
              colorbutton="#f37011"
              url="https://amthucvietnam.com.vn/wp-content/uploads/2021/04/cm_Anh_Ga_1.jpg"
            ></CardNews>
          </Grid>
          <Grid item sm={6} xs={12}>
            <CardNews
              color1="#1bbc9b"
              fontcolor1="#fbfeff"
              title1="#fff"
              colorbutton="#fff"
              url="https://i.ytimg.com/vi/ZGs59VEu3hQ/maxresdefault.jpg"
            ></CardNews>
          </Grid>
        </Grid>
        <Grid
          container
          columnSpacing={2}
          sm={12}
          xs={12}
          display="flex"
          marginTop="-45px"
          marginLeft="10px"
        >
          <Grid item sm={6} xs={12}>
            <CardNewRight
              color1="#14b9d5"
              fontcolor1="#fbfeff"
              title1="#fff"
              colorbutton="#fff"
              url="https://cookingchew.com/wp-content/uploads/2020/09/Blue-Foods-CO662-Pin-15.jpg.webp"
            ></CardNewRight>
          </Grid>
          <Grid item sm={6} xs={12}>
            <CardNews
              color1="#fff"
              fontcolor1="#999"
              title1="#5c5b5b"
              colorbutton="#f76570"
              url="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/mojito-cocktails-150961e.jpg"
            ></CardNews>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AllNewsReview;
