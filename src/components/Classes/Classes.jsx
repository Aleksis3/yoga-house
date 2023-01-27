import React from "react";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
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
      >
        Classes we offer
      </Typography>
      <Grid container spacing={5} justifyContent={"center"}>
        {classesEl}
      </Grid>
    </>
  );
}

export default Classes;
