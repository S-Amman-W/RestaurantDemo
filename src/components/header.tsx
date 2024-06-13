// importing material UI components
import { useState, useEffect } from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import SandwichIcon from "@mui/icons-material/Menu";
import PhoneIcon from "@mui/icons-material/Phone";

import "./header.css";
import { Link } from "react-router-dom";

// defining the props interface
interface props {
  showSandwichMenu?: boolean;
  transparent?: boolean;
}

export default function Header({ showSandwichMenu, transparent }: props) {
  const [isMobile, setIsMobile] = useState(false);
  const [showMenu, setShowMenu] = useState(showSandwichMenu);
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleResize = () => {
    if (window.innerWidth < 910) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    if (!showSandwichMenu && isMobile) {
      setShowMenu(true);
    } else if (!showSandwichMenu && !isMobile) {
      setShowMenu(false);
    }
  });

  const menuItems = [
    { name: "About", link: "/about" },
    { name: "Menu", link: "/menu" },
    { name: "Gallery", link: "/gallery" },
    { name: "Contact", link: "/contact" },
    { name: "Reservations", link: "/reservations" },
    { name: "Private Events", link: "/privateEvents" }
  ];

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {menuItems.map((menuItem) => (
          <ListItem key={menuItem.name} disablePadding>
            <ListItemButton component={Link} to={menuItem.link}>
              <ListItemText primary={menuItem.name} sx={{ color: "black" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const backgroundStyle = transparent ? "rgba(255, 255, 255, 0)" : "#d9d9d9";

  return (
    <AppBar
      className="AppBar"
      sx={{
        backgroundColor: backgroundStyle,
        position: "absolute",
        top: 0,
        left: 0
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "10px",
          paddingBottom: "10px"
        }}
      >
        {showMenu && (
          <>
            <Button
              color="inherit"
              sx={{ position: "absolute", left: 5 }}
              onClick={toggleDrawer(true)}
            >
              <SandwichIcon />
            </Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
              {DrawerList}
            </Drawer>
          </>
        )}
        {!showMenu && (
          <>
            <Typography variant="h6" component="div" className="Typography">
              About
            </Typography>
            <Link to="/menu">
              <Typography variant="h6" component="div" className="Typography">
                Menu
              </Typography>
            </Link>
          </>
        )}
        <Link to="/">
          <img
            className="Typography"
            src="src\assets\logo.png"
            style={{ width: "100px" }}
          />
        </Link>
        {!showMenu && (
          <>
            <Typography variant="h6" component="div" className="Typography">
              Gallery
            </Typography>
            <Typography variant="h6" component="div" className="Typography">
              Contact
            </Typography>
            <Typography
              component="div"
              sx={{
                position: "absolute",
                right: 10,
                top: 10
              }}
            >
              <PhoneIcon
                sx={{ margin: "auto", position: "absolute", left: -25 }}
              />
              546-826-8282
            </Typography>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
