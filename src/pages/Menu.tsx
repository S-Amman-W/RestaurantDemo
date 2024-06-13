import Header from "../components/header.tsx";
import "./Menu.css";
import Footer from "../components/footer.tsx";
import {
  Checkbox,
  FormControlLabel,
  TextField,
  Typography
} from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

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

function Menu() {
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

  const CustomLeftArrow = ({ onClick }: { onClick: () => void }) => {
    return (
      <ArrowBackIosNewIcon
        style={{ fontSize: "50px", position: "absolute", left: 10 }}
        onClick={() => onClick()}
      />
    );
  };

  const CustomRightArrow = ({ onClick }: { onClick: () => void }) => {
    return (
      <ArrowForwardIosIcon
        style={{ fontSize: "50px", position: "absolute", right: 10 }}
        onClick={() => onClick()}
      />
    );
  };

  const images = [
    "src/assets/food1.png",
    "src/assets/food2.png",
    "src/assets/food3.png"
  ];

  const menuItems = [
    {
      menuType: "Dinner",
      items: [
        {
          title: "Lorem ipsum dolor",
          description: "Lorem ipsum dolor sit amet consectetur.",
          price: "14"
        },
        {
          title: "Lorem ipsum dolor",
          description: "Lorem ipsum dolor sit amet consectetur.",
          price: "14"
        },
        {
          title: "Lorem ipsum dolor",
          description: "Lorem ipsum dolor sit amet consectetur.",
          price: "12"
        },
        {
          title: "Lorem ipsum dolor",
          description: "Lorem ipsum dolor sit amet consectetur.",
          price: "12"
        },
        {
          title: "Lorem ipsum dolor",
          description: "Lorem ipsum dolor sit amet consectetur.",
          price: "16"
        },
        {
          title: "Lorem ipsum dolor",
          description: "Lorem ipsum dolor sit amet consectetur.",
          price: "16"
        },
        {
          title: "Lorem ipsum dolor",
          description: "Lorem ipsum dolor sit amet consectetur.",
          price: "18"
        },
        {
          title: "Lorem ipsum dolor",
          description: "Lorem ipsum dolor sit amet consectetur.",
          price: "18"
        },
        {
          title: "Lorem ipsum dolor",
          description: "Lorem ipsum dolor sit amet consectetur.",
          price: "20"
        }
      ]
    },
    {
      menuType: "Dessert",
      items: [
        {
          title: "Lorem ipsum dolor",
          description: "Lorem ipsum dolor sit amet consectetur.",
          price: "14"
        },
        {
          title: "Lorem ipsum dolor",
          description: "Lorem ipsum dolor sit amet consectetur.",
          price: "14"
        },
        {
          title: "Lorem ipsum dolor",
          description: "Lorem ipsum dolor sit amet consectetur.",
          price: "12"
        },
        {
          title: "Lorem ipsum dolor",
          description: "Lorem ipsum dolor sit amet consectetur.",
          price: "12"
        }
      ]
    },
    {
      menuType: "Happy Hour",
      items: [
        {
          title: "Lorem ipsum dolor",
          description: "Lorem ipsum dolor sit amet consectetur.",
          price: "14"
        },
        {
          title: "Lorem ipsum dolor",
          description: "Lorem ipsum dolor sit amet consectetur.",
          price: "14"
        }
      ]
    },
    {
      menuType: "Drinks",
      items: [
        {
          title: "Lorem ipsum dolor",
          description: "Lorem ipsum dolor sit amet consectetur.",
          price: "5"
        },
        {
          title: "Lorem ipsum dolor",
          description: "Lorem ipsum dolor sit amet consectetur.",
          price: "6"
        }
      ]
    },
    {
      menuType: "Brunch",
      items: [
        {
          title: "Lorem ipsum dolor",
          description: "Lorem ipsum dolor sit amet consectetur.",
          price: "12"
        },
        {
          title: "Lorem ipsum dolor",
          description: "Lorem ipsum dolor sit amet consectetur.",
          price: "15"
        }
      ]
    }
  ];

  const [selectedItems, setSelectedItems] = useState(menuItems[0].items);

  return (
    <div style={{ position: "relative" }}>
      <Header showSandwichMenu transparent />
      {/* Hero Image */}
      <Carousel
        containerClass="carouselContainerMenu"
        itemClass="carouselItemMenu"
        autoPlay
        autoPlaySpeed={5000}
        responsive={responsive}
        infinite
        customLeftArrow={<CustomLeftArrow onClick={function (): void {}} />}
        customRightArrow={<CustomRightArrow onClick={function (): void {}} />}
      >
        {images.slice(0, 5).map((image, i) => {
          return (
            <img
              key={i}
              style={{ width: "100%", height: "750px" }}
              src={image}
            />
          );
        })}
      </Carousel>
      {/* Menu */}
      <div
        className="itemCol"
        style={{
          textAlign: "center",
          backgroundColor: "#E9E5E5",
          padding: "150px 15px",
          position: "relative"
        }}
      >
        <div
          id="container"
          style={{
            position: "absolute",
            top: -45,
            left: "50%",
            transform: "translate(-50%, 0%)"
          }}
        >
          <div id="modules">
            {menuItems.map((menuItem, i) => {
              return (
                <Typography
                  component="span"
                  onClick={() => setSelectedItems(menuItem.items)}
                  variant="h5"
                  key={i}
                  className="module"
                >
                  {menuItem.menuType}
                </Typography>
              );
            })}
          </div>
        </div>
        {selectedItems.map((item, i) => {
          return (
            <div key={i} style={{ width: "500px", display: "inline-block" }}>
              <div
                className="itemCol"
                style={{ width: "300px", display: "inline-block" }}
              >
                <Typography variant="h6" sx={{ fontWeight: "600" }}>
                  {item.title}
                </Typography>
                <Typography variant="body1">{item.description}</Typography>
                <Typography variant="body1" sx={{ fontWeight: "600" }}>
                  {item.price}
                </Typography>
              </div>
            </div>
          );
        })}
      </div>

      <Footer transparent />
    </div>
  );
}

export default Menu;
