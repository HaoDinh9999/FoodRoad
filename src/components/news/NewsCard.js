import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Divider from "@mui/material/Divider";
import React, { useState } from "react";

const NewsCard = (props) => {
  const [state, setState] = useState({
    color: "black",
    textDecoration: "none",
  });

  return (
    <a style={{ textDecoration: "none" }} href="#">
      <Card
        sx={{ display: "flex" }}
        style={{ boxShadow: "none" }}
        onMouseEnter={() =>
          setState({ color: "#1976D2", textDecoration: "underline" })
        }
        onMouseLeave={() =>
          setState({ color: "black", textDecoration: "none" })
        }
      >
        <CardMedia
          component="img"
          sx={{ width: 300 }}
          image={props.image}
          alt="image"
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent>
            <Typography
              component="div"
              variant="h5"
              fontWeight="bold"
              color={state.color}
              style={{ textDecoration: state.textDecoration }}
            >
              {props.title}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {props.subtitle}
            </Typography>
            <Box sx={{ display: "flex", marginTop: "auto" }}>
              <AccessTimeIcon
                color="disabled"
                style={{ fontSize: "21px" }}
              ></AccessTimeIcon>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                component="div"
              >
                {props.date}
              </Typography>
              <Box pl={0.5} pr={0.5}>
                <Divider orientation="vertical" />
              </Box>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                component="div"
              >
                {props.author}
              </Typography>
            </Box>
          </CardContent>
        </Box>
      </Card>
    </a>
  );
};

export default NewsCard;
