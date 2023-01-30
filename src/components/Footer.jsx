import { Box } from "@mui/system";
import React from "react";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import SendIcon from "@mui/icons-material/Send";

function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        padding: "2.2rem",
        width: "100%",
        gap: "2rem",
        backgroundColor: "black",
        color: "white",
        marginTop: "2rem",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "spaceBetween",
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: "800px",
          maxWidth: "80%",
          margin: "1rem",
          alignSelf: "center",
        }}
      >
        <Typography variant="h4" component={"p"}>
          Feel like staying in touch?
        </Typography>
        <Typography variant="body1">
          So do we. Sign up for our newsletter and we'll keep you in the loop on
          new promos and upcoming special events
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <TextField
            id="standard-basic"
            placeholder="name.surname@xoxo.com"
            variant="outlined"
            sx={{
              backgroundColor: "#fff8e1",
              width: "80%",
            }}
          />
          <SendIcon cursor="pointer" color="secondary" />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", md: "flex-end" },
          width: "100%",
          marginRight: "3rem",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "2rem",
            mt: "3rem",
          }}
        >
          <InstagramIcon sx={{ cursor: "pointer" }} />
          <FacebookIcon sx={{ cursor: "pointer" }} />
          <TwitterIcon sx={{ cursor: "pointer" }} />
        </Box>
        <Typography variant="body1" component={"p"} mt={"1.3rem"}>
          2023 © Łukasz Sodolski
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
