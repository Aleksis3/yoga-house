import { Box, CardMedia, Slide, Typography } from "@mui/material";
import { coachesData } from "./coachesData";
import React, { useEffect, useRef, useState } from "react";
import Groups from "./Groups";
import Calendar from "./Calendar";
import { useFirstRender } from "../../hooks/useFirstRender";
import { useInViewport } from "react-in-viewport";
function Coach({ coach }) {
  const [showGroups, setShowGroups] = useState(false);
  const [animate, setAnimate] = useState(false);

  const firstRender = useFirstRender();
  const myRef = useRef();
  const { inViewport } = useInViewport(myRef);
  useEffect(() => {
    if (!firstRender) {
      setAnimate(true);
    }
    setShowGroups(false);
  }, [firstRender, coach]);

  return (
    <Box
      key={coach}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignContent: "center",
        justifyItems: "center",
        alignItems: "center",
        flexDirection: { md: "column", lg: "row" },
      }}
      justifyContent={"space-between"}
    >
      <Slide direction={"right"} in={animate} timeout={700} ref={myRef}>
        <CardMedia
          title="Coach Amanda"
          sx={{
            height: "30rem",
            width: "20rem",
            margin: "0 auto",
            borderRadius: "10px",
          }}
          image={require(`../../images/${coachesData[coach].photo}`)}
        />
      </Slide>
      <Box>
        <Typography
          variant="h5"
          component={"h3"}
          color="initial"
          textAlign={"center"}
          mt={"1rem"}
        >
          About me
        </Typography>
        <Typography
          variant="body1"
          color="initial"
          maxWidth={"600px"}
          m={"1rem 3rem 2rem 3rem"}
        >
          {coachesData[coach].desc}
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: "#fff",
          border: "1px #000 solid",
          width: "350px",
          maxWidth: "90%",
        }}
        textAlign={"center"}
        margin={"0 auto"}
      >
        {showGroups ? (
          <Groups hide={() => setShowGroups(false)} />
        ) : (
          <Calendar showGroups={() => setShowGroups(true)} />
        )}
      </Box>
    </Box>
  );
}

export default Coach;
