import React from 'react';
import { Grid, Box, Typography, Button, Rating, Link } from '@mui/material';
import { Typographyf14light, TypographyMod } from './TypoUtils';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import { red, green, yellow, grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CallMadeIcon from '@mui/icons-material/CallMade';
import { CircularProgress } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import Fade from '@mui/material/Fade';
import useMediaQuery from "@mui/material/useMediaQuery"
import { useTheme } from "@mui/material/styles"
const styles = {
    media: {
        height: 0,
        paddingTop: '56.25%' // 16:9
    },
    overlay: {
        position: 'absolute',
        top: '-1px',
        left: '2px',
        color: 'black',
        // zIndex: "10",
        display: "inline-block",
        borderRadius: "4px",
        padding: "3px"
    },
    temp: {
        display: "inline-block",
        borderRadius: "4px",
        padding: "3px"
    }
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
const Tag = (props) => {
    return (
        <Typography variant="h6" component="h2" sx={{ fontSize: "12px", fontWeight: 'medium', color: "white" }}>{props.children}</Typography>
    )
}
const Tour = (props) => {
    const timerRef = React.useRef();
    const [query, setQuery] = React.useState('idle');
    const theme = useTheme();
    const matchesSm = useMediaQuery(theme.breakpoints.up('xs'));
    const { image, name, properties, reviewNum, tags, salePrice, price, rating } = props
    const handleClickQuery = () => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        if (query !== 'idle') {
            setQuery('idle');
            return;
        }

        setQuery('progress');
        timerRef.current = window.setTimeout(() => {
            setQuery('success');
        }, 2000);
    };
    return (
        <Grid container sx={{ backgroundColor: "white", borderRadius: "7px" }}>
            <Grid item xs={12} md={3} lg={4} sx={{ position: "relative" }}>
                <img src={image} alt="tour"
                    style={{
                        width: "100%",
                        height: "100%",
                        borderTopLeftRadius: "7px",
                        borderBottomLeftRadius: "7px",
                        borderBottomRightRadius: `${matchesSm ? "7px" : "0px"}`,
                        borderTopRightRadius: `${matchesSm ? "7px" : "0px"}`,
                    }}
                    loading="lazy" />
                {tags.slice(0, 2).map((item, index) => {
                    var space = "";

                    switch (index) {
                        case 0:
                            space = "7px";
                            break;
                        case 1:
                            space = "40px";
                            break;
                        case 2:
                            space = "70px";
                            break;
                        default:
                            break
                    }
                    var color = null;
                    switch (item) {
                        case "Vegan":
                            color = green[500];
                            break
                        case "Best Tours":
                            color = yellow[800];
                            break
                        case "Wine&Beer":
                            color = red[500];
                            break
                        default:
                            break
                    }
                    return (
                        <Box key={index} backgroundColor={color} style={styles.overlay} marginTop={space}>
                            <Tag>{item}</Tag>
                        </Box>
                    )
                })}
            </Grid>
            <Grid xs={12} md={8} lg={7} sx={{ ml: 1 }}>
                <Grid container>
                    <Grid item xs={12} md={12} lg={12}>
                        <Box sx={{ ml: 3, mb: 0 }}>
                            <TypographyMod fontSize="20px">{name}</TypographyMod>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12} >
                        <Box sx={{ ml: 3 }} display="flex"  >
                            <StyledRating
                                name="customized-color"
                                defaultValue={5}
                                value={rating}
                                icon={<CircleIcon fontSize="inherit" />}
                                emptyIcon={<CircleOutlinedIcon fontSize="inherit" />}
                                readOnly
                                sx={{ mt: 1 }}
                            />
                            {/* <Box display="inline-block"> */}
                            <Link href="#" underline="always" sx={{ color: grey[700], ml: 1, mt: "auto", '&:hover': { color: grey[800] } }}>
                                {reviewNum} reviews <CallMadeIcon sx={{ fontSize: "16px" }} />
                            </Link>
                            {/* </Box> */}
                        </Box>
                    </Grid>
                    <Grid container sx={{ ml: 3, mb: 1 }} style={{
                        '@media(minWidth: 1108px)': {
                            marginLeft: "0px"
                        }
                    }}>
                        <Grid item xs={3} md={3} lg={3}>
                            <Box sx={{ marginTop: "5px" }}>
                                {/* Rating */}

                                <Typography variant="h6" component="h2" sx={{ fontSize: "1rem", fontWeight: "medium", color: red[500], textDecoration: "line-through" }}> {salePrice} USD  </Typography>
                                <TypographyMod sx={{ fontSize: "1.2rem" }}>{price} USD</TypographyMod>
                            </Box>
                        </Grid>
                        <Grid item xs={7} md={8} lg={8}>

                            <Box sx={{ mt: 1, ml: 5 }}>
                                {
                                    properties.map((property, index) => {
                                        return (<Box display="flex" key={index}>
                                            <CheckBoxIcon sx={{ mr: 1 }} />
                                            <Typographyf14light>{property}</Typographyf14light>
                                        </Box>)
                                    })
                                }
                            </Box>
                        </Grid>
                        <Grid item xs={8} md={8} lg={8} sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Grid container>
                                <Grid item xs={5.5} md={6} lg={6}>
                                    <Button variant="contained" sx={{
                                        backgroundColor: yellow[800],
                                        '&:hover': {
                                            backgroundColor: yellow[900],
                                        }, mt: "9px"
                                    }} onClick={handleClickQuery} >
                                        {query === 'success' ? (
                                            <CheckIcon />
                                        ) : (
                                            <Fade
                                                in={query === 'progress'}
                                                style={{
                                                    transitionDelay: query === 'progress' ? '800ms' : '0ms',
                                                }}
                                                unmountOnExit
                                            >

                                                <CircularProgress thickness={5.0} color="inherit" size={20} sx={{ mr: "3px" }} />

                                            </Fade>
                                        )}
                                        Order Now
                                    </Button>

                                </Grid>
                                <Grid item xs={6} md={6} lg={6}>
                                    <Button onClick={() => window.location.href = "/tours/detail"} variant="contained" sx={{
                                        backgroundColor: yellow[800],
                                        '&:hover': {
                                            backgroundColor: yellow[900],
                                            textDecoration: "underline"
                                        }, mt: "9px"
                                    }} >
                                        View Detail <CallMadeIcon sx={{ fontSize: "16px" }} />
                                    </Button>
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Tour;
