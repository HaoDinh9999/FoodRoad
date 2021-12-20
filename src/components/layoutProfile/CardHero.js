import * as React from "react";
import { styled } from "@mui/material/styles";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import AvatarGroup from "@mui/material/AvatarGroup";
import SettingsIcon from "@mui/icons-material/Settings";
// import Tabs from "@material-ui/core/Tab";
// import TabContext from "@material-ui/lab/TabContext";
// import TabList from "@material-ui/lab/TabList";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TodayOutlinedIcon from "@mui/icons-material/TodayOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import LinkedCameraOutlinedIcon from "@mui/icons-material/LinkedCameraOutlined";
import MarkEmailUnreadOutlinedIcon from "@mui/icons-material/MarkEmailUnreadOutlined";

const CardHero = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ backgroundColor: "#f2f2f2" }} paddingBottom="10px">
      <Box
        sx={{
          width: "100%",
          height: 300,
          backgroundColor: "#e0e0e0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          sx={{ color: "#001", textTransform: "none", fontSize: "16px" }}
          startIcon={<ImageSearchIcon sx={{ width: "30px", height: "30px" }} />}
          disableRipple
        >
          Add cover photo
        </Button>
      </Box>
      <Container fixed sx={{ margin: "20px auto" }}>
        <Grid container>
          <Grid
            container
            item
            sm={12}
            md={12}
            xs={12}
            padding="10px 0px 0px 0px"
            justifyContent="space-around"
            marginTop="-60px"
            sx={{ backgroundColor: "#fff", width: "100%", borderRadius: 1 }}
          >
            <Grid item md={0.2}></Grid>
            <Grid item md={3.8} sm={12} xs={12} display="flex">
              <StyledBadge
                overlap="rectangular"
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                variant="dot"
                sx={{}}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.6435-9/119488549_2782881071949438_3993347347590920254_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=QjhO1Y2f3ggAX8jmsyl&_nc_ht=scontent.fsgn2-4.fna&oh=b8a18745494860a1ae3466df7edf2fb6&oe=61C1CF3C"
                  sx={{
                    width: "160px",
                    height: "160px",
                    marginTop: "-30px",
                    border: 6,
                    borderColor: "#fff",
                  }}
                />
              </StyledBadge>
              <Box marginLeft="10px">
                <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                  Hao Dinh
                </Typography>
                <Typography
                  sx={{
                    fontSize: "13px",
                    fontWeight: "light",
                    marginTop: "-5px",
                  }}
                >
                  @815h_o_
                </Typography>
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: "light",
                    marginTop: "25px",
                  }}
                >
                  138 followers
                </Typography>
                <AvatarGroup max={6} sx={{}}>
                  <Avatar
                    sx={{ width: "30px", height: "30px" }}
                    alt="Remy Sharp"
                    src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.6435-9/119488549_2782881071949438_3993347347590920254_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=QjhO1Y2f3ggAX8jmsyl&_nc_ht=scontent.fsgn2-4.fna&oh=b8a18745494860a1ae3466df7edf2fb6&oe=61C1CF3C"
                  />
                  <Avatar
                    sx={{ width: "30px", height: "30px" }}
                    alt="Remy Sharp"
                    src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.6435-9/119488549_2782881071949438_3993347347590920254_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=QjhO1Y2f3ggAX8jmsyl&_nc_ht=scontent.fsgn2-4.fna&oh=b8a18745494860a1ae3466df7edf2fb6&oe=61C1CF3C"
                  />
                  <Avatar
                    sx={{ width: "30px", height: "30px" }}
                    alt="Remy Sharp"
                    src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.6435-9/119488549_2782881071949438_3993347347590920254_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=QjhO1Y2f3ggAX8jmsyl&_nc_ht=scontent.fsgn2-4.fna&oh=b8a18745494860a1ae3466df7edf2fb6&oe=61C1CF3C"
                  />
                  <Avatar
                    sx={{ width: "30px", height: "30px" }}
                    alt="Remy Sharp"
                    src="https://xmedia.nguoiduatin.vn/public/data/images/ngocluong/2012t1/thang11/nguoiduatin-cham-lung.jpg"
                  />
                </AvatarGroup>
              </Box>
            </Grid>
            <Grid item md={2} sm={4}>
              <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                Reviews
              </Typography>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "regular",
                  color: "#757575",
                }}
              >
                0
              </Typography>
            </Grid>
            <Grid item md={2} sm={4}>
              <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                Tour Joined
              </Typography>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "regular",
                  color: "#757575",
                }}
              >
                0
              </Typography>
            </Grid>
            <Grid item md={2} sm={4}>
              <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                Favorite
              </Typography>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "regular",
                  color: "#757575",
                }}
              >
                0
              </Typography>
            </Grid>
            <Grid
              item
              md={2}
              sm={12}
              xs={12}
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="row"
              marginTop="20px"
            >
              <Button
                sx={{ color: "#001", textTransform: "none", fontSize: "16px" }}
                startIcon={
                  <SettingsIcon sx={{ width: "30px", height: "30px" }} />
                }
                disableRipple
              >
                Edit profile
              </Button>
            </Grid>
          </Grid>
          <Grid item sm={12} xs={12} backgroundColor="#fff">
            <Box sx={{ width: "100%", typography: "body1" }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    <Tab label="Trips" value="1" />
                    <Tab label="Photos" value="2" />
                    <Tab label="Reviews" value="3" />
                    <Tab label="Forums" value="4" />
                  </TabList>
                </Box>
              </TabContext>
            </Box>
          </Grid>
          <Grid item sm={12} xs={12} height="25px"></Grid>
          <Grid
            item
            sm={3}
            xs={12}
            backgroundColor="#fff"
            padding="20px 30px"
            sx={{ borderRadius: 1 }}
          >
            <Typography
              sx={{
                fontSize: "17px",
                fontWeight: "bold",
                marginBottom: "15px",
              }}
            >
              Intro
            </Typography>
            <Box display="flex" marginBottom="10px" marginLeft="10px">
              <LocationOnIcon
                sx={{ width: "20px", height: "20px", color: "#333333" }}
              />
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "Medium",
                  color: "#757575",
                  marginLeft: "10px",
                }}
              >
                Ho Chi Minh, VietNam
              </Typography>
            </Box>
            <Box display="flex" marginBottom="10px" marginLeft="10px">
              <TodayOutlinedIcon sx={{ width: "20px", height: "20px" }} />
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "Medium",
                  color: "#757575",
                  marginLeft: "10px",
                }}
              >
                Joined in Nov 2021
              </Typography>
            </Box>
            <Box
              display="flex"
              cursor="pointer"
              marginBottom="10px"
              alignItems="center"
              marginLeft="5px"
            >
              <Button
                sx={{ textTransform: "none" }}
                startIcon={
                  <AddOutlinedIcon
                    cursor="pointer"
                    sx={{ width: "20px", height: "20px" }}
                  />
                }
              >
                <Typography
                  cursor="pointer"
                  sx={{
                    fontSize: "14px",
                    fontWeight: "Medium",
                    color: "#757575",
                  }}
                >
                  Add your Facebook
                </Typography>
              </Button>
            </Box>
            <Box
              display="flex"
              cursor="pointer"
              marginBottom="10px"
              alignItems="center"
              marginLeft="5px"
            >
              <Button
                sx={{ textTransform: "none" }}
                startIcon={
                  <AddOutlinedIcon
                    cursor="pointer"
                    sx={{ width: "20px", height: "20px" }}
                  />
                }
              >
                <Typography
                  cursor="pointer"
                  sx={{
                    fontSize: "14px",
                    fontWeight: "Medium",
                    color: "#757575",
                  }}
                >
                  Write about yourself
                </Typography>
              </Button>
            </Box>
          </Grid>
          <Grid item sm={0.3} xs={12} height="25px"></Grid>
          <Grid
            container
            item
            sm={8.7}
            xs={12}
            sx={{ borderRadius: 1 }}
            backgroundColor="#fff"
            display="flex"
            justifyContent="center"
            alignItems="center"
            padding="0px 20px 0 20px"
          >
            <Box>
              <Typography
                align="center"
                sx={{ fontSize: "20px", fontWeight: "bold" }}
              >
                Fill Out Your Profile
              </Typography>
              <Typography
                align="center"
                sx={{
                  fontSize: "16px",
                  fontWeight: "regular",
                  color: "#757575",
                }}
              >
                Add photos and info to your profile so people can find you
                easily and get to know you better! Other travelers are ready to
                help
              </Typography>
            </Box>
          </Grid>
          <Grid item sm={12} xs={12} height="15px"></Grid>
          <Grid
            item
            sm={3}
            xs={12}
            backgroundColor="#fff"
            padding="20px 30px"
            sx={{ borderRadius: 1 }}
          >
            <Typography
              sx={{
                fontSize: "17px",
                fontWeight: "bold",
                marginBottom: "15px",
              }}
            >
              Share your travel advice
            </Typography>

            <Box
              display="flex"
              cursor="pointer"
              marginBottom="20px"
              alignItems="center"
              marginLeft="5px"
            >
              <Button
                sx={{ textTransform: "none" }}
                startIcon={
                  <LinkedCameraOutlinedIcon
                    cursor="pointer"
                    sx={{ width: "20px", height: "20px" }}
                  />
                }
              >
                <Typography
                  cursor="pointer"
                  sx={{
                    fontSize: "14px",
                    fontWeight: "Medium",
                    color: "#757575",
                  }}
                >
                  Post photos
                </Typography>
              </Button>
            </Box>
            <Box
              display="flex"
              cursor="pointer"
              marginBottom="10px"
              alignItems="center"
              marginLeft="5px"
            >
              <Button
                sx={{ textTransform: "none" }}
                startIcon={
                  <MarkEmailUnreadOutlinedIcon
                    cursor="pointer"
                    sx={{ width: "20px", height: "20px" }}
                  />
                }
              >
                <Typography
                  cursor="pointer"
                  sx={{ fontSize: "14px", fontWeight: "500", color: "#000" }}
                >
                  Write review
                </Typography>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));
export default CardHero;
