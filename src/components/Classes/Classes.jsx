import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";
import Class from "./Class";

function Classes() {
  const classes = [
    { img: "class1.jpg", name: "Course for First Timers" },
    { img: "class2.jpg", name: "Courses for Beginners" },
    { img: "class3.jpg", name: "Advanced practice" },
  ];

  const classesEl = classes.map((x, i) => {
    return <Class key={`card-${i}`} img={x.img} name={x.name} />;
  });

  return (
    <>
      <Typography
        textAlign={"center"}
        m="1rem 0 2rem 0"
        variant="h3"
        component={"h2"}
        id="Classes"
        sx={{ scrollMarginTop: "6rem" }}
      >
        Classes we offer
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: "2rem",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
        }}
        justifyContent={"center"}
      >
        {classesEl}
      </Box>
    </>
  );
}

export default Classes;
