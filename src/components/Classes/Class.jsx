import {
  CardMedia,
  Collapse,
  Grid,
  Grow,
  Paper,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import ReactCardFlip from "react-card-flip";
import { useInViewport } from "react-in-viewport";

function Class(props) {
  const myRef = useRef();
  const { inViewport } = useInViewport(myRef);
  const flipCard = useRef(false);
  const [isFlipped, setIsFlipped] = useState(false);

  // code to ensure card flips only once
  useEffect(() => {
    if (flipCard.current) {
      return;
    }
    if (inViewport === true) {
      console.log("I run only once if toggle is false.");
      flipCard.current = true;
      setIsFlipped(true);
    }
  }, [inViewport]);

  return (
    <Grid item sm={12} md={4} sx={{ maxWidth: "400px" }} ref={myRef}>
      <Grow in={isFlipped} {...(isFlipped ? { timeout: 5000 } : {})}>
        <Paper key="back" sx={{ height: 350 }}>
          <CardMedia
            title="Woman exercising"
            borderRadius="10px"
            component="img"
            height={300}
            image={require(`../../images/${props.img}`)}
          />
          <Typography variant="h4" component="h3" textAlign="center">
            {props.name}
          </Typography>
        </Paper>
      </Grow>
    </Grid>
  );
}

export default Class;
