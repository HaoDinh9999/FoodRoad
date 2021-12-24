import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";

const RecentCard = (props) => {
  const [state, setState] = useState({
    color: "black",
    textDecoration: "none",
  });

  return (
    <Box display="flex" flexDirection="row">
      <img
        src={props.image}
        alt={props.alt}
        style={{ width: "65px", height: "44px", cursor: "pointer" }}
      />
      <Box pl={1}>
        <Typography
          color={state.color}
          style={{
            textDecoration: state.textDecoration,
            fontSize: "16px",
            cursor: "pointer",
          }}
          onMouseEnter={() =>
            setState({ color: "#1976D2", textDecoration: "underline" })
          }
          onMouseLeave={() =>
            setState({ color: "black", textDecoration: "none" })
          }
        >
          {props.title}
        </Typography>
        <Typography color="#999999">{props.date}</Typography>
      </Box>
    </Box>
  );
};

export default RecentCard;
