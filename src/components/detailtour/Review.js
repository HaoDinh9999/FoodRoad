import { Grid, Box, Typography, Rating, TextField, IconButton } from '@mui/material';
import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FormControl from '@mui/material/FormControl';
import { pink, green } from '@mui/material/colors';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import "./review.css"
import Commentcard from './commentCard';
const tags = [
    {
        tag: "food stops"
    },
    {
        tag: "university students"
    },
    {
        tag: "egg coffee"
    },
    {
        tag: "vietnamese culture"
    },
    {
        tag: "beautiful city"
    },
    {
        tag: "pancakes"
    },
    {
        tag: "local perspective"
    },
    {
        tag: "city at night"
    },
    {
        tag: "fantastic experience"
    },
    {
        tag: "noodle soup"
    },
    {
        tag: "street food"
    },
    {
        tag: "felt completely safe"
    }
];
const reviewClasses = [
    {
        name: "Excellent",
        number: 80
    },
    {
        name: "Very Good",
        number: 3
    },
    {
        name: "Good",
        number: 2
    },
    {
        name: "Average",
        number: 1
    },
    {
        name: "Poor",
        number: 0
    },
    {
        name: "Terrible",
        number: 0
    }
]
const Review = () => {
    return (
        <div>
            <Grid container spacing="12">
                <Grid item xs="4">
                    <Box className="rating-section">
                        {/* <Rating
                            name="customized-color"
                            defaultValue={5}
                            getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                            precision={0.5}
                            icon={<FavoriteIcon fontSize="inherit" />}
                            emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                        /> */}
                        <Box sx={{ "display": "flex" }}>
                            <FavoriteIcon sx={{ fontSize: "36px", color: pink[600] }} />
                            <FavoriteIcon sx={{ fontSize: "36px", color: pink[600] }} />
                            <FavoriteIcon sx={{ fontSize: "36px", color: pink[600] }} />
                            <FavoriteIcon sx={{ fontSize: "36px", color: pink[600] }} />
                            <FavoriteIcon sx={{ fontSize: "36px", color: pink[600] }} />
                            <Typography variant="subtitle" sx={{ "ml": "10px", "fontSize": "27px" }}> 92 reviews </Typography>
                        </Box>
                    </Box>
                    <Box className="chart" sx={{ ml: 1, mt: 2 }}>
                        {reviewClasses.map((item, index) => (<Box key={index} display="table-row">
                            <Typography display="block" sx={{ mr: 3 }}> {item.name}</Typography>
                            <Box className="line-chart" sx={{ width: `${Math.round(item.number / 100 * 200)}px`, backgroundColor: green[800] }}></Box>
                            <Typography display="inline" sx={{ ml: 2 }}> {item.number}</Typography>
                        </Box>)
                        )}
                    </Box>
                </Grid>
                <Grid item xs="7" sx={{ mr: 1 }}>
                    {/* <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" sx={{ "width": "900px", "borderRadius": "50px" }} />
                        <TextField id="input-with-sx" label="With sx" variant="standard" />
                    </Box> */}
                    <FormControl fullWidth >
                        <InputLabel htmlFor="outlined-adornment-amount" >Search</InputLabel>
                        <OutlinedInput
                            startAdornment={<InputAdornment position="start"><SearchIcon /></InputAdornment>}
                            label="Amount" sx={{ borderRadius: "20px" }}
                        />
                    </FormControl>
                    <Box sx={{ mt: 2 }}>
                        <Stack direction="row" spacing={1}>
                            <Chip label="Filters" variant="outlined" className="func-btn" />
                            <Chip label="English" variant="outlined" className="func-btn" />
                            <Chip label="Most Recent" variant="outlined" className="func-btn" />
                        </Stack>
                        <Box>
                            <Typography variant="h6" sx={{ m: 1 }}>Popular Mention</Typography>
                            <Grid container>
                                {tags.map((item, index) => (
                                    <Grid key={index} item spacing={3} sx={{ m: 1 }}>
                                        <Chip label={item.tag} variant="outlined" className="func-btn" />
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Box>
                    <Box>
                        <Commentcard />
                        <Commentcard />
                        <Commentcard />
                        <Commentcard />
                    </Box>
                    <Grid item>
                        <Box className="page-footer-btn">
                            <Box display="inline-block">
                                <IconButton>
                                    <ArrowBackIcon sx={{ fontSize: "30px" }} />
                                </IconButton>
                                <Typography display="inline-block" sx={{ pl: 1, fontSize: "20px" }}>
                                    1
                                </Typography>
                                <Typography display="inline-block" sx={{ pl: 1, fontSize: "20px" }}>
                                    2
                                </Typography>
                                <Typography display="inline-block" sx={{ pl: 1, fontSize: "20px" }}>
                                    3
                                </Typography>
                                <Typography display="inline-block" sx={{ pl: 1, fontSize: "20px" }}>
                                    ...
                                </Typography>
                                <IconButton>
                                    <ArrowForwardIcon sx={{ fontSize: "30px" }} />
                                </IconButton>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container>

            </Grid>
        </div>
    );
}

export default Review;
