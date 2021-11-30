import React from "react";
import Grid from "@mui/material/Grid";

import Container from "@mui/material/Container";
import Footer from "../components/footer/Footer";
import CardHero from "../components/layoutProfile/CardHero";
import Aos from "aos";
import "aos/dist/aos.css";
const Profile = () => {
  React.useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <div data-aos="fade-up" data-aos-duration={900}>
      <CardHero></CardHero>
    </div>
  );
};
export default Profile;
