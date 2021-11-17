import React from 'react';
import './Footer.css';
import { Button } from '../button/Button';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InputAdornment from '@mui/material/InputAdornment';

function Footer2() {
  return (
    <Box sx={{backgroundColor: "#F8F6F6"}}>
        <Box sx={{pl: 31, pt: 3, pb: 3, pr:31}}>
            <Box sx={{pb:3}}>
                <Typography sx={{ fontWeight: 700 }} variant="h5">
                    Food Road
                    <i className="fab fa-typo3" />
                </Typography>
                <Typography variant="subtitle2" color="#999999">Experience the food and culture of Saigon</Typography>
            </Box>
            <Divider></Divider>
        </Box>
        <Box display="flex" sx={{flexDirection: 'row', pb: 5}} justifyContent="center">
            <Box sx={{pr:10}}>
                <Stack spacing="5px">
                <Typography fontWeight="bold">About Foodroad</Typography>
                <Typography fontWeight="bold">Delivery</Typography>
                <Typography fontWeight="bold">Payments</Typography>
                <Typography fontWeight="bold">Our Blog</Typography>
                </Stack>
            </Box>
            <Box sx={{pr:40}}>
                <Stack spacing="5px">
                <Typography fontWeight="bold">FAQ</Typography>
                <Typography fontWeight="bold">Contact Us</Typography>
                <Typography fontWeight="bold">Privacy Policy</Typography>
                </Stack>
            </Box>
            <Box sx={{pr:10}}>
                <Stack spacing="5px">
                    <Typography fontWeight="bold">Subscribe to our Newsletter</Typography>
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
                    <Box display="flex" flexDirection="row" sx={{pt: 3}}>
                        <Box sx={{pr: 10}}>
                        <Typography color="#808080" fontSize="18px">Call us</Typography>
                            <Typography fontSize="24px" fontWeight="bold">+84 905137051</Typography>
                        </Box>
                        <Box>
                            <Typography color="#808080" fontSize="18px">E-mail us</Typography>
                            <Typography fontSize="24px" fontWeight="bold">foodtour@gmail.com</Typography>
                        </Box>
                    </Box>
                        <Box sx={{pt: 5}}>
                            <Typography color="#808080" fontSize="18px">Follow us on:</Typography>
                        </Box>
                </Stack>
            </Box>
        </Box>
        <Box sx={{pb: 3, pl: 30}}>
            <Typography color="#BFBDBD" fontSize="12px">© Copyright 2014-2021 Foodroad - All rights reserved.</Typography>
        </Box>
    </Box>
  );
}

export default Footer2;
