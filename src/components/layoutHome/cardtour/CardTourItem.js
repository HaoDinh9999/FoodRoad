import React from "react";
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import { border, Box, fontWeight, ThemeProvider } from '@mui/system';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { UilAmbulance } from '@iconscout/react-unicons'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { UilFavorite } from '@iconscout/react-unicons'
import { UilBookmarkFull } from '@iconscout/react-unicons'
import Image from '../../../assets/img/Food1.jpg'
import { UilMapMarkerInfo } from '@iconscout/react-unicons'
import { UilEye } from '@iconscout/react-unicons'
import { UilAnchor } from '@iconscout/react-unicons'
const CardTourItem = (props) => {
  return (
    <Box
    margin ="10px 20px 5px 10px"
    sx={{
        width: 360,
        height: 300,
        borderRadius: 10,
        boxShadow: 3,
        backgroundImage:`url(${props.url})`,
        backgroundSize: ' cover',
        backgroundColor: '#f99',
        backgroundPosition: 'center',

        '&:hover': {
          backgroundColor: '#ff6868',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
        <Grid
            display="flex"
            justifyContent="space-between"
            sm={12}
    
    >
        <Grid item sm={2.4}
        margin="10px 0px 0px 10px"
        width="20%"
        height="14%"
         sx={{
            borderRadius:10,
            boxShadow: 3,
            backgroundColor: '#ffe000',
           
          }}
        >
         <IconButton   
        width="100%" 
        height="100%"  
        aria-label="rating">
            <UilFavorite color="#FFF"/>
            <h5 fontWeight='bold' style={{color:"#ffffff"}}>4.5</h5>
        </IconButton>
        </Grid>
        <Grid item sm={8.3}></Grid>
        <Grid item sm={1.3}
        margin="10px 15px 0px 0px"
        height="14%"
         sx={{
            borderRadius: 2,
            boxShadow: 3,
            backgroundColor: '#FFF',
           
          }}
        >
        <IconButton  
        aria-label="rating">
            <UilBookmarkFull color="#000000"/>
        </IconButton>
        </Grid>
        
      
        </Grid>
        
        <Box
        marginTop="190px"
           sx={{ 
            borderBottomLeftRadius:20,
            borderBottomRightRadius:20,
            boxShadow: 3 ,
            borderBottom: 1 ,
            borderColor: 'red'
           }}
            width="100%"
            height="20%"
            backgroundColor="#fff"
        >
            <Box
            display="flex"
            justifyContent="space-between"
            marginBottom="-40px"
            padding="0px 5px 0px 5px"

            >
            <Typography variant="h6" gutterBottom component="div" fontWeight="bold" fontSize="25px" marginTop="-5px" color="#ff0007" >
            Bun bo Hue
            </Typography>
            <Typography variant="h6" gutterBottom component="div" fontWeight="bold" fontSize="35px" color="#ff6868" marginTop="2px">
                $25
            </Typography>    
            </Box>        
            <Box 

            display="flex"
            alignItems="center"
            >
            <UilMapMarkerInfo color="#f3a46b"/>   
            <Typography variant="h6" gutterBottom component="div" fontWeight="medium" fontSize="10px" color="#555555" margin="1px 5px 0px 0px" >
                623 Do Xuan Hop, quan 9, HCM
            </Typography>   
            <UilEye color="#f3a46b"/>   
            <Typography  variant="h6" gutterBottom component="div" fontWeight="medium" fontSize="10px" color="#555555" margin="1px 5px 0px 0px" >
                1280 views
            </Typography> 
    
            </Box>
        </Box>
           
    </Box>
    
  );
};

export default CardTourItem;