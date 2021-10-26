import { display } from "@mui/system";
import React, { Component } from "react";
import CardTourItem from "./CardTourItem";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { border, Box, fontWeight, ThemeProvider } from '@mui/system';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import LeftArrow from "../../../assets/img/left-arrow.svg"
import RightArrow from "../../../assets/img/right-arrow.svg"
import { UilAccessibleIconAlt } from '@iconscout/react-unicons'
import "./sliders.css"
const AllCardTours = () => {
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
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    className: 'sliders',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],

  };
  return (
    <Box marginLeft="0px" padding="0px 0px 0px 0px" >
      <Typography marginLeft="5px" variant="h6" gutterBottom component="div" fontWeight="bold" fontSize="25px"   >
        Trending Tours
        </Typography>
    <Slider  {...settings}>
      <CardTourItem url='/images/Food1.jpg'></CardTourItem>
      <CardTourItem url='/images/Food2.jpg'></CardTourItem>
      <CardTourItem url='/images/Food3.jpg'></CardTourItem>
      <CardTourItem url='/images/Food4.jpg'></CardTourItem>
      <CardTourItem url='/images/Food1.jpg'></CardTourItem>
      <CardTourItem url='/images/Food2.jpg'></CardTourItem>
      <CardTourItem url='/images/Food3.jpg'></CardTourItem>
      <CardTourItem url='/images/Food4.jpg'></CardTourItem>
    </Slider>
    <Box height="50px"></Box>
    <Typography marginLeft="5px" variant="h6" gutterBottom component="div" fontWeight="bold" fontSize="25px"   >
        Favourite Foods
        </Typography>
    <Slider  {...settings}>
      <CardTourItem url='/images/Food1.jpg'></CardTourItem>
      <CardTourItem url='/images/Food2.jpg'></CardTourItem>
      <CardTourItem url='/images/Food3.jpg'></CardTourItem>
      <CardTourItem url='/images/Food4.jpg'></CardTourItem>
      <CardTourItem url='/images/Food1.jpg'></CardTourItem>
      <CardTourItem url='/images/Food2.jpg'></CardTourItem>
      <CardTourItem url='/images/Food3.jpg'></CardTourItem>
      <CardTourItem url='/images/Food4.jpg'></CardTourItem>
    </Slider>
    </Box>
  );
};

export default AllCardTours;
