import React from 'react';
import { Box, Popover, PaperProps } from '@mui/system';
const CustomerPopover = (props) => {

    return (
        <div>
            <Popover
                open={props.open}
                anchorEl={props.anchorEl}
                onClose={props.handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                sx={{
                    borderRadius: "7px"
                }}
                PaperProps={{
                    style: {
                        backgroundColor: "transparent",
                        boxShadow: "none",
                        borderRadius: "7px"
                    }
                }}
            >
                <Box
                    sx={{
                        position: "relative",
                        mt: "10px",
                        "&::before": {
                            backgroundColor: grey[400],
                            content: '""',
                            display: "block",
                            position: "absolute",
                            width: 12,
                            height: 12,
                            top: -6,
                            transform: "rotate(45deg)",
                            left: "calc(50% - 6px)"
                        },
                        borderRaidus: "7px"
                    }}
                >
                    <Box sx={{ pt: 5, pl: 2, backgroundColor: grey[400], borderTopLeftRadius: "7px 7px", borderTopRightRadius: "7px 7px" }}>
                        <Box display="flex">
                            <PeopleAltSharpIcon sx={{ mr: "5px" }} />
                            <TypographyMod sx={{ fontSize: "18px" }}>Adults</TypographyMod>
                            <Box display="flex" sx={{ ml: "65px" }}>
                                <Button
                                    onClick={(event) => adultNum >= 2 ? setAdultNum(adultNum - 1) : 0}
                                    variant="outlined" size="small" sx={{
                                        padding: "1px 12px 1px 12px",
                                        minHeight: 0,
                                        minWidth: 0,
                                        color: grey[800],
                                        borderColor: grey[600],
                                        '&:hover': {
                                            backgroundColor: grey[500],
                                            color: grey[800],
                                            borderColor: grey[600]
                                        },
                                    }}><Typography sx={{ "fontSize": "18px", mt: "5px" }}><ion-icon name="remove-outline" ></ion-icon></Typography></Button>
                                <Box sx={{ borderTop: "1px solid", borderTopColor: grey[600], borderBottom: "1px solid", borderBottomColor: grey[600], pl: "20px", pr: "20px", pt: "5px" }}>
                                    <Typographyf14medium>{adultNum}</Typographyf14medium>
                                </Box>
                                <Button
                                    onClick={(event) => adultNum <= 6 ? setAdultNum(adultNum + 1) : 0}
                                    variant="outlined" size="small" sx={{
                                        padding: "1px 10px 1px 10px",
                                        minHeight: 0,
                                        minWidth: 0,
                                        color: grey[700],
                                        borderColor: grey[600],
                                        '&:hover': {
                                            backgroundColor: grey[500],
                                            color: grey[800],
                                            borderColor: grey[600]
                                        },
                                    }}><Typography sx={{ "fontSize": "18px", mt: "5px" }}><ion-icon name="add-outline" ></ion-icon></Typography></Button>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ p: 2, pb: 5, backgroundColor: grey[400] }}>
                        <Box display="flex">
                            <ChildCareSharpIcon sx={{ mr: "5px", fontSize: "30px" }} />
                            <TypographyMod fontSize={"18px"}>Child</TypographyMod>
                            <Box display="flex" sx={{ ml: "69px" }}>
                                <Button
                                    onClick={(event) => childNum >= 1 ? setChildNum(childNum - 1) : 0}
                                    variant="outlined" size="small" sx={{
                                        padding: "1px 12px 1px 12px",
                                        minHeight: 0,
                                        minWidth: 0,
                                        color: grey[800],
                                        borderColor: grey[600],
                                        '&:hover': {
                                            backgroundColor: grey[500],
                                            color: grey[800],
                                            borderColor: grey[600]
                                        },
                                    }}><Typography sx={{ "fontSize": "18px", mt: "5px" }}><ion-icon name="remove-outline" ></ion-icon></Typography></Button>
                                <Box sx={{ borderTop: "1px solid", borderTopColor: grey[600], borderBottom: "1px solid", borderBottomColor: grey[600], pl: "20px", pr: "20px", pt: "5px" }}>
                                    <Typographyf14medium>{childNum}</Typographyf14medium>
                                </Box>
                                <Button
                                    onClick={(event) => childNum <= 2 ? setChildNum(childNum + 1) : 0}
                                    variant="outlined" size="small" sx={{
                                        padding: "1px 10px 1px 10px",
                                        minHeight: 0,
                                        minWidth: 0,
                                        color: grey[700],
                                        borderColor: grey[600],
                                        '&:hover': {
                                            backgroundColor: grey[500],
                                            color: grey[800],
                                            borderColor: grey[600]
                                        },
                                    }}><Typography sx={{ "fontSize": "18px", mt: "5px" }}><ion-icon name="add-outline" ></ion-icon></Typography></Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Popover>
        </div>
    );
}

export default CustomerPopover;
