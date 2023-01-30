import { Box, keyframes } from "@mui/system";
import React from "react";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

import background from "../images/hero.jpg";

const zoom = keyframes`
   0% { transform: scale(1.2)}
   50% {transform: scale(1.6)} 
   100% {transform: scale(1.2)} 
`;

function Hero() {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100vh",
          marginTop: "-5rem",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            animation: `${zoom} 23s linear infinite`,
            backfaceVisibility: "hidden",
            height: "100%",
            width: "100%",
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.28), rgba(0, 0, 0, 0.28)), url(${background})`,
            backgroundPosition: "20% 37%",
          }}
          alt="woman relaxing on a yoga mat"
        />

        <Box
          sx={{
            position: "absolute",
            boxShadow: "0px 0px 60px 10px #232321 inset",
            display: "flex",
            flexDirection: "column",
            top: 0,
            width: "100%",
            height: "100%",
            color: "#ffffee",
          }}
        >
          <Typography
            sx={{
              mt: "7.6rem",
              textAlign: "center",
              display: "block",
              fontWeight: "bold",
              letterSpacing: "0.1rem",
              marginLeft: { md: "2.7rem" },
              textShadow:
                "0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black",
            }}
            variant="h1"
            component={"h1"}
          >
            One of a kind <br />
            <Typography
              component="span"
              variant="h1"
              fontWeight={"bold"}
              sx={{ marginLeft: { md: "10rem" } }}
            >
              Yoga Studio...
            </Typography>
          </Typography>
          <Typography
            variant={"h6"}
            component={"h2"}
            fontSize="1.5rem"
            style={{ alignSelf: "center" }}
            m={{ xs: "3rem 0", md: "1.35rem 0 0 20rem" }}
            width={{ xs: "75%" }}
            textAlign="center"
          >
            made to cater for all of your yogistic needs - no matter of the
            level
          </Typography>
          <Box
            sx={{
              m: "auto 0 5rem 0",
              alignSelf: "center",
            }}
          >
            <Button
              variant="contained"
              size="large"
              color="secondary"
              sx={{
                mt: "auto",
                padding: "1rem 3.5rem",
                color: "#fff",
              }}
            >
              Why Us?
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Hero;
