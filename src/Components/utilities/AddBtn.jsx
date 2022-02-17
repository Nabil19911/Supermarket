import { Button } from "@mui/material";
import React from "react";

const AddBtn = ({ onClick }) => {
  return (
    <Button sx={{ color: "black", fontWeight: 700 }} onClick={onClick}>
      Add
    </Button>
  );
};

export default AddBtn;
