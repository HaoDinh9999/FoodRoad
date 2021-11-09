import React from 'react';
import { Grid, Typography, Avatar, Stack, IconButton, Button, Link, ImageList, ImageListItem } from "@mui/material"
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import Checkbox from '@mui/material/Checkbox';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { blue, pink } from "@mui/material/colors"
import Popover from '@mui/material/Popover';

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
    return (
        <div >
            <Grid container sx={{ mt: 1, ml: 1, pt: 2, pb: 0, borderBottom: "1px solid gray" }} justifyContent="space-between">
                <Grid item>
                    <Grid container>
                        <Grid item sx={{ mr: 1 }}>
                            <Avatar src="/images/card_comment/ava.jpg" />
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" component="h2" sx={{ fontSize: "18px", fontWeight: 'medium' }}>
                                Nick
                            </Typography>
                            <Typography variant="h6" component="h2" sx={{ fontSize: "16px", fontWeight: 'medium' }}> Portland, Oregon . 45 contributions</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item justifyContent="flex-end">
                    <Grid container >
                        <Stack direction="row" justifyContent="end">
                            <Checkbox icon={<ThumbUpOutlinedIcon />} checkedIcon={<ThumbUpIcon />}
                                sx={{
                                    color: blue[800],
                                    '&.Mui-checked': {
                                        color: blue[600],
                                    },
                                }} />
                            <BasicPopover />
                            {/* <IconButton>
                                <MoreVertOutlinedIcon />
                            </IconButton> */}
                            {/* <Button variant="contained">Item 1</Button> */}
                        </Stack>
                    </Grid>
                    {/* <Box>
                            </Box>
                            <Box>
                            </Box> */}
                </Grid>
                <Grid item>
                    <Grid container>
                        <Grid item >
                            <Stack direction="row">
                                <FavoriteIcon sx={{ color: pink[600] }} />
                                <FavoriteIcon sx={{ color: pink[600] }} />
                                <FavoriteIcon sx={{ color: pink[600] }} />
                                <FavoriteIcon sx={{ color: pink[600] }} />
                                <FavoriteIcon sx={{ color: pink[600] }} />
                            </Stack>
                            <Typography variant="subtitle2" component="h2" sx={{ fontSize: "18px", fontWeight: 'medium' }}> What a blast in Saigon!</Typography>
                            <Typography variant="h6" component="h2" sx={{ fontSize: "16px", fontWeight: 'medium' }}> May 2020</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" component="h2" sx={{ fontSize: "18px", fontWeight: 'light' }} >
                                Danny and Sophia picked up Kelly and I at our hotel in District 1. They gave us a quick briefing on the scooters and off we went. What looks like chaos from the street is actually pretty organized when you’re on the back of a scooter. With Danny and Sophia driving we always felt safe the whole evening. They took us places we would have never gone on our own. From Vietnamese pancakes to noodle soup to barbecue, each food stop was just outstanding. And Danny and Sophia took time at each stop to explain to us what we were having, and how it was prepared. In fact they can tailor your tour to your food tastes which is outstanding. In our two weeks in Vietnam this was one of our most fun tours. If you ...
                                <Link sx={{ fontSize: "20px", fontWeight: "bold", cursor: "pointer" }} > Read More</Link>
                            </Typography>
                        </Grid>
                        <Grid item sx={{ mt: 2 }}>
                            <ImageList sx={{ width: 500, height: 200 }} cols={3} rowHeight={164}>
                                {images.map((item) => (
                                    <ImageListItem key={item.img} sx={{ pl: 1 }}>
                                        <img
                                            src={`${item.img}`}
                                            srcSet={`${item.img}`}
                                            loading="lazy"
                                        />
                                    </ImageListItem>
                                ))}
                            </ImageList>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default Commentcard;
