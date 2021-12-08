
import React from 'react';
import { TypographyMod } from '../tour/TypoUtils';
import { Box } from '@mui/system';
import OrderItem from './OrderItem';
import { Pagination } from '@mui/material';

const OrderList = () => {
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
                    <OrderItem label="processed" />
                    <OrderItem label="cancelled" />
                    <OrderItem label="processing" />
                    <OrderItem label="processed" />
                    <OrderItem label="processing" />
                    <OrderItem label="cancelled" />
                </Box>
                <Box display="flex" sx={{ justifyContent: "center", mb: 1 }}>
                    <Pagination count={3} />
                </Box>
            </Box>
        </>
    );
}

export default OrderList;
