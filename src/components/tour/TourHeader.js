import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import Map from '../layoutDetailTour/Map';
import { grey } from '@mui/material/colors';
import { Button } from '@mui/material';
import PeopleAltSharpIcon from '@mui/icons-material/PeopleAltSharp';
import ChildCareSharpIcon from '@mui/icons-material/ChildCareSharp';
import TodayIcon from '@mui/icons-material/Today';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import EventIcon from '@mui/icons-material/Event';
import { Popover } from '@mui/material';
import { Typographyf14light, Typographyf14medium, TypographyMod } from './TypoUtils';
import { TextField } from '@mui/material';
import { LocalizationProvider, DateRangePicker } from '@mui/lab';
import DateAdapter from '@mui/lab/AdapterDateFns';
// import CustomCalendar from './CustomCalendar';
const CalendarA = () => {
    var result = []
    for (var i = 0; i <= 30; ++i) {
        console.log(i)
        result.push(<Grid item>
            <Box sx={{ border: "1px solid black", padding: 1 }} key={i}>{i}</Box>
        </Grid>)
        console.log("1")
    }
    return result;
}

const Tourheader = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [anchorElScl, setAnchorElScl] = useState(null);
    const [date, setDate] = useState([null, null]);
    const [openDate, setOpenDate] = useState(false);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClickScl = (event) => {
        setAnchorElScl(event.currentTarget);
    };
    const open = Boolean(anchorEl);
    const openScl = Boolean(anchorElScl)
    const id = open ? 'simple-popover' : undefined;
    const idScl = openScl ? "Start Calendar" : undefined;

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleCloseScl = () => {
        setAnchorElScl(null);
    };
    const [childNum, setChildNum] = useState(1);
    const [adultNum, setAdultNum] = useState(1)

    // console.log(result)
    return (
        <Grid container pd="0">
            <Grid item>
                <Map
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${'AIzaSyClpHM2sDk1TbMKkjX_rd8AboU4RdolLtA'}&callback=initMap`}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: "100%", margin: `auto`, border: '2px solid #000', borderRadius: 10, height: '136px', width: "294px" }} />}
                    mapElement={<div style={{ height: '100%', height: '100%' }} />}
                />
            </Grid>
            <Grid item xs={8} >
                <Box sx={{ mb: 4, mt: 3, ml: 11 }}>
                    <Typography variant="h5" sx={{ fontWeight: "bold", fontSize: "30px" }}>
                        Check out the best Food Tours of SaiGon at night
                    </Typography>
                </Box>
                <Grid container sx={{ ml: 12, pb: 1 }}>
                    <Box >
                        <LocalizationProvider dateAdapter={DateAdapter}>
                            <DateRangePicker
                                displayStaticWrapperAs="desktop"
                                value={date}
                                open={openDate}
                                onOpen={() => setOpenDate(true)}
                                onClose={() => setOpenDate(false)}
                                onChange={(newValue) => {
                                    setDate(newValue);
                                }}
                                renderInput={(startProps, endProps) => (
                                    <React.Fragment>
                                        <Box sx={{ display: "block", height: "42px", width: "200px", borderRadius: "5px", padding: "0 0", marginRight: "0px" }}>
                                            <TextField variant="filled" {...startProps} InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="start">
                                                        <IconButton edge="end" onClick={() => setOpenDate(true)}>
                                                            <EventIcon />
                                                        </IconButton>
                                                    </InputAdornment>
                                                ),
                                            }} />
                                        </Box>
                                        <Box sx={{ ml: 2, mr: 2 }} > to </Box>
                                        <Box sx={{ display: "block", height: "42px", width: "200px", borderRadius: "5px", padding: "0 0", marginRight: 2 }}>
                                            <TextField variant="filled"  {...endProps} InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="start">
                                                        <IconButton edge="end" onClick={() => setOpenDate(true)}>
                                                            <EventIcon />
                                                        </IconButton>
                                                    </InputAdornment>
                                                ),
                                            }} />
                                        </Box>
                                    </React.Fragment>
                                )}
                            />
                        </LocalizationProvider>
                    </Box>

                    <Box sx={{ backgroundColor: grey[200], borderRadius: "7px", p: 1, mt: -2, ml: "15px" }}>
                        <Box sx={{ backgroundColor: grey[200], borderTopLeftRadius: "7px 7px", borderTopRightRadius: "7px 7px", mb: 1 }}>
                            <Box display="flex">
                                <PeopleAltSharpIcon sx={{ mr: "5px" }} />
                                <TypographyMod sx={{ fontSize: "18px" }}>Adults</TypographyMod>
                                <Box display="flex" sx={{ ml: "65px" }}>
                                    <Button
                                        onClick={(event) => adultNum >= 2 ? setAdultNum(adultNum - 1) : 0}
                                        variant="outlined" size="small" sx={{
                                            padding: "1px 7px 1px 7px",
                                            minHeight: 0,
                                            minWidth: 0,
                                            color: grey[800],
                                            borderColor: grey[600],
                                            '&:hover': {
                                                backgroundColor: grey[500],
                                                color: grey[800],
                                                borderColor: grey[600]
                                            },
                                        }}><Typography sx={{ "fontSize": "18px", mt: "5px" }}><ion-icon name="remove-outline" ></ion-icon></Typography></Button>
                                    <Box sx={{ borderTop: "1px solid", borderTopColor: grey[600], borderBottom: "1px solid", borderBottomColor: grey[600], pl: "20px", pr: "20px", pt: "5px" }}>
                                        <Typographyf14medium>{adultNum}</Typographyf14medium>
                                    </Box>
                                    <Button
                                        onClick={(event) => adultNum <= 6 ? setAdultNum(adultNum + 1) : 0}
                                        variant="outlined" size="small" sx={{
                                            padding: "1px 7px 1px 7px",
                                            minHeight: 0,
                                            minWidth: 0,
                                            color: grey[700],
                                            borderColor: grey[600],
                                            '&:hover': {
                                                backgroundColor: grey[500],
                                                color: grey[800],
                                                borderColor: grey[600]
                                            },
                                        }}><Typography sx={{ "fontSize": "18px", mt: "5px" }}><ion-icon name="add-outline" ></ion-icon></Typography></Button>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{ backgroundColor: grey[200] }}>
                            <Box display="flex">
                                <ChildCareSharpIcon sx={{ mr: "5px", fontSize: "30px" }} />
                                <TypographyMod fontSize={"18px"}>Child</TypographyMod>
                                <Box display="flex" sx={{ ml: "69px" }}>
                                    <Button
                                        onClick={(event) => childNum >= 1 ? setChildNum(childNum - 1) : 0}
                                        variant="outlined" size="small" sx={{
                                            padding: "1px 7px 1px 7px",
                                            minHeight: 0,
                                            minWidth: 0,
                                            color: grey[800],
                                            borderColor: grey[600],
                                            '&:hover': {
                                                backgroundColor: grey[500],
                                                color: grey[800],
                                                borderColor: grey[600]
                                            },
                                        }}><Typography sx={{ "fontSize": "18px", mt: "5px" }}><ion-icon name="remove-outline" ></ion-icon></Typography></Button>
                                    <Box sx={{ borderTop: "1px solid", borderTopColor: grey[600], borderBottom: "1px solid", borderBottomColor: grey[600], pl: "20px", pr: "20px", pt: "5px" }}>
                                        <Typographyf14medium>{childNum}</Typographyf14medium>
                                    </Box>
                                    <Button
                                        onClick={(event) => childNum <= 2 ? setChildNum(childNum + 1) : 0}
                                        variant="outlined" size="small" sx={{
                                            padding: "1px 7px 1px 7px",
                                            minHeight: 0,
                                            minWidth: 0,
                                            color: grey[700],
                                            borderColor: grey[600],
                                            '&:hover': {
                                                backgroundColor: grey[500],
                                                color: grey[800],
                                                borderColor: grey[600]
                                            },
                                        }}><Typography sx={{ "fontSize": "18px", mt: "5px" }}><ion-icon name="add-outline" ></ion-icon></Typography></Button>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Tourheader;
