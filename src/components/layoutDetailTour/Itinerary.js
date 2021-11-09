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
import { display } from '@mui/system';
const containerStyle = {
    height: '500px'
  };
  
  const center = {
    lat: -34.397,
    lng: 150.644
  };

const Itinerary = ()=>{
    const [show, setShow] = React.useState("none");
    const [show2, setShow2] = React.useState("none");
    const [show3, setShow3] = React.useState("none");


    const [text, setText] = React.useState("See details & photo");

    const handleChange = (event, newValue) => {
        //alert( (Table_Quanity.find((e) => e.name==="maxClass" )).value);
        setShow(newValue);
      };
      const texthandleChange = (event, newValue) => {
        //alert( (Table_Quanity.find((e) => e.name==="maxClass" )).value);
        setText(newValue);
      };
    return(
        <Box marginTop="50px" marginBottom="70px">
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

                <Box width="90%" display={show==="none" && text==="1" ? "block":"none"}>

                <Box display="flex" alignItems="center">
                <IconButton  aria-label="delete"  sx={{ marginRight:"2px",backgroundColor:"#00aa6c",borderRadius:8,height:"10px",width:"10px"}} >
                </IconButton>
                <IconButton  aria-label="delete"  sx={{ marginRight:"2px",backgroundColor:"#00aa6c",borderRadius:8,height:"10px",width:"10px"}} >
                </IconButton>
                <IconButton  aria-label="delete"  sx={{ marginRight:"2px",backgroundColor:"#00aa6c",borderRadius:8,height:"10px",width:"10px"}} >
                </IconButton>
                <IconButton  aria-label="delete"  sx={{ marginRight:"2px",backgroundColor:"#00aa6c",borderRadius:8,height:"10px",width:"10px"}} >
                </IconButton>
                <IconButton  aria-label="delete"  sx={{ marginRight:"10px",backgroundColor:"#00aa6c",borderRadius:8,height:"10px",width:"10px"}} >
                </IconButton>
                <Typography   variant="h6" component="h2"  sx={{fontSize:"16px",fontWeight: 'light'}}> 
                1250
                </Typography>
                </Box>
                <Box
                 sx={{
                    height:"150px",
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
                />
                 <Typography   variant="h6" component="h2"  sx={{fontSize:"13px",fontWeight: 'light', marginTop:"10px"}}> 
                 Meet & Greet Your personal English speaking tour guide will be waiting at your hotel lobby to meet and greet. And hang on tight, let's the journey begin!
                </Typography>
                <Button  sx={{color:"#000",backgroundColor:"#fff",width:"100%",borderRadius:10,marginTop:"10px",marginBottom:"10px",border:2,fontSize:"13px"}}>
                  More about Saigon Food Tour
                </Button>
                </Box>
                
                  
                <Link onClick={()=>{setText("1");show==="none" &&text==="1" ? setShow("block"):setShow("none")}}  color="#636363" fontSize="18px" style={{cursor:"pointer",marginBottom:"10px"}}>
                {show==="none" &&text==="1" ? "See less":"See details & photo"}
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
                <Box width="90%" display={show2==="none" && text==="2" ? "block":"none"}>

<Box display="flex" alignItems="center">
<IconButton  aria-label="delete"  sx={{ marginRight:"2px",backgroundColor:"#00aa6c",borderRadius:8,height:"10px",width:"10px"}} >
</IconButton>
<IconButton  aria-label="delete"  sx={{ marginRight:"2px",backgroundColor:"#00aa6c",borderRadius:8,height:"10px",width:"10px"}} >
</IconButton>
<IconButton  aria-label="delete"  sx={{ marginRight:"2px",backgroundColor:"#00aa6c",borderRadius:8,height:"10px",width:"10px"}} >
</IconButton>
<IconButton  aria-label="delete"  sx={{ marginRight:"2px",backgroundColor:"#00aa6c",borderRadius:8,height:"10px",width:"10px"}} >
</IconButton>
<IconButton  aria-label="delete"  sx={{ marginRight:"10px",backgroundColor:"#00aa6c",borderRadius:8,height:"10px",width:"10px"}} >
</IconButton>
<Typography   variant="h6" component="h2"  sx={{fontSize:"16px",fontWeight: 'light'}}> 
1250
</Typography>
</Box>
<Box
 sx={{
    height:"150px",
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
/>
              <Typography   variant="h6" component="h2"  sx={{fontSize:"13px",fontWeight: 'light', marginTop:"10px"}}> 
               Meet & Greet Your personal English speaking tour guide will be waiting at your hotel lobby to meet and greet. And hang on tight, let's the journey begin!
              </Typography>
              <Button  sx={{color:"#000",backgroundColor:"#fff",width:"100%",borderRadius:10,marginTop:"10px",marginBottom:"10px",border:2,fontSize:"13px"}}>
               More about Saigon Food Tour
                </Button>
                </Box>


                <Link onClick={()=>{setText("2");show2==="none" &&text==="2" ? setShow2("block"):setShow2("none")}}  color="#636363" fontSize="18px" style={{cursor:"pointer",marginBottom:"10px"}}>
                {show2==="none" &&text==="2" ? "See less":"See details & photo"}
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

                <Box width="90%" display={show3==="none" && text==="3" ? "block":"none"}>

                <Box display="flex" alignItems="center">
                <IconButton  aria-label="delete"  sx={{ marginRight:"2px",backgroundColor:"#00aa6c",borderRadius:8,height:"10px",width:"10px"}} >
                </IconButton>
                <IconButton  aria-label="delete"  sx={{ marginRight:"2px",backgroundColor:"#00aa6c",borderRadius:8,height:"10px",width:"10px"}} >
                </IconButton>
                <IconButton  aria-label="delete"  sx={{ marginRight:"2px",backgroundColor:"#00aa6c",borderRadius:8,height:"10px",width:"10px"}} >
                </IconButton>
                <IconButton  aria-label="delete"  sx={{ marginRight:"2px",backgroundColor:"#00aa6c",borderRadius:8,height:"10px",width:"10px"}} >
                </IconButton>
                <IconButton  aria-label="delete"  sx={{ marginRight:"10px",backgroundColor:"#00aa6c",borderRadius:8,height:"10px",width:"10px"}} >
                </IconButton>
                <Typography   variant="h6" component="h2"  sx={{fontSize:"16px",fontWeight: 'light'}}> 
                1250
                </Typography>
                </Box>

                 <Typography   variant="h6" component="h2"  sx={{fontSize:"13px",fontWeight: 'light', marginTop:"10px"}}> 
                 Coffee Time At this point, you are literally quite full, don't worry, our guide takes you around Saigon and explore "Chung cư" - a Vietnamese old apartment which was built very long time ago. We will sit down to taste coffee in the hidden coffee shop and learn how to make a glass of Vietnamese coffee with a Vietnamese filter, not a machine. It is so good and that is why it has its place in everyone's bucket list when coming to Vietnam.                </Typography>
                <Button  sx={{color:"#000",backgroundColor:"#fff",width:"100%",borderRadius:10,marginTop:"10px",marginBottom:"10px",border:2,fontSize:"13px"}}>
                  More about Saigon Food Tour
                </Button>
                </Box>
                
                  
                <Link onClick={()=>{setText("3");show3==="none" &&text==="3" ? setShow3("block"):setShow3("none")}}  color="#636363" fontSize="18px" style={{cursor:"pointer",marginBottom:"10px"}}>
                {show3==="none" &&text==="3" ? "See less":"See details"}
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
            containerElement={<div style={{ height: "100%", margin: `auto`, border: '2px solid #000', borderRadius:10 }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
                </Grid>
            </Grid>
        </Box>
    );
}
export default Itinerary;