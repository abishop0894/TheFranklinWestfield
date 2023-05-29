import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Fade as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";
import "../App.css";

const useStyles = makeStyles((theme) => ({
  navContainer: {
    zIndex: "1000 !important",
  },
  appBar: {
    height: "8vh !important",
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <Box className={classes.navContainer}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {/*logo */}
          </Typography>
          <Hamburger direction={"right"} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
