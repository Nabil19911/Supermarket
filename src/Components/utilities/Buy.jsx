import { Button } from "@mui/material";
import styled from "styled-components";

const CustomButton = styled(Button)({
  boxShadow: "none",
  textTransform: "uppercase",
  fontSize: 20,
  fontWeight: 700,
  padding: "3px 12px",
  width: "150px",
  border: "none",
  borderRadius: "25px",
  color: "black",
  lineHeight: 1.5,
  backgroundColor: "#facd2d",
  borderColor: "#facd2d",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#facd2d",
    borderColor: "#facd2d",
    boxShadow: "0px 0px -5px 5px black",
  },
  "&:active": {
    boxShadow: "0px 0px -5px 2px black",
    backgroundColor: "#facd2d",
    borderColor: "#facd2d",
  },
  "&:focus": {
    boxShadow: "0px 0px -5px 2px black",
  },
});
const Buy = () => {
  return <CustomButton variant="contained">Buy now</CustomButton>;
};

export default Buy;
