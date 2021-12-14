import React from "react";
import { useState, useEffect } from "react";
import "./ButtonScrollTop.css";
import { UilAngleUp } from "@iconscout/react-unicons";
import { green } from "@mui/material/colors";

const ButtonScrollTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <>
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          <UilAngleUp />
        </button>
      )}
    </>
  );
};

export default ButtonScrollTop;
