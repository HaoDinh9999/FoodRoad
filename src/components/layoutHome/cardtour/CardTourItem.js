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
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Link from '@mui/material/Link';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import  TransitionProps  from '@mui/material/transitions';
import CardMedia from '@mui/material/CardMedia';
import ReactPlayer from "react-player";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import StarHalfOutlinedIcon from '@mui/icons-material/StarHalfOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HomeIcon from '@mui/icons-material/Home';
const CardTourItem = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/" >
      Home
    </Link>,
    <Typography key="2" color="text.primary">
      FavouriteFood
    </Typography>,
  ];
  return (
    <Box
    maxWidth="280px"
    >
        <Grid container sm={12}
            onClick={handleClickOpen}
          sx={{
            height:300,
            borderRadius: 2,
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
             <Grid item sm={12} display="flex" justifyContent="flex-end"
          
            >
           <IconButton  aria-label="delete"  sx={{ margin:"5px 5px 0px 0px" , color:"#000000",backgroundColor:"#fff",borderRadius:8,height:"50px",width:"50px"}} >
                    <FavoriteBorderIcon  sx={{ color:"#00000",fontSize:"35px"}}  />
                     
                </IconButton>
        </Grid>
        </Grid>
        <Box
            backgroundColor="#fff"
            onClick={handleClickOpen}
        >
            <Box display="flex" justifyContent="space-between">
              <Box>
                <Link  underline="hover" fontWeight="bold" fontSize="20px"  color="#f2b203">
                {'Bun bo Hue'}
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
              </Box>
         
            <Typography  variant="h6" gutterBottom component="div" fontWeight="bold" fontSize="35px"  color="#f2b203" marginRight="15px" >
               25$
            </Typography> 
            </Box>
           
           


        </Box>
        <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="md"
        >
        <Box xs={12} display="flex" justifyContent="space-between" alignItems="center" sx={{zIndex: '2000'}}>
          <Box item xs={12} display="flex" marginLeft="25px" alignItems="center">
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
        <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        >
        {breadcrumbs}
        </Breadcrumbs>
          </Box>
       
        <IconButton  sx={{color:"#fff",backgroundColor:"#f13233", height:"50px",width:"50px",margin:"10px 10px 0px 0px"}} >
          <FavoriteBorderOutlinedIcon />
        </IconButton>
        </Box>
        
        <DialogContent   sx={{marginTop:"-20px"}}>
        <Grid container  sm={12}  xs={12}          >
        <Grid item sm={6} xs={12}
        >
           <CardMedia 
           height="300px"
           component="iframe"    
           image="https://www.youtube.com/embed/hScI3-XdzGI" 
           autoPlay 
            controls
            allow="autoPlay"
           />
          
          
        </Grid>
        <Grid item sm={0.5}></Grid>
        <Grid  item sm={5.5} xs={12} >
          <Box display="flex">
          <Typography  variant="h1" gutterBottom component="div" fontWeight="regular" fontSize="20px" color="#959595"    >
               Restaurant
          </Typography>          
          </Box> 
          <Typography  variant="h1" gutterBottom component="div" fontWeight="medium" fontSize="30px"     >
               Bun bo Hue - Ly Chinh Thang
          </Typography>   
          <Typography   fontWeight="regular" fontSize="15px"   color="#000"  >
               60/1 Ly Chinh Thang Street, District 3, Ho Chi Minh city
          </Typography>    
          <Box display="flex" alignItems="center" marginTop="5px">
            <StarOutlinedIcon sx={{color:"#ffc107"}}/>
            <StarOutlinedIcon sx={{color:"#ffc107"}}/>
            <StarOutlinedIcon sx={{color:"#ffc107"}}/>
            <StarOutlinedIcon sx={{color:"#ffc107"}}/>
            <StarHalfOutlinedIcon sx={{color:"#ffc107"}}/>
            <Button  sx={{color:"#fff",backgroundColor:"#ffc107",height:"80%",border:0,fontWeight:"regular", marginLeft:"5px" ,
            '&:hover': {
            backgroundColor: "#ffc109",
            opacity: [0.9, 0.8, 0.7],
            },}} >
              999+
            </Button>
            <Typography   fontWeight="regular" fontSize="15px"   color="#959595" marginLeft="5px" >
              Rating in Foody
            </Typography>  
          </Box>
          <Button href="https://www.foody.vn/ho-chi-minh/chicc-chicc-ga-ran-han-quoc" sx={{marginLeft:"-5px"}}>See more reviews from Foody </Button>
          <Box display="flex" alignItems="center">
          <li style={{color:"#6cc942"}}></li>
          <Typography   fontWeight="medium" fontSize="15px"   color="#6cc942" marginLeft="-10px"  >
              Open
          </Typography>  
          <AccessTimeOutlinedIcon sx={{color:"#959595",marginLeft:"10px"}}/>     
          <Typography   fontWeight="medium" fontSize="15px"   color="#959595" marginLeft="5px" >
              08:00 - 21:00
          </Typography>   
          </Box>
          <Box display="flex" marginTop="70px">
          <MonetizationOnOutlinedIcon sx={{color:"#959595",width:"35px",height:"35px"}}/>     
          <Typography   fontWeight="bold" fontSize="25px"   color="#f2b203" marginLeft="5px" >
              20.000 - 40.000 VND
          </Typography>   
          </Box>
          
        </Grid>

        </Grid>
        </DialogContent>
        

      </Dialog>   
    </Box>
    
  );
};

export default CardTourItem;