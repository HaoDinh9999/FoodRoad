import React from "react";
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import { Box, fontWeight, ThemeProvider } from '@mui/system';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { UilAmbulance } from '@iconscout/react-unicons'
import Button from '@mui/material/Button';
import { UilMessage } from '@iconscout/react-unicons'
import CardService from "./CardService";
import Container from '@mui/material/Container';

const AllOurServices = () => {
  return (
    <section style={{backgroundColor:"#555555", width:"100%"}}>
<Container fixed>
<Grid container sm={12} padding="30px 00px 30px 0px"  marginLeft="25px" >
      <Grid container item sm={12} justifyContent="center" marginRight="30px">
      <Typography variant="h6" component="h2" style={{color:"#fff6",fontSize:"13px",fontWeight:"regular"}}>
        MULTIPLE BENEFITS INCLUDED
      </Typography>
      </Grid>
      <Grid  container item sm={12} justifyContent="center"   marginRight="30px" display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h6" component="h2" zIndex= 'tooltip' style={{color:"#fff",fontSize:"37px",fontWeight:"bold"}}>
        OUR SERVICES
      </Typography>
      <Box 
      sx={{
        margin:"-18px 0px 0px 80px",
        position:"position",
        width: 170,
        height: 5,
        backgroundColor: '#1976d2',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    />
      </Grid>
    
      <Grid item sm={12} height="40px"></Grid>
     
      <Grid item sm={4}  >
        <CardService 
        title="Insurance"
        text="Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin rhonc us urna dictum."
        color1="#1BBC9B"
        ></CardService>
      </Grid>
      <Grid item sm={4}  >
      <CardService 
        title="Medical Care"
        text="Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin rhonc us urna dictum."
        color1="#ff6868"
        ></CardService>      
      </Grid>
      <Grid item sm={4}  >
      <CardService 
        title="Meals Included"
        text="Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin rhonc us urna dictum."
        color1="#14b9d5"
        ></CardService>      
      </Grid>

      <Grid item sm={12} height="55px"></Grid>

      <Grid item sm={4}  >
      <CardService 
        title="Accessibility"
        text="Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin rhonc us urna dictum."
        color1="#f3a46b"
        ></CardService>      
      </Grid>
      <Grid item sm={4}  >
      <CardService 
        title="Customer Care"
        text="Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin rhonc us urna dictum."
        color1="#c755da"
        ></CardService>      
      </Grid>
      <Grid item sm={4}  >
      <CardService 
        title="Shuttle Included"
        text="Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin rhonc us urna dictum."
        color1="#ff6868"
        ></CardService>      
      </Grid>

    </Grid>
    </Container>
    
    </section>
    
  );
};

export default AllOurServices;