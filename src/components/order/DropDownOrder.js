import React, { useRef } from "react";
import { IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

import { useDetectOutsideClick } from "../../hook/useDetectOutside";
import OrderOption from "./OrderOptions";

export default function DropDownOrder() {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClick = () => setIsActive(!isActive);

    return (
        <div >
            <div style={{ marginLeft: "35px" }}>
                {isActive ? (<div ref={dropdownRef}><OrderOption /> </div>) : (
                    <IconButton onClick={onClick}><MenuIcon /></IconButton>)}
            </div>
        </div>
    );
}
