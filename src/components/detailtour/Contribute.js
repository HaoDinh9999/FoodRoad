import React from 'react';
import Button from '@mui/material/Button';
import Box from "@mui/material/Box"
import { Typography } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
const Contribute = () => {
    return (
        <div>
            <Typography variant="h6" component="h2" sx={{ fontSize: "20px", fontWeight: 'medium' }}>
                Contribute
            </Typography>
            <Box>
                <Button sx={{ mt: 1, pl: 2, pt: "12px", pb: "12px", mb: 2, borderRadius: 6, color: "#000", backgroundColor: "#fff", border: 2 }} > Write a review</Button>
                <Button sx={{ mt: 1, pl: 2, pt: "12px", pb: "12px", mb: 2, borderRadius: 6, color: "#000", backgroundColor: "#fff", border: 2 }} > Upload Your Images </Button>
            </Box>
        </div>
    );
}

export default Contribute;
