import React from 'react';
import '../App.css';
import Footer from '../components/footer/Footer';
import ButtonScrollTop from '../components/buttonscrolltop/ButtonScrollTop';
import ReviewDetails from '../components/reviewdetails/ReviewDetails';

function Review() {
  return (
    <>
        <div className='review'>
          <ReviewDetails />
          <Footer />
          <ButtonScrollTop />
        </div>
    </>
  );
}

export default Review;