import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Map from "../layoutDetailTour/Map";
import { grey } from "@mui/material/colors";
import { Button } from "@mui/material";
import PeopleAltSharpIcon from "@mui/icons-material/PeopleAltSharp";
import ChildCareSharpIcon from "@mui/icons-material/ChildCareSharp";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import EventIcon from "@mui/icons-material/Event";
import { Typographyf14medium, TypographyMod } from "./TypoUtils";
import { TextField } from "@mui/material";
import { LocalizationProvider, DateRangePicker } from "@mui/lab";
import DateAdapter from "@mui/lab/AdapterDateFns";
import useMediaQuery from "@mui/material/useMediaQuery";

const Tourheader = () => {
  const [date, setDate] = useState([null, null]);
  const [openDate, setOpenDate] = useState(false);
  const matches = useMediaQuery("(min-width:900px)");
  const [childNum, setChildNum] = useState(1);
  const [adultNum, setAdultNum] = useState(1);
  return (
    <Grid container pd="0">
      <Grid item lg={4} md={12} xs={12}>
        <Map
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${"AIzaSyClpHM2sDk1TbMKkjX_rd8AboU4RdolLtA"}&callback=initMap`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={
            <div
              style={{
                margin: `auto`,
                border: "2px solid #000",
                borderRadius: 10,
                height: "136px",
                width: "294px",
                marginLeft: "0px",
              }}
            />
          }
          mapElement={<div style={{ height: "100%" }} />}
        />
      </Grid>
      <Grid item xs={12} md={12} lg={8} style={{ marginLeft: "-94px" }}>
        <Box sx={{ mb: 4, mt: 3, ml: 11 }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", fontSize: "30px" }}
          >
            Check out the best Food Tours of SaiGon at night
          </Typography>
        </Box>
        <Grid container sx={{ ml: 12, pb: 1 }}>
          <Grid item xs={12} md={6} lg={7}>
            <Box>
              <LocalizationProvider dateAdapter={DateAdapter}>
                <DateRangePicker
                  displayStaticWrapperAs="desktop"
                  value={date}
                  open={openDate}
                  onOpen={() => setOpenDate(true)}
                  onClose={() => setOpenDate(false)}
                  onChange={(newValue) => {
                    setDate(newValue);
                  }}
                  sx={{
                    "& Mui-selected": {
                      backgroundColor: "green",
                      color: "green",
                    },
                  }}
                  renderInput={(startProps, endProps) => (
                    <React.Fragment>
                      <Box
                        sx={{
                          display: "block",
                          height: "42px",
                          width: "200px",
                          borderRadius: "5px",
                          padding: "0 0",
                          marginRight: "0px",
                        }}
                      >
                        <TextField
                          size="small"
                          variant="outlined"
                          {...startProps}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="start">
                                <IconButton
                                  edge="end"
                                  onClick={() => setOpenDate(true)}
                                >
                                  <EventIcon />
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Box>
                      <Box sx={{ ml: 2, mr: 2 }}> to </Box>
                      <Box
                        sx={{
                          display: "block",
                          height: "42px",
                          width: "200px",
                          borderRadius: "5px",
                          padding: "0 0",
                          marginRight: 2,
                        }}
                      >
                        <TextField
                          size="small"
                          variant="outlined"
                          {...endProps}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="start">
                                <IconButton
                                  edge="end"
                                  onClick={() => setOpenDate(true)}
                                >
                                  <EventIcon />
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Box>
                    </React.Fragment>
                  )}
                />
              </LocalizationProvider>
            </Box>
          </Grid>

          <Box
            sx={{
              backgroundColor: grey[200],
              borderRadius: "7px",
              p: 1,
              ml: "15px",
            }}
            style={{ marginTop: `${matches ? "-17px" : "50px"}` }}
          >
            <Box
              sx={{
                borderTopLeftRadius: "7px 7px",
                borderTopRightRadius: "7px 7px",
                mb: 1,
              }}
            >
              <Box display="flex">
                <PeopleAltSharpIcon sx={{ mr: "5px" }} />
                <TypographyMod sx={{ fontSize: "18px" }}>Adults</TypographyMod>
                <Box display="flex" sx={{ ml: "65px" }}>
                  <Button
                    onClick={(event) =>
                      adultNum >= 2 ? setAdultNum(adultNum - 1) : 0
                    }
                    variant="outlined"
                    size="small"
                    sx={{
                      padding: "1px 7px 1px 7px",
                      minHeight: 0,
                      minWidth: 0,
                      color: grey[800],
                      borderColor: grey[600],
                      "&:hover": {
                        backgroundColor: grey[500],
                        color: grey[800],
                        borderColor: grey[600],
                      },
                    }}
                  >
                    <Typography sx={{ fontSize: "18px", mt: "5px" }}>
                      <ion-icon name="remove-outline"></ion-icon>
                    </Typography>
                  </Button>
                  <Box
                    sx={{
                      borderTop: "1px solid",
                      borderTopColor: grey[600],
                      borderBottom: "1px solid",
                      borderBottomColor: grey[600],
                      pl: "20px",
                      pr: "20px",
                      pt: "5px",
                    }}
                  >
                    <Typographyf14medium>{adultNum}</Typographyf14medium>
                  </Box>
                  <Button
                    onClick={(event) =>
                      adultNum <= 6 ? setAdultNum(adultNum + 1) : 0
                    }
                    variant="outlined"
                    size="small"
                    sx={{
                      padding: "1px 7px 1px 7px",
                      minHeight: 0,
                      minWidth: 0,
                      color: grey[700],
                      borderColor: grey[600],
                      "&:hover": {
                        backgroundColor: grey[500],
                        color: grey[800],
                        borderColor: grey[600],
                      },
                    }}
                  >
                    <Typography sx={{ fontSize: "18px", mt: "5px" }}>
                      <ion-icon name="add-outline"></ion-icon>
                    </Typography>
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box sx={{ backgroundColor: grey[200] }}>
              <Box display="flex">
                <ChildCareSharpIcon sx={{ mr: "5px", fontSize: "30px" }} />
                <TypographyMod fontSize={"18px"}>Child</TypographyMod>
                <Box display="flex" sx={{ ml: "69px" }}>
                  <Button
                    onClick={(event) =>
                      childNum >= 1 ? setChildNum(childNum - 1) : 0
                    }
                    variant="outlined"
                    size="small"
                    sx={{
                      padding: "1px 7px 1px 7px",
                      minHeight: 0,
                      minWidth: 0,
                      color: grey[800],
                      borderColor: grey[600],
                      "&:hover": {
                        backgroundColor: grey[500],
                        color: grey[800],
                        borderColor: grey[600],
                      },
                    }}
                  >
                    <Typography sx={{ fontSize: "18px", mt: "5px" }}>
                      <ion-icon name="remove-outline"></ion-icon>
                    </Typography>
                  </Button>
                  <Box
                    sx={{
                      borderTop: "1px solid",
                      borderTopColor: grey[600],
                      borderBottom: "1px solid",
                      borderBottomColor: grey[600],
                      pl: "20px",
                      pr: "20px",
                      pt: "5px",
                    }}
                  >
                    <Typographyf14medium>{childNum}</Typographyf14medium>
                  </Box>
                  <Button
                    onClick={(event) =>
                      childNum <= 2 ? setChildNum(childNum + 1) : 0
                    }
                    variant="outlined"
                    size="small"
                    sx={{
                      padding: "1px 7px 1px 7px",
                      minHeight: 0,
                      minWidth: 0,
                      color: grey[700],
                      borderColor: grey[600],
                      "&:hover": {
                        backgroundColor: grey[500],
                        color: grey[800],
                        borderColor: grey[600],
                      },
                    }}
                  >
                    <Typography sx={{ fontSize: "18px", mt: "5px" }}>
                      <ion-icon name="add-outline"></ion-icon>
                    </Typography>
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Tourheader;
