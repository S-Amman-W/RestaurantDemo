import Header from "../components/header.tsx";
import "./Landing.css";
import Footer from "../components/footer.tsx";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const StyledGrid = styled(Grid)({
  padding: "0px"
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
    fontSize: "7vw"
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

function Landing() {
  const responsive = {
    largeDesktop: {
      breakpoint: { max: 100000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const images = [
    "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  ];

  const Divider = () => {
    return (
      <div
        className="itemRow"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px 0px"
        }}
      >
        <div
          style={{
            width: "35%",
            height: "0px",
            borderBottom: "solid black 1px"
          }}
        />
        <img src="https://placehold.co/50x50" />
        <div
          style={{
            width: "35%",
            height: "0px",
            borderBottom: "solid black 1px"
          }}
        />
      </div>
    );
  };

  const [curSlide, setCurSlide] = useState(1);

  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);

  return (
    <div>
      <Header />
      {/* Hero Image */}
      <div className="heroLanding">
        <div
          style={{ textAlign: "center", width: "50%" }}
          className="itemCol bigGap"
        >
          <h1 data-aos="fade-up" style={styles.title}>
            Restaurant Name
          </h1>
          <div data-aos="fade-up" className="itemRow">
            <Link to="/reservations">
              <button className="button">Reservations</button>
            </Link>
            <Link to="/privateEvents">
              <button className="button">Private Events</button>
            </Link>
          </div>
        </div>
      </div>
      {/* Intro Text */}
      <StyledGrid container className="itemRow">
        <StyledGrid
          item
          xs={4.5}
          className="itemCol"
          sx={[styles.vertCenter, { textAlign: "left", paddingLeft: "15px" }]}
          data-aos="fade-up"
        >
          <h2 style={{ fontWeight: "700", fontSize: "40px" }}>
            Lorem ipsum dolor sit amet consectetur.
          </h2>
          <Typography variant="h6">
            Lorem ipsum dolor sit amet consectetur. Tempor quis imperdiet id
            placerat imperdiet magna maecenas urna augue. Tempor quis imperdiet
            id placerat imperdiet magna maecenas urna augue.
          </Typography>
          <div style={{ display: "inline-block" }}>
            <button className="button">View Menu</button>
          </div>
        </StyledGrid>
        <StyledGrid item container xs={7}>
          <StyledGrid item xs={1} />
          <StyledGrid item xs={4} sx={{ textAlign: "right", margin: "10px" }}>
            <img
              data-aos="flip-up"
              src="https://placehold.co/235x210"
              style={{ paddingBottom: "10px" }}
            />
            <img
              data-aos="flip-up"
              src="https://placehold.co/315x265"
              style={{ paddingRight: "5px" }}
            />
          </StyledGrid>
          <StyledGrid item xs={5} sx={{ textAlign: "left", margin: "10px" }}>
            <img
              data-aos="flip-up"
              src="https://placehold.co/345x410"
              style={{ paddingTop: "25px" }}
            />
          </StyledGrid>
        </StyledGrid>
      </StyledGrid>
      {/* Dishes */}
      <Divider />
      <div
        className="itemCol"
        style={{
          ...styles.vertCenter,
          flexDirection: "column"
        }}
      >
        <Typography variant="h3">Specialty Dishes</Typography>
        <div className="itemRow">
          {[...Array(4)].map((_, i) => (
            <div
              className="itemCol"
              style={
                (styles.vertCenter,
                { padding: "10px", display: "inline-block" })
              }
              key={i}
            >
              <img src="https://placehold.co/240x255" />
              <Typography variant="h6">Lorem ipsum</Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet consectetur.
              </Typography>
            </div>
          ))}
        </div>
      </div>
      {/* Gallery */}
      <Divider />
      <Typography variant="h3">Gallery</Typography>
      <div
        style={{
          paddingTop: "15px",
          paddingBottom: "15px",
          width: "100vw",
          overflow: "hidden"
        }}
      >
        <Carousel
          itemClass="hoverImage"
          containerClass="carouselContainer"
          responsive={responsive}
          infinite
          centerMode
          customLeftArrow={<></>}
        >
          {images.slice(0, 5).map((image, i) => {
            return (
              <div className="img_wrap" key={i}>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={image}
                  className="imageHover"
                />
                <p className="img_description">Lorem ipsum.</p>
              </div>
            );
          })}
        </Carousel>
      </div>

      <div
        style={{
          paddingTop: "15px",
          paddingBottom: "15px",
          width: "100vw",
          overflow: "hidden"
        }}
      >
        <Carousel
          itemClass="hoverImage"
          containerClass="carouselContainer"
          responsive={responsive}
          infinite
          centerMode
          customRightArrow={<></>}
        >
          {images.slice(0, 5).map((image, i) => {
            return (
              <div className="img_wrap" key={i}>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={image}
                  className="imageHover"
                />
                <p className="img_description">Lorem ipsum.</p>
              </div>
            );
          })}
        </Carousel>
      </div>
      {/* Testimonials */}
      <Divider />
      <Typography variant="h3">Testimonials</Typography>
      <div
        style={{
          paddingTop: "15px",
          paddingBottom: "40px",
          height: "350px",
          width: "100vw",
          overflow: "hidden"
        }}
      >
        <Carousel
          containerClass="carouselContainer"
          responsive={{
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 3
            },
            tablet: {
              breakpoint: { max: 1024, min: 0 },
              items: 1
            }
          }}
          infinite
          centerMode
          beforeChange={function () {
            setCurSlide(-1);
          }}
          afterChange={function (_, _ref) {
            var slideNum = _ref.currentSlide + 1;
            setCurSlide(slideNum % 5);
          }}
        >
          {images.slice(0, 5).map((_, i) => {
            return (
              <div key={i}>
                {curSlide === i ? (
                  <div
                    className="itemRow featureItem"
                    style={{
                      textAlign: "left",
                      display: "flex",
                      justifyContent: "center",
                      width: "100%",
                      height: "100%"
                    }}
                  >
                    <img
                      style={{ height: "100%" }}
                      src="https://placehold.co/200x300"
                    />
                    <div style={{ paddingLeft: "15px" }}>
                      <Typography variant="h6" sx={[styles.small]}>
                        <u>Customer Stories...</u>
                      </Typography>
                      <Typography variant="body1" sx={{ color: "grey" }}>
                        “Lorem ipsum dolor sit amet consectetur. Massa lectus
                        rhoncus justo a ornare. Ultricies libero in netus arcu
                        sed ullamcorper pretium arcu id.”
                      </Typography>
                    </div>
                  </div>
                ) : (
                  <div
                    className="itemRow"
                    style={{
                      textAlign: "left",
                      display: "flex",
                      justifyContent: "center",
                      width: "100%",
                      height: "100%"
                    }}
                  >
                    <img
                      style={{ height: "100%" }}
                      src="https://placehold.co/200x300"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </Carousel>
      </div>
      <Footer />
    </div>
  );
}

export default Landing;
