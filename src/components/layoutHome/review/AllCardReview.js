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
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    className: "sliders",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container fixed>
      <Box marginTop="20px" marginBottom="40px" padding="0px 0px 0px 5px">
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
            MULTIPLE RATE INCLUDED
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
              CUSTOMER RATE
            </Typography>
          </Grid>
          <Box
            sx={{
              margin: "-19px 0px 10px 230px",
              position: "position",
              width: 90,
              height: 5,
              backgroundColor: "#1976d2",
              "&:hover": {
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          />
        </Grid>

        <Slider {...settings}>
          <CardReview urlAnh="https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.6435-9/41034329_1526350610843581_1879003489980383232_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=KK5syj9TV-oAX_wSGXO&_nc_ht=scontent.fsgn2-2.fna&oh=00_AT9oHHeRuK7SUs9DNldnSE7ZNkbR4xFaCJ-8kgPkPP8BhA&oe=61E539AA" />
          <CardReview urlAnh="https://image.thanhnien.vn/460x306/Uploaded/2021/lxwpcqjwp/2021_03_14/av-02_ayrt.jpeg" />
          <CardReview urlAnh="https://mui.com/static/images/avatar/2.jpg" />
          <CardReview urlAnh="https://mui.com/static/images/avatar/3.jpg" />
          <CardReview urlAnh="https://mui.com/static/images/avatar/1.jpg" />
          <CardReview urlAnh="https://mui.com/static/images/avatar/2.jpg" />
          <CardReview urlAnh="https://mui.com/static/images/avatar/3.jpg" />
        </Slider>
      </Box>
    </Container>
  );
};
export default AllCardReview;
