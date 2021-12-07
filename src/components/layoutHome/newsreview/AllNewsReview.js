import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import { Grid } from '@mui/material';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { padding, width } from '@mui/system';
import Container from "@mui/material/Container";
import CardNews from './CardNews';
import CardNewRight from './CardNewRight';
import zIndex from '@mui/material/styles/zIndex';
const AllNewsReview = () => {
  return (
    <Box paddingBottom="40px"
    >

    <Container fixed >
      <Grid container sm={12} xs={12} marginBottom="-40px" marginTop="60px" justifyContent="center" >
        <Grid container item sm={12} justifyContent="center">
        <Typography variant="h6" component="h2" style={{color:"#c2c2c2",fontSize:"13px",fontWeight:"Medium"}}>
        FROM THE BLOG
      </Typography>
        </Grid>
        <Grid container item sm={12} justifyContent="center" marginBottom="-19px"  zIndex= '1000'>
        <Typography variant="h6" component="h2" style={{color:"#000",fontSize:"35px",fontWeight:"bold"}}>
        ARTICLES & NEWS
      </Typography>
      
        </Grid>
        <Box
      sx={{
        margin:"0 0px 10px 200px",
        position:"position",
        width: 105,
        height: 5,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    />
      
      </Grid>
      <Grid container sm={12} xs={12} display="flex" marginLeft="10px" >
      <Grid   item sm={5.7} xs={12}>
      <CardNews color1="#fff" fontcolor1="#999" title1="#5c5b5b" colorbutton="#f37011"></CardNews>
      </Grid>
      <Box item sm={0.5} xs={12} width="30px"></Box>
      <Grid   item sm={5.7} xs={12}>
      <CardNews color1="#1bbc9b" fontcolor1="#fbfeff" title1="#fff"colorbutton="#fff" ></CardNews>


      </Grid>
      
    </Grid>
    <Grid container sm={12} xs={12} display="flex" marginTop="-45px" marginLeft="10px" >
      <Grid   item sm={5.7} xs={12}>
      <CardNewRight color1="#14b9d5" fontcolor1="#fbfeff" title1="#fff"colorbutton="#fff"></CardNewRight>
      </Grid>
      <Box item sm={0.5} xs={12} width="30px"></Box>
      <Grid   item sm={5.7} xs={12}>
      <CardNews color1="#fff" fontcolor1="#999" title1="#5c5b5b" colorbutton="#f76570"></CardNews>
      </Grid>
      
    </Grid>
         </Container>
    </Box>
    

    

  );
};

export default AllNewsReview;