import { Box, CardMedia, Typography } from "@mui/material";

import { coachesData } from "./coachesData";
import React, { useEffect, useState } from "react";

import Groups from "./Groups";
import Calendar from "./Calendar";
function Coach({ coach }) {
  const [showGroups, setShowGroups] = useState(false);

  useEffect(() => {
    setShowGroups(false);
  }, [coach]);

  return (
    <Box
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
