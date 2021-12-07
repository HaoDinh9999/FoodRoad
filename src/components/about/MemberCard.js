import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import {
  FacebookOutlined,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";

const MemberCard = (props) => {
  return (
    <Paper
      sx={{
        borderRadius: "16px",
        padding: "8px",
        marginRight: "12px",
        marginLeft: "12px",
        boxShadow:
          "rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px",
      }}
    >
      <Typography
        textAlign="center"
        m="16px 0px 4px"
        variant="subtitle1"
        fontWeight={600}
      >
        {props.name}
      </Typography>
      <Typography
        textAlign="center"
        mb="16px"
        color="text.secondary"
        variant="body2"
        fontWeight={500}
      >
        {props.role}
      </Typography>
      <Box
        sx={{ width: "100%", "& img": { width: "100%", borderRadius: "12px" } }}
      >
        <img alt="Avatar" src={props.img} />
      </Box>
      <Stack m="16px 0 8px" direction="row" justifyContent="center">
        <IconButton>
          {" "}
          <FacebookOutlined />{" "}
        </IconButton>
        <IconButton>
          <Instagram />{" "}
        </IconButton>
        <IconButton>
          <LinkedIn />
        </IconButton>
        <IconButton>
          <Twitter />
        </IconButton>
      </Stack>
    </Paper>
  );
};

export default MemberCard;
