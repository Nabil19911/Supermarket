import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ServiceSection from "../../Components/controls/homePage/serviceLabel/ServiceSection";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        background: "#F5F5F5",
        padding: "50px 50px 10px 50px",
      }}
      mt="25px"
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "flex-start",
          width: "100%",
          marginBottom: "25px",
          flexWrap: "wrap",
        }}
      >
        <Box>
          <Heading>Categories</Heading>
          <ul style={{ listStyle: "none" }}>
            <CustomLink to="#">Grocery</CustomLink>
            <CustomLink to="#">fresg food</CustomLink>
            <CustomLink to="#">electronics</CustomLink>
            <CustomLink to="#">mobiles</CustomLink>
            <CustomLink to="#">home & living</CustomLink>
            <CustomLink to="#">lifestyle</CustomLink>
          </ul>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          <Box>
            <Heading>useful links</Heading>
            <ul style={{ listStyle: "none" }}>
              <CustomLink to="#">About us</CustomLink>
              <CustomLink to="#">contact us</CustomLink>
              <CustomLink to="#">FAQ</CustomLink>
            </ul>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
            }}
          >
            <Heading>Payment</Heading>
            <img src="\images\PMIcon.png" alt="Payment" />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flexWrap: "wrap",
            textAlign: "center",
            marginTop: { xs: "15px", sm: "0" },
          }}
        >
          <Heading>Service section</Heading>
          <Box>
            <ServiceSection />
          </Box>
        </Box>
      </Box>
      <Typography variant="small">©SuperMarket Online 2020-2021</Typography>
    </Box>
  );
};
const Heading = ({ children }) => {
  return (
    <Typography sx={{ textTransform: "uppercase", fontWeight: 500 }}>
      {children}
    </Typography>
  );
};

const CustomLink = ({ to, children }) => {
  return (
    <li style={{ padding: "5px" }}>
      <Link
        to={to}
        style={{
          textDecoration: "none",
          textTransform: "capitalize",
          color: "#070707a4",
        }}
      >
        {children}
      </Link>
    </li>
  );
};
export default Footer;
