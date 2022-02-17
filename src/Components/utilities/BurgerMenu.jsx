import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  menu_btn: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "40px",
    height: "30px",
    color: "var(--white)",
    cursor: "pointer",
    zIndex: 1001,
  },
  open: {
    "& div:nth-child(1)": {
      transform: "rotate(45deg)",
      width: "20px",
    },
    "& div:nth-child(2)": {
      transform: "translateX(-20px)",
      background: "transparent",
    },
    "& div:nth-child(3)": {
      transform: "rotate(-45deg)",
      width: "20px",
    },
  },
  menu_btn__burger_one: {
    width: "30px",
    height: "2px",
    background: "white",
    borderRadius: "10px",
    transform: "translateY(-5px)",
    transition: "all 0.2s ease",
  },
  menu_btn__burger_two: {
    position: "absolute",
    width: "25px",
    height: "2px",
    background: "white",
    borderRadius: "10px",
    transition: "all 0.2s ease",
  },
  menu_btn__burger_three: {
    position: "absolute",
    width: "20px",
    height: "2px",
    background: "white",
    borderRadius: "10px",
    transform: "translateY(5px)",
    transition: "all 0.2s ease",
  },
});

const BurgerMenu = props => {
  const classes = useStyles();
  return (
    <div
      className={`${classes.menu_btn} ${props.open && classes.open}`}
      aria-controls={props.aria_controls}
      aria-haspopup={props.aria_haspopup}
      aria-expanded={props.aria_haspopup}
      onClick={props.onClick}
    >
      <div className={classes.menu_btn__burger_one} />
      <div className={classes.menu_btn__burger_two} />
      <div className={classes.menu_btn__burger_three} />
    </div>
  );
};

export default BurgerMenu;
