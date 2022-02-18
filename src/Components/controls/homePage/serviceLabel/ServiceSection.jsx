import { Box } from "@mui/material";

const ServiceSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      mt="15px"
    >
      <Box>
        <img
          src="\images\Voucher\fast delivery.png"
          alt=""
          style={{ height: "30px" }}
        />
      </Box>
      <Box>
        <img
          src="\images\Voucher\gift vouchers.png"
          alt=""
          style={{ height: "30px" }}
        />
      </Box>
      <Box>
        <img
          src="\images\Voucher\order online.png"
          alt=""
          style={{ height: "30px" }}
        />
      </Box>
    </Box>
  );
};

export default ServiceSection;
