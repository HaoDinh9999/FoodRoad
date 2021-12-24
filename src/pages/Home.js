import React from "react";
import "../App.css";
import Box from "@mui/material/Box";
import HeroSection from "../components/layoutHome/herosection/HeroSection";
import AllOurServices from "../components/layoutHome/ourservice/AllOurServices";
import AllSales from "../components/layoutHome/sale/AllSales";
import AllCardTours from "../components/layoutHome/cardtour/AllCardTours";
import AllNewsReview from "../components/layoutHome/newsreview/AllNewsReview";
import AllCardReview from "../components/layoutHome/review/AllCardReview";
function Home() {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <HeroSection></HeroSection>
      <AllOurServices></AllOurServices>
      <AllSales></AllSales>
      <AllCardTours></AllCardTours>
      <AllNewsReview></AllNewsReview>
      <AllCardReview></AllCardReview>
    </Box>
  );
}

export default Home;
