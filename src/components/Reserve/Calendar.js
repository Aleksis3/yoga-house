import { TextField, useMediaQuery } from "@mui/material";
import {
  CalendarPicker,
  DatePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React, { useMemo } from "react";
import { randomDates, today, tomorrow } from "./calendarHelpers";

function Calendar({ showGroups, daysOff }) {
  const smallDev = useMediaQuery("(max-width:600px)");

  const desktopCalendar = (
    <CalendarPicker
      shouldDisableDate={randomDates}
      minDate={tomorrow()}
      onChange={showGroups}
    />
  );

  const mobileCalendar = (
    <DatePicker
      mask="____/__/__"
      shouldDisableDate={randomDates}
      renderInput={(params) => (
        <TextField
          {...params}
          error={false}
          sx={{
            display: "flex",
          }}
        />
      )}
      onChange={showGroups}
      minDate={tomorrow}
    />
  );

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {smallDev ? mobileCalendar : desktopCalendar}
      </LocalizationProvider>
    </>
  );
}

export default Calendar;
