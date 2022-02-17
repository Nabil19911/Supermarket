import { Box, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import AddBtn from "./AddBtn";
import { useState } from "react";

const AddControlBtn = () => {
  const [count, setCount] = useState(0);

  const handleClick = e => {
    e.preventDefault();
    if (count > 0) setCount(0);
  };
  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton
          sx={{
            width: "30px",
            height: "30px",
            background: "#7caf3c",
            marginRight: "15px",
            "&:hover": { background: "#7baf3ce4" },
          }}
          onClick={() => count >= 1 && setCount(prevCount => prevCount - 1)}
        >
          <RemoveIcon sx={{ color: "white", position: "absolute" }} />
        </IconButton>
        <span>{count}</span>
        <IconButton
          sx={{
            width: "30px",
            height: "30px",
            background: "#7caf3c",
            marginLeft: "15px",
            "&:hover": { background: "#7baf3ce4" },
          }}
          onClick={() => setCount(prevCount => prevCount + 1)}
        >
          <AddIcon sx={{ color: "white", position: "absolute" }} />
        </IconButton>
      </Box>
      <AddBtn onClick={handleClick} />
    </Box>
  );
};

export default AddControlBtn;
