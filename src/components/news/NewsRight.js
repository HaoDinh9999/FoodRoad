import React from 'react'
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import FeatureCard from "./FeatureCard";
import RecentCard from "./RecentCard";

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
            {/* <li><a style={{textDecoration: "underline"}} href="#">Saigon Food Everywhere</a></li>
            <li><a style={{textDecoration: "underline"}} href="#">Cocktails Of The Week</a></li>
            <li><a style={{textDecoration: "underline"}} href="#">How Sticky Rice Cake (Bánh Chưng) Becomes an Iconic Symbol of New Year Day in Vietnam</a></li> */}
                <Stack spacing={2}>
                    <RecentCard
                    image="https://amthucvietnam.com.vn/wp-content/uploads/2021/04/cm_Anh_Ga_1.jpg"
                    alt="Saigon Food Everywhere"
                    title="Saigon Food Everywhere"
                    date="2/11/2021"
                    />
                    <RecentCard
                    image="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/mojito-cocktails-150961e.jpg"
                    alt="Cocktails Of The Week"
                    title="Cocktails Of The Week"
                    date="2/11/2021"
                    />
                    <RecentCard
                    image="https://i.ytimg.com/vi/ZGs59VEu3hQ/maxresdefault.jpg"
                    alt="How Sticky Rice Cake (Bánh Chưng) Becomes an Iconic Symbol of New Year Day in Vietnam"
                    title="How Sticky Rice Cake..."
                    date="2/11/2021"
                    />
                </Stack>
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
            <Box pt={1}>
                <Stack direction="row" spacing={2}>
                    <a href="https://www.facebook.com/FoodRoadSaigon" title="FoodRoad Facebook" target="_blank"> <i class="fab fa-facebook fa-2x" style={{color:"#3b5998"}}></i> </a>
                    <a href="https://www.twitter.com/" title="FoodRoad Twitter" target="_blank"> <i class="fab fa-twitter fa-2x" style={{color:"#1DA1F2"}}></i> </a>
                    <a href="https://www.youtube.com/" title="FoodRoad Youtube" target="_blank"> <i class="fab fa-youtube fa-2x" style={{color:"#FF0000"}}></i> </a>
                    <a href="https://github.com/HaoDinh9999/FoodRoad" title="FoodRoad Github" target="_blank"> <i class="fab fa-github fa-2x"></i> </a>
                    <a href="https://discord.com/" title="FoodRoad Discord" target="_blank"> <i class="fab fa-discord fa-2x" style={{color:"black"}}></i> </a>
                </Stack>  
            </Box>          
        </Box>
    </Stack>
    </>
    )
}

export default NewsRight
