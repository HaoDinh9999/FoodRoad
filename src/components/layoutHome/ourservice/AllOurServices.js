import React from "react";
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import { Box, fontWeight, ThemeProvider } from '@mui/system';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { UilAmbulance } from '@iconscout/react-unicons'
import Button from '@mui/material/Button';
import { UilMessage } from '@iconscout/react-unicons'
import CardService from "./CardService";
const AllOurServices = () => {
  return (
    <Grid container sm={12} padding="40px 10px 50px 10px"  style={{backgroundColor:"#555555"}}  >
      <Grid container item sm={12} justifyContent="center">
      <Typography variant="h6" component="h2" style={{color:"#fff",fontSize:"13px",fontWeight:"Medium"}}>
        MULTIPLE BENEFITS INCLUDED
      </Typography>
      </Grid>
      <Grid  container item sm={12} justifyContent="center" >
      <Typography variant="h6" component="h2" style={{color:"#fff",fontSize:"35px",fontWeight:"bold"}}>
        OUR SERVICES
      </Typography>
      </Grid>
      <Grid item sm={12} height="40px"></Grid>
      <Grid item sm={1.5}  >
      </Grid>
      <Grid item sm={3}  >
        <CardService 
        title="Insurance"
        text="Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin rhonc us urna dictum."
        color1="#1BBC9B"
        ></CardService>
      </Grid>
      <Grid item sm={3}  >
      <CardService 
        title="Medical Care"
        text="Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin rhonc us urna dictum."
        color1="#ff6868"
        ></CardService>      
      </Grid>
      <Grid item sm={3}  >
      <CardService 
        title="Meals Included"
        text="Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin rhonc us urna dictum."
        color1="#14b9d5"
        ></CardService>      
      </Grid>
      <Grid item sm={1.5}  >
      </Grid>
      <Grid item sm={12} height="55px"></Grid>
      <Grid item sm={1.5}  >
      </Grid>
      <Grid item sm={3}  >
      <CardService 
        title="Accessibility"
        text="Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin rhonc us urna dictum."
        color1="#f3a46b"
        ></CardService>      
      </Grid>
      <Grid item sm={3}  >
      <CardService 
        title="Customer Care"
        text="Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin rhonc us urna dictum."
        color1="#c755da"
        ></CardService>      
      </Grid>
      <Grid item sm={3}  >
      <CardService 
        title="Shuttle Included"
        text="Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin rhonc us urna dictum."
        color1="#ff6868"
        ></CardService>      
      </Grid>
      <Grid item sm={1.5}  >
      </Grid>
    </Grid>
  );
};

export default AllOurServices;