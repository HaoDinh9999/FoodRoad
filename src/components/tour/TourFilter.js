import React, { useState } from 'react';
import { Box } from '@mui/system';
import {
    FormControlLabel,
    FormGroup, Rating, Grid,
    Button, Slider, Checkbox, Typography,
    Divider
} from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import { grey } from '@mui/material/colors';
import PeopleAltSharpIcon from '@mui/icons-material/PeopleAltSharp';
import ChildCareSharpIcon from '@mui/icons-material/ChildCareSharp';
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
const labels = {
    0: 'Poor',
    1: 'Terrible',
    2: 'Average',
    3: 'Good',
    4: 'Very Good',
    5: 'Excellent',
};

const TourFilters = () => {
    const [price, setPrice] = useState([40, 100])
    const [stars, setStars] = useState(4);
    const [childNum, setChildNum] = useState(1);
    const [adultNum, setAdultNum] = useState(1)
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
        <Box sx={{ width: "296px", backgroundColor: "white", borderRadius: "7px", mt: 1 }}>
            {/* Covid 19 */}
            <Box sx={{ m: 1, ml: 2, mr: 2 }}>
                <TypographyMod fontSize="14px">Because of Covid-19,you must wear mask except for eating</TypographyMod>
            </Box>
            <Divider />
            <Box sx={{ m: 1, ml: 2, mr: 2 }}>
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
            <Divider />
            <Box sx={{ m: 1, ml: 2, mr: 2 }}>
                <TypographyMod fontSize="14px">Price</TypographyMod>
                <Box textAlign="center">
                    <TypographyMod fontSize="12px">From {price[0]} USD to {price[1]} USD</TypographyMod>

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
                        sx={{ color: "#00aa6c", ml: 1 }}
                    />
                </Box>
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label={<Typographyf14medium>Price without VAT</Typographyf14medium>} />
                    <FormControlLabel control={<Checkbox />} label={<Typographyf14light>Price with VAT</Typographyf14light>} />
                </FormGroup>
                <Grid container direction={'column'}>
                    <Grid container>
                        <Grid item xs={4} display="flex" sx={{ marginTop: "auto", marginBottom: "auto" }}>
                            <PeopleAltSharpIcon />
                            <Box sx={{ margin: "auto" }}>
                                <Typographyf14light>Adults</Typographyf14light>
                            </Box>
                        </Grid>
                        <Grid item xs={6} display="flex" justifyContent="space-between" sx={{ border: "1px solid", borderColor: grey[600], borderRadius: "7px" }}>
                            <Button
                                onClick={(event) => adultNum >= 2 ? setAdultNum(adultNum - 1) : 0}
                                variant="outlined" size="small" sx={{
                                    minHeight: 0,
                                    minWidth: 0,
                                    color: grey[800],
                                    borderColor: grey[600],
                                    border: "none",
                                    borderRight: `0.5px solid`,
                                    bordeRadius: "0px !important",
                                    '&:hover': {
                                        border: "none",
                                        backgroundColor: grey[500],
                                        color: grey[800],
                                        borderColor: grey[600]
                                    },
                                }}><Typography sx={{ "fontSize": "18px", mt: "5px" }}><ion-icon name="remove-outline" ></ion-icon></Typography></Button>
                            <Box sx={{ margin: "auto" }}>
                                <Typographyf14light>{adultNum}</Typographyf14light>
                            </Box>
                            <Button
                                onClick={(event) => adultNum <= 6 ? setAdultNum(adultNum + 1) : 0}
                                variant="outlined" size="small" sx={{
                                    minHeight: 0,
                                    minWidth: 0,
                                    color: grey[800],
                                    borderColor: grey[600],
                                    border: "none",
                                    borderLeft: `0.5px solid`,
                                    bordeRadius: "0px !important",
                                    '&:hover': {
                                        border: "none",
                                        backgroundColor: grey[500],
                                        color: grey[800],
                                        borderColor: grey[600]
                                    },
                                }}><Typography sx={{ "fontSize": "18px", mt: "5px" }}><ion-icon name="add-outline" ></ion-icon></Typography>
                            </Button>


                        </Grid>
                    </Grid>
                    <Grid container sx={{ mt: 1 }}>
                        <Grid item xs={4} display="flex" sx={{ marginTop: "auto", marginBottom: "auto" }}>
                            <ChildCareSharpIcon sx={{ ml: "-3px", fontSize: "30px" }} />
                            <Box sx={{ margin: "auto" }}>
                                <Typographyf14light>Children</Typographyf14light>
                            </Box>
                        </Grid>
                        <Grid item xs={6} display="flex" justifyContent="space-between" sx={{ border: "1px solid", borderColor: grey[600], borderRadius: "7px" }}>
                            <Button
                                onClick={(event) => childNum >= 1 ? setChildNum(childNum - 1) : 0}
                                variant="outlined" size="small" sx={{
                                    minHeight: 0,
                                    minWidth: 0,
                                    color: grey[800],
                                    borderColor: grey[600],
                                    border: "none",
                                    borderRight: `0.5px solid`,
                                    bordeRadius: "0px !important",
                                    '&:hover': {
                                        border: "none",
                                        backgroundColor: grey[500],
                                        color: grey[800],
                                        borderColor: grey[600]
                                    },
                                }}><Typography sx={{ "fontSize": "18px", mt: "5px" }}><ion-icon name="remove-outline" ></ion-icon></Typography></Button>
                            <Box sx={{ margin: "auto" }}>
                                <Typographyf14light>{childNum}</Typographyf14light>
                            </Box>
                            <Button
                                onClick={(event) => childNum <= 2 ? setChildNum(childNum + 1) : 0}
                                variant="outlined" size="small" sx={{
                                    minHeight: 0,
                                    minWidth: 0,
                                    color: grey[800],
                                    borderColor: grey[600],
                                    border: "none",
                                    borderLeft: `0.5px solid`,
                                    bordeRadius: "0px !important",
                                    '&:hover': {
                                        border: "none",
                                        backgroundColor: grey[500],
                                        color: grey[800],
                                        borderColor: grey[600]
                                    },
                                }}><Typography sx={{ "fontSize": "18px", mt: "5px" }}><ion-icon name="add-outline" ></ion-icon></Typography></Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Divider />
            <Box sx={{ m: 1, ml: 2, mr: 2 }}>
                <TypographyMod fontSize="14px">Popular</TypographyMod>
                <Box textAlign="center">
                    <TypographyMod fontSize="12px">{stars} stars</TypographyMod>

                </Box>
                <Box
                    sx={{
                        width: 250,
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <StyledRating
                        name="customized-color"
                        defaultValue={stars}
                        onChange={(event, value) => setStars(value)}
                        precision={1}
                        icon={<CircleIcon fontSize="inherit" />}
                        emptyIcon={<CircleOutlinedIcon fontSize="inherit" />}
                        sx={{ mr: 2 }}
                    />
                    <TypographyMod fontSize="12px">{labels[stars]}</TypographyMod>
                </Box>
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label={<Typographyf14medium>Vegan</Typographyf14medium>} />
                    <FormControlLabel control={<Checkbox />} label={<Typographyf14light>Wine and Beer</Typographyf14light>} />
                    <FormControlLabel control={<Checkbox />} label={<Typographyf14light>Best Tours of the years</Typographyf14light>} />
                </FormGroup>
            </Box>
        </Box>
    );
}

export default TourFilters;
