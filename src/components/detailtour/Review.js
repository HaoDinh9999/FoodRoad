import { Grid, Box, Typography, IconButton, Rating } from '@mui/material';
import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import { Pagination } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FormControl from '@mui/material/FormControl';
import { pink, green } from '@mui/material/colors';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import "./review.css"
import Commentcard from './commentCard';
import { styled } from '@mui/material/styles';
export const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: "#00aa6c",
        // color: green[600],
    },
    '& .MuiRating-iconHover': {
        // color: green[600],
        color: "#00aa6c",
    },
    '&.css-dqr9h-MuiRating-label': {
        marginTop: "2px"
    }
});
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
            <Grid container >
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Box className="rating-section">
                        <Box sx={{ "display": "flex" }}>
                            <StyledRating
                                name="customized-color"
                                defaultValue={5}
                                precision={0.5}
                                icon={<CircleIcon fontSize="inherit" />}
                                emptyIcon={<CircleOutlinedIcon fontSize="inherit" />}
                                readOnly
                            />
                            <Typography variant="h6" component="h2" sx={{ margin: "auto 5px", mt: "-4px", fontSize: "20px", fontWeight: 'medium' }}>
                                92 Reviews
                            </Typography>
                        </Box>
                    </Box>
                    <Box className="chart"  >
                        {reviewClasses.map((item, index) => (
                            <Box key={index} display="table-row">
                                <Typography display="block" variant="h6" component="h2" sx={{ fontSize: "14px", fontWeight: 'medium' }}> {item.name}</Typography>
                                <Box className="line-chart" sx={{ width: `${Math.round(item.number / 100 * 200)}px`, backgroundColor: "#00aa6c" }}></Box>
                                <Typography display="inline" sx={{ ml: 2 }}> {item.number}</Typography>
                            </Box>)
                        )}
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={8} lg={8} sx={{ mr: "0", mt: 1 }}>
                    <FormControl fullWidth >
                        <InputLabel htmlFor="outlined-adornment-amount" >Search</InputLabel>
                        <OutlinedInput
                            startAdornment={<InputAdornment position="start"><SearchIcon /></InputAdornment>}
                            label="Amount" sx={{ borderRadius: "20px" }}
                        />
                    </FormControl>
                    <Box sx={{ mt: 2 }}>
                        <Stack direction="row" spacing={1}>
                            <Chip label={<Typography variant="h6" component="h2" sx={{ fontSize: "14px", fontWeight: 'medium', cursor: "pointer" }}>Filters</Typography>} variant="outlined" className="func-btn" />
                            <Chip label={<Typography variant="h6" component="h2" sx={{ fontSize: "14px", fontWeight: 'medium', cursor: "pointer" }}>English</Typography>} variant="outlined" className="func-btn" />
                            <Chip label={<Typography variant="h6" component="h2" sx={{ fontSize: "14px", fontWeight: 'medium', cursor: "pointer" }}>Most Recent</Typography>} variant="outlined" className="func-btn" />
                        </Stack>
                        <Box>
                            <Typography variant="h6" component="h2" sx={{ fontSize: "14px", fontWeight: 'medium' }}>Popular Mention</Typography>
                            <Grid container>
                                {tags.map((item, index) => (
                                    <Grid key={index} item spacing={3} sx={{ marginRight: "1rem", marginTop: "0.4rem" }}>
                                        <Chip label={<Typography variant="h6" component="h2" sx={{ fontSize: "14px", fontWeight: 'medium', cursor: "pointer" }} >{item.tag}</Typography>} variant="outlined" className="func-btn" />
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Box>
                    <Grid container>
                        <Grid item xs={12}>
                            <Commentcard />
                            <Commentcard />
                            <Commentcard />
                            <Commentcard />
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Box className="page-footer-btn" sx={{ mt: 1 }}>
                            <Pagination count={10} shape="rounded" />
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default Review;
