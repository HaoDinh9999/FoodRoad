import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import LocationIcon from "@mui/icons-material/LocationOn";
const ContactInfo = () => {
  return (
    <Box>
      <Box mb={2}>
        <Typography
          textAlign="center"
          fontWeight={700}
          mb={1.5}
          color="#1e2022"
          variant="h4"
        >
          Contact details
        </Typography>
        <Typography textAlign="center" color="#677788" variant="body1">
          Keep track of what's happening with your data, change permissions, and
          run reports against your data anywhere in the world. Keep track of
          what's happening with your data, change permissions.
        </Typography>
      </Box>
      <Box
        sx={{
          display: {
            xs: "block",
            md: "flex",
          },
          justifyContent: "space-between",
        }}
      >
        <ListItem sx={{ width: "auto", padding: 0 }}>
          <ListItemAvatar>
            <Avatar sx={{ backgroundColor: "rgb(249, 185, 52)" }}>
              <PhoneIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Phone" secondary="+84 353-398-596" />
        </ListItem>
        <ListItem sx={{ width: "auto", padding: 0 }}>
          <ListItemAvatar>
            <Avatar sx={{ backgroundColor: "rgb(249, 185, 52)" }}>
              <MailIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Email" secondary="foodroad@gmail.com" />
        </ListItem>
        <ListItem sx={{ width: "auto", padding: 0 }}>
          <ListItemAvatar>
            <Avatar sx={{ backgroundColor: "rgb(249, 185, 52)" }}>
              <LocationIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Address"
            secondary="1 Nguyen Binh Khiem, District 1."
          />
        </ListItem>
      </Box>
    </Box>
  );
};

export default ContactInfo;
