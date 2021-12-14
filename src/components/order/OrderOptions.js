import { Box } from '@mui/system';
import React from 'react';
import { grey } from '@mui/material/colors';
import { Typographyf14medium } from '../tour/TypoUtils';
import HistoryIcon from '@mui/icons-material/History';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
const OrderOption = () => {
    return (
        <div>
            <Box sx={{ borderRadius: "7px", mt: 5, mb: 3, padding: "0px", backgroundColor: "white" }}>
                <Box sx={{
                    padding: "15px",
                    '&:hover': {
                        backgroundColor: grey[400]
                    },
                    borderTopLeftRadius: "7px 7px",
                    borderTopRightRadius: "7px 7px",
                    borderBottom: "1px solid",
                    borderColor: grey[300]
                }} onClick={() => window.location.href = "/order/"}>
                    <Typographyf14medium> <LocalDiningIcon /> Booking</Typographyf14medium>
                </Box>

                <Box sx={{
                    padding: "15px",
                    '&:hover': {
                        backgroundColor: grey[400]
                    }
                }} onClick={() => window.location.href = "/order/history"}>
                    <Typographyf14medium> <HistoryIcon /> History</Typographyf14medium>
                </Box>
            </Box>
        </div>
    );
}

export default OrderOption;
