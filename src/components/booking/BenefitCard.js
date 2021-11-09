import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import classes from "./BenefitCard.module.css";
const BenefitCard = (props) => {
  return (
    <Box sx={{ display: "flex" }}>
      <i className={props.icon + " " + classes["benefit-icon"]}></i>
      <Stack>
        <Typography className={classes["benefit-title"]}>
          {props.title}
        </Typography>
        <Typography className={classes["benefit-content"]}>
          {props.content}
        </Typography>
      </Stack>
    </Box>
  );
};

export default BenefitCard;
