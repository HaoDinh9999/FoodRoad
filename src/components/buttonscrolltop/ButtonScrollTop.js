import React from "react";
import { useState, useEffect } from "react";
import "./ButtonScrollTop.css"

const ButtonScrollTop = () => {
    const [showButton, setShowButton]= useState(false);

    useEffect(() => {
        window.addEventListener("scroll",()=>
        {
            if(window.pageYOffset>300){
                setShowButton(true);
            }
            else {
                setShowButton(false);
            }
        });
    }, []);

    // This function will scroll the window to the top 
    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth' // for smoothly scrolling
        });
    };

    return(
        <>
            {showButton && (
                <button onClick={scrollToTop} className="back-to-top">
                    &#8682;
                </button>
            )}
        </>
    );
};

export default ButtonScrollTop;