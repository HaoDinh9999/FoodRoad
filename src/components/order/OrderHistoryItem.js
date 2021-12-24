import React from 'react';
import { Box } from '@mui/system';
import { TypographyMod } from '../tour/TypoUtils';
import { Avatar } from '@mui/material';
import { Chip } from '@mui/material';
const OrderHistoryItem = (props) => {
    const { name, status, dateStart, dateEnd, price, image } = props
    return (

        <Box display="flex" sx={{ backgroundColor: "white", borderRadius: "7px", pt: 1, pb: 2, pl: 1, pb: 1, mt: 2 }}>
            <Box sx={{ mr: 1, mt: "5px" }}>
                <Avatar variant="rounded" src={image} sx={{ width: "50px", hieght: "50px" }} />
            </Box>
            <Box sx={{ mt: 1, width: "200px" }}>
                <TypographyMod fontSize="16px">{name}</TypographyMod>
            </Box>
            <Box sx={{ mt: 1, width: "125px" }}>
                <TypographyMod fontSize="16px"> <Chip label={status} /> </TypographyMod>
            </Box>
            <Box sx={{ mt: 1, width: "230px" }}>
                <TypographyMod fontSize="16px">{dateStart} - {dateEnd}</TypographyMod>
            </Box>
            <Box sx={{ mt: 1 }}>
                <TypographyMod fontSize="16px">{price} USD</TypographyMod>
            </Box>
        </Box>
    );
}

export default OrderHistoryItem;
