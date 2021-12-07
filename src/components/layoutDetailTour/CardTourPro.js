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
import { UilMapMarkerInfo } from '@iconscout/react-unicons'
import { UilEye } from '@iconscout/react-unicons'
import { UilAnchor } from '@iconscout/react-unicons'
import { Bookmark } from "@mui/icons-material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Link from '@mui/material/Link';

const CardTourPro = (props) => {
  return (
    <Box
    maxWidth="280px"
    >
        <Grid container sm={12}
          sx={{
            height:300,
            borderRadius: 2,
            boxShadow: 3,
            backgroundImage:`url(${'/images/Food1.jpg'})`,
            backgroundSize: ' cover',
            backgroundColor: '#f99',
            backgroundPosition: 'center',
    
            '&:hover': {
              backgroundColor: '#ff6868',
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
             <Grid item sm={12} display="flex" justifyContent="flex-end"
          
            >
           <IconButton  aria-label="delete"  sx={{ margin:"5px 5px 0px 0px" , color:"#000000",backgroundColor:"#fff",borderRadius:8,height:"50px",width:"50px"}} >
                    <FavoriteBorderIcon  sx={{ color:"#00000",fontSize:"35px"}}  />
                     
                </IconButton>
        </Grid>
        </Grid>
        
        <Box
            backgroundColor="#fff"
        >
            <Link href="/tours/detailtour" underline="none" fontWeight="bold" fontSize="18px"  color="#f2b203">
            {'Cu Chi Tunnels: Morning or Afternoon Guided Tour(Ben Duoc Option available)'}
            </Link>
            <Box 
            display="flex"
            alignItems="center"
            >
            <IconButton  aria-label="delete"  sx={{ marginRight:"2px",backgroundColor:"#00aa6c",borderRadius:8,height:"5px",width:"5px"}} >
            </IconButton>
            <IconButton  aria-label="delete"  sx={{ marginRight:"2px",backgroundColor:"#00aa6c",borderRadius:8,height:"5px",width:"5px"}} >
            </IconButton>
            <IconButton  aria-label="delete"  sx={{ marginRight:"2px",backgroundColor:"#00aa6c",borderRadius:8,height:"5px",width:"5px"}} >
            </IconButton>
            <IconButton  aria-label="delete"  sx={{ marginRight:"2px",backgroundColor:"#00aa6c",borderRadius:8,height:"5px",width:"5px"}} >
            </IconButton>
            <IconButton  aria-label="delete"  sx={{ marginRight:"10px",backgroundColor:"#00aa6c",borderRadius:8,height:"5px",width:"5px"}} >
            </IconButton>

            <Typography  variant="h6" gutterBottom component="div" fontWeight="regular" fontSize="13px" color="#555555" margin="1px 0px 0px 0px" >
                1280 views
            </Typography> 
    
            </Box>
            <Typography  variant="h6" gutterBottom component="div" fontWeight="regular" fontSize="16px" color="#555555" margin="1px 0px 0px 0px" >
                Bus Tours
            </Typography> 
            <Typography  variant="h6" gutterBottom component="div" fontWeight="bold" fontSize="16px" color="#000"  >
                from $16.00 per adult
            </Typography>
        </Box>
           
    </Box>
    
  );
};

export default CardTourPro;