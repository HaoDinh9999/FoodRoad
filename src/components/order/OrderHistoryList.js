
import React from 'react';
import { TypographyMod } from '../tour/TypoUtils';
import { Box } from '@mui/system';

import { Pagination } from '@mui/material';
import OrderHistoryItem from './OrderHistoryItem';

const data = [
    {
        image: "../images/cards/card-image1.jpg",
        name: "Saigon Barbecue",
        price: 69,
        dateStart: "3/12/2021",
        dateEnd: "10/12/2021",
        status: "processed"
    },
    {
        image: "../images/cards/card-image2.jpg",
        name: "In Love With Saigon",
        price: 59,
        dateStart: "3/11/2021",
        dateEnd: "10/11/2021",
        status: "processed"
    },
    {
        image: "../images/cards/card-image3.jpg",
        name: "Saigon Vegan",
        price: 49,
        dateStart: "4/09/2021",
        dateEnd: "22/04/2021",
        status: "processed"
    }
]
const OrderHistoryList = () => {
    return (
        <>
            <TypographyMod fontSize="18px">Orders</TypographyMod>
            <Box sx={{ mt: 1 }}>
                <Box display="flex">
                    <Box sx={{ pr: "220px" }}>
                        <TypographyMod fontSize="18px">Name</TypographyMod>
                    </Box>
                    <Box sx={{ pr: "70px" }}>
                        <TypographyMod fontSize="18px">Status</TypographyMod>
                    </Box>
                    <Box sx={{ pr: "60px" }}>
                        <TypographyMod fontSize="18px">Date Start - Date End</TypographyMod>
                    </Box>
                    <Box sx={{}}>
                        <TypographyMod fontSize="18px">Price</TypographyMod>
                    </Box>
                </Box>
                <Box sx={{ mb: 2 }}>
                    {
                        data.map((item, index) => {
                            return <OrderHistoryItem {...item} key={index} />
                        })
                    }
                </Box>
                {/* <Box display="flex" sx={{ justifyContent: "center", mb: 1 }}>
                    <Pagination count={3} shape="rounded" />
                </Box> */}
            </Box>
        </>
    );
}

export default OrderHistoryList;
