
import React from 'react';
import { TypographyMod } from '../tour/TypoUtils';
import { Box } from '@mui/system';
import OrderItem from './OrderItem';
import { Pagination } from '@mui/material';
import { IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import useMediaQuery from "@mui/material/useMediaQuery"
import HomeIcon from '@mui/icons-material/Home';

const data = [
    {
        image: "../images/cards/card-image1.jpg",
        name: "Saigon Barbecue",
        price: 69,
        dateStart: "21/12/2021",
        dateEnd: "22/12/2021",
        status: "processed"
    },
    {
        image: "../images/cards/card-image2.jpg",
        name: "In Love With Saigon",
        price: 59,
        dateStart: "21/12/2021",
        dateEnd: "22/12/2021",
        status: "cancelled"
    },
    {
        image: "../images/cards/card-image3.jpg",
        name: "Saigon Vegan",
        price: 49,
        dateStart: "21/12/2021",
        dateEnd: "22/12/2021",
        status: "processing"
    },
    {
        image: "../images/cards/card-image4.jpg",
        name: "Saigon BackStreet",
        price: 39,
        dateStart: "21/12/2021",
        dateEnd: "22/12/2021",
        status: "cancelled"
    },
    {
        image: "../images/cards/card-image5.jpg",
        name: "In Love With Saigon",
        price: 59,
        dateStart: "21/12/2021",
        dateEnd: "22/12/2021",
        status: "processed"
    },
]
const OrderList = () => {
    const matches = useMediaQuery('(min-width:1200px)')

    return (
        <>
            {matches && (<TypographyMod fontSize="18px">Orders</TypographyMod>)}

            <Box sx={{ mt: 1 }}>
                {matches && (<Box display="flex">
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
                </Box>)}

                <Box sx={{ mb: 2 }}>
                    {
                        data.map((item, index) => {
                            return <OrderItem {...item} ley={index} />
                        })
                    }
                </Box>
                <Box display="flex" sx={{ justifyContent: "center", mb: 1 }}>
                    <Pagination count={3} />
                </Box>
            </Box>
        </>
    );
}

export default OrderList;
