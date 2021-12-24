import React from 'react';
import { Grid, Typography, Avatar, Stack, IconButton, Button, Link, ImageList, ImageListItem, Divider, Popover, Checkbox } from "@mui/material"
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import { blue } from "@mui/material/colors"
import { StyledRating } from './Review';
const images = [
    {
        img: "/images/card_comment/image1.jpg"
    },
    {
        img: "/images/card_comment/image2.jpg"
    },
]
const BasicPopover = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            {/* <Button  variant="contained" >
          Open Popover
        </Button> */}
            <IconButton onClick={handleClick} aria-describedby={id}>
                <MoreVertOutlinedIcon />
            </IconButton>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Typography sx={{ p: 1 }}>Report this comment</Typography>
            </Popover>
        </div>
    );
}
const Commentcard = () => {
    const [readMore, setReadMore] = React.useState(false);
    return (
        <div >
            <Grid container sx={{ mt: 1, pb: 1 }} justifyContent="space-between">
                <Grid item xs={10} md={10} lg={10}>
                    <Grid container>
                        <Grid item xs={2} sm={1.5} lg={1}  >
                            <Avatar src="/images/card_comment/ava.jpg" />
                        </Grid>
                        <Grid item xs={9} sm={9} lg={9} >
                            <Typography variant="h6" component="h2" sx={{ fontSize: "14px", fontWeight: 'medium' }}>
                                Nick
                            </Typography>
                            <Grid container>
                                <Grid item xs={12} sm={4} lg={3}>
                                    <Typography variant="h6" component="h2" sx={{ fontSize: "12px", fontWeight: 'light' }}> Portland, Oregon</Typography>
                                </Grid>
                                <Grid item xs={12} sm={4} lg={4}>
                                    <Typography variant="h6" component="h2" sx={{ fontSize: "11px", fontWeight: 'light' }}> 45 contributions</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={2} md={2} lg={2}>
                    <Grid container >
                        <Stack direction="row" >
                            <Checkbox icon={<ThumbUpOutlinedIcon />} checkedIcon={<ThumbUpIcon />}
                                sx={{
                                    color: blue[800],
                                    '&.Mui-checked': {
                                        color: blue[600],
                                    },
                                }} />
                            <BasicPopover />
                        </Stack>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container>
                        <Grid item xs={12} >
                            <Stack direction="row">
                                <StyledRating
                                    name="customized-color"
                                    defaultValue={5}
                                    precision={1}
                                    icon={<CircleIcon fontSize="inherit" />}
                                    emptyIcon={<CircleOutlinedIcon fontSize="inherit" />}
                                    readOnly
                                />
                            </Stack>
                            <Typography variant="subtitle2" component="h2" sx={{ fontSize: "14px", fontWeight: 'medium' }}> What a blast in Saigon!</Typography>
                            <Typography variant="h6" component="h2" sx={{ fontSize: "12px", fontWeight: 'medium' }}> May 2020</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h6" component="h2" sx={{ fontSize: "14px", fontWeight: 'light', display: "contents" }} >
                                Danny and Sophia picked up Kelly and I at our hotel in District 1. They gave us a quick briefing on the scooters and off we went. What looks like chaos from the street is actually pretty organized when you’re on the back of a scooter. With Danny and Sophia driving we always felt safe the whole evening. They took us places we would have never gone on our own. From Vietnamese pancakes to noodle soup to barbecue, each food stop was just outstanding. {readMore ? ('And Danny and Sophia took time at each stop to explain to us what we were having, and how it was prepared. In fact they can tailor your tour to your food tastes which is outstanding. In our two weeks in Vietnam this was one of our most fun tours. If you ...') : null}
                            </Typography>
                            {/* <Typography variant="h6" component="h2" sx={{ fontSize: "18px", fontWeight: 'light' }} >
                                
                            </Typography> */}
                            {readMore ? (<Link sx={{ fontSize: "14px", fontWeight: "bold", cursor: "pointer" }} onClick={() => setReadMore(false)} > Read less</Link>) : (<Link sx={{ fontSize: "14px", fontWeight: "bold", cursor: "pointer" }} onClick={() => setReadMore(true)} > Read More</Link>)}

                        </Grid>
                        <Grid item xs={12}>
                            <ImageList cols={3} sx={{ height: "100%" }}>
                                {images.map((item) => (
                                    <ImageListItem key={item.img}>
                                        <img
                                            src={`${item.img}`}
                                            srcSet={`${item.img}`}
                                            loading="lazy"
                                            sx={{ height: "100%" }}
                                        />
                                    </ImageListItem>
                                ))}
                            </ImageList>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Divider />
        </div>
    );
}

export default Commentcard;
