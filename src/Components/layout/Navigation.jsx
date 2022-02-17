import { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  InputBase,
  AppBar,
  Toolbar,
  Menu,
  MenuItem,
  useScrollTrigger,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import { BurgerMenu } from "../utilities/index";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  border: "1px solid rgba(0, 0, 0, 0.5)",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const NavItems = [
  "Grocery",
  "fresg food",
  "electronics",
  "mobiles",
  "home & living",
  "lifestyle",
];

const Navigation = ({ window }) => {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });
  return (
    <>
      <Grid
        container
        flexDirection={{ xs: "column", sm: "row" }}
        alignItems="center"
        justifyContent="space-between"
        margin="30px auto"
        width="95%"
      >
        <Typography
          sx={{
            textTransform: "uppercase",
            fontWeight: 900,
            fontSize: { xs: 25, md: 30 },
            textAlign: { xs: "center", md: "left" },
          }}
          mb={{ xs: "20px", md: "auto" }}
        >
          SuperMarket
        </Typography>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </Grid>
      <AppBar
        elevation={1}
        position="relative"
        sx={{
          width: "90%",
          margin: "auto",
          borderRadius: "5px",
          background: "#7caf3c",
          position: trigger && "sticky",
          top: 0,
          zIndex: 1,
        }}
      >
        <Toolbar>
          <BurgerMenu
            aria_controls="menu-appbar"
            aria_haspopup="true"
            open={Boolean(anchorElUser)}
            onClick={handleOpenUserMenu}
          />
          <Box>
            <Menu
              sx={{ mt: "45px" }}
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {NavItems.map(item => (
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography
                    sx={{
                      textAlign: "center",
                      textTransform: "uppercase",
                      padding: "15px 10px",
                    }}
                  >
                    {item}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navigation;
