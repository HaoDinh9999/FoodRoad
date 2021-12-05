import React, { useRef } from "react";
import TourFilters from './TourFilter';
import { IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { useDetectOutsideClick } from "../../hook/useDetectOutside";

export default function DropDownFilter() {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClick = () => setIsActive(!isActive);

    return (
        <div >
            <div >
                <button onClick={onClick} >
                    <IconButton><MoreVertIcon /></IconButton>
                </button>
                {isActive && (<div ref={dropdownRef}><TourFilters /> </div>)}
            </div>
        </div>
    );
}
