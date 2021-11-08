import React from "react";
import { styled } from "@mui/material/styles";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import { Grid } from "@mui/material";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { height, padding, width } from "@mui/system";
import Container from "@mui/material/Container";
import CardTourItem from "../layoutHome/cardtour/CardTourItem";
const FAQRight = () => {
  return (
    <>
      <Grid container sm={12}>
        <Stack
          spacing={1}
          padding="0px 40px"
          sx={{
            width: "360px",
            height: "380px",
            boxShadow: 3,
            borderRadius: 2,
            backgroundColor: "#fc8129",
          }}
        >
          <Typography
            marginTop="18px"
            display="flex"
            justifyContent="center"
            fontWeight="bold"
            sx={{
              fontFamily: "Monospace",
              fontStyle: "italic",
              fontSize: "20px",
            }}
          >
            Not found your question?
          </Typography>
          <Typography
            display="flex"
            justifyContent="center"
            fontWeight="regular"
            color="#fff"
          >
            Fill in form
          </Typography>
          <TextField
            sx={{
              boxShadow: 3,
              borderRadius: 2,
              backgroundColor: "#fff",
            }}
            margin="normal"
            id="subject"
            label="Name"
            type="text"
            variant="outlined"
          />
          <TextField
            sx={{
              boxShadow: 3,
              borderRadius: 2,
              backgroundColor: "#fff",
            }}
            margin="normal"
            id="point"
            label="Email"
            type="text"
            variant="outlined"
          />
          <TextField
            sx={{
              boxShadow: 3,
              borderRadius: 2,
              backgroundColor: "#fff",
            }}
            margin="normal"
            id="point"
            label=""
            type="text"
            variant="outlined"
            multiline
            rows={3}
          />
          <Button variant="contained" color="error">
            Send question
          </Button>
        </Stack>
        <Grid container sm={12} marginTop="10px">
          <CardTourItem url="/images/Food1.jpg"></CardTourItem>
          <CardTourItem url="/images/Food2.jpg"></CardTourItem>
          <CardTourItem url="/images/Food3.jpg"></CardTourItem>
        </Grid>
      </Grid>
    </>
  );
};

export default FAQRight;
