import React, { useState } from "react";
import TourFilters from './TourFilter';
import { IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer } from "@mui/material";
import { Box } from "@mui/system";
export default function DropDownFilter() {
    const [left, setLeft] = useState(false);
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setLeft(open);
    };
    const list = () => (
        <Box
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <TourFilters />
        </Box>
    );
    return (
        <div >
            <Drawer
                anchor='left'
                open={left}
                onClose={toggleDrawer(false)}
            >
                {list()}
            </Drawer>
            <IconButton onClick={toggleDrawer(true)}><MenuIcon /></IconButton>
        </div>
    );
}
