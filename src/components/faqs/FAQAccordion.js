import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import { Grid } from '@mui/material';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { padding, width } from '@mui/system';
import Container from "@mui/material/Container";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));
const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowDropDownRoundedIcon sx={{ fontSize: '1.5rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .01)',
  flexDirection: 'row',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));
const  FAQAccordion = () => {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
      <Grid container sm={12}  >
      <Grid item sm={12} 
      sx={{ 
        boxShadow: 3,
        borderRadius: 1,
     //   padding:"10px 30px"
      }}  >
      <Box

         sx={{ 
           borderBottom: 1 ,
          }}
      >
          <Typography display="flex" justifyContent="center" fontWeight="regular" fontSize="30px" color="#4caec4">DRIVING</Typography>
      </Box>
      <Box
       sx={{ 
        borderRadius: 1,
        padding:"10px 30px"
      }} 
      display="flex"
      flexDirection="column"
      >
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}  sx={{ borderRadius: 1 ,padding:"10px 0 10px 0  " ,borderTop: 0 ,borderRight: 0,borderBottom: 2,borderLeft: 0 }} >
        <AccordionSummary  aria-controls="panel1d-content" id="panel1d-header" >
          <Typography fontWeight="bold">1. Do I drive my own motorbike on the tour?</Typography>
        </AccordionSummary>
        <AccordionDetails  >
          <Box height="10px"></Box>
          <Typography fontWeight="light" >
          Unfortunately no.
          </Typography>
          <Box height="10px"></Box>
          <Typography fontWeight="light">
          Although riding a motorbike in Vietnam is an enjoyable experience, the traffic patterns in Ho Chi Minh City are quite chaotic and require an experienced and knowledgeable driver. It is also against Vietnamese law to drive without a license and if you get in an accident while driving your insurance will not cover you.
          </Typography>
          <Box height="10px"></Box>
          <Typography fontWeight="light" >
          Our team of licensed guides has many years of experienced driving safely in Ho Chi Minh City and we are happy to drive you around the city. This also allows you to pay more attention to the sights and sounds of the city without worrying about millions of other motorbikes on the road.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{ borderRadius: 2,padding:"10px 0 10px 0  ",border:0}} >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography fontWeight="bold">1. Do I drive my own motorbike on the tour?</Typography>
        </AccordionSummary>
        <AccordionDetails  >
          <Box height="10px"></Box>
          <Typography fontWeight="light" >
          Unfortunately no.
          </Typography>
          <Box height="10px"></Box>
          <Typography fontWeight="light">
          Although riding a motorbike in Vietnam is an enjoyable experience, the traffic patterns in Ho Chi Minh City are quite chaotic and require an experienced and knowledgeable driver. It is also against Vietnamese law to drive without a license and if you get in an accident while driving your insurance will not cover you.
          </Typography>
          <Box height="10px"></Box>
          <Typography fontWeight="light" >
          Our team of licensed guides has many years of experienced driving safely in Ho Chi Minh City and we are happy to drive you around the city. This also allows you to pay more attention to the sights and sounds of the city without worrying about millions of other motorbikes on the road.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{ borderRadius: 2 ,padding:"10px 0 10px 0  ",border:0}} >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography fontWeight="bold">1. Do I drive my own motorbike on the tour?</Typography>
        </AccordionSummary>
        <AccordionDetails  >
          <Box height="10px"></Box>
          <Typography fontWeight="light" >
          Unfortunately no.
          </Typography>
          <Box height="10px"></Box>
          <Typography fontWeight="light">
          Although riding a motorbike in Vietnam is an enjoyable experience, the traffic patterns in Ho Chi Minh City are quite chaotic and require an experienced and knowledgeable driver. It is also against Vietnamese law to drive without a license and if you get in an accident while driving your insurance will not cover you.
          </Typography>
          <Box height="10px"></Box>
          <Typography fontWeight="light" >
          Our team of licensed guides has many years of experienced driving safely in Ho Chi Minh City and we are happy to drive you around the city. This also allows you to pay more attention to the sights and sounds of the city without worrying about millions of other motorbikes on the road.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{ borderRadius: 2,padding:"10px 0 10px 0  " ,border:0}} >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography fontWeight="bold">1. Do I drive my own motorbike on the tour?</Typography>
        </AccordionSummary>
        <AccordionDetails  >
          <Box height="10px"></Box>
          <Typography fontWeight="light" >
          Unfortunately no.
          </Typography>
          <Box height="10px"></Box>
          <Typography fontWeight="light">
          Although riding a motorbike in Vietnam is an enjoyable experience, the traffic patterns in Ho Chi Minh City are quite chaotic and require an experienced and knowledgeable driver. It is also against Vietnamese law to drive without a license and if you get in an accident while driving your insurance will not cover you.
          </Typography>
          <Box height="10px"></Box>
          <Typography fontWeight="light" >
          Our team of licensed guides has many years of experienced driving safely in Ho Chi Minh City and we are happy to drive you around the city. This also allows you to pay more attention to the sights and sounds of the city without worrying about millions of other motorbikes on the road.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Box>
      
      </Grid>
      <Grid item sm={12} marginTop="40px"
      sx={{ 
        boxShadow: 3,
        borderRadius: 1,
     //   padding:"10px 30px"
      }}  >
      <Box

         sx={{ 
           borderBottom: 1 ,
          }}
      >
          <Typography display="flex" justifyContent="center" fontWeight="regular" fontSize="30px" color="#4caec4">DRIVING</Typography>
      </Box>
      <Box
       sx={{ 
        borderRadius: 1,
        padding:"10px 30px"
      }} 
      display="flex"
      flexDirection="column"
      >
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}  sx={{ borderRadius: 1 ,padding:"10px 0 10px 0  " ,borderTop: 0 ,borderRight: 0,borderBottom: 2,borderLeft: 0 }} >
        <AccordionSummary  aria-controls="panel1d-content" id="panel1d-header" >
          <Typography fontWeight="bold">1. Do I drive my own motorbike on the tour?</Typography>
        </AccordionSummary>
        <AccordionDetails  >
          <Box height="10px"></Box>
          <Typography fontWeight="light" >
          Unfortunately no.
          </Typography>
          <Box height="10px"></Box>
          <Typography fontWeight="light">
          Although riding a motorbike in Vietnam is an enjoyable experience, the traffic patterns in Ho Chi Minh City are quite chaotic and require an experienced and knowledgeable driver. It is also against Vietnamese law to drive without a license and if you get in an accident while driving your insurance will not cover you.
          </Typography>
          <Box height="10px"></Box>
          <Typography fontWeight="light" >
          Our team of licensed guides has many years of experienced driving safely in Ho Chi Minh City and we are happy to drive you around the city. This also allows you to pay more attention to the sights and sounds of the city without worrying about millions of other motorbikes on the road.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{ borderRadius: 2,padding:"10px 0 10px 0  ",border:0}} >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography fontWeight="bold">1. Do I drive my own motorbike on the tour?</Typography>
        </AccordionSummary>
        <AccordionDetails  >
          <Box height="10px"></Box>
          <Typography fontWeight="light" >
          Unfortunately no.
          </Typography>
          <Box height="10px"></Box>
          <Typography fontWeight="light">
          Although riding a motorbike in Vietnam is an enjoyable experience, the traffic patterns in Ho Chi Minh City are quite chaotic and require an experienced and knowledgeable driver. It is also against Vietnamese law to drive without a license and if you get in an accident while driving your insurance will not cover you.
          </Typography>
          <Box height="10px"></Box>
          <Typography fontWeight="light" >
          Our team of licensed guides has many years of experienced driving safely in Ho Chi Minh City and we are happy to drive you around the city. This also allows you to pay more attention to the sights and sounds of the city without worrying about millions of other motorbikes on the road.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{ borderRadius: 2 ,padding:"10px 0 10px 0  ",border:0}} >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography fontWeight="bold">1. Do I drive my own motorbike on the tour?</Typography>
        </AccordionSummary>
        <AccordionDetails  >
          <Box height="10px"></Box>
          <Typography fontWeight="light" >
          Unfortunately no.
          </Typography>
          <Box height="10px"></Box>
          <Typography fontWeight="light">
          Although riding a motorbike in Vietnam is an enjoyable experience, the traffic patterns in Ho Chi Minh City are quite chaotic and require an experienced and knowledgeable driver. It is also against Vietnamese law to drive without a license and if you get in an accident while driving your insurance will not cover you.
          </Typography>
          <Box height="10px"></Box>
          <Typography fontWeight="light" >
          Our team of licensed guides has many years of experienced driving safely in Ho Chi Minh City and we are happy to drive you around the city. This also allows you to pay more attention to the sights and sounds of the city without worrying about millions of other motorbikes on the road.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{ borderRadius: 2,padding:"10px 0 10px 0  " ,border:0}} >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography fontWeight="bold">1. Do I drive my own motorbike on the tour?</Typography>
        </AccordionSummary>
        <AccordionDetails  >
          <Box height="10px"></Box>
          <Typography fontWeight="light" >
          Unfortunately no.
          </Typography>
          <Box height="10px"></Box>
          <Typography fontWeight="light">
          Although riding a motorbike in Vietnam is an enjoyable experience, the traffic patterns in Ho Chi Minh City are quite chaotic and require an experienced and knowledgeable driver. It is also against Vietnamese law to drive without a license and if you get in an accident while driving your insurance will not cover you.
          </Typography>
          <Box height="10px"></Box>
          <Typography fontWeight="light" >
          Our team of licensed guides has many years of experienced driving safely in Ho Chi Minh City and we are happy to drive you around the city. This also allows you to pay more attention to the sights and sounds of the city without worrying about millions of other motorbikes on the road.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Box>
      
      </Grid>
      <Grid item sm={12} marginTop="40px"
      sx={{ 
        boxShadow: 3,
        borderRadius: 1,
     //   padding:"10px 30px"
      }}  >
      <Box

         sx={{ 
           borderBottom: 1 ,
          }}
      >
          <Typography display="flex" justifyContent="center" fontWeight="regular" fontSize="30px" color="#4caec4">DRIVING</Typography>
      </Box>
      <Box
       sx={{ 
        borderRadius: 1,
        padding:"10px 30px"
      }} 
      display="flex"
      flexDirection="column"
      >
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}  sx={{ borderRadius: 1 ,padding:"10px 0 10px 0  " ,borderTop: 0 ,borderRight: 0,borderBottom: 2,borderLeft: 0 }} >
        <AccordionSummary  aria-controls="panel1d-content" id="panel1d-header" >
          <Typography fontWeight="bold">1. Do I drive my own motorbike on the tour?</Typography>
        </AccordionSummary>
        <AccordionDetails  >
          <Box height="10px"></Box>
          <Typography fontWeight="light" >
          Unfortunately no.
          </Typography>
          <Box height="10px"></Box>
          <Typography fontWeight="light">
          Although riding a motorbike in Vietnam is an enjoyable experience, the traffic patterns in Ho Chi Minh City are quite chaotic and require an experienced and knowledgeable driver. It is also against Vietnamese law to drive without a license and if you get in an accident while driving your insurance will not cover you.
          </Typography>
          <Box height="10px"></Box>
          <Typography fontWeight="light" >
          Our team of licensed guides has many years of experienced driving safely in Ho Chi Minh City and we are happy to drive you around the city. This also allows you to pay more attention to the sights and sounds of the city without worrying about millions of other motorbikes on the road.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{ borderRadius: 2,padding:"10px 0 10px 0  ",border:0}} >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography fontWeight="bold">1. Do I drive my own motorbike on the tour?</Typography>
        </AccordionSummary>
        <AccordionDetails  >
          <Box height="10px"></Box>
          <Typography fontWeight="light" >
          Unfortunately no.
          </Typography>
          <Box height="10px"></Box>
          <Typography fontWeight="light">
          Although riding a motorbike in Vietnam is an enjoyable experience, the traffic patterns in Ho Chi Minh City are quite chaotic and require an experienced and knowledgeable driver. It is also against Vietnamese law to drive without a license and if you get in an accident while driving your insurance will not cover you.
          </Typography>
          <Box height="10px"></Box>
          <Typography fontWeight="light" >
          Our team of licensed guides has many years of experienced driving safely in Ho Chi Minh City and we are happy to drive you around the city. This also allows you to pay more attention to the sights and sounds of the city without worrying about millions of other motorbikes on the road.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{ borderRadius: 2 ,padding:"10px 0 10px 0  ",border:0}} >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography fontWeight="bold">1. Do I drive my own motorbike on the tour?</Typography>
        </AccordionSummary>
        <AccordionDetails  >
          <Box height="10px"></Box>
          <Typography fontWeight="light" >
          Unfortunately no.
          </Typography>
          <Box height="10px"></Box>
          <Typography fontWeight="light">
          Although riding a motorbike in Vietnam is an enjoyable experience, the traffic patterns in Ho Chi Minh City are quite chaotic and require an experienced and knowledgeable driver. It is also against Vietnamese law to drive without a license and if you get in an accident while driving your insurance will not cover you.
          </Typography>
          <Box height="10px"></Box>
          <Typography fontWeight="light" >
          Our team of licensed guides has many years of experienced driving safely in Ho Chi Minh City and we are happy to drive you around the city. This also allows you to pay more attention to the sights and sounds of the city without worrying about millions of other motorbikes on the road.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{ borderRadius: 2,padding:"10px 0 10px 0  " ,border:0}} >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography fontWeight="bold">1. Do I drive my own motorbike on the tour?</Typography>
        </AccordionSummary>
        <AccordionDetails  >
          <Box height="10px"></Box>
          <Typography fontWeight="light" >
          Unfortunately no.
          </Typography>
          <Box height="10px"></Box>
          <Typography fontWeight="light">
          Although riding a motorbike in Vietnam is an enjoyable experience, the traffic patterns in Ho Chi Minh City are quite chaotic and require an experienced and knowledgeable driver. It is also against Vietnamese law to drive without a license and if you get in an accident while driving your insurance will not cover you.
          </Typography>
          <Box height="10px"></Box>
          <Typography fontWeight="light" >
          Our team of licensed guides has many years of experienced driving safely in Ho Chi Minh City and we are happy to drive you around the city. This also allows you to pay more attention to the sights and sounds of the city without worrying about millions of other motorbikes on the road.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Box>
      
      </Grid>
      <Grid item sm={12} marginTop="40px" 
      sx={{ 
        boxShadow: 3,
        borderRadius: 1,
     //   padding:"10px 30px"
      }}  >
      <Box

         sx={{ 
           borderBottom: 1 ,
          }}
      >
          <Typography display="flex" justifyContent="center" fontWeight="regular" fontSize="30px" color="#4caec4">DRIVING</Typography>
      </Box>
      <Box
       sx={{ 
        borderRadius: 1,
        padding:"10px 30px"
      }} 
      display="flex"
      flexDirection="column"
      >
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}  sx={{ borderRadius: 1 ,padding:"10px 0 10px 0  " ,borderTop: 0 ,borderRight: 0,borderBottom: 2,borderLeft: 0 }} >
        <AccordionSummary  aria-controls="panel1d-content" id="panel1d-header" >
          <Typography fontWeight="bold">1. Do I drive my own motorbike on the tour?</Typography>
        </AccordionSummary>
        <AccordionDetails  >
          <Box height="10px"></Box>
          <Typography fontWeight="light" >
          Unfortunately no.
          </Typography>
          <Box height="10px"></Box>
          <Typography fontWeight="light">
          Although riding a motorbike in Vietnam is an enjoyable experience, the traffic patterns in Ho Chi Minh City are quite chaotic and require an experienced and knowledgeable driver. It is also against Vietnamese law to drive without a license and if you get in an accident while driving your insurance will not cover you.
          </Typography>
          <Box height="10px"></Box>
          <Typography fontWeight="light" >
          Our team of licensed guides has many years of experienced driving safely in Ho Chi Minh City and we are happy to drive you around the city. This also allows you to pay more attention to the sights and sounds of the city without worrying about millions of other motorbikes on the road.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{ borderRadius: 2,padding:"10px 0 10px 0  ",border:0}} >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography fontWeight="bold">1. Do I drive my own motorbike on the tour?</Typography>
        </AccordionSummary>
        <AccordionDetails  >
          <Box height="10px"></Box>
          <Typography fontWeight="light" >
          Unfortunately no.
          </Typography>
          <Box height="10px"></Box>
          <Typography fontWeight="light">
          Although riding a motorbike in Vietnam is an enjoyable experience, the traffic patterns in Ho Chi Minh City are quite chaotic and require an experienced and knowledgeable driver. It is also against Vietnamese law to drive without a license and if you get in an accident while driving your insurance will not cover you.
          </Typography>
          <Box height="10px"></Box>
          <Typography fontWeight="light" >
          Our team of licensed guides has many years of experienced driving safely in Ho Chi Minh City and we are happy to drive you around the city. This also allows you to pay more attention to the sights and sounds of the city without worrying about millions of other motorbikes on the road.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{ borderRadius: 2 ,padding:"10px 0 10px 0  ",border:0}} >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography fontWeight="bold">1. Do I drive my own motorbike on the tour?</Typography>
        </AccordionSummary>
        <AccordionDetails  >
          <Box height="10px"></Box>
          <Typography fontWeight="light" >
          Unfortunately no.
          </Typography>
          <Box height="10px"></Box>
          <Typography fontWeight="light">
          Although riding a motorbike in Vietnam is an enjoyable experience, the traffic patterns in Ho Chi Minh City are quite chaotic and require an experienced and knowledgeable driver. It is also against Vietnamese law to drive without a license and if you get in an accident while driving your insurance will not cover you.
          </Typography>
          <Box height="10px"></Box>
          <Typography fontWeight="light" >
          Our team of licensed guides has many years of experienced driving safely in Ho Chi Minh City and we are happy to drive you around the city. This also allows you to pay more attention to the sights and sounds of the city without worrying about millions of other motorbikes on the road.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{ borderRadius: 2,padding:"10px 0 10px 0  " ,border:0}} >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography fontWeight="bold">1. Do I drive my own motorbike on the tour?</Typography>
        </AccordionSummary>
        <AccordionDetails  >
          <Box height="10px"></Box>
          <Typography fontWeight="light" >
          Unfortunately no.
          </Typography>
          <Box height="10px"></Box>
          <Typography fontWeight="light">
          Although riding a motorbike in Vietnam is an enjoyable experience, the traffic patterns in Ho Chi Minh City are quite chaotic and require an experienced and knowledgeable driver. It is also against Vietnamese law to drive without a license and if you get in an accident while driving your insurance will not cover you.
          </Typography>
          <Box height="10px"></Box>
          <Typography fontWeight="light" >
          Our team of licensed guides has many years of experienced driving safely in Ho Chi Minh City and we are happy to drive you around the city. This also allows you to pay more attention to the sights and sounds of the city without worrying about millions of other motorbikes on the road.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Box>
      
      </Grid>
     
      
    </Grid>
    
  );
}
export default FAQAccordion;