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
        <Box>
          <Box mb="15px">
            <Heading>useful links</Heading>
            <ul style={{ listStyle: "none" }}>
              <CustomLink to="#">About us</CustomLink>
              <CustomLink to="#">contact us</CustomLink>
              <CustomLink to="#">FAQ</CustomLink>
            </ul>
          </Box>
          <Box>
            <Heading>Payment methods</Heading>
            <img src="\images\PMIcon.png" alt="Payment" />
          </Box>
        </Box>
        <Box>
          <Heading>Service section</Heading>
          <Box>
            <ServiceSection />
            {/* <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" /> */}
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
