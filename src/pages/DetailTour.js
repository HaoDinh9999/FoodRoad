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
import CardTourPro from '../components/layoutDetailTour/CardTourPro';
const  DetailTour =() => {
  return(
    <Grid marginTop="30px">
    <Container  fixed >
    <HeroSectionTour></HeroSectionTour>
    <ListInfo></ListInfo>
    <Itinerary></Itinerary>
    <CardTourPro></CardTourPro>
    </Container>
    <Footer></Footer>

    </Grid>
    

  );
}
export default DetailTour;