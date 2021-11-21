import { Box } from '@mui/system';
import React from 'react';
import { grey } from '@mui/material/colors';
import { Typographyf14medium } from '../tour/TypoUtils';
import HistoryIcon from '@mui/icons-material/History';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import { Link } from 'react-router-dom';
const OrderOption = () => {
    return (
        <div>
            <Box sx={{ borderRadius: "7px", border: "1px solid black", mt: 5, mb: 3, padding: "0px", backgroundColor: "white" }}>
                <Box sx={{
                    padding: "15px",
                    '&:hover': {
                        backgroundColor: grey[400]
                    },
                    borderTopLeftRadius: "7px 7px",
                    borderTopRightRadius: "7px 7px",
                    borderBottom: "1px solid black"
                }} onClick={() => window.location.href = "/order/"}>
                    <Typographyf14medium> <LocalDiningIcon /> Booking</Typographyf14medium>
                </Box>

                <Box sx={{
                    padding: "15px",
                    '&:hover': {
                        backgroundColor: grey[400]
                    },
                    borderBottom: "1px solid black"
                }} onClick={() => window.location.href = "/order/history"}>
                    <Typographyf14medium> <HistoryIcon /> History</Typographyf14medium>
                </Box>
            </Box>
        </div >
    );
}

export default OrderOption;
