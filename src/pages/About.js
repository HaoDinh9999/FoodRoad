import React from 'react';
import '../App.css';
import '../components/contenttable/ContentTable.css'
import ContentTable from '../components/contenttable/ContentTable';
import Footer from '../components/footer/Footer';
import ButtonScrollTop from '../components/buttonscrolltop/ButtonScrollTop';

function About() {
  return (
    <div className='background'>
      <div className='about'>
        <div className="about-title">OUR STORY</div>
        <div className='about-paragraph'>
          <p>We have been growing and evolving over the last one year. We founded Food Road Tour in Jan 2014, a child of Footsteps Indochina Travel. We are new but we rapidly receive many supports and love from our customers, our authentic local food vendors we know, and our lovely talented guides. Our aim is to help you experience truly local food and Saigonese life. Along the journey, we will help you get closer to the local and learn about our eating customs, our traditions.</p>
          <p>Besides, we are about to launch "One tour for one meal" charity program that support to poor people. The bigger the number of people going on the tour, the more meals the poor are going to have. Of course, by the time we do the charity (around November), we would love to have you give us a hand!</p>
          <p>We have not reached our vision yet and it is going to be a long tough ride. But it has truly been a pleasure for everyone here at Food Road Tour to show you why we are so in love with Vietnam, especially Vietnam food. We hope to continue with what could possibly be described as the best “job” on the planet for many years to come.</p>
        </div>
        <div className="about-title">OUR MISSION</div>
        <ContentTable />
      </div>
      <Footer />
      <ButtonScrollTop/>
    </div>
  );
}

export default About;