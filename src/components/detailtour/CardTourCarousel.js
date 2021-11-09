import React from 'react';
import CardTourPro from '../layoutDetailTour/CardTourPro';
import Typography from '@mui/material/Typography';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box } from '@mui/system';
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
        slidesToShow: 3,
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
                    slidesToShow: 1,
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
        <Container fixed>
            <Box marginLeft="0px" padding="0px 0px 0px 5px" sx={{ mb: 5 }} >
                <Typography marginLeft="5px" variant="h6" gutterBottom component="div" fontWeight="bold" fontSize="25px"   >
                    Trending Tours
                </Typography>
                <Slider  {...settings} >
                    <CardTourPro />
                    <CardTourPro />
                    <CardTourPro />
                    <CardTourPro />
                    <CardTourPro />
                    <CardTourPro />
                </Slider>
            </Box>
        </Container>

    );
};

export default CardTourCarousel;
