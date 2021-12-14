import { display } from "@mui/system";
import React, { Component } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { border, Box, fontWeight, ThemeProvider } from "@mui/system";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import LeftArrow from "../../../assets/img/left-arrow.svg";
import RightArrow from "../../../assets/img/right-arrow.svg";
import { UilAccessibleIconAlt } from "@iconscout/react-unicons";
import "../cardtour/sliders.css";
import Button from "@mui/material/Button";
import { UilMessage } from "@iconscout/react-unicons";
import Container from "@mui/material/Container";
import CardReview from "./CardReview";
const AllCardReview = () => {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img src={LeftArrow} alt="prevArrow" {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src={RightArrow} alt="nextArrow" {...props} />
  );
  //const settings = {
  //  dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 3
  //};
  //return (
  // <Box>
  //   <Grid  Grid container sm={12} display="flex" marginLeft="5px">
  //    <Typography variant="h6" gutterBottom component="div" fontWeight="bold" fontSize="25px"   >
  //     Trending Tours
  //    </Typography>
  // </Grid>
  //  <Slider {...settings}>
  //  <CardTourItem></CardTourItem>
  //  </Slider>

  //<Box height="40px"></Box>
  //<Grid  Grid container sm={12} display="flex" marginLeft="5px">
  //   <Typography variant="h6" gutterBottom component="div" fontWeight="bold" fontSize="25px"   >
  //     New Tours
  //   </Typography>
  // </Grid>
  //<Grid Grid container sm={12} display="flex" marginLeft="15px">
  //<CardTourItem url='/images/Food1.jpg'></CardTourItem>
  // <CardTourItem url='/images/Food2.jpg'></CardTourItem>
  //<CardTourItem url='/images/Food3.jpg'></CardTourItem>
  //<CardTourItem url='/images/Food4.jpg'></CardTourItem>

  // </Grid>
  // </Box>

  //);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          //   initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container fixed>
      <Box marginLeft="0px" padding="0px 0px 0px 5px">
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
            MULTIPLE REVIEWS INCLUDED
          </Typography>
        </Grid>
        <Grid
          container
          item
          sm={12}
          justifyContent="center"
          marginBottom="-19px"
          zIndex="1000"
        >
          <Typography
            variant="h6"
            component="h2"
            style={{ color: "#000", fontSize: "35px", fontWeight: "bold" }}
          >
            CUSTOMER RATE
          </Typography>
        </Grid>

        <Box
          sx={{
            margin: "0 0px 10px 610px",
            position: "position",
            width: 130,
            height: 5,
            backgroundColor: "#1976d2",
            "&:hover": {
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        />
        <Slider {...settings}>
          <CardReview
            url="https://images.foody.vn/res/g105/1048978/prof/s640x400/foody-upload-api-foody-mobile-foody-upload-api-foo-200930170601.jpg"
            title="Tiger Sugar"
            address="212 Lien Tinh 5, P. 6, District 8, HCM city"
            price="10"
          ></CardReview>
          <CardReview
            url="https://images.foody.vn/res/g105/1048978/prof/s640x400/foody-upload-api-foody-mobile-foody-upload-api-foo-200930170601.jpg"
            title="Tiger Sugar"
            address="212 Lien Tinh 5, P. 6, District 8, HCM city"
            price="10"
          ></CardReview>
          <CardReview
            url="https://images.foody.vn/res/g105/1048978/prof/s640x400/foody-upload-api-foody-mobile-foody-upload-api-foo-200930170601.jpg"
            title="Tiger Sugar"
            address="212 Lien Tinh 5, P. 6, District 8, HCM city"
            price="10"
          ></CardReview>
          <CardReview
            url="https://images.foody.vn/res/g105/1048978/prof/s640x400/foody-upload-api-foody-mobile-foody-upload-api-foo-200930170601.jpg"
            title="Tiger Sugar"
            address="212 Lien Tinh 5, P. 6, District 8, HCM city"
            price="10"
          ></CardReview>
        </Slider>
      </Box>
    </Container>
  );
};
export default AllCardReview;
