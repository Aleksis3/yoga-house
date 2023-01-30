import { Box, CardMedia, Grid, Grow, Paper, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useInViewport } from "react-in-viewport";
import { useFirstRender } from "../../hooks/useFirstRender";

function Class(props) {
  const myRef = useRef();
  const { inViewport } = useInViewport(myRef);
  const [isFlipped, setIsFlipped] = useState(false);

  // code to ensure card flips only once
  const firstRender = useFirstRender();
  useEffect(() => {
    if (inViewport === true && !firstRender) {
      setIsFlipped(true);
    }
  }, [inViewport, firstRender]);

  return (
    <Box sx={{ width: "400px", maxWidth: "90%" }} ref={myRef}>
      <Grow in={isFlipped} {...(isFlipped ? { timeout: 3800 } : {})}>
        <Paper key="back" sx={{ height: 350 }}>
          <CardMedia
            title="Woman exercising"
            borderRadius="10px"
            component="img"
            height={300}
            image={require(`../../images/${props.img}`)}
          />
          <Box
            height={50}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h5" component="h3">
              {props.name}
            </Typography>
          </Box>
        </Paper>
      </Grow>
    </Box>
  );
}

export default Class;
