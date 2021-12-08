import React from 'react';
import { Grid, Box, Typography, Button, Rating, Link } from '@mui/material';
import { Typographyf14medium, TypographyMod } from './TypoUtils';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import { red, green, yellow, grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CallMadeIcon from '@mui/icons-material/CallMade';
import { CircularProgress } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import Fade from '@mui/material/Fade';
const styles = {
    media: {
        height: 0,
        paddingTop: '56.25%' // 16:9
    },
    image: {
        // position: 'relative',
        objectFit: "cover"
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
const CircularProgressWithLabel = (props) => {
    return (
        <Box sx={{ position: 'relative', display: 'inline-flex', mr: "3px", maxWidth: "20px" }}>
            <CircularProgress variant="determinate" {...props} />
        </Box>
    );
}
const Tour = () => {
    const tags = ["Vegan", "Wine&Beer", "Traditional", "On Sales", "Best tours"]
    const Tag = (props) => {
        return (
            // <Box sx={{ backgroundColor: "green" }} style={styles.overlay}>
            <Typography variant="h6" component="h2" sx={{ fontSize: "12px", fontWeight: 'medium', color: "white" }}>{props.children}</Typography>
            // </Box>
        )
    }
    const [progress, setProgress] = React.useState(10);
    const [show, setShow] = React.useState(false);
    const timerRef = React.useRef();
    const [query, setQuery] = React.useState('idle');
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
            <Grid item xs={4} sx={{ maxWidth: "100%" }}>
                <Box sx={{ position: "relative" }}>
                    <img src="./images/cards/card-image1.jpg" style={styles.image} loading="lazy" style={{ height: "230px", width: "258px", borderTopLeftRadius: "7px" }} />
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
                            case "Traditional":
                                color = yellow[800];
                                break
                            case "Wine&Beer":
                                color = red[500];
                                break
                            case "On Sales":
                                color = red[500];
                                break
                            case "Best Tours":
                                color = red[500];
                                break
                        }
                        return (
                            <Box key={index} backgroundColor={color} style={styles.overlay} marginTop={space}>
                                <Tag>{item}</Tag>
                            </Box>
                        )
                    })}
                </Box>
            </Grid>
            <Grid item xs={7} sx={{ ml: 1 }}>
                <Box>
                    <Box sx={{ ml: 3, mb: 1 }}>
                        <TypographyMod fontSize="22px">Lotte Hotel Saigon</TypographyMod>
                    </Box>
                </Box>
                <Grid container sx={{ ml: 3, mb: 1 }}>
                    <Grid item>
                        <Box>
                            {/* Rating */}
                            <StyledRating
                                name="customized-color"
                                defaultValue={4}
                                precision={0.5}
                                icon={<CircleIcon fontSize="inherit" />}
                                emptyIcon={<CircleOutlinedIcon fontSize="inherit" />}
                                readOnly
                            />

                            <Typography></Typography>
                            <Typography variant="h6" component="h2" sx={{ fontSize: "20px", fontWeight: "medium", color: red[500], textDecoration: "line-through" }}> 89 USD  </Typography>
                            <TypographyMod>69 USD</TypographyMod>
                            <Button variant="contained" sx={{
                                backgroundColor: yellow[800],
                                '&:hover': {
                                    backgroundColor: yellow[900],
                                }, mt: "30px"
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
                                {/* {show ? (<CircularProgressWithLabel value={progress} />) : null} */}
                                {/* <CircularProgress variant="determinate" {...progress} /> */}
                                Order Now
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Link href="#" underline="always" sx={{ color: grey[700], ml: 1, '&:hover': { color: grey[800] } }}>
                            200 reviews <CallMadeIcon sx={{ fontSize: "16px" }} />
                        </Link>
                        <Box sx={{ mt: 1, ml: 5 }}>
                            <Box display="flex">
                                <CheckBoxIcon sx={{ mr: 1 }} />
                                <Typographyf14medium>Free cancellation</Typographyf14medium>
                            </Box>
                            <Box display="flex">
                                <CheckBoxIcon sx={{ mr: 1 }} />
                                <Typographyf14medium>Properties with special offers</Typographyf14medium>
                            </Box>
                            <Button onClick={() => window.location.href = "/tours/detail"} variant="contained" sx={{
                                backgroundColor: yellow[800],
                                '&:hover': {
                                    backgroundColor: yellow[900],
                                    textDecoration: "underline"
                                }, mt: "41.5px"
                            }} >
                                View Detail <CallMadeIcon sx={{ fontSize: "16px" }} />
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Tour;
