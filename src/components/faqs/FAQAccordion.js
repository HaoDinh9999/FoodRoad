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
  padding: theme.spacing(3),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));
const  FAQAccordion = () => {
  const [expanded, setExpanded] = React.useState('');

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
        <AccordionDetails   >
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
          <Typography fontWeight="bold">2. Is it safe to ride a motorbike in Saigon?</Typography>
        </AccordionSummary>
        <AccordionDetails  >
          <Box height="10px"></Box>
          <Typography fontWeight="light" >
          Driving in Ho Chi Minh City is actually relatively safe. Despite the chaotic driving conditions, accidents are actually quite rare as people drive quite slowly. Here in Saigon, local people always avoid each other. If you cross the road, they will go beside you instead.          </Typography>
          <Box height="10px"></Box>
          <Typography fontWeight="light">
          If an accident does happen, it is usually quite minor due to low speed. But do not worry, our guides have received excellent training from us on how to drive defensively and cautiously.          </Typography>

        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{ borderRadius: 2 ,padding:"10px 0 10px 0  ",border:0}} >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography fontWeight="bold">3. Are we allowed to hug or hold onto our drivers?</Typography>
        </AccordionSummary>
        <AccordionDetails  >
          <Box height="10px"></Box>
          <Typography fontWeight="light" >
          Sadly no.
          </Typography>
          <Box height="10px"></Box>
          <Typography fontWeight="light">
          Vietnamese people are actually quite conservative about touching. In order to be respectful to our Vietnamese culture, we recommend you to please hold on to the back of the motorbike as shown by our guides.          </Typography>

        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} sx={{ borderRadius: 2,padding:"10px 0 10px 0  " ,border:0}} >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography fontWeight="bold">4. Will we allow you to drive our motorbikes?</Typography>
        </AccordionSummary>
        <AccordionDetails  >
          <Box height="10px"></Box>
          <Typography fontWeight="light" >
          No.
          </Typography>
          <Box height="10px"></Box>
          <Typography fontWeight="light">
          For liability reasons, we cannot permit our customers to drive our motorbikes.
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
          <Typography display="flex" justifyContent="center" fontWeight="regular" fontSize="30px" color="#4caec4">WEATHER</Typography>
      </Box>
      <Box
       sx={{ 
        borderRadius: 1,
        padding:"10px 30px"
      }} 
      display="flex"
      flexDirection="column"
      >
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}  sx={{ borderRadius: 1 ,padding:"10px 0 10px 0  " ,borderTop: 0 ,borderRight: 0,borderBottom: 0,borderLeft: 0 }} >
        <AccordionSummary  aria-controls="panel1d-content" id="panel1d-header" >
          <Typography fontWeight="bold">1. What happens if it rains during the tours?</Typography>
        </AccordionSummary>
        <AccordionDetails  >
          <Box height="10px"></Box>
          <Typography fontWeight="light" >
          Rain in Vietnam is quite common, especially during the rainy season.
          </Typography>
          <Box height="10px"></Box>
          <Typography fontWeight="light">
          However it usually does not last very long. If it rains very heavily, we will pull over and wait for it to stop and then continue. If it is a light rain, we will put on our rain ponchos and continue the tour. If it does begin to rain and you no longer wish to continue with the tour, we will happily return you to your hotel and only charge you for the stops that we have passed.        
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
          <Typography display="flex" justifyContent="center" fontWeight="regular" fontSize="30px" color="#4caec4">TOURS</Typography>
      </Box>
      <Box
       sx={{ 
        borderRadius: 1,
        padding:"10px 30px"
      }} 
      display="flex"
      flexDirection="column"
      >
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}  sx={{ borderRadius: 1 ,padding:"10px 0 10px 0  " ,borderTop: 0 ,borderRight: 0,borderBottom: 2,borderLeft: 0 }} >
        <AccordionSummary  aria-controls="panel1d-content" id="panel1d-header" >
          <Typography fontWeight="bold">1. Your tours include street food. Is it safe to eat?</Typography>
        </AccordionSummary>
        <AccordionDetails  >
          <Box height="10px"></Box>
          <Typography fontWeight="light" >
          Every traveler knows that when you are trying many food from different countries you always run the risk having a bad reaction to the food. Vietnam is no exception and unfortunately we cannot guarantee that you will not get sick from the food on our tours.
          </Typography>
          <Box height="10px"></Box>
          <Typography fontWeight="light">
          However street food is actually safer in many ways the food that you get from a restaurant:
          </Typography>
         
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')} sx={{ borderRadius: 2,padding:"10px 0 10px 0  ",border:0}} >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography fontWeight="bold">2. Can you cater to my food allergies/restrictions?</Typography>
        </AccordionSummary>
        <AccordionDetails  >
          <Box height="10px"></Box>
          <Typography fontWeight="light" >
          Definitely.
          </Typography>
          <Box height="10px"></Box>
          <Typography fontWeight="light">
          Vietnam has many different restaurants and food to choose from and we are able to create a tour that caters to most food sensitivities and restrictions.          </Typography>
          <Box height="10px"></Box>
          <Typography fontWeight="light" >
          When you book your tour please specify your dietary restrictions or allergy and we will design a tour that meets your needs.           </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')} sx={{ borderRadius: 2 ,padding:"10px 0 10px 0  ",border:0}} >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography fontWeight="bold">3. Are your tours the same everyday?</Typography>
        </AccordionSummary>
        <AccordionDetails  >
          <Box height="10px"></Box>
          <Typography fontWeight="light" >
          Our ever-changing menu of great street food changes every period of time. We try and make our tours as enjoyable for our guides as it is for our visitors so that everyone can enjoy the experience of sharing a great meal together.
          </Typography>
          <Box height="10px"></Box>
          <Typography fontWeight="light">
          For repeated customers, we would love to setup a new route for you to try!          </Typography>

        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')} sx={{ borderRadius: 2,padding:"10px 0 10px 0  " ,border:0}} >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography fontWeight="bold">4. What is the maximum group size for the tour?</Typography>
        </AccordionSummary>
        <AccordionDetails  >
          <Box height="10px"></Box>
          <Typography fontWeight="light" >
          In order to give you the best possible experience, we strive to keep our tour groups small.
          </Typography>
          <Box height="10px"></Box>
          <Typography fontWeight="light">
          Our “Taste of the Night” tour can accommodate 10 - 15 people at most, our “Saigon by Night”  "-" "Taste of the morning" tour can accommodate group of 10 at most.          </Typography>
          <Box height="10px"></Box>
          <Typography fontWeight="light" >
          If you have a larger group we are happy to book a private tour for you.      
              </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')} sx={{ borderRadius: 2,padding:"10px 0 10px 0  " ,border:0}} >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography fontWeight="bold">5. How much time before the tour do I need to finish booking?</Typography>
        </AccordionSummary>
        <AccordionDetails  >
          <Box height="10px"></Box>
          <Typography fontWeight="light" >
          "Taste of the Night" & "Saigon by Night" tour can be booked before 12:00 PM everyday.
                    </Typography>
          <Box height="10px"></Box>
          <Typography fontWeight="light">
          "Taste of the Morning" tour should be booked one day ahead.  
          </Typography>       
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')} sx={{ borderRadius: 2,padding:"10px 0 10px 0  " ,border:0}} >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography fontWeight="bold">6. What should I bring on the tours?</Typography>
        </AccordionSummary>
        <AccordionDetails  >
          <Box height="10px"></Box>
          <Typography fontWeight="light" >
          For our tours you need very little as we provide most thing that you will need.
                    </Typography>
          <Box height="10px"></Box>
          <Typography fontWeight="light">
          During the daytime tours, we strongly recommend that you bring sunscreen and sunglasses with you as the sun can be quite strong. During the nighttime tours, you don't need to bring much stuff.
          </Typography>   
          <Box height="10px"></Box>
          <Typography fontWeight="light">
          A camera is always a good addition however we urge you not to take pictures while on the motorbike as this can be quite dangerous. If you wish to take pictures, please ask your guides to pull over. Also please take extra care of your camera in order to avoid theft.          </Typography>       
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
          <Typography display="flex" justifyContent="center" fontWeight="regular" fontSize="30px" color="#4caec4">PAYMENT & POLICY</Typography>
      </Box>
      <Box
       sx={{ 
        borderRadius: 1,
        padding:"10px 30px"
      }} 
      display="flex"
      flexDirection="column"
      >
      <Accordion expanded={expanded === 'panel12'} onChange={handleChange('panel12')}  sx={{ borderRadius: 1 ,padding:"10px 0 10px 0  " ,borderTop: 0 ,borderRight: 0,borderBottom: 2,borderLeft: 0 }} >
        <AccordionSummary  aria-controls="panel1d-content" id="panel1d-header" >
          <Typography fontWeight="bold">1. Do I need to put down a deposit/prepay to book the tour?</Typography>
        </AccordionSummary>
        <AccordionDetails  >
          <Box height="10px"></Box>
          <Typography fontWeight="light" >
          Yes.
          </Typography>
          <Box height="10px"></Box>
          <Typography fontWeight="light">
          Unfortunately for us, we have encountered some dropouts at the last minute when everything has been set up. We will need your deposit of 20% (non-refundable) as a small commitment for you and for us.          </Typography>
          <Box height="10px"></Box>
          <Typography fontWeight="light" >
          Deposit will be refundable only if:
          </Typography>
          <Box height="10px"></Box>
          <Typography fontWeight="light" >
          -For 1 - 2 people: cancellation must be done at least 7 days in advance.
          </Typography><Box height="10px"></Box>
          <Typography fontWeight="light" >
          -For 2 - 5 people: cancellation must be done at least 9 days in advance.
          </Typography><Box height="10px"></Box>
          <Typography fontWeight="light" >
          -For more than 5 people: cancellation must be done at least 14 days in advance.
          </Typography><Box height="10px"></Box>
          <Typography fontWeight="light" >
          We hope you understand.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel13'} onChange={handleChange('panel13')} sx={{ borderRadius: 2,padding:"10px 0 10px 0  ",border:0}} >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography fontWeight="bold">2. What payment methods do you accept and what currencies can I use?</Typography>
        </AccordionSummary>
        <AccordionDetails  >
          <Box height="10px"></Box>
          <Typography fontWeight="light" >
          We currently accept payment in VND or USD upon pickup from your hotel. You may also use our paypal system on our website. Please find the prices for all of our tours below in USD. And the exchange rate between USD and VND will base on the rate of the date you travel.
          </Typography>
         
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel14'} onChange={handleChange('panel14')} sx={{ borderRadius: 2 ,padding:"10px 0 10px 0  ",border:0}} >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography fontWeight="bold">3. Insurance & its policy</Typography>
        </AccordionSummary>
        <AccordionDetails  >
          <Box height="10px"></Box>
          <Typography fontWeight="light" >
          This is a guarantee from our Insurance company that if there is an accident on all our tours that we will take you to the top emergency clinics/ hospitals and cover your injuries up to USD 5,000 and do upmost to see that you are offered the best medical care available in Vietnam. This type of amount of money will go along way here in Vietnam to cover most injuries sustained in an accident.
          </Typography>
          <Box height="10px"></Box>
          <Typography fontWeight="light">
          In three years, we are proud to say that Saigon Food Tour has never needed to use it in the thousands of tours we’ve gone on since the inception of our company. That does not mean that it should not be there to offer security for our customers in the knowledge that booking with an established motorbike tour company has them traveling the streets of Saigon in safe hands that are prepared to take care of them every step of the way.          </Typography>
          <Box height="10px"></Box>
          <Typography fontWeight="light" >
          Saigon Food Tour has signed a special/exclusive contract with top tier insurance company in Saigon in order to provide this unique insurance policy to all our valued guests. This coverage is guaranteed and is in effect the moment you go on one of our tours and ends once the tour is over. You are insured for any bodily injury that is a direct result of an accident that occurs while riding on our motorbikes.Theft or loss of property is NOT covered.          </Typography>
          <Box height="10px"></Box>
          <Typography fontWeight="light" >
          We will confirm your booking as soon as you booked with Saigon Food Tour, so please give us exactly your name and passport number for easily helping us to have an insurance registered before 2 days joining one of our tours.          </Typography>
          <Box height="10px"></Box>
          <Typography fontWeight="light" >         
         Disclaimer: Property loss or any preexisting health conditions that might be affected by riding on a motorbike is not covered by Saigon Food Tour Accident Insurance. Saigon Food Tour Accident Insurance WILL NOT reimburse you for any phones, cameras, video equipment, cash, jewelry or any other personal property that it lost or stolen while on one of our tours.          </Typography>
         <Box height="10px"></Box>
          <Typography fontWeight="light" >
          By booking our tours through on the website, by email or by phone you are agreeing to all the terms above.          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel16'} onChange={handleChange('panel16')} sx={{ borderRadius: 2,padding:"10px 0 10px 0  " ,border:0}} >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography fontWeight="bold">4. Cancellation Policy</Typography>
        </AccordionSummary>
        <AccordionDetails  >
          <Box height="10px"></Box>
          <Typography fontWeight="light" >
          + 7 to 4 days prior to the arrival: 20% charge of total cost.
          </Typography>
          <Box height="10px"></Box>
          <Typography fontWeight="light">
          + 4 to 2 days prior to the arrival: 50% charge of total cost.          </Typography>
          <Box height="10px"></Box>
          <Typography fontWeight="light" >
          + 1 day prior to the arrival: 100% charge of total cost.
</Typography>
        </AccordionDetails>
      </Accordion>
      </Box>
      
      </Grid>
     
      
    </Grid>
    
  );
}
export default FAQAccordion;