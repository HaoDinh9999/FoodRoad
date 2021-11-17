import React from 'react'
import { styled } from '@mui/material/styles';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import FeatureCard from "./FeatureCard";

const  NewsRight =()=> {
    return (
    <>
    <Stack spacing={5}>
        <Box>
            <TextField 
                hiddenLabel 
                id="outlined-search" 
                type="search" 
                size="small" 
                fullWidth
                InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                }}
                />
        </Box>
        <Box>
            <Typography variant="h5"> Recent Posts </Typography>
            <Divider></Divider>
            <Box pt={2}>
            <li><a style={{textDecoration: "underline"}} href="#">Saigon Food Everywhere</a></li>
            <li><a style={{textDecoration: "underline"}} href="#">Cocktails Of The Week</a></li>
            <li><a style={{textDecoration: "underline"}} href="#">How Sticky Rice Cake (Bánh Chưng) Becomes an Iconic Symbol of New Year Day in Vietnam</a></li>
            </Box>
        </Box>
        <Box>
            <Typography variant="h5"> Features </Typography>
            <Divider></Divider>
            <Stack pt={2} spacing={2}>
            <FeatureCard title="Saigon Food Everywhere" image="https://amthucvietnam.com.vn/wp-content/uploads/2021/04/cm_Anh_Ga_1.jpg"></FeatureCard>
            <FeatureCard title="Cocktails Of The Week" image="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/mojito-cocktails-150961e.jpg"></FeatureCard>
            <FeatureCard title="How Sticky Rice Cake (Bánh Chưng) Becomes an Iconic Symbol of New Year Day in Vietnam" image="https://i.ytimg.com/vi/ZGs59VEu3hQ/maxresdefault.jpg"></FeatureCard>
            </Stack>
        </Box>
        <Box>
            <Typography variant="h5"> Social Media </Typography>
            <Divider></Divider>
            <div>

            </div>
        </Box>
    </Stack>
    </>
    )
}

export default NewsRight
