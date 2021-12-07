import React from 'react';
import FAQImage from '../components/faqs/FAQImage';
import Grid from '@mui/material/Grid';
import FAQAccordion from '../components/faqs/FAQAccordion';
import FAQRight from '../components/faqs/FAQRight';
import Container from "@mui/material/Container";
import Footer from '../components/footer/Footer';
const  FAQS =() => {
  return(
    <Grid >
    <FAQImage> </FAQImage>
    <Container fixed sx={{ margin: "40px auto" }}>
    <Grid container sm={12} >
      <Grid item sm={8}>
      <FAQAccordion></FAQAccordion>

      </Grid>
      <Grid item sm={0.3}></Grid>
      <Grid item sm={3.7}>
      <FAQRight></FAQRight>

      </Grid>
    </Grid>
    </Container>
    <Footer></Footer>
    
    </Grid>
  );
}
export default FAQS;