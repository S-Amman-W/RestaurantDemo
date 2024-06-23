// importing material UI components
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import "./footer.css";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

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
    fontSize: "22px"
  },
  vertLine: {
    borderLeft: "solid black 1px",
    paddingLeft: "30px"
  }
};

interface props {
  transparent?: boolean;
}

export default function Footer({ transparent }: props) {
  const backgroundStyle = transparent ? "rgba(255, 255, 255, 0)" : "#d9d9d9";

  return (
    <AppBar
      position="static"
      className="footer AppBar"
      sx={{
        backgroundColor: backgroundStyle
      }}
    >
      <StyledGrid container sx={{ textAlign: "left" }}>
        <StyledGrid
          item
          xs={2}
          sx={{ margin: "auto", textAlign: "center" }}
          className="itemCol"
        >
          <div>
            <img src="\assets\logo.png" style={{ width: "100px" }} />
          </div>
          <div className="itemRow">
            <InstagramIcon />
            <FacebookIcon />
            <WhatsAppIcon />
          </div>
        </StyledGrid>
        <StyledGrid item xs={2} sx={{ margin: "auto" }}>
          <div className="itemCol">
            <Typography variant="h6" className="FooterTypography">
              About
            </Typography>
            <div>
              <Link to="/menu">
                <Typography variant="h6" className="FooterTypography">
                  Menu
                </Typography>
              </Link>
            </div>
            <div>
              <Link to="/privateEvents">
                <Typography variant="h6" className="FooterTypography">
                  Private Dining
                </Typography>
              </Link>
            </div>
            <Typography variant="h6" className="FooterTypography">
              Gallery
            </Typography>
            <Typography variant="h6" className="FooterTypography">
              Contact
            </Typography>
          </div>
        </StyledGrid>
        <StyledGrid item xs={4} sx={[styles.vertLine]}>
          <div className="itemCol">
            <div className="itemCol">
              <Typography variant="h6">
                <u>Find us</u>
              </Typography>
              <Typography variant="h6" sx={[styles.small]}>
                Lorem ipsum dolor sit amet consectetur.
              </Typography>
            </div>
            <div className="itemCol">
              <Typography variant="h6">
                <u>Hours</u>
              </Typography>
              <div className="itemCol">
                <Typography variant="h6" sx={[styles.small]}>
                  Monday – Wednesday: 5 pm - 12 am
                </Typography>
                <Typography variant="h6" sx={[styles.small]}>
                  Thursday: 5 pm - Late
                </Typography>
                <Typography variant="h6" sx={[styles.small]}>
                  Friday and Saturday: 5 pm - 1 am
                </Typography>
                <Typography variant="h6" sx={[styles.small]}>
                  Sunday: 11 am - 12 am
                </Typography>
              </div>
            </div>
          </div>
        </StyledGrid>
        <StyledGrid item xs={3} className="itemCol">
          <div style={{ paddingBottom: "10px" }}>
            <img src="\assets\logo.png" style={{ width: "200px" }} />
          </div>
          <div className="itemCol" style={{ paddingLeft: "50px" }}>
            <Typography variant="h6" sx={{ wordWrap: "break-word" }}>
              <u>Contact</u>
            </Typography>
            <Typography
              variant="h6"
              sx={[styles.small, { wordWrap: "break-word" }]}
            >
              example@gmail.com <br /> 📞 546-826-8282
            </Typography>
          </div>
        </StyledGrid>
      </StyledGrid>
    </AppBar>
  );
}
