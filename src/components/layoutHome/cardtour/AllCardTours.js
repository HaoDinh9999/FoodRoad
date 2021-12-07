import { display } from "@mui/system";
import React, { Component } from "react";
import CardTourItem from "./CardTourItem";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { border, Box, fontWeight, ThemeProvider } from "@mui/system";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import LeftArrow from "../../../assets/img/left-arrow.svg";
import RightArrow from "../../../assets/img/right-arrow.svg";
import { UilAccessibleIconAlt } from "@iconscout/react-unicons";
import "./sliders.css";
import Button from "@mui/material/Button";
import { UilMessage } from "@iconscout/react-unicons";
import Container from "@mui/material/Container";
import CardTourPro from "../../layoutDetailTour/CardTourPro";
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
      <Box marginLeft="0px" padding="0px 0px 0px 5px">
        <Box display="flex" justifyContent="space-between">
          <Typography
            marginLeft="5px"
            variant="h6"
            gutterBottom
            component="div"
            fontWeight="bold"
            fontSize="25px"
          >
            Trending Tours
          </Typography>
          <Button
            sx={{
              color: "#9e9e9e",
              borderRadius: "20px",
              textTransform: "none",
              "&:hover": {
                opacity: [0.9, 0.8, 0.7],
              },
            }}
            endIcon={<UilMessage />}
          >
            View More
          </Button>
        </Box>

        <Slider {...settings}>
          <CardTourPro
            url="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/65/1a/a8/caption.jpg?w=300&h=300&s=1"
            title="Cu Chi Tunnels: Morning or Afternoon Guided Tour (Ben Duoc Option available)"
          />
          <CardTourPro
            url="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/64/42/60/caption.jpg?w=300&h=300&s=1"
            title="Ho Chi Minh City Private Half-Day Tour by Jeep"
          />
          <CardTourPro
            url="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/6d/eb/ab/caption.jpg?w=300&h=300&s=1"
            title="3 and a Half Hours Saigon Half Day City Tour with Girl Power Riders Kiss Tours"
          />
          <CardTourPro
            url="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/ce/e4/72/caption.jpg?w=300&h=300&s=1"
            title="Private Sightseeing Motorbike Tour with Local Students"
          />
          <CardTourPro
            url="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/57/f9/f4/caption.jpg?w=300&h=300&s=1"
            title="Cu Chi Tunnels Luxury Group Tour Half Day"
          />
          <CardTourPro
            url="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/7f/50/20/caption.jpg?w=300&h=300&s=1"
            title="Bizarre Local Food Walking Private Tour"
          />
          <CardTourPro
            url="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/e2/2b/2c.jpg"
            title="Saigon Food Tour on Scooter at Night


            "
          />
        </Slider>
        <Box height="50px"></Box>
        <Typography
          marginLeft="5px"
          variant="h6"
          gutterBottom
          component="div"
          fontWeight="bold"
          fontSize="25px"
        >
          Favourite Foods
        </Typography>
        <Slider {...settings}>
          <CardTourItem
            url="https://images.foody.vn/res/g105/1048978/prof/s640x400/foody-upload-api-foody-mobile-foody-upload-api-foo-200930170601.jpg"
            title="Tiger Sugar"
            address="212 Lien Tinh 5, P. 6, District 8, HCM city"
            price="10"
          ></CardTourItem>
          <CardTourItem
            url="https://images.foody.vn/res/g65/648264/prof/s640x400/file_restaurant_photo_wd5j_16055-0b2332c7-201116172318.jpeg"
            title="An Vat RIO"
            address="95/34 Le Thi Rieng, P. Ben Thanh, District 1, HCM city            "
            price="18"
          ></CardTourItem>
          <CardTourItem
            url="https://images.foody.vn/res/g108/1073199/prof/s576x330/foody-upload-api-foody-mobile-a-xin-210412102418.jpg"
            title="Chan Ga Rut Xuong "
            address="95/34 Le Thi Rieng, P. Ben Thanh, District 1, HCM city            "
            price="20"
          ></CardTourItem>
          <CardTourItem
            url="https://images.foody.vn/res/g70/694736/prof/s576x330/foody-upload-api-foody-mobile-6-jpg-180406180221.jpg"
            title="Haven Restaurant"
            address="95/34 Le Thi Rieng, P. Ben Thanh, District 1, HCM city            "
            price="32"
          ></CardTourItem>
          <CardTourItem
            url="https://images.foody.vn/res/g101/1000398/prof/s576x330/foody-upload-api-foody-mobile-c__media_temp-_-food-200204114523.jpg"
            title="Banh Mi Oanh"
            address="95/34 Le Thi Rieng, P. Ben Thanh, District 1, HCM city            "
            price="24"
          ></CardTourItem>
          <CardTourItem
            url="https://images.foody.vn/res/g77/762734/prof/s576x330/foody-upload-api-foody-mobile-4-gif-180725095634.jpg"
            title="Bun Bo Hue"
            address="95/34 Le Thi Rieng, P. Ben Thanh, District 1, HCM city            "
            price="30"
          ></CardTourItem>
          <CardTourItem
            url="https://images.foody.vn/res/g26/251668/prof/s576x330/image-c322bf64-210614102952.jpeg"
            title="Lotteria AEON Mall"
            address="95/34 Le Thi Rieng, P. Ben Thanh, District 1, HCM city            "
            price="20"
          ></CardTourItem>
          <CardTourItem
            url="https://images.foody.vn/res/g103/1025616/prof/s640x400/foody-upload-api-foody-mobile-2-200526095329.jpg"
            title="Hot Ga Nuong            "
            address="95/34 Le Thi Rieng, P. Ben Thanh, District 1, HCM city            "
            price="25"
          ></CardTourItem>
        </Slider>
      </Box>
    </Container>
  );
};

export default AllCardTours;
