import React from "react";
import CardTourPro from "../layoutDetailTour/CardTourPro";
import Typography from "@mui/material/Typography";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box } from "@mui/system";
import "./sliders.css";
import Container from "@mui/material/Container";
const CardTourCarousel = () => {
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <img src={<ArrowBackIcon />} alt="prevArrow" {...props} />
    );

    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <img src={<ArrowForwardIcon />} alt="nextArrow" {...props} />
    );
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
            <Box marginLeft="0px" padding="0px 0px 0px 5px" sx={{ mb: 5 }}>
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
            </Box>
        </Container>
    );
};

export default CardTourCarousel;
