import React from 'react';
import '../App.css';
import '../components/contenttable/ContentTable.css'
import ImageSlider from '../components/imageslider/ImageSlider.js';
import ContentTable from '../components/contenttable/ContentTable';
import { SliderData } from '../components/imageslider/SliderData';
import Footer from '../components/footer/Footer';

function About() {
  return (
    <>
      <div className='about'>
        <ImageSlider slides={SliderData} />
        <ContentTable />
      </div>
      <Footer />
    </>
  );
}

export default About;