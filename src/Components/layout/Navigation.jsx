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
  Badge,
  useScrollTrigger,
  IconButton,
  Slide,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import { useMediaQuery } from "react-responsive";
import { BurgerMenu } from "../utilities/index";
import { Link } from "react-router-dom";

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
  const isMobile = useMediaQuery({ maxWidth: "500px" });
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 110,
    target: window ? window() : undefined,
  });
  return (
    <>
      <Box
        sx={{
          bgcolor: "black",
          width: "100%",
          height: "50px",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Link to="#" style={{ textDecoration: "none" }}>
          <Typography
            sx={{
              textTransform: "uppercase",
              fontWeight: 500,
              fontSize: "16px",
              color: "white",
            }}
            mr="25px"
          >
            login/signup
          </Typography>
        </Link>
      </Box>
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
          transition: "all 1s ease",
        }}
      >
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box mr="15px">
                <BurgerMenu
                  aria_controls="menu-appbar"
                  aria_haspopup="true"
                  open={Boolean(anchorElUser)}
                  onClick={handleOpenUserMenu}
                />
              </Box>
              {isMobile || (
                <Typography
                  sx={{ textTransform: "uppercase", fontWeight: 500 }}
                >
                  Categories
                </Typography>
              )}
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {trigger && (
                <Slide appear={false} in={trigger}>
                  <Search>
                    <SearchIconWrapper>
                      <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="Search…"
                      inputProps={{ "aria-label": "search" }}
                    />
                  </Search>
                </Slide>
              )}

              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={1} color="success">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Box>
          </Box>
          <Box>
            <Menu
              sx={{
                mt: "45px",
                left: {
                  xs: "10px",
                  sm: "30px",
                  md: "50px",
                },
                "& .MuiPaper-root": {
                  width: "250px",
                },
              }}
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
              {NavItems.map((item, index) => (
                <MenuItem key={index} onClick={handleCloseUserMenu}>
                  <Link to="#" style={{ textDecoration: "none" }}>
                    <Typography
                      sx={{
                        textAlign: "center",
                        textTransform: "uppercase",
                        padding: "15px 10px",
                        color: "black",
                      }}
                    >
                      {item}
                    </Typography>
                  </Link>
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
