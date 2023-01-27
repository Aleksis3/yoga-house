import {
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Input,
  InputLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box } from "@mui/system";
function Groups({ hide }) {
  return (
    <Box sx={{ position: "relative", padding: "1rem" }}>
      <ArrowBackIcon
        onClick={hide}
        sx={{
          position: "absolute",
          top: "1.2rem",
          left: "1rem",
          cursor: "pointer",
          color: "#555",
        }}
      />
      <FormControl>
        <FormLabel
          sx={{ fontSize: "1.3rem", margin: "1rem 0 1rem 0" }}
          id="demo-radio-buttons-group-label"
        >
          Group
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="dummy"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="dummy"
            control={<Radio />}
            label="10AM Intermediate"
          />

          <FormControlLabel
            value="and"
            control={<Radio />}
            label="6PM Beginners"
          />
          <FormControlLabel
            value="fake"
            control={<Radio />}
            label="8PM Beginners"
          />
          <FormControlLabel
            value="data"
            control={<Radio />}
            label="9PM Intermediate"
          />
          <FormControlLabel
            value="frfr"
            control={<Radio />}
            label="10PM Advanced"
          />
        </RadioGroup>
        <Button sx={{ mt: "1rem" }} type="submit" variant="outlined">
          Book
        </Button>
      </FormControl>
    </Box>
  );
}

export default Groups;
