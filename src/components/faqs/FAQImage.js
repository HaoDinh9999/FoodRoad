import React from 'react';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const  FAQImage =() => {
  return (
  <Box
  
    sx={{
      //  backgroundImage: `url(${"videos/video-dinner.mp4"})`,        
      }}
    >

       <CardMedia

        component="video"
        src="/videos/video-dinner.mp4"
        alt="green iguana"
        autoPlay loop muted
        position= 'relative'

      >
       <Typography position="absolute" justifyContent="center" fontWeight="regular" fontSize="30px" color="#4caec4">DRIVING</Typography>

      </CardMedia>

  </Box>
  );
}
export default FAQImage;