import React from 'react';
import FAQImage from '../components/faqs/FAQImage';
import Grid from '@mui/material/Grid';
import FAQAccordion from '../components/faqs/FAQAccordion';
import NewsRight from '../components/news/NewsRight';
import Container from "@mui/material/Container";
import Footer from '../components/footer/Footer';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';

const  News =() => {
  return(
    <Grid >
    <h1 className='sign-up'> Saigon Food News </h1>
    <Container fixed sx={{ margin: "40px auto" }}>
    <Grid container sm={12} >
      <Grid item sm={9}>
          <Box m={2} border={1} p={2} borderColor="white" borderRadius={3} boxShadow={3}>
            <Box pb={2} display="flex">
              <Typography variant="h4" color="primary">Food News</Typography>
              <StarOutlineIcon color="primary" style={{fontSize:"36px"}}></StarOutlineIcon>
            </Box>
            <Stack spacing={5}>

              <a style={{textDecoration: "none"}} href="#">
                <Card sx={{ display: 'flex' }} style={{boxShadow: "none"}}>
                <CardMedia
                  component="img"
                  sx={{ width: 300 }}
                  image="https://amthucvietnam.com.vn/wp-content/uploads/2021/04/cm_Anh_Ga_1.jpg"
                  alt="image"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <CardContent>
                    <Typography component="div" variant="h5" fontWeight="bold">
                      Saigon Food Everywhere
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                      You can find delicious Saigon food everywhere
                    </Typography>
                    <Box sx={{ display: 'flex', marginTop: 'auto'}}>
                      <AccessTimeIcon color="disabled" style={{fontSize: "21px"}}></AccessTimeIcon>
                      <Typography variant="subtitle2" color="text.secondary" component="div">
                        2/11/2021
                      </Typography>
                      <Box pl={0.5} pr={0.5}>
                      <Divider orientation="vertical"/>
                      </Box>
                      <Typography variant="subtitle2" color="text.secondary" component="div">
                        Hưng Thịnh
                      </Typography>
                    </Box>
                  </CardContent>
                </Box>
                </Card>
              </a>
              <a style={{textDecoration: "none"}} href="#">
                <Card sx={{ display: 'flex' }} style={{boxShadow: "none"}}>
                <CardMedia
                  component="img"
                  sx={{ width: 300 }}
                  image="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/mojito-cocktails-150961e.jpg"
                  alt="image"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <CardContent>
                    <Typography component="div" variant="h5" fontWeight="bold">
                      Cocktails of the week
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                    These potent cocktails are perfect to get you through the week. Enjoy the magic of a Color-Changing Mojito. Sip on smoky mezcal-loaded Dragon Mother. Or prep for Monday with a tequila and rosé-filled Rosarita.
                    </Typography>
                    <Box sx={{ display: 'flex', pt: '10px'}}>
                      <AccessTimeIcon color="disabled" style={{fontSize: "21px"}}></AccessTimeIcon>
                      <Typography variant="subtitle2" color="text.secondary" component="div">
                        2/11/2021
                      </Typography>
                      <Box pl={0.5} pr={0.5}>
                      <Divider orientation="vertical"/>
                      </Box>
                      <Typography variant="subtitle2" color="text.secondary" component="div">
                        Ruchika Agarwal
                      </Typography>
                    </Box>
                  </CardContent>
                </Box>
                </Card>
              </a>

            </Stack>
          </Box>
          {/* Category 2 */}
          <Box m={2} border={1} p={2} borderColor="white" borderRadius={3} boxShadow={3}>
            <Box pb={2} display="flex">
              <Typography variant="h4" color="primary">Travel News</Typography>
              <StarOutlineIcon color="primary" style={{fontSize:"36px"}}></StarOutlineIcon>
            </Box>
            <Stack spacing={5}>

            <a style={{textDecoration: "none"}} href="#">
            <Card sx={{ display: 'flex' }} style={{boxShadow: "none"}}>
                <CardMedia
                  component="img"
                  sx={{ width: 300 }}
                  image="https://i.ytimg.com/vi/ZGs59VEu3hQ/maxresdefault.jpg"
                  alt="image"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <CardContent>
                    <Typography component="div" variant="h5" fontWeight="bold">
                    How Sticky Rice Cake (Bánh Chưng) Becomes an Iconic Symbol of New Year Day in Vietnam
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                    Banh Chung, or sticky rice cake, is one of the wonders of Asian cuisine presented in Vietnam. People may love its taste but may not know how the cake is made? And how it represents an iconic symbol of New Year Day in Vietnam?
                    </Typography>
                    <Box sx={{ display: 'flex', pt: '10px'}}>
                      <AccessTimeIcon color="disabled" style={{fontSize: "21px"}}></AccessTimeIcon>
                      <Typography variant="subtitle2" color="text.secondary" component="div">
                        2/11/2021
                      </Typography>
                      <Box pl={0.5} pr={0.5}>
                      <Divider orientation="vertical"/>
                      </Box>
                      <Typography variant="subtitle2" color="text.secondary" component="div">
                        Travel Blog
                      </Typography>
                    </Box>
                  </CardContent>
                </Box>
                </Card>
              </a>

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
  );
}
export default News;