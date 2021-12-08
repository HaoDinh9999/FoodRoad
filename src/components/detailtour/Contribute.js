import React, { useRef } from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Box from "@mui/material/Box"
import { Typography } from '@mui/material';
import { TextField } from '@mui/material';
import { StyledRating } from './Review';
import Avatar from '@mui/material/Avatar';
import CircleIcon from '@mui/icons-material/Circle';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

const labels = {
    0: 'Poor',
    1: 'Terrible',
    2: 'Average',
    3: 'Good',
    4: 'Very Good',
    5: 'Excellent',
};
const Contribute = () => {
    return (
        <div>
            <Typography variant="h6" component="h2" sx={{ fontSize: "20px", fontWeight: 'medium' }}>
                Contribute
            </Typography>
            <Box>
                <Button sx={{ mt: 1, pl: 2, pt: "12px", pb: "12px", mb: 2, borderRadius: 6, color: "#000", backgroundColor: "#fff", border: 2, mr: 2 }} > Write a review</Button>
            </Box>
            <Box>
                <Button sx={{ mt: 1, pl: 2, pt: "12px", pb: "12px", mb: 2, borderRadius: 6, color: "#000", backgroundColor: "#fff", border: 2 }}  > Upload </Button>
            </Box>
        </div>
    );
}

export default Contribute;
