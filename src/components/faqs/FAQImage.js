import React from 'react';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Typewriter from 'typewriter-effect';

const  FAQImage =() => {
  return (
    <Box >
    <div style={{ position: "relative",justifyContent:"center",alignItems:"center" }}>
      <CardMedia 
      
      style={{ 
        objectFit: "cover",
        height: "70vh",
        }}   
      component="video"
        src="/videos/video-dinner.mp4"
        alt="green iguana"
        autoPlay loop muted
      /> 
            <Typography style={{position: "absolute", color: "#fff",top: "20%",left: "50%",transform: "translateX(-50%)",fontSize:"80px"}}>
                 FAQS
            </Typography>
            <Typography style={{position: "absolute", color: "#fff",top: "40%",left: "50%",transform: "translateX(-50%)",fontSize:"30px"}}>
              
              <Typewriter   
              options={{
              strings: [' Spreading Happiness', ' Connecting People'," Creating Memories","Find your question"," The support team is eager to answer "],
              autoStart: true,
              loop: true,
              }}
              onInit={(typewriter) => {
              typewriter.typeString()
                .callFunction(() => {
              console.log('String typed out!');
                })
              .pauseFor(1000)
              .deleteAll()
              .callFunction(() => {
              console.log('All strings were deleted');
              })
            .start();
          }}
          />  
            </Typography>
           
  </div>
  </Box>


       


  );
}
export default FAQImage;