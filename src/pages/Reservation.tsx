import Header from "../components/header.tsx";
import "./Reservation.css";
import Footer from "../components/footer.tsx";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";
import dayjs from "dayjs";

const StyledGrid = styled(Grid)({
  padding: "0px"
});

const StyledFormControl = styled(FormControl)({
  width: "50%",
  margin: "10px 0px"
});

const StyledButton = styled("button")({
  backgroundColor: "#d9d9d9",
  margin: "10px 0px",
  whiteSpace: "nowrap"
});

const styles = {
  small: {
    fontSize: "15px"
  },
  medium: {
    fontSize: "20px"
  },
  large: {
    fontSize: "25px"
  },
  title: {
    fontSize: "96px"
  },
  vertLine: {
    borderLeft: "solid black 1px",
    paddingLeft: "30px"
  },
  vertCenter: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  }
};

const dateTimes = [
  {
    date: "2024-06-24",
    time: "12:00 PM"
  },
  {
    date: "2024-06-25",
    time: "1:00 PM"
  },
  {
    date: "2024-06-26",
    time: "2:00 PM"
  },
  {
    date: "2024-06-24",
    time: "3:00 PM"
  },
  {
    date: "2024-06-27",
    time: "4:00 PM"
  },
  {
    date: "2024-06-25",
    time: "5:00 PM"
  },
  {
    date: "2024-06-25",
    time: "6:00 PM"
  },
  {
    date: "2024-06-26",
    time: "7:00 PM"
  },
  {
    date: "2024-06-29",
    time: "8:00 PM"
  },
  {
    date: "2024-06-25",
    time: "9:00 PM"
  }
];

function Reservation() {
  const [selectedDate, setSelectedDate] = useState(dayjs());

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Header showSandwichMenu transparent />
      {/* Intro Text */}
      <StyledGrid container className="itemRow" sx={{ padding: "100px 0px" }}>
        <StyledGrid
          item
          xs={5}
          className="itemCol"
          sx={[styles.vertCenter, { textAlign: "center", paddingLeft: "15px" }]}
        >
          <div style={{ display: "inline-block" }}>
            <DateCalendar
              views={["day"]}
              value={selectedDate}
              onChange={(newDate) => setSelectedDate(newDate)}
              sx={{ backgroundColor: "#D9D9D9" }}
            />
          </div>
        </StyledGrid>
        <StyledGrid item xs={6} className="itemCol" sx={[styles.vertCenter]}>
          <h2 style={{ fontWeight: "400", fontSize: "45px" }}>
            Reserve Your Table
          </h2>
          <div style={{ display: "inline-block" }}>
            <StyledFormControl variant="filled">
              <InputLabel id="location-label">Select Location</InputLabel>
              <Select
                labelId="location-label"
                id="location-select"
                label="Select Location"
                defaultValue=""
              >
                <MenuItem value={1}>Toronto</MenuItem>
                <MenuItem value={2}>Hamilton</MenuItem>
                <MenuItem value={3}>Waterloo</MenuItem>
              </Select>
            </StyledFormControl>
            <br />
            <StyledFormControl variant="filled">
              <InputLabel id="guest-num-label">Number of Guests</InputLabel>
              <Select
                labelId="guest-num-label"
                id="guest-num-select"
                label="Number of Guests"
                defaultValue=""
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
              </Select>
            </StyledFormControl>
            <br />
            <StyledButton>RESERVE</StyledButton>
          </div>
        </StyledGrid>
      </StyledGrid>
      <Grid container sx={{ marginBottom: "20px", height: "200px" }}>
        <StyledGrid item xs={5.5} sx={{ textAlign: "center" }}>
          <div style={{ display: "inline-block", width: "320px" }}>
            <Typography variant="h6" sx={[styles.small, { textAlign: "left" }]}>
              Available times:
            </Typography>
            <Grid container item>
              {dateTimes
                .filter(
                  (dateTime) =>
                    dateTime.date === selectedDate.format("YYYY-MM-DD")
                )
                .map((dateTime) => (
                  <StyledButton
                    style={
                      (styles.small, { padding: "3px 8px", margin: "10px" })
                    }
                    key={dateTime.date + dateTime.time}
                  >
                    {dateTime.time}
                  </StyledButton>
                ))}
            </Grid>
          </div>
        </StyledGrid>
      </Grid>
      <Footer />
    </LocalizationProvider>
  );
}

export default Reservation;
