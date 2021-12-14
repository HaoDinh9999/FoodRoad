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

          <Grid container sm={12}>
            <Grid item sm={9}>
              <Box
                mt={2}
                border={1}
                p={2}
                borderColor="white"
                borderRadius={3}
                boxShadow={0}
              >
                <Box pb={2} display="flex">
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
                </Stack>
              </Box>
              {/* Category 2 */}
              <Box
                mt={2}
                border={1}
                p={2}
                borderColor="white"
                borderRadius={3}
                boxShadow={0}
              >
                <Box pb={2} display="flex">
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
                </Stack>
              </Box>
            </Grid>
            <Grid item sm={0.3}></Grid>
            <Grid item sm={2.7}>
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
