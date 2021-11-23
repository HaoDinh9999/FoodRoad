import * as React from 'react';
import { styled } from '@mui/material/styles';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';

import Button from '@mui/material/Button';
import Container from "@mui/material/Container";
import zIndex from '@mui/material/styles/zIndex';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import AvatarGroup from '@mui/material/AvatarGroup';
import SettingsIcon from '@mui/icons-material/Settings';
import Tabs from '@mui/material/Tabs';
import TabContext from '@mui/lab/TabContext';

import TabList from '@mui/lab/TabList';
const CardHero = () => {
    const [value, setValue] = React.useState("1");

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
<Box sx={{backgroundColor:"#f2f2f2"}}>
    <Box
    sx={{
      width: "100%",
      height: 300,
      backgroundColor: '#e0e0e0',
      display:"flex", justifyContent:"center",alignItems:"center",

    }}
    >
        <Button  sx={{color:"#001",textTransform:"none",fontSize:"16px" }}  startIcon={<ImageSearchIcon sx={{width:"30px", height:"30px"}}/>} disableRipple >
            Add cover photo
        </Button>   
    </Box>
    <Container fixed sx={{ margin: "20px auto" }}>
    <Grid container sm={12} >
        <Grid container item sm={12} padding="10px 0px 10px 0px" justifyContent="space-around"  marginTop="-60px" sx={{backgroundColor:"#fff",width:"100%"}}>
        
        <Box  display="flex" >
        <StyledBadge 
            overlap="rectangular"
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            variant="dot"
            sx={{}}
        >
            <Avatar 
            alt="Remy Sharp" 
            src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.6435-9/119488549_2782881071949438_3993347347590920254_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=QjhO1Y2f3ggAX8jmsyl&_nc_ht=scontent.fsgn2-4.fna&oh=b8a18745494860a1ae3466df7edf2fb6&oe=61C1CF3C" 
            sx={{width:"160px",height:"160px",marginTop:"-30px",border:6,borderColor:"#fff"}}
            />
        </StyledBadge>
        <Box marginLeft="10px" >
        <Typography sx={{fontSize:"20px",fontWeight:"bold"}}>
            Hao Dinh
        </Typography>
        <Typography sx={{fontSize:"13px",fontWeight:"light",marginTop:"-5px"}}>
            @815h_o_
        </Typography>
        <Typography  sx={{fontSize:"15px",fontWeight:"light",marginTop:"25px"}}>
            138 followers
        </Typography>
        <AvatarGroup max={6} sx={{}}>
        <Avatar sx={{width:"30px",height:"30px"}} alt="Remy Sharp"
                 src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.6435-9/119488549_2782881071949438_3993347347590920254_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=QjhO1Y2f3ggAX8jmsyl&_nc_ht=scontent.fsgn2-4.fna&oh=b8a18745494860a1ae3466df7edf2fb6&oe=61C1CF3C" 
        />
       <Avatar sx={{width:"30px",height:"30px"}} alt="Remy Sharp"
            src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.6435-9/119488549_2782881071949438_3993347347590920254_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=QjhO1Y2f3ggAX8jmsyl&_nc_ht=scontent.fsgn2-4.fna&oh=b8a18745494860a1ae3466df7edf2fb6&oe=61C1CF3C" 
        />
        <Avatar sx={{width:"30px",height:"30px"}} alt="Remy Sharp"
                 src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.6435-9/119488549_2782881071949438_3993347347590920254_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=QjhO1Y2f3ggAX8jmsyl&_nc_ht=scontent.fsgn2-4.fna&oh=b8a18745494860a1ae3466df7edf2fb6&oe=61C1CF3C" 
        />
        <Avatar sx={{width:"30px",height:"30px"}} alt="Remy Sharp"
                 src="https://xmedia.nguoiduatin.vn/public/data/images/ngocluong/2012t1/thang11/nguoiduatin-cham-lung.jpg" 
        />        
        </AvatarGroup>
        </Box>
        
        </Box>
        <Box >
        <Typography sx={{fontSize:"20px",fontWeight:"bold"}}>
        Contributions
        </Typography>
        <Typography sx={{fontSize:"20px",fontWeight:"regular",color:"#757575"}}>
            0
        </Typography>
        </Box>
        <Box>
        <Typography sx={{fontSize:"20px",fontWeight:"bold"}}>
        Blog
        </Typography>
        <Typography sx={{fontSize:"20px",fontWeight:"regular",color:"#757575"}}>
            0
        </Typography>
        </Box>
        <Box>
        <Typography sx={{fontSize:"20px",fontWeight:"bold"}}>
        Tours
        </Typography>
        <Typography sx={{fontSize:"20px",fontWeight:"regular",color:"#757575"}}>
            0
        </Typography>
        </Box>
        <Button  sx={{color:"#001",textTransform:"none",fontSize:"16px" }}  startIcon={<SettingsIcon sx={{width:"30px", height:"30px"}}/>} disableRipple >
            Edit profile
        </Button>  
        </Grid>
       
    </Grid>
    </Container>

</Box>
    
  );
};
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));
export default CardHero;