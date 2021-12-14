import React from "react";
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import { Box, fontWeight, ThemeProvider } from "@mui/system";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { UilAmbulance } from "@iconscout/react-unicons";
import Button from "@mui/material/Button";
import { UilMessage } from "@iconscout/react-unicons";

const CardService = (props) => {
  return (
    <Grid
      sx={{
        "&:hover": {
          transform: "translateY(-10px)",
          transition: "transform linear 0.5s",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
        }}
      >
        {props.icon ? (
          <props.icon color="#d7d7d7" width="50px" height="50px"></props.icon>
        ) : (
          <UilAmbulance
            color="#d7d7d7"
            width="50px"
            height="50px"
          ></UilAmbulance>
        )}
        <Typography
          marginLeft="10px"
          marginTop="-2px"
          variant="h6"
          component="h2"
          style={{ color: "#fff", fontSize: "26px", fontWeight: "bold" }}
        >
          {props.title}{" "}
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: "",
          display: "flex",
          padding: "10px 0px 10px 53px",
        }}
      >
        <Typography
          marginLeft="10px"
          marginTop="-5px"
          variant="h6"
          component="h2"
          style={{
            color: "#fff",
            fontSize: "17px",
            textAlign: "left",
            fontWeight: "Medium",
            width: "80%",
          }}
        >
          {props.text}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          paddingLeft: "60px",
        }}
      >
        <Button
          sx={{
            borderRadius: "20px",
            padding: "5px 20px 5px 20px",
            backgroundColor: props.color1,
            textTransform: "none",
            "&:hover": {
              backgroundColor: props.color1,
              opacity: [0.9, 0.8, 0.7],
            },
          }}
          variant="contained"
          endIcon={<UilMessage />}
        >
          View More
        </Button>
      </Box>
    </Grid>
  );
};

export default CardService;
