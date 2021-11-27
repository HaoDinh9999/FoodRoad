import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const CustomRad = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(null);
  return (
    <Stack direction="row" spacing={1}>
      <Button
        variant="contained"
        onClick={() => {
          setSelectedIndex(0);
        }}
        sx={
          selectedIndex !== 0
            ? {
                backgroundColor: "#fff",
                color: "#333",
                "&:hover": {
                  backgroundColor: "#1976d2",
                  color: "#fff",
                },
              }
            : {}
        }
      >
        Yes
      </Button>
      <Button
        onClick={() => {
          setSelectedIndex(1);
        }}
        variant="contained"
        sx={
          selectedIndex !== 1
            ? {
                backgroundColor: "#fff",
                color: "#333",
                "&:hover": {
                  backgroundColor: "#1976d2",
                  color: "#fff",
                },
              }
            : {}
        }
      >
        No
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          setSelectedIndex(2);
        }}
        sx={
          selectedIndex !== 2
            ? {
                backgroundColor: "#fff",
                color: "#333",
                "&:hover": {
                  backgroundColor: "#1976d2",
                  color: "#fff",
                },
              }
            : {}
        }
      >
        Not Sure
      </Button>
    </Stack>
  );
};

export default CustomRad;
