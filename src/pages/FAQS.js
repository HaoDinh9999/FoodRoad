import React from "react";
import FAQImage from "../components/faqs/FAQImage";
import Grid from "@mui/material/Grid";
import FAQAccordion from "../components/faqs/FAQAccordion";
import FAQRight from "../components/faqs/FAQRight";
import Container from "@mui/material/Container";
import Footer from "../components/footer/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
const FAQS = () => {
  React.useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <Grid>
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <FAQImage> </FAQImage>
      </div>
      <Container fixed sx={{ margin: "40px auto" }}>
        <Grid container sm={12} xs={12} md={12}>
          <Grid item sm={12} md={8} marginBottom="40px">
            <FAQAccordion></FAQAccordion>
          </Grid>
          <Grid item md={0.3}></Grid>
          <Grid item md={3.7}>
            <FAQRight></FAQRight>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};
export default FAQS;
