import React from 'react';
import FAQImage from '../components/faqs/FAQImage';
import Grid from '@mui/material/Grid';
import FAQAccordion from '../components/faqs/FAQAccordion';
import FAQRight from '../components/faqs/FAQRight';
import Container from "@mui/material/Container";
import Footer from '../components/footer/Footer';
import HeroSectionTour from '../components/layoutDetailTour/HeroSectionTour';
import ListInfo from '../components/layoutDetailTour/ListInfo';
import Itinerary from '../components/layoutDetailTour/Itinerary';
import CardTourCarousel from '../components/detailtour/CardTourCarousel';
import DetailTourReview from '../components/detailtour/DetailTourReview';
import Contribute from '../components/detailtour/Contribute';
const DetailTour = () => {
  return (
    <Grid marginTop="30px">
      <Container fixed >
        <HeroSectionTour></HeroSectionTour>
        <ListInfo></ListInfo>
        <Itinerary></Itinerary>
        <Contribute />
        <DetailTourReview></DetailTourReview>
      </Container>
      <CardTourCarousel></CardTourCarousel>
      <Footer></Footer>
    </Grid>


  );
}
export default DetailTour;