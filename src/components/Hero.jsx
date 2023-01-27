import { Box, keyframes } from "@mui/system";
import React from "react";
import Typography from "@mui/material/Typography";
import { Button, CardMedia } from "@mui/material";
import styled from "@emotion/styled";
import background from "../images/hero.jpg";

const StyledBox = styled(
  "div",
  {}
)({
  "&::before": {
    content: '""',
    display: "block",
    position: "absolute",
    height: "100vh",
    width: "100%",
    boxShadow: "0px 0px 60px 10px #232321 inset",
  },
});

const zoom = keyframes`

    ${
      "" /* 0%   { background-size: 100vw 100% ; }
  50% { background-size: 20vw 100% fill; }
  100% { background-size: 100% 100%; }   */
    }

 

   0% { transform: scale(1.2);}
   50% {transform: scale(1.6);} 
   100% {transform: scale(1.2);} 


`;

function Hero() {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100vh",
          marginTop: "-3rem",
          overflow: "hidden",
        }}
      >
        <CardMedia
          sx={{
            // height: "56rem",
            animation: `${zoom} 23s linear infinite`,
            backfaceVisibility: "hidden",
            height: "100%",
            width: "100%",
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.28), rgba(0, 0, 0, 0.28)), url(${background})`,
            backgroundPosition: "20% 37%",
          }}
          alt=""
        />

        <Box
          sx={{
            position: "absolute",
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
              marginLeft: "2.7rem",
              textShadow:
                "0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black",
            }}
            variant="h1"
            component={"h1"}
          >
            One of a kind <br />
            <span style={{ marginLeft: "10rem" }}>Yoga Studio...</span>
          </Typography>
          <Typography
            variant={"h6"}
            component={"h2"}
            fontSize="1.5rem"
            style={{ alignSelf: "center" }}
            m="1.35rem 0 0 20rem"
          >
            made to cater for
            <Typography component={"span"} fontSize="1.5rem" color="secondary">
              {" "}
              all{" "}
            </Typography>
            of your yogistic needs - no matter of the level
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
              sx={{
                mt: "auto",
                padding: "1rem 3.5rem",
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
