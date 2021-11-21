import React, { useState } from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { FormControlLabel, FormGroup, Rating } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { IconButton } from '@mui/material';
import CleanHandsIcon from '@mui/icons-material/CleanHands';
import Slider from '@mui/material/Slider';
import "./cardheader.css"
import { styled } from '@mui/material/styles';
import { green } from '@mui/material/colors';

import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CircleIcon from '@mui/icons-material/Circle';

const Typographyf14light = (props) => {
    return (
        <Typography variant="h6" component="h2" sx={{ fontSize: "14px", fontWeight: 'light' }}>{props.children}</Typography>
    )
}
const Typographyf14medium = (props) => {
    return (
        <Typography variant="h6" component="h2" sx={{ fontSize: "14px", fontWeight: 'medium' }}>{props.children}</Typography>
    )
}
const TypographyMod = (props) => {
    return (
        <Typography variant="h6" component="h2" fontSize={props.fontSize || "18px"} fontWeight={props.fontWeight || "medium"}>{props.children}</Typography>
    )
}
const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        // color: "#00aa6c",
        color: green[600],
    },
    '& .MuiRating-iconHover': {
        color: green[600],

        // color: "#00aa6c",
    },
    '&.css-dqr9h-MuiRating-label': {
        marginTop: "2px"
    }
});
const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};
const Tourfilters = () => {
    const [price, setPrice] = useState([40, 100])
    const [stars, setStars] = useState(4);
    const handleChange = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setPrice([Math.min(newValue[0], price[1] - 30), price[1]]);
        } else {
            setPrice([price[0], Math.max(newValue[1], price[0] + 30)]);
        }
    }
    return (
        <Box sx={{ width: "296px", border: "1px solid black", backgroundColor: "white", borderRadius: "7px", mt: 1 }}>
            {/* Covid 19 */}
            <Box sx={{ m: 1, borderBottom: "1px solid black", ml: 2, mr: 2 }}>
                <TypographyMod fontSize="14px">Covid-19<IconButton sx={{ ml: 1 }}>
                    <CleanHandsIcon />
                </IconButton></TypographyMod>
                <TypographyMod fontSize="14px">Because of Covid-19,you must wear mask except for eating</TypographyMod>
            </Box>
            {/* <Box sx={{ borderBottom: "1px solid black", ml: -2, mr: 2 }}>
                <LocalizationProvider dateAdapter={DateAdapter}>
                    <CalendarPicker sx={{
                        fontSize: "14px", fontWeight: "light"
                    }} />
                </LocalizationProvider>
            </Box> */}
            {/* Deals */}
            <Box sx={{ m: 1, borderBottom: "1px solid black", ml: 2, mr: 2 }}>
                <TypographyMod fontSize="14px">Deals</TypographyMod>
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label={<Typographyf14medium>Free cancellation <IconButton sx={{ ml: 1 }}>
                        <ErrorOutlineIcon />
                    </IconButton></Typographyf14medium>} />
                    <FormControlLabel control={<Checkbox />} label={<Typographyf14light>Reserve now, pay at stay<IconButton sx={{ ml: 1 }}>
                        <ErrorOutlineIcon />
                    </IconButton></Typographyf14light>} />
                    <FormControlLabel control={<Checkbox />} label={<Typographyf14light>Properties with special offers</Typographyf14light>} />
                </FormGroup>
            </Box>
            <Box sx={{ m: 1, borderBottom: "1px solid black", ml: 2, mr: 2 }}>
                <TypographyMod fontSize="14px">Price</TypographyMod>
                <Box textAlign="center">
                    <TypographyMod fontSize="20px">From {price[0]} USD to {price[1]} USD</TypographyMod>

                </Box>
                <Box>

                    <Slider
                        defaultValue={40}
                        onChange={handleChange}
                        value={price}
                        step={1}
                        min={40}
                        max={200}
                        valueLabelDisplay="auto"
                        disableSwap
                    />
                </Box>
                {/* <FormControl sx={{ m: 2, width: "247px", height: "37" }}>
                    <Select
                        labelId="select-price label"
                        id="Select"
                        value={priceType}
                        defaultValue={priceType}
                        onChange={(event) => { setPriceType(event.target.value) }}> */}
                {/* <MenuItem value={0} sx={{ padding: "0px 0px 0px 0px" }}>Price without VAT</MenuItem>
                        <MenuItem value={0} sx={{ padding: "0px 0px 0px 0px" }}>Price with VAT</MenuItem>
                        <MenuItem value={0} sx={{ padding: "0px 0px 0px 0px" }}>Price per night</MenuItem> */}
                {/* <MenuItem value={1}>Price + taxes and fees</MenuItem>
                        
                        <MenuItem value={2}>Total stay + taxes and fees</MenuItem> */}
                {/* </Select>
                </FormControl> */}
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label={<Typographyf14medium>Price without VAT</Typographyf14medium>} />
                    <FormControlLabel control={<Checkbox />} label={<Typographyf14light>Price with VAT</Typographyf14light>} />
                </FormGroup>
            </Box>
            <Box sx={{ m: 1, ml: 2, mr: 2 }}>
                <TypographyMod fontSize="14px">Popular</TypographyMod>
                <Box textAlign="center">
                    <TypographyMod fontSize="20px">{stars} stars</TypographyMod>

                </Box>
                <Box
                    sx={{
                        width: 200,
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <StyledRating
                        name="customized-color"
                        defaultValue={stars}
                        onChange={(event, value) => setStars(value)}
                        precision={0.5}
                        icon={<CircleIcon fontSize="inherit" />}
                        emptyIcon={<CircleOutlinedIcon fontSize="inherit" />}
                        sx={{ mr: 2 }}
                    />
                    <TypographyMod fontSize="18px">{labels[stars]}</TypographyMod>
                </Box>
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label={<Typographyf14medium>Vegan</Typographyf14medium>} />
                    <FormControlLabel control={<Checkbox />} label={<Typographyf14light>Wine and Beer</Typographyf14light>} />
                    <FormControlLabel control={<Checkbox />} label={<Typographyf14light>Traditional</Typographyf14light>} />
                    <FormControlLabel control={<Checkbox />} label={<Typographyf14light>On Sales</Typographyf14light>} />
                    <FormControlLabel control={<Checkbox />} label={<Typographyf14light>Best Tours of the years</Typographyf14light>} />
                </FormGroup>
            </Box>
        </Box >
    );
}

export default Tourfilters;
