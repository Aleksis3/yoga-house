import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Button, Box } from "@mui/material";
import Coach from "./Coach";

function Reserve() {
  const [coach, setCoach] = useState("amanda");

  return (
    <Box mb={"2rem"}>
      <Typography
        textAlign={"center"}
        variant="h3"
        m={"2rem 0 1rem 0"}
        component={"h2"}
        color="initial"
      >
        Reserve a visit
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: "2rem",
          mb: "2rem",
        }}
      >
        <Button
          variant="contained"
          color="secondary"
          sx={{ width: "100%" }}
          onClick={() => setCoach("amanda")}
        >
          Amanda
        </Button>
        <Button
          variant="contained"
          color="secondary"
          sx={{ width: "100%" }}
          onClick={() => setCoach("julia")}
        >
          Julia
        </Button>
        <Button
          variant="contained"
          color="secondary"
          sx={{ width: "100%" }}
          onClick={() => setCoach("josh")}
        >
          Josh
        </Button>
      </Box>
      <Coach coach={coach} />
    </Box>
  );
}

export default Reserve;
