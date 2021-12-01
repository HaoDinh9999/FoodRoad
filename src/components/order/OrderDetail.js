import React from 'react';
import { Grid, Box, Typography, Button, Chip, Rating, Link, TextField, Input } from '@mui/material';
import { Typographyf14light, Typographyf14medium, TypographyMod } from '../tour/TypoUtils';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import { red, green, yellow, grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';


const styles = {
    media: {
        height: 0,
        paddingTop: '56.25%' // 16:9
    },
    image: {
        // position: 'relative',
        objectFit: "cover",
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
// const PayWithPayPall = () => {
//     return (
//         <Box>
//             <img src="../images/Order/paypallqr.jpg" />
//         </Box>
//     )
// }



// function PayWithPayPall(props) {
//     const { onClose, selectedValue, open } = props;

//     const handleClose = () => {
//         onClose(selectedValue);
//     };

//     const handleListItemClick = (value) => {
//         onClose(value);
//     };

//     return (
//         <Dialog onClose={handleClose} open={open}>
//             <DialogTitle>Set backup account</DialogTitle>
//             <Box>
//                 <img src="../images/Order/paypallqr.jpg" />
//             </Box>
//         </Dialog>
//     );
// }
const OrderDetail = () => {
    const tags = ["Vegan", "Wine&Beer", "Traditional", "On Sales", "Best tours"]
    const [payWithCash, setPayWithCash] = React.useState(false);
    // const [open, setOpen] = React.useState(false);
    const Tag = (props) => {
        return (
            // <Box sx={{ backgroundColor: "green" }} style={styles.overlay}>
            <Typography variant="h6" component="h2" sx={{ fontSize: "12px", fontWeight: 'medium', color: "white" }}>{props.children}</Typography>
            // </Box>
        )
    }
    return (
        <>
            <TypographyMod fontSize="18px">Order Detail</TypographyMod>
            <Box display="flex" sx={{ backgroundColor: "white", borderRadius: "7px", width: "100%", borderRadius: "7px", mb: 2 }}>
                <Grid container sx={{}}>
                    <Grid item xs={4} sx={{ maxWidth: "100%" }}>
                        <Box sx={{ position: "relative" }}>
                            <img src="../images/cards/card-image1.jpg" style={styles.image} loading="lazy" style={{ height: "230px", width: "258px", borderRadius: "7px" }} />
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
                                </Box>
                            </Grid>
                            <Grid item>
                                <Box sx={{ mt: 1, ml: 5 }}>
                                    <Box display="flex">
                                        <CheckBoxIcon sx={{ mr: 1 }} />
                                        <Typographyf14medium>Free cancellation</Typographyf14medium>
                                    </Box>
                                    <Box display="flex">
                                        <CheckBoxIcon sx={{ mr: 1 }} />
                                        <Typographyf14medium>Properties with special offers</Typographyf14medium>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Grid container justifyContent="space-between">
                <Grid item xs={5}>
                    <Box sx={{ borderRadius: "7px", backgroundColor: "white", maxWidth: "100%", p: 1 }}>
                        {/* Address */}
                        <TypographyMod fontSize="16px">Address</TypographyMod>
                        {/* <Input /> */}
                        <TextField
                            multiline
                            rows={4}
                            variant="outlined"
                            fullWidth
                            sx={{ mt: 1 }}
                        />
                    </Box>
                    <Box sx={{ borderRadius: "7px", backgroundColor: "white", maxWidth: "100%", p: 1, mt: 3, mb: 2 }}>
                        {/* Address */}
                        <TypographyMod fontSize="16px">Your note</TypographyMod>
                        {/* <Input /> */}
                        <TextField
                            multiline
                            rows={4}
                            variant="outlined"
                            fullWidth
                            sx={{ mt: 1 }}
                        />
                    </Box>
                </Grid>
                <Grid item xs={5}>
                    <Box sx={{ borderRadius: "7px", backgroundColor: "white", maxWidth: "100%", p: 1 }}>
                        {/* Address */}
                        <Box>
                            <TypographyMod >Total Price</TypographyMod>
                        </Box>
                        {/* <Input /> */}
                        <Box>
                            <Box display="flex" justifyContent="space-between">
                                <Box>
                                    <TypographyMod fontSize="16px" fontWeight="light">Price</TypographyMod>
                                </Box>
                                <Box>
                                    60 USD
                                </Box>
                            </Box>
                            <Box display="flex" justifyContent="space-between">
                                <Box>
                                    <TypographyMod fontSize="16px" fontWeight="light">Discount</TypographyMod>
                                </Box>
                                <Box>
                                    - 0 USD
                                </Box>
                            </Box>
                            <Box sx={{ borderTop: "1px solid black" }} display="flex" justifyContent="space-between">
                                <Box>
                                </Box>
                                <Box>

                                    <TypographyMod>60 USD</TypographyMod>
                                </Box>
                            </Box>
                            {/* <TypographyMod >Pay method</TypographyMod>
                            <Box display="flex" justifyContent="space-between">
                                <RadioGroup
                                    aria-label="pay method"
                                    name="controlled-radio-buttons-group"
                                    value={payWithCash}
                                    onChange={(event) => setPayWithCash(event.target.value)}
                                >
                                    <FormControlLabel value={true} control={<Radio />} label={<TypographyMod fontWeight="light" fontSize="16px">Pay with cash</TypographyMod>} />
                                    <FormControlLabel value={false} control={<Radio />} label={<TypographyMod fontWeight="light" fontSize="16px">Pay online </TypographyMod>} />
                                </RadioGroup>

                            </Box> */}
                            <Box display="flex" justifyContent="space-between" sx={{ pl: 2 }}>
                                <Box>
                                </Box>
                                <Box>
                                    <Button variant="contained" sx={{
                                        backgroundColor: yellow[800],
                                        '&:hover': {
                                            backgroundColor: yellow[900],
                                        }, mt: "15px",
                                    }}  >
                                        Order
                                    </Button>
                                </Box>
                            </Box>
                            {/* <PayWithPayPall
                                selectedValue='2'
                                open={open}
                                onClose={() => setOpen(false)}
                            /> */}
                        </Box>
                    </Box>
                </Grid>

            </Grid>
        </>
    );
}

export default OrderDetail;
