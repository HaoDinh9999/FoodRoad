import React from "react";
import FAQImage from "../components/faqs/FAQImage";
import Grid from "@mui/material/Grid";
import FAQAccordion from "../components/faqs/FAQAccordion";
import FAQRight from "../components/faqs/FAQRight";
import Container from "@mui/material/Container";
import Footer from "../components/footer/Footer";
import HeroSectionTour from "../components/layoutDetailTour/HeroSectionTour";
import ListInfo from "../components/layoutDetailTour/ListInfo";
import Itinerary from "../components/layoutDetailTour/Itinerary";
import CardTourCarousel from "../components/detailtour/CardTourCarousel";
import DetailTourReview from "../components/detailtour/DetailTourReview";
import Contribute from "../components/detailtour/Contribute";
import Aos from "aos";
import "aos/dist/aos.css";
const DetailTour = () => {
  React.useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <Grid marginTop="30px">
      <Container fixed>
        <div data-aos="fade-up" data-aos-duration={1000}>
          <HeroSectionTour></HeroSectionTour>
        </div>
        <ListInfo></ListInfo>
        <div data-aos="fade-up" data-aos-duration={900}>
          <Itinerary></Itinerary>
        </div>
        <div data-aos="fade-up" data-aos-duration={900}>
          <Contribute />
        </div>

        <div data-aos="fade-up" data-aos-duration={900}>
          <DetailTourReview></DetailTourReview>
        </div>
      </Container>
      <div data-aos="fade-up" data-aos-duration={900}>
        <CardTourCarousel></CardTourCarousel>
      </div>

      <Footer></Footer>
    </Grid>
  );
};
export default DetailTour;
