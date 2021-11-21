import React from 'react';
import { Box } from '@mui/system';
import { TypographyMod } from '../tour/TypoUtils';
import { Avatar } from '@mui/material';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Chip } from '@mui/material';
import { green, red, yellow } from '@mui/material/colors';
const LabelToBgColor = (Label) => {
    if (Label == "processed") {
        return ""
    }
    if (Label === "processing") {
        return green[100]
    }
    if (Label === "cancelled") {
        return red[100]
    }
}
const LabelToColor = (Label) => {
    if (Label == "processed") {
        return ""
    }
    if (Label === "processing") {
        return green[500]
    }
    if (Label === "cancelled") {
        return red[500]
    }
}
const OrderItem = (props) => {
    const color = LabelToColor(props.label);
    const bgColor = LabelToBgColor(props.label);
    const chipMr = props.label === "processing" ? "46px" : "50px"
    return (

        <Box display="flex" sx={{ backgroundColor: "white", borderRadius: "7px", border: "1px solid black", pt: 1, pb: 2, pl: 1, pb: 1, mt: 2 }}>
            <Box sx={{ mr: 1, mt: "5px" }}>
                <Avatar variant="rounded" src="../images/cards/card-image1.jpg" sx={{ width: "50px", hieght: "50px" }} />
            </Box>
            <Box sx={{ mt: 1, mr: "60px" }}>
                <TypographyMod fontSize="16px">Sài Gòn Food Tour</TypographyMod>
            </Box>
            <Box sx={{ mt: 1, mr: `${chipMr}` }}>
                <TypographyMod fontSize="16px"> <Chip label={props.label} sx={{ backgroundColor: bgColor, color: { color } }} /> </TypographyMod>
            </Box>
            <Box sx={{ mt: 1, mr: "50px" }}>
                <TypographyMod fontSize="16px">20/11/2020 - 22/11/2020</TypographyMod>
            </Box>
            <Box sx={{ mt: 1 }}>
                <TypographyMod fontSize="16px">69 USD</TypographyMod>
            </Box>
            <Box sx={{ mt: 0, ml: 4 }}>
                <IconButton>
                    <ArrowForwardIcon sx={{
                        fontSize: "26px",

                    }} onClick={() => window.location.href = "/order/detail"} />
                </IconButton>
            </Box>
        </Box>
    );
}

export default OrderItem;
