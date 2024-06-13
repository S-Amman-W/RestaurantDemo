import Header from "../components/header.tsx";
import "./PrivEvents.css";
import Footer from "../components/footer.tsx";
import {
  Checkbox,
  FormControlLabel,
  TextField,
  Typography
} from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

function PrivEvents() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const ButtonGroup = ({
    next,
    previous,
    ...rest
  }: {
    next: () => void;
    previous: () => void;
    [key: string]: any;
  }) => {
    const {
      carouselState: { currentSlide }
    } = rest;
    return (
      <div style={{ width: "33%", position: "absolute", right: 0, bottom: 0 }}>
        <ChevronLeft
          className={currentSlide === 0 ? "disable" : ""}
          onClick={() => previous()}
        />
        <ChevronRight onClick={() => next()} />
      </div>
    );
  };

  return (
    <div style={{ position: "relative" }}>
      <Header showSandwichMenu transparent />
      {/* Hero Image */}
      <div>
        <img src="src\assets\privDining.png" />
      </div>
      {/* Intro Text */}
      <div className="itemCol" style={{ textAlign: "center" }}>
        <div
          className="itemCol bigGap"
          style={{ display: "inline-block", width: "80%", padding: "10px" }}
        >
          <Typography variant="h3">Ready To Serve</Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur. Pellentesque erat turpis
            nunc sit vehicula mi at. Elementum ultrices lectus sed nunc urna.
            Sed lobortis suspendisse blandit amet sed pellentesque. Donec varius
            arcu vitae molestie curabitur rutrum sagittis.
          </Typography>
        </div>
        <br />
        <div
          style={{
            display: "inline-block",
            height: "100px",
            width: "0px",
            borderRight: "solid black 1px"
          }}
        />
      </div>

      {/* Venues */}
      <div
        className="itemCol"
        style={{
          textAlign: "center",
          backgroundColor: "#D9D9D9",
          padding: "20px"
        }}
      >
        <Typography variant="h3">Venues</Typography>
        <div
          className="itemRow bigGap"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            width: "100%"
          }}
        >
          {[...Array(3)].map((_, i) => (
            <div
              className="itemCol"
              style={{
                padding: "10px",
                width: "250px",
                display: "inline-block"
              }}
              key={i}
            >
              <div
                style={{
                  position: "relative",
                  width: "250px",
                  height: "330px",
                  border: "solid black 1px",
                  borderRadius: "10px",
                  display: "inline-block",
                  backgroundColor: "white"
                }}
              >
                <Carousel
                  responsive={responsive}
                  itemClass="imgItem"
                  arrows={false}
                  showDots
                  renderDotsOutside
                  renderButtonGroupOutside={true}
                  infinite
                  customButtonGroup={
                    <ButtonGroup
                      next={function (): void {}}
                      previous={function (): void {}}
                    />
                  }
                >
                  {[...Array(3)].map((_, i) => (
                    <img
                      src="https://placehold.co/250x300"
                      style={{ borderRadius: "10px" }}
                      key={i}
                    />
                  ))}
                </Carousel>
              </div>
              <Typography variant="h6">Lorem ipsum</Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet consectetur. In donec enim netus sit
                feugiat scelerisque lectus. Neque a malesuada malesuada nullam.
                Et dictum viverra accumsan tempor at eget. Tortor enim in
                viverra et faucibus sagittis enim gravida eu.{" "}
              </Typography>
            </div>
          ))}
        </div>
      </div>

      {/* Booking */}
      <div className="itemCol" style={{ textAlign: "center" }}>
        <Typography
          variant="h4"
          sx={{ paddingTop: "30px", display: "inline-block" }}
        >
          Plan Something Special
        </Typography>

        <br />
        <div
          style={{
            display: "inline-block",
            height: "100px",
            width: "0px",
            borderRight: "solid black 1px"
          }}
        />
        <br />
      </div>
      <div className="itemCol" style={{ paddingBottom: "100px" }}>
        <div className="itemRow">
          <TextField required label="First Name" variant="filled" />
          <TextField required label="Last Name" variant="filled" />
        </div>
        <div className="itemRow">
          <TextField required label="Email Address" variant="filled" />
          <TextField required label="Phone Number" variant="filled" />
        </div>
        <div className="itemRow">
          <TextField required label="Date of Event" variant="filled" />
          <TextField required label="Number of Guests" variant="filled" />
        </div>
        <TextField
          label="Comments"
          className="multiText"
          multiline
          rows={4}
          variant="filled"
        />
        <br />
        <div style={{ display: "inline-block", width: "62%" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between"
            }}
          >
            <FormControlLabel
              control={<Checkbox />}
              label={
                <>
                  Lorem ipsum dolor <u>sit amet</u>
                </>
              }
            />
            <FormControlLabel control={<Checkbox />} label="Label" />
            <button className="button" style={{ backgroundColor: "#d9d9d9" }}>
              Submit
            </button>
          </div>
        </div>
      </div>

      <Footer transparent />
    </div>
  );
}

export default PrivEvents;
