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
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import Link from '@mui/material/Link';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
const  HeroSectionTour =() => {
  return(
    <Box  padding="10px 200px 20px 200px">
      <Grid  container sm={12} display="flex" >
        <Grid item sm={10}>
        <Typography  variant="h6" component="h2" style={{ fontSize:"40px",fontWeight:"bold"}}>Saigon Food Tour on Scooter at Night
        </Typography> 
        </Grid>
     
        <Grid container item sm={2}  justifyContent="flex-end" alignItems="center" >
        <IconButton  aria-label="delete"  sx={{ marginRight:"10px",color:"#000000",borderRadius:8,border:2,height:"50px",width:"50px"}} >
          <CloudUploadOutlinedIcon  sx={{ color:"#00000",fontSize:"35px"}}  />
        </IconButton>
        <IconButton aria-label="delete" sx={{ color:"#000000",borderRadius:8,border:2,height:"50px",width:"50px"}}>
          <FavoriteBorderOutlinedIcon sx={{ color:"#00000",fontSize:"30px"}}/>
        </IconButton>
        </Grid>     
      </Grid>
      <Grid container sm={12} marginTop="10px">
      <IconButton  aria-label="delete"  sx={{ marginRight:"2px",backgroundColor:"#00aa6c",borderRadius:8,height:"20px",width:"20px"}} >
      </IconButton>
      <IconButton  aria-label="delete"  sx={{ marginRight:"2px",backgroundColor:"#00aa6c",borderRadius:8,height:"20px",width:"20px"}} >
      </IconButton>
      <IconButton  aria-label="delete"  sx={{ marginRight:"2px",backgroundColor:"#00aa6c",borderRadius:8,height:"20px",width:"20px"}} >
      </IconButton>
      <IconButton  aria-label="delete"  sx={{ marginRight:"2px",backgroundColor:"#00aa6c",borderRadius:8,height:"20px",width:"20px"}} >
      </IconButton>
      <IconButton  aria-label="delete"  sx={{ marginRight:"10px",backgroundColor:"#00aa6c",borderRadius:8,height:"20px",width:"20px"}} >
      </IconButton>
      <Link href="#" color="#676767" marginRight="10px">
        {92}
      </Link>
      <Link href="#"  color="#676767">
        {' By SaiGon  FoodRoad'}
      </Link>
      </Grid> 
      <Grid container sm={12}         marginTop="30px">
      <Grid item sm={4}  >
      <Box
      sx={{
        padding:"25px 0px 0px 18px",
        height: 360,
        borderRadius:2,
        boxShadow:3,
        '&:hover': {
          transform: "translateY(-10px)",

        },
      }}
      >
        <TextField
        id="datetime-local"
        type="datetime-local"
        defaultValue="2021-11-08T10:30"
        variant="outlined"
        sx={{ width: 300, border:2, borderRadius:10  , borderColor:"#c5c5c5" }}
        InputLabelProps={{
          shrink: true,
        }}
      />

      <IconButton  aria-label="delete"  sx={{ justifyContent:"space-around",marginLeft:"10px",color:"#000000",borderRadius:10,border:2,borderColor:"#c5c5c5",height:"60px",width:"80px"}} >
          <PeopleOutlineIcon  sx={{ color:"#00000",fontSize:"25px"}}  />
          <Typography  variant="h6" component="h2" style={{ fontSize:"18px",fontWeight:"bold"}}>2
          </Typography> 
        </IconButton>
        <Grid container display="flex" marginTop="20px" >
          <Grid item sm={6}>
          <Typography  variant="h6" component="h2" style={{ fontSize:"18px",fontWeight:"bold"}}>Book in advance            
          </Typography> 
          </Grid>
          <Grid container item sm={6} display="flex" >
          <Typography  variant="h6" component="h2"  sx={{fontSize:"18px",fontWeight: 'regular',marginRight:"5px"}}>from            
          </Typography>
          <Typography  variant="h6" component="h2" style={{ fontSize:"18px",fontWeight:"bold",marginRight:"2px"}}>$50.26           
          </Typography>
          <Typography  variant="h6" component="h2"  sx={{fontSize:"18px",fontWeight: 'regular',marginRight:"0"}}> per adult          
          </Typography>
          </Grid>
          
        </Grid>
        <Button  sx={{color:"#000",backgroundColor:"#f2b203",borderRadius:10,padding:"15px 125px",marginTop:"50px"}}>
            Check availability
        </Button>
        <Typography  variant="h6" component="h2"  sx={{fontSize:"18px",fontWeight: 'light',marginTop:"15px"}}>Free Cancellation up to 24 hours in advance            
        </Typography>
          <Typography  variant="h6" component="h2"  sx={{fontSize:"18px",fontWeight: 'light',marginTop:"10px"}}>    Reserve now & pay later: Save your spot free of charge with flexible booking.     
          <Link href="#" color="#000" marginLeft="5px">
          Learn more
          </Link>
          </Typography>

      </Box>
      </Grid>
      <Grid item sm={8} padding="0 0px 0px 20px">
      <Box
      sx={{
        height:"500px",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor:"#f99",
        borderRadius:2,
        backgroundImage:`url(${"./images/Food1.jpg"})`,
        '&:hover': {
          backgroundColor: '#999',
          opacity: [0.9, 0.8, 0.7],
          transform: "translateY(-10px)",

        },
      }}
    />
      </Grid>
      </Grid>
    </Box>
  );
}
export default HeroSectionTour;