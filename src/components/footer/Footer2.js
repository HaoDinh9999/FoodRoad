import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InputAdornment from '@mui/material/InputAdornment';
import { Grid } from '@mui/material';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

function Footer2() {
  return (
    <Box sx={{backgroundColor: "#F8F6F6"}}>
        <Container maxWidth="lg">
            <Box sx={{pt: 2, pb: 4}}>
                <Box sx={{pb:1}}>
                    <Typography sx={{ fontWeight: 700 }} variant="h5">
                        Food Road
                        <i className="fab fa-typo3" />
                    </Typography>
                    <Typography variant="subtitle2" color="#999999">Experience the food and culture of Saigon</Typography>
                </Box>
                <Divider></Divider>
            </Box>  
            <Grid container spacing={5}>
                <Grid item xs={6} sm={3}>
                {/* <Box display="flex" sx={{flexDirection: 'row', pb: 5}} justifyContent="center"> */}
                    <Box>
                        <Stack spacing="8px">
                        <Link href="#" fontWeight="bold" underline="hover" color="black">About Foodroad</Link>
                        <Link href="/order" fontWeight="bold" underline="hover" color="black">Your Order</Link>
                        <Link href="/payments" fontWeight="bold" underline="hover" color="black">Payments</Link>
                        <Link href="/news" fontWeight="bold" underline="hover" color="black">Our News Blog</Link>
                        </Stack>
                    </Box>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Box>
                        <Stack spacing="8px">
                        <Link href="/faqs" fontWeight="bold" underline="hover" color="black">FAQ</Link>
                        <Link href="/contact" fontWeight="bold" underline="hover" color="black">Contact Us</Link>
                        <Link href="/policy" fontWeight="bold" underline="hover" color="black">Privacy Policy</Link>
                        </Stack>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box sx={{pr:10}}>
                        <Stack spacing="5px">
                            <Typography fontWeight="bold">Subscribe to our Newsletter</Typography>
                            <Box display="flex" sx={{pt:2}}>
                                <Box sx={{pr:1}}>
                                <TextField
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                            <MailOutlineIcon />
                                            </InputAdornment>
                                        ),
                                        style: {fontSize: "20px"}
                                    }}
                                    InputLabelProps={{style: {fontSize: "20px"}}}
                                    size="big"
                                    id="standard-helperText"
                                    label="Enter your e-mail here"
                                    variant="standard"
                                    fullWidth
                                />
                                </Box>
                                <Button variant="contained" disableElevation style={{width: "35%"}}>Subscribe</Button>
                            </Box>
                            <Box display="flex" flexDirection="row" sx={{pt: 3}}>
                                <Box sx={{pr: 10}}>
                                <Typography color="#808080" fontSize="18px">Call us:</Typography>
                                    <Typography fontSize="22px" fontWeight="bold">+84 905137051</Typography>
                                </Box>
                                <Box>
                                    <Typography color="#808080" fontSize="18px">E-mail us:</Typography>
                                    <Typography fontSize="22px" fontWeight="bold">foodroad@gmail.com</Typography>
                                </Box>
                            </Box>
                                <Box display="flex" sx={{pt: 5}}>
                                    <Typography color="#808080" fontSize="18px">Follow us on:</Typography>
                                    <Box sx={{pl:2}}>
                                    <Stack direction="row" spacing={2}>
                                    <a href="https://www.facebook.com/FoodRoadSaigon" title="FoodRoad Facebook" target="_blank"> <i class="fab fa-facebook fa-2x" style={{color:"#3b5998"}}></i> </a>
                                    <a href="https://www.twitter.com/" title="FoodRoad Twitter" target="_blank"> <i class="fab fa-twitter fa-2x" style={{color:"#1DA1F2"}}></i> </a>
                                    <a href="https://www.youtube.com/" title="FoodRoad Youtube" target="_blank"> <i class="fab fa-youtube fa-2x" style={{color:"#FF0000"}}></i> </a>
                                    <a href="https://github.com/HaoDinh9999/FoodRoad" title="FoodRoad Github" target="_blank"> <i class="fab fa-github fa-2x"></i> </a>
                                    </Stack>
                                    </Box>
                                </Box>
                        </Stack>
                    </Box>
                </Grid>
                {/* </Box> */}
                
            </Grid>
            <Box sx={{pt: 3, pb: 3}}>
                    <Typography color="#BFBDBD" fontSize="12px">© Copyright 2014-2021 Foodroad - All rights reserved.</Typography>
            </Box>
        </Container>
        
    </Box>
  );
}

export default Footer2;
