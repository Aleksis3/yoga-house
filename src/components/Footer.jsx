import { Box } from "@mui/system";
import React from "react";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        padding: "2.2rem",
        width: "100%",
        backgroundColor: "black",
        color: "white",
        marginTop: "2rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: "800px",
          margin: "1rem",
        }}
      >
        <Typography variant="h4">Feel like staying in touch?</Typography>
        <Typography variant="body1">
          So do we. Sign up for our newsletter and we'll keep you in the loop on
          new promos and upcoming special events
        </Typography>
        <TextField
          id="standard-basic"
          label="Standard"
          variant="standard"
          sx={{ backgroundColor: "#fff8e1", alignSelf: "auto" }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          width: "100%",
          marginRight: "3rem",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", gap: "2rem", margin: "3rem 3rem 0 0" }}>
          <Typography variant="body1">ig</Typography>
          <Typography variant="body1">fb</Typography>
          <Typography variant="body1">tt</Typography>
        </Box>
        <Typography variant="body1" component={"p"}>
          2023 Łukasz Sodolski
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
