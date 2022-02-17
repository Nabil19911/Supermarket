import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { AddBtn, AddControlBtn } from "../../../utilities";

const ProductCard = ({ imageUrl, title, price }) => {
  return (
    <Card
      sx={{
        minWidth: "200px",
        height: "400px",
        boxShadow: "none",
        border: "1px solid rgba(0, 0, 0, 0.2)",
        borderRadius: "0",
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: "200px", padding: "20px" }}
        image={imageUrl}
        alt={title}
      />
      <Box>
        <CardContent>
          <Typography sx={{ textTransform: "capitalize", fontWeight: 700 }}>
            {title}
          </Typography>
          <Typography>${price}</Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "25px",
            }}
          >
            <AddControlBtn />
            <AddBtn />
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
};

export default ProductCard;
