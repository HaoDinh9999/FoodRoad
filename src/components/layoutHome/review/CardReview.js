import React from "react";
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import { border, Box, fontWeight, ThemeProvider } from "@mui/system";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { UilAmbulance } from "@iconscout/react-unicons";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Link from "@mui/material/Link";

import Avatar from "@mui/material/Avatar";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import StarHalfOutlinedIcon from "@mui/icons-material/StarHalfOutlined";
const CardReview = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      padding="5px"
      sx={{
        "&:hover": {
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <Box display="flex" justifyContent="space-between">
        <Avatar
          alt="Remy Sharp"
          src="https://mui.com/static/images/avatar/1.jpg"
          sx={{
            marginLeft: "20px",
            width: "60px",
            height: "60px",
            borderColor: "#fff",
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column-reverse",
            alignItems: "flex-end",
          }}
        >
          <Typography
            variant="h6"
            component="h6"
            padding="0px 5px 0px 5px"
            fontSize="15px"
            alignItems="center"
            sx={{
              height: "40%",
              backgroundColor: "#3a3a42",
              color: "#fff",
              borderRadius: "5px",
            }}
          >
            21 april
          </Typography>
        </Box>
      </Box>
      <Grid
        container
        padding="0px 10px 15px 20px"
        sm={12}
        xs={12}
        sx={{ borderRadius: "5px" }}
        backgroundColor="#292d36"
        marginTop="-40px"
      >
        <Grid item sm={12} xs={12} height="50px" />
        <Grid item sm={12} xs={12} display="flex">
          <FormatQuoteIcon sx={{ color: "#515257" }} />
          <FormatQuoteIcon sx={{ color: "#515257", marginLeft: "-5px" }} />
          <Typography sx={{ color: "#fff", marginLeft: "5px" }}>
            Jesica Jhonson
          </Typography>
        </Grid>
        <Grid item sm={12} xs={12} height="10px"></Grid>
        <Grid item sm={12} xs={12}>
          <Typography sx={{ fontSize: "12px", color: "#b7b7b7" }}>
            My mother and I were researching places to eat in the city and were
            finding it a bit difficult to get good vegan food that’s when we
            came across this amazing tour! Our Tour guides Phat and Dylan picked
            us up from the hotel and took us to the most amazing places that
            were off the tourist track. Both were great drivers and we felt
            completely safe with them...
          </Typography>
        </Grid>
        <Grid tem sm={12} xs={12}>
          <Box>
            <StarOutlinedIcon
              sx={{ color: "#ffc107", width: "20px", height: "20px" }}
            />
            <StarOutlinedIcon
              sx={{ color: "#ffc107", width: "20px", height: "20px" }}
            />
            <StarOutlinedIcon
              sx={{ color: "#ffc107", width: "20px", height: "20px" }}
            />
            <StarOutlinedIcon
              sx={{ color: "#ffc107", width: "20px", height: "20px" }}
            />
            <StarHalfOutlinedIcon
              sx={{ color: "#ffc107", width: "20px", height: "20px" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CardReview;
