
import { Box } from '@mui/system';
import React, { useState, useEffect } from 'react';
import Map from '../layoutDetailTour/Map';
import IconButton from '@mui/material/IconButton';
import EventIcon from '@mui/icons-material/Event';
import {
    MenuItem,
    Select,
    FormControl,
    InputLabel,
    TextField,
    Backdrop,
    InputAdornment,
    Grid, Typography,
    CircularProgress
} from '@mui/material';
import { LocalizationProvider, DateRangePicker } from '@mui/lab';
import DateAdapter from '@mui/lab/AdapterDateFns';
import useMediaQuery from "@mui/material/useMediaQuery"
import { useTheme } from "@mui/material/styles"
import Aos from "aos";
import "aos/dist/aos.css";

const Tourheader = () => {
    const [date, setDate] = useState([null, null]);
    const [openDate, setOpenDate] = useState(false);
    const theme = useTheme();
    // const matchesSm = useMediaQuery(theme.breakpoints.up('sm'));
    // const matchesMd = useMediaQuery(theme.breakpoints.up('md'));
    const matchesLg = useMediaQuery(theme.breakpoints.up('lg'));
    // const matchesXl = useMediaQuery(theme.breakpoints.up('xl'));
    const [open, setOpen] = useState(false);
    const [sortType, setSortType] = useState('');

    const handleChange = (event) => {
        setSortType(event.target.value);
    };
    const handleToggle = () => {
        setOpen(true);
        setTimeout(function () {
            setOpen(false)
        }
            , 1500)
    };
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, [])
    return (
        <Grid container>
            <Backdrop
                sx={{ color: '#fff', zIndex: 99 }}
                open={open}
            >
                <CircularProgress />
            </Backdrop>
            <Grid item lg={4} md={12} xs={12}>
                <div data-aos="fade-up" data-aos-duration={1000}>
                    <Map
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${'AIzaSyClpHM2sDk1TbMKkjX_rd8AboU4RdolLtA'}&callback=initMap`}
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ margin: `auto`, border: '2px solid #000', borderRadius: 10, height: '136px', width: "294px", marginLeft: "0px", marginTop: "20px" }} />}
                        mapElement={<div style={{ height: '100%' }} />}
                    />
                </div>
            </Grid>
            <Grid item xs={12} md={12} lg={8} style={{ marginLeft: "-94px" }} >
                <div data-aos="fade-up" data-aos-duration={1000}>
                    <Grid item xs={12}>
                        <Box sx={{ mb: 4, mt: 3, ml: 10 }}>
                            <Typography variant="h5" sx={{ fontWeight: "medium", fontSize: "30px", margin: "auto" }}>
                                Check out the best Food Tours of SaiGon
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid container sx={{ ml: 12, pb: 1 }} style={{}} rowSpacing={{ xs: 5 }}>
                        <Grid item xs={12} sm={8} md={6} lg={7}>
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
                                        sx={{
                                            '& Mui-selected': {
                                                backgroundColor: "green",
                                                color: "green"
                                            }
                                        }}
                                        renderInput={(startProps, endProps) => (
                                            <React.Fragment>
                                                <Box sx={{ display: "block", height: "42px", width: "200px", borderRadius: "5px", padding: "0 0", marginRight: "0px" }}>
                                                    <TextField variant="outlined" {...startProps} InputProps={{
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
                                                    <TextField variant="outlined"  {...endProps} InputProps={{
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
                        </Grid>
                        <Grid item sm={4} xs={12} md={4} lg={4} >
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Sort by"
                                    value={sortType}
                                    onChange={handleChange}
                                    onClick={handleToggle}
                                // labelWidth
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={1} >Best choice</MenuItem>
                                    <MenuItem value={2} >Price from low to high</MenuItem>
                                    <MenuItem value={3} >Price from high to low</MenuItem>
                                    <MenuItem value={4} >Shortest Distance</MenuItem>
                                </Select>
                            </FormControl>

                        </Grid>



                    </Grid>
                </div>
            </Grid>
        </Grid>
    );
}

export default Tourheader;
