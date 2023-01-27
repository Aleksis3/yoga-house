import { CardMedia, Grid, Typography } from "@mui/material";
import { CalendarPicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { coachesData } from "./coachesData";
import React, { useEffect, useState } from "react";
import { disableRandomDates, today } from "./calendarHelpers";
import Groups from "./Groups";
function Coach({ coach }) {
  const [showGroups, setShowGroups] = useState(false);

  useEffect(() => {
    setShowGroups(false);
  }, [coach]);

  return (
    <Grid container justifyContent={"space-between"}>
      <Grid item xs={3}>
        <CardMedia
          title="Coach Amanda"
          sx={{ height: "30rem" }}
          image={require(`../../images/${coachesData[coach].photo}`)}
        />
      </Grid>
      <Grid item xs={6}>
        <Typography
          variant="h5"
          component={"h3"}
          color="initial"
          textAlign={"center"}
        >
          About me
        </Typography>
        <Typography
          variant="body1"
          color="initial"
          width={"80%"}
          m={"1rem 3rem"}
        >
          {coachesData[coach].desc}
        </Typography>
      </Grid>
      <Grid
        item
        xs={3}
        bg="#fff"
        sx={{ backgroundColor: "#fff" }}
        textAlign={"center"}
      >
        {showGroups ? (
          <Groups hide={() => setShowGroups(false)} />
        ) : (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <CalendarPicker
              shouldDisableDate={disableRandomDates}
              minDate={today}
              onChange={() => setShowGroups(true)}
            />
          </LocalizationProvider>
        )}
      </Grid>
    </Grid>
  );
}

export default Coach;
