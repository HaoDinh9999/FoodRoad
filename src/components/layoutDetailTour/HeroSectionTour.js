import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import Link from "@mui/material/Link";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import Popover from "@mui/material/Popover";
import MinimizeOutlinedIcon from "@mui/icons-material/MinimizeOutlined";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HomeIcon from "@mui/icons-material/Home";

const HeroSectionTour = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      FoodRoad
    </Link>,
    <Link underline="hover" key="2" color="inherit" href="/tours">
      Tours
    </Link>,
    <Typography key="3" color="text.primary">
      TourScooter
    </Typography>,
  ];
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Box margin="">
      <Grid container sm={12} xs={12} display="flex">
        <Grid
          item
          sm={6}
          xs={12}
          display="flex"
          alignItems="center"
          marginBottom="20px"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
        </Grid>
        <Grid item sm={6} xs={12} display="flex" justifyContent="flex-end">
          <Typography
            variant="h6"
            component="h2"
            sx={{ fontSize: "small", color: "inherit" }}
          >
            Saigon Food Tour on Scooter at Night provided by Saigon Food Tour
          </Typography>
        </Grid>
        <Grid item sm={10} xs={12}>
          <Typography
            variant="h6"
            component="h2"
            style={{ fontSize: "40px", fontWeight: "bold" }}
          >
            Saigon Food Tour on Scooter at Night
          </Typography>
        </Grid>

        <Grid
          container
          item
          sm={2}
          xs={12}
          justifyContent="flex-end"
          alignItems="center"
        >
          <IconButton
            aria-label="delete"
            sx={{
              marginRight: "10px",
              color: "#000000",
              borderRadius: 8,
              border: 2,
              height: "50px",
              width: "50px",
            }}
          >
            <CloudUploadOutlinedIcon
              sx={{ color: "#00000", fontSize: "35px" }}
            />
          </IconButton>
          <IconButton
            aria-label="delete"
            sx={{
              color: "#000000",
              borderRadius: 8,
              border: 2,
              height: "50px",
              width: "50px",
            }}
          >
            <FavoriteBorderOutlinedIcon
              sx={{ color: "#00000", fontSize: "30px" }}
            />
          </IconButton>
        </Grid>
      </Grid>
      <Grid container sm={12} xs={12} marginTop="10px">
        <IconButton
          aria-label="delete"
          sx={{
            marginRight: "2px",
            backgroundColor: "#00aa6c",
            borderRadius: 8,
            height: "20px",
            width: "20px",
          }}
        ></IconButton>
        <IconButton
          aria-label="delete"
          sx={{
            marginRight: "2px",
            backgroundColor: "#00aa6c",
            borderRadius: 8,
            height: "20px",
            width: "20px",
          }}
        ></IconButton>
        <IconButton
          aria-label="delete"
          sx={{
            marginRight: "2px",
            backgroundColor: "#00aa6c",
            borderRadius: 8,
            height: "20px",
            width: "20px",
          }}
        ></IconButton>
        <IconButton
          aria-label="delete"
          sx={{
            marginRight: "2px",
            backgroundColor: "#00aa6c",
            borderRadius: 8,
            height: "20px",
            width: "20px",
          }}
        ></IconButton>
        <IconButton
          aria-label="delete"
          sx={{
            marginRight: "10px",
            backgroundColor: "#00aa6c",
            borderRadius: 8,
            height: "20px",
            width: "20px",
          }}
        ></IconButton>
        <Link href="#" color="#676767" marginRight="10px">
          {92}
        </Link>
        <Link href="#" color="#676767">
          {" By SaiGon  FoodRoad"}
        </Link>
      </Grid>
      <Grid container sm={12} xs={12} marginTop="30px">
        <Grid item sm={4} xs={12}>
          <Box
            padding="30px 10px 20px 10px"
            sx={{
              borderRadius: 2,
              boxShadow: 3,
              "&:hover": {
                transform: "translateY(-10px)",
              },
            }}
          >
            <TextField
              id="datetime-local"
              type="datetime-local"
              defaultValue="2021-11-08T10:30"
              variant="outlined"
              sx={{
                width: "270px",
                // border: 2,
                ".MuiOutlinedInput-root": {
                  borderRadius: 10,
                },

                borderColor: "#c5c5c5",
              }}
              InputLabelProps={{
                shrink: true,
              }}
            />

            <IconButton
              aria-describedby={id}
              variant="contained"
              onClick={handleClick}
              aria-label="delete"
              sx={{
                justifyContent: "space-around",
                marginLeft: "10px",
                color: "#000000",
                borderRadius: 10,
                border: 2,
                borderColor: "#c5c5c5",
                height: "60px",
                width: "23%",
              }}
            >
              <PeopleOutlineIcon sx={{ color: "#00000", fontSize: "25px" }} />
              <Typography
                variant="h6"
                component="h2"
                style={{ fontSize: "18px", fontWeight: "bold" }}
              >
                2
              </Typography>
            </IconButton>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              style={{ top: "12px", border: 10 }}
              sx={{ borderRadius: 15, border: 1 }}
            >
              <Grid
                container
                sm={12}
                xs={12}
                padding="30px 40px "
                width="450px"
              >
                <Grid item sm={8}>
                  <Typography
                    variant="h6"
                    component="h2"
                    style={{ fontSize: "18px", fontWeight: "bold" }}
                  >
                    Adults
                  </Typography>
                  <Typography
                    variant="h6"
                    component="h2"
                    sx={{ fontSize: "13px", fontWeight: "light" }}
                  >
                    Age 13 - 60
                  </Typography>
                  <Box height="10px" />
                  <Typography
                    variant="h6"
                    component="h2"
                    style={{ fontSize: "18px", fontWeight: "bold" }}
                  >
                    Youths
                  </Typography>
                  <Typography
                    variant="h6"
                    component="h2"
                    sx={{ fontSize: "13px", fontWeight: "light" }}
                  >
                    Age 7 - 12
                  </Typography>
                  <Box height="10px" />
                  <Typography
                    variant="h6"
                    component="h2"
                    style={{ fontSize: "18px", fontWeight: "bold" }}
                  >
                    Children
                  </Typography>
                  <Typography
                    variant="h6"
                    component="h2"
                    sx={{ fontSize: "13px", fontWeight: "light" }}
                  >
                    Age 5 - 6
                  </Typography>
                </Grid>
                <Grid item sm={4}>
                  <Box display="flex" justifyContent="flex-end">
                    <IconButton
                      aria-label="delete"
                      sx={{
                        marginRight: "10px",
                        color: "#fff",
                        backgroundColor: "#000",
                        fontSize: "17px",
                        borderRadius: 8,
                        border: 2,
                        height: "40px",
                        width: "40px",
                      }}
                    >
                      <MinimizeOutlinedIcon
                        sx={{
                          marginTop: "-16px",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      ></MinimizeOutlinedIcon>
                    </IconButton>
                    <Typography
                      variant="h6"
                      component="h2"
                      style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        marginRight: "10px",
                        marginTop: "5px",
                      }}
                    >
                      2
                    </Typography>
                    <IconButton
                      aria-label="delete"
                      sx={{
                        color: "#fff",
                        backgroundColor: "#000",
                        fontSize: "17px",
                        borderRadius: 8,
                        border: 2,
                        height: "40px",
                        width: "40px",
                      }}
                    >
                      <AddSharpIcon />
                    </IconButton>
                  </Box>
                  <Box height="20px" />
                  <Box display="flex" justifyContent="flex-end">
                    <IconButton
                      aria-label="delete"
                      sx={{
                        marginRight: "10px",
                        color: "#fff",
                        backgroundColor: "#000",
                        fontSize: "17px",
                        borderRadius: 8,
                        border: 2,
                        height: "40px",
                        width: "40px",
                      }}
                    >
                      <MinimizeOutlinedIcon
                        sx={{
                          marginTop: "-16px",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      ></MinimizeOutlinedIcon>
                    </IconButton>
                    <Typography
                      variant="h6"
                      component="h2"
                      style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        marginRight: "10px",
                        marginTop: "5px",
                      }}
                    >
                      0
                    </Typography>
                    <IconButton
                      aria-label="delete"
                      sx={{
                        color: "#fff",
                        backgroundColor: "#000",
                        fontSize: "17px",
                        borderRadius: 8,
                        border: 2,
                        height: "40px",
                        width: "40px",
                      }}
                    >
                      <AddSharpIcon />
                    </IconButton>
                  </Box>
                  <Box height="20px" />
                  <Box display="flex" justifyContent="flex-end">
                    <IconButton
                      aria-label="delete"
                      sx={{
                        marginRight: "10px",
                        color: "#fff",
                        backgroundColor: "#000",
                        fontSize: "17px",
                        borderRadius: 8,
                        border: 2,
                        height: "40px",
                        width: "40px",
                      }}
                    >
                      <MinimizeOutlinedIcon
                        sx={{
                          marginTop: "-16px",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      ></MinimizeOutlinedIcon>
                    </IconButton>
                    <Typography
                      variant="h6"
                      component="h2"
                      style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        marginRight: "10px",
                        marginTop: "5px",
                      }}
                    >
                      0
                    </Typography>
                    <IconButton
                      aria-label="delete"
                      sx={{
                        color: "#fff",
                        backgroundColor: "#000",
                        fontSize: "17px",
                        borderRadius: 8,
                        border: 2,
                        height: "40px",
                        width: "40px",
                      }}
                    >
                      <AddSharpIcon />
                    </IconButton>
                  </Box>
                </Grid>
                <Grid
                  item
                  sm={12}
                  xs={12}
                  justifyContent="flex-end"
                  display="flex"
                >
                  <Button
                    sx={{
                      color: "#000",
                      backgroundColor: "#f2b203",
                      borderRadius: 10,
                      padding: "10px 20px",
                      marginTop: "30px",
                    }}
                  >
                    Check availability
                  </Button>
                </Grid>
              </Grid>
            </Popover>
            <Grid container display="flex" marginTop="20px" sm={12} xs={12}>
              <Grid item sm={6} xs={6}>
                <Typography
                  variant="h6"
                  component="h2"
                  style={{ fontSize: "18px", fontWeight: "bold" }}
                >
                  Book in advance
                </Typography>
              </Grid>
              <Grid
                container
                item
                sm={6}
                display="flex"
                xs={6}
                justifyContent="flex-end"
              >
                <Typography
                  variant="h6"
                  component="h2"
                  sx={{
                    fontSize: "18px",
                    fontWeight: "regular",
                    marginRight: "5px",
                  }}
                >
                  from
                </Typography>
                <Typography
                  variant="h6"
                  component="h2"
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    marginRight: "2px",
                  }}
                >
                  $50.26
                </Typography>
                <Typography
                  variant="h6"
                  component="h2"
                  sx={{
                    fontSize: "18px",
                    fontWeight: "regular",
                    marginRight: "0",
                  }}
                >
                  {" "}
                  per adult
                </Typography>
              </Grid>
            </Grid>
            <Button
              sx={{
                color: "#000",
                backgroundColor: "#f2b203",
                borderRadius: 10,
                width: "100%",
                height: "50px",
                marginTop: "20px",
              }}
            >
              Check availability
            </Button>
            <Typography
              variant="h6"
              component="h2"
              sx={{ fontSize: "16px", fontWeight: "light", marginTop: "15px" }}
            >
              Free Cancellation up to 24 hours in advance
            </Typography>
            <Typography
              variant="h6"
              component="h2"
              sx={{ fontSize: "16px", fontWeight: "light", marginTop: "10px" }}
            >
              {" "}
              Reserve now & pay later: Save your spot free of charge with
              flexible booking.
              <Link href="#" color="#000" marginLeft="5px">
                Learn more
              </Link>
            </Typography>
          </Box>
        </Grid>
        <Grid sm={0.2}></Grid>
        <Grid
          container
          item
          sm={7.8}
          xs={12}
          sx={{
            height: 500,
            borderRadius: 2,
            boxShadow: 3,
            backgroundImage: `url(${"/images/Food3.jpg"})`,
            backgroundSize: " cover",
            backgroundColor: "#f99",
            backgroundPosition: "center",

            "&:hover": {
              backgroundColor: "#ff6868",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        ></Grid>
      </Grid>
    </Box>
  );
};
export default HeroSectionTour;
