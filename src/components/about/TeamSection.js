import React from "react";
import SlickMemberList from "./SlickMemberList";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
const TeamSection = () => {
  return (
    <Container fixed>
      <Box sx={{ width: "100%", textAlign: "center" }}>
        <Typography
          mb={2}
          fontWeight="700"
          color="text.secondary"
          variant="overline"
        >
          DREAM TEAM
        </Typography>
      </Box>
      <Typography
        textAlign="center"
        mb={3}
        fontWeight="700"
        color="text.primary"
        variant="h3"
      >
        Great team is the key
      </Typography>
      <Typography
        textAlign="center"
        mb={10}
        mr="auto"
        ml="auto"
        color="text.secondary"
        variant="body1"
        sx={{ maxWidth: "630px" }}
      >
        Foodroad will provide you support if you have any problems, our support
        team will reply within a day and we also have detailed documentation.
      </Typography>
      <SlickMemberList />
    </Container>
  );
};

export default TeamSection;
