import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PinDropIcon from '@mui/icons-material/PinDrop';
import Link from '@mui/material/Link';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';  
import Map from './Map';
const containerStyle = {
    height: '500px'
  };
  
  const center = {
    lat: -34.397,
    lng: 150.644
  };

const Itinerary = ()=>{
    
    return(
        <Box marginTop="50px">
            <Grid container sm={12} xs={12}>
                <Grid  item sm={4}  xs={12}>
                <Box display="flex">
                <Box>
                <IconButton  aria-label="delete"  sx={{ marginRight:"10px",color:"#000000",borderRadius:8,border:2,height:"50px",width:"50px"}} >
                    <PinDropIcon  sx={{ color:"#00000",fontSize:"35px"}}  />
                     
                </IconButton>
                <li style={{ marginLeft:"20px"}}></li>
                </Box>
                <Box>
                <Typography  variant="h6" component="h2"  sx={{fontSize:"18px",fontWeight: 'medium',}}> 
                You'll get picked up 
                </Typography> 
                <Link href="#" color="#636363" >
                See Important Information for details
                </Link>
                </Box>
                </Box>
                {/* 2222222222222222222222222222*/}
                <Box display="flex">
                <Box>
                <IconButton  aria-label="delete"  sx={{ marginRight:"10px",color:"#fff",backgroundColor:"#000",fontSize:"17px",borderRadius:8,border:2,height:"50px",width:"50px"}} >
                     1
                </IconButton>
                <li style={{ marginLeft:"20px"}}></li>
                <li style={{ marginLeft:"20px"}}></li>
                <li style={{ marginLeft:"20px"}}></li>
                </Box>
                <Box>
                <Typography  variant="h6" component="h2"  sx={{fontSize:"18px",fontWeight: 'medium',}}> 
                Saigon Food Tour
                </Typography> 
                <Typography   variant="h6" component="h2"  sx={{fontSize:"18px",fontWeight: 'light'}}> 
                Stop: 15 minutes
                </Typography>
                <Link href="#" color="#636363" fontSize="18px">
                See details & photo
                </Link>
                </Box>
                </Box>
                {/*33333333333333333*/}
                <Box display="flex">
                <Box>
                <IconButton  aria-label="delete"  sx={{ marginRight:"10px",color:"#fff",backgroundColor:"#000",fontSize:"17px",borderRadius:8,border:2,height:"50px",width:"50px"}} >
                     2
                </IconButton>
                <li style={{ marginLeft:"20px"}}></li>
                <li style={{ marginLeft:"20px"}}></li>
                <li style={{ marginLeft:"20px"}}></li>
                </Box>
                <Box>
                <Typography  variant="h6" component="h2"  sx={{fontSize:"18px",fontWeight: 'medium',}}> 
                Saigon Food Tour
                </Typography> 
                <Typography   variant="h6" component="h2"  sx={{fontSize:"18px",fontWeight: 'light'}}> 
                Stop: 15 minutes
                </Typography>
                <Link href="#" color="#636363" fontSize="18px">
                See details & photo
                </Link>
                </Box>
                </Box>

                {/*44444444444444*/ }
                <Box display="flex">
                <Box>
                <IconButton  aria-label="delete"  sx={{ marginRight:"10px",color:"#fff",backgroundColor:"#000",fontSize:"17px",borderRadius:8,border:2,height:"50px",width:"50px"}} >
                     3
                </IconButton>
                <li style={{ marginLeft:"20px"}}></li>
                <li style={{ marginLeft:"20px"}}></li>
                <li style={{ marginLeft:"20px"}}></li>
                </Box>
                <Box>
                <Typography  variant="h6" component="h2"  sx={{fontSize:"18px",fontWeight: 'medium',}}> 
                Saigon Food Tour
                </Typography> 
                <Typography   variant="h6" component="h2"  sx={{fontSize:"18px",fontWeight: 'light'}}> 
                Stop: 15 minutes
                </Typography>
                <Link href="#" color="#636363" fontSize="18px">
                See details & photo
                </Link>
                </Box>
                </Box>

                {/*55555555555555555*/}
                <Box display="flex">
                <Box>
                <IconButton  aria-label="delete"  sx={{ marginRight:"10px",color:"#fff",backgroundColor:"#000",fontSize:"17px",borderRadius:8,border:2,height:"50px",width:"50px"}} >
                     4
                </IconButton>
                <li style={{ marginLeft:"20px"}}></li>
                <li style={{ marginLeft:"20px"}}></li>

                </Box>
                <Box>
                <Typography  variant="h6" component="h2"  sx={{fontSize:"18px",fontWeight: 'medium',}}> 
                Saigon Food Tour
                </Typography> 
                <Typography   variant="h6" component="h2"  sx={{fontSize:"18px",fontWeight: 'light'}}> 
                Stop: 15 minutes
                </Typography>
                <Link href="#" color="#636363" fontSize="18px">
                See details & photo
                </Link>
                </Box>
                
                </Box>
                {/*66666666666*/}
               

                <Box display="flex" alignItems="center">
                <IconButton  aria-label="delete"  sx={{ marginRight:"10px",color:"#000000",borderRadius:8,border:2,height:"50px",width:"50px"}} >
                    <PinDropIcon  sx={{ color:"#00000",fontSize:"35px"}}  />
                     
                </IconButton>
                <Typography  variant="h6" component="h2"  sx={{fontSize:"18px",fontWeight: 'medium',}}> 
                You'll return to the starting point
                </Typography> 
                </Box>
                
                </Grid>
                <Grid item sm={8}  xs={12}  >
                <Map 
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${'AIzaSyClpHM2sDk1TbMKkjX_rd8AboU4RdolLtA'}&callback=initMap`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `90vh`, margin: `auto`, border: '2px solid #000', borderRadius:10 }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
                </Grid>
            </Grid>
        </Box>
    );
}
export default Itinerary;