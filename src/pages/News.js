import Grid from "@mui/material/Grid";
import NewsRight from "../components/news/NewsRight";
import Container from "@mui/material/Container";
import Footer from "../components/footer/Footer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import React from "react";
import NewsCard from "../components/news/NewsCard";

const News = () => {
  return (
    <div>
      <Grid>
        <h1 className="sign-up"> Saigon Food News </h1>

        <Container fixed sx={{ margin: "40px auto" }}>
          <Box mb={3}>
            <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              sx={{ display: "flex", alignItems: "center" }}
              color="inherit"
              href="/"
            >
              <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Home
            </Link>
            <Typography
              sx={{ display: "flex", alignItems: "center" }}
              color="text.primary"
            >
              News
            </Typography>
          </Breadcrumbs>
          </Box>

          <Grid container>
            <Grid item xs={12} sm={12} md={9}>
              <Box
                pb={5}
                border={0}
                borderColor="white"
                borderRadius={3}
                boxShadow={0}
              >
                <Box pb={2} display="flex" alignItems="center">
                  <Typography variant="h4" color="primary">
                    Food News
                  </Typography>
                  <StarOutlineIcon
                    color="primary"
                    style={{ fontSize: "36px" }}
                  ></StarOutlineIcon>
                </Box>
                <Stack spacing={5}>
                  <NewsCard
                    image="https://amthucvietnam.com.vn/wp-content/uploads/2021/04/cm_Anh_Ga_1.jpg"
                    title="Saigon Food Everywhere"
                    subtitle="You can find delicious Saigon food everywhere"
                    date="2/11/2021"
                    author="Hưng Thịnh"
                  />
                  <NewsCard
                    image="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/mojito-cocktails-150961e.jpg"
                    title="Cocktails of the week"
                    subtitle="These potent cocktails are perfect to get you through the week. Enjoy the magic of a Color-Changing Mojito. Sip on smoky mezcal-loaded Dragon Mother. Or prep for Monday with a tequila and rosé-filled Rosarita."
                    date="2/11/2021"
                    author="Ruchika Agarwal"
                  />
                  <NewsCard
                    image="https://orders.nuggetmarkets.net/media/06/26/contemporary-meal-group-2020-10.jpg"
                    title="How will consumers prepare holiday meals in 2021?"
                    subtitle="Convenience is key this holiday season as the food and beverage industry continues to grapple with the effects of the pandemic and supply chain disruptions."
                    date="2/11/2021"
                    author="Audrey Altmann"
                  />
                  <NewsCard
                    image="https://i.pinimg.com/originals/0c/68/41/0c6841de10de3719cb14fd06e61bc1ab.jpg"
                    title="A food brand’s values can be key to long-term success"
                    subtitle="Many customers, especially younger ones, want the foodservice and restaurant brands they interact with each day to speak up."
                    date="2/11/2021"
                    author="Samantha Des Jardins"
                  />
                </Stack>
              </Box>
              {/* Category 2 */}
              <Box
                pb={5}
                border={0}
                borderColor="white"
                borderRadius={3}
                boxShadow={0}
              >
                <Box pb={2} display="flex" alignItems="center">
                  <Typography variant="h4" color="primary">
                    Travel News
                  </Typography>
                  <StarOutlineIcon
                    color="primary"
                    style={{ fontSize: "36px" }}
                  ></StarOutlineIcon>
                </Box>
                <Stack spacing={5}>
                  <NewsCard
                    image="https://i.ytimg.com/vi/ZGs59VEu3hQ/maxresdefault.jpg"
                    title="How Sticky Rice Cake (Bánh Chưng) Becomes an Iconic Symbol of New Year Day in Vietnam"
                    subtitle="Banh Chung, or sticky rice cake, is one of the wonders of Asian cuisine presented in Vietnam. People may love its taste but may not know how the cake is made? And how it represents an iconic symbol of New Year Day in Vietnam?"
                    date="2/11/2021"
                    author="Travel Blog"
                  />
                  <NewsCard
                    image="https://i.guim.co.uk/img/media/31ca1bf89bdb7b5714dadb6b406cd62604d784b4/0_324_5853_3512/master/5853.jpg?width=1020&quality=45&auto=format&fit=max&dpr=2&s=725a4e993c024df2a41d277cc0a592c0"
                    title="Europe on a plate: foodie holiday itineraries in France, Spain and Belgium"
                    subtitle="Make the local cuisine the highlight of a trip, with perfect pintxos in San Sebastián, great galettes in Saint-Malo, and brilliant beers in Ghent"
                    date="2/11/2021"
                    author="Annie Bennett"
                  />
                  <NewsCard
                    image="https://i.guim.co.uk/img/media/9d3655cbf1183b7c15f64d02df0a6e2821941efa/0_192_5760_3456/master/5760.jpg?width=1020&quality=45&auto=format&fit=max&dpr=2&s=11b88c7a794941c7b861f74a87b3fb0b"
                    title="15 of the best food and drink experiences in Northern Ireland"
                    subtitle="Seafood straight from the boat, a cooperative brewery, community hubs – these daring food and drink producers are proof that necessity is the mother of invention"
                    date="2/11/2021"
                    author="Carolyn Boyd"
                  />
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <NewsRight></NewsRight>
            </Grid>
          </Grid>
        </Container>
        <Footer></Footer>
      </Grid>
    </div>
  );
};
export default News;
