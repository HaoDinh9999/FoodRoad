import React from 'react';
// import './tour.css';
import Cards from '../components/card/Cards';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';
export default function Tours() {
  return (
    <>
    <main id="" class="">
        {/* <div id="tours" class="tours_all"> */}
        {/* <div class="container"> */}
        {/* <div class="col-md-12 col-xs-12 col-sm-12">
          <a href="https://www.saigonfoodtour.com/tours" class="btnwelcome btnyellow btndefault">
              our tours
          </a>
      </div>
      <div class="col-md-12 col-xs-12 ol-sm-12 description_tour">
          <div class="col-md-12"> 
              <h1 style={{textAlign: "justify"}}><span style={{fontSize: "14px"}}><strong>We're</strong></span><span style={{fontSize: "14px"}}><strong>&nbsp;here to represent our country and deliver the value of Saigon street food, which built up 4 gorgeous tours below with 4 different amazing itineraries.&nbsp;So what are you waiting for?&nbsp;Step up and have your mind-blowing once in a lifetime experience with our service.&nbsp;</strong></span></h1>
          </div>
      </div> */}
          <Cards/>
    {/* </div> */}
    {/* </div> */}
    </main>
    <Footer/>
    </>
  );
}
