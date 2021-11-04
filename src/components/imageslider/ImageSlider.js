import React, { useState } from 'react';
import { SliderData } from './SliderData.js';
import './ImageSlider.css'
import {FaAngleRight, FaAngleLeft} from 'react-icons/fa'

function ImageSlider ({slides}) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length-1 : current - 1)
    }

    if(!Array.isArray(slides) || slides.length <= 0)
    {
        return null;
    }

    return (
        <div>
        <h1 className='about-title1'>OUR STORY</h1>
        <div className="slider">
            <FaAngleLeft className="left-arrow" onClick={prevSlide} />
            <FaAngleRight className="right-arrow" onClick={nextSlide} />
            {SliderData.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide-active' : 'slide'} key={index}>
                        {index === current && (
                        <div className='container-image-slider'>
                            <img src={slide.image} alt='travel-catalog' className='image-catalog'/>
                            <div className='center'>
                                {slide.Text}
                            </div>
                        </div>
                        )}
                    </div>
                )
            })}
        </div>
        </div>
    );
};

export default ImageSlider;

