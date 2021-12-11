import React, { useRef, useState } from "react";
import TourFilters from './TourFilter';
import { IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useDetectOutsideClick } from "../../hook/useDetectOutside";
import { Popover, Drawer } from "@mui/material";
import { Box } from "@mui/system";
export default function DropDownFilter() {
    const dropdownRef = useRef(null);
    // const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    // const onClick = () => setIsActive(!isActive);
    const [anchorEl, setAnchorEl] = useState(null);
    const [left, setLeft] = useState(false);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setLeft(open);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const list = () => (
        <Box
            // sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <TourFilters />
        </Box>
    );
    return (
        <div >
            {/* <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <TourFilters />
            </Popover> */}
            <Drawer
                anchor='left'
                open={left}
                onClose={toggleDrawer(false)}
            >
                {list()}
            </Drawer>
            <IconButton onClick={toggleDrawer(true)}><MenuIcon /></IconButton>
            {/* {!isActive ? (<div ref={dropdownRef}><TourFilters /> </div>) : null} */}
        </div>
    );
}
