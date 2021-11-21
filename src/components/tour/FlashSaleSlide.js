import React from "react";
import "./flashsaleslide.css"
import { useState, useEffect } from "react";
import { Typographyf14medium } from "./TypoUtils";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { Box } from "@mui/system";

const Banners = [
    {
        content: "Sai Gon Food Tour is on Sales",
        src: "./images/TourBanner/banner_1.jpg"
    },
    {
        content: "Ho Chi Minh, together we strong",
        src: "./images/TourBanner/banner_1.jpg"
    },
    {
        content: "Pay with AirPay, get 20% discount",
        src: "./images/TourBanner/banner_1.jpg"
    }
]
const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 3000;

export const SlideShow = () => {
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === colors.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <Box className="slideshow" sx={{ borderRadius: "7px" }}>
            <Box
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {Banners.map((banner, index) => (
                    <Box
                        className="slide"
                        key={index}
                        sx={{ height: "60px", backgroundImage: `url(${banner.src})` }}
                    >
                        <LocalOfferIcon sx={{ mr: 2 }} />
                        <Typographyf14medium>{banner.content}</Typographyf14medium>
                    </Box>
                ))}
            </Box>

            <Box className="slideshowDots">
                {colors.map((_, idx) => (
                    <Box
                        key={idx}
                        className={`slideshowDot${index === idx ? " active" : ""}`}
                        onClick={() => {
                            setIndex(idx);
                        }}
                    ></Box>
                ))}
            </Box>
        </Box>
    );
}