import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-bootstrap/Carousel";

import {
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Fade as Hamburger } from "hamburger-react";
import SouthIcon from "@mui/icons-material/South";
import Offcanvas from "react-bootstrap/Offcanvas";
import Logo from "../assets/logowhyte.png";
import { NavLink } from "react-router-dom";
import useMediaQuery from "../Helpers/Hooks/UseMediaQuery";
import "../App.css";
const container = {
  hidden: { opacity: 0, scale: 1.7 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.4,
    },
  },
};

const item = {
  hidden: { y: 40, opacity: 0 },

  visible: {
    y: 10,
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 1.4,
    },
  },
};

const bottom = {
  hidden: { y: -40, opacity: 0 },

  visible: {
    y: 40,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

/*  "RESIDENCES",
  "AMENITIES",
  "NEIGHBORHOOD",
  "AVAILABILITY",
  "GALLERY",
  "CONTACT",
  "APPLY NOW", */
const navArr = [
  {
    name: "RESIDENCES",
    href: "/residences",
  },
  {
    name: "AMENITIES",
    href: "/amenities",
  },
  {
    name: "NEIGHBORHOOD",
    href: "/neighborhood",
  },
  {
    name: "AVAILABILITY",
    href: "/availability",
  },
  {
    name: "GALLERY",
    href: "/gallery",
  },
  {
    name: "CONTACT",
    href: "/contact",
  },
  {
    name: "APPLY NOW",
    href: "https://www.rentcafe.com/",
  },
];

const navbarArr = [
  {
    name: "AVAILABILITY",
    href: "/availability",
  },
  {
    name: "CONTACT",
    href: "/contact",
  },
];

const Header = (props) => {
  const tablet = useMediaQuery("(min-width: 601px) and (max-width: 950px)");
  const notPc = useMediaQuery("(max-width: 990px)");
  const mobile = useMediaQuery("(max-width: 550px)");
  const galaxyFold = useMediaQuery("(width: 280px)");

  const scroll = () => {
    document.documentElement.scrollTo({
      top: 620,
      left: 0,
    });
  };

  const {
    bottomBar,
    backgroundImageOne,
    backgroundImageTwo,
    backgroundImageThree,
    bottomBarColor,
    bottomBarTxtColor,
    backgroundImg,
    home,
    barArrow,
    barArrowHref,
    clickHandler,
  } = props;

  const useStyles = makeStyles((theme) => ({
    itemContainer: {
      width: "100% !important",
      height: tablet
        ? "100vh !important"
        : notPc
        ? "85vh !important"
        : notPc && window.navigator.mobile === false
        ? "100vh"
        : "100vh !important",
    },
    bottomBar: {
      display: "flex !important",
      position: "relative",
      bottom: "0px",
      marginTop: "-10vh",
      zIndex: "1000 !important",
    },
    carousel: {
      width: "100% !important",
      height: "100vh !important",
    },
  }));

  const classes = useStyles();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(window.navigator.mobile === false);

  return (
    <>
      <motion.div initial={"hidden"} animate={"visible"} variants={container}>
        {bottomBar === "Coming Soon!" ? (
          <div
            style={{
              width: "100%",
              height: notPc
                ? "85vh !important"
                : notPc && window.navigator.mobile === false
                ? "100vh"
                : tablet
                ? "100vh"
                : "100vh !important",
              position: "relative",
            }}
          >
            <Carousel
              style={{
                zIndex: "-90",
              }}
              fade
              controls={false}
              indicators={false}
              interval={6000}
              defaultActiveIndex={0}
            >
              <Carousel.Item
                style={{
                  width: "100%",
                  height: notPc
                    ? "85vh !important"
                    : notPc && window.navigator.mobile === false
                    ? "100vh"
                    : tablet
                    ? "100vh"
                    : "100vh",
                  backgroundImage: `url(${backgroundImageOne})`,
                  backgroundSize: "cover",
                  backgroundPosition: notPc ? "60%" : "center",
                }}
                className={classes.itemContainer}
              ></Carousel.Item>
              <Carousel.Item
                style={{
                  width: "100%",
                  height: notPc
                    ? "85vh !important"
                    : notPc & (window.navigator.mobile === false)
                    ? "100vh"
                    : tablet
                    ? "100vh"
                    : "100vh",
                  backgroundImage: `url(${backgroundImageTwo})`,
                  backgroundSize: "cover",
                  backgroundPosition: notPc ? "60%" : "center",
                }}
                className={classes.itemContainer}
              ></Carousel.Item>
              <Carousel.Item
                style={{
                  width: "100%",
                  height: notPc
                    ? "85vh !important"
                    : notPc && window.navigator.mobile === false
                    ? "100vh"
                    : tablet
                    ? "100vh"
                    : "100vh",
                  backgroundImage: `url(${backgroundImageThree})`,
                  backgroundSize: "cover",
                  backgroundPosition: notPc ? "60%" : "center",
                }}
                className={classes.itemContainer}
              ></Carousel.Item>{" "}
            </Carousel>
            {/*Bottom Bar */}
            <motion.div
              initial={{ y: 30, opacity: -50 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 1.6,
                ease: "easeOut",
                duration: 1.4,
              }}
              style={{
                position: "absolute",
                bottom: "0vh",
                zIndex: 1001,
                width: "100%",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  zIndex: 1000,
                  width: "100%",
                  height: "12vh",
                  backgroundColor: bottomBarColor,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingLeft: "2vw",
                }}
              >
                <Typography
                  textTransform={"uppercase"}
                  fontFamily={"Kinetic"}
                  variant={notPc ? "h5" : "h4"}
                  color={bottomBarTxtColor}
                  sx={{
                    fontSize: galaxyFold && "medium !important",
                  }}
                >
                  {bottomBar}
                </Typography>

                <SouthIcon
                  onClick={() => scroll()}
                  sx={{
                    color: barArrow,
                    height: "45px",
                    width: "45px",
                    marginRight: "2vw",
                    cursor: "pointer",
                  }}
                />
              </Box>
            </motion.div>
            {home && (
              <motion.div
                initial={{ y: 20, opacity: -50 }}
                animate={{ y: 0, opacity: 100 }}
                transition={{
                  delay: 3,
                  ease: "easeOut",
                  duration: 1.4,
                }}
                style={{
                  position: "absolute",
                  bottom: "12vh",
                  zIndex: 1000,
                  color: `${bottomBarTxtColor}`,
                }}
              >
                <Typography
                  variant={galaxyFold ? "h4" : notPc ? "h3" : "h2"}
                  fontFamily={"Kinetic"}
                  color={"white"}
                  paddingLeft={"2vw"}
                  sx={{
                    textShadow: "0 3px 6px rgba(0,0,0,.161)",
                  }}
                >
                  WINTER 2024
                </Typography>
              </motion.div>
            )}
          </div>
        ) : (
          <Box
            sx={{
              width: "100%",
              height: tablet
                ? "100vh !important"
                : notPc
                ? "85vh"
                : mobile && window.navigator.mobile === false
                ? "100vh !important"
                : mobile
                ? "85vh"
                : "100vh",
              backgroundImage: `url(${backgroundImg})`,
              backgroundSize: "cover",
              backgroundPosition: notPc ? "60%" : "center",
              backgroundRepeat: "no-repeat",
              zIndex: 0,
              position: "relative",
            }}
          >
            {/*Bottom Bar */}
            <motion.div
              initial={{ y: 30, opacity: -50 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 1.6,
                ease: "easeOut",
                duration: 1.4,
              }}
              style={{
                position: "absolute",
                bottom: "0vh",
                zIndex: 1001,
                width: "100%",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  zIndex: 1002,
                  width: "100%",
                  height: "12vh",
                  backgroundColor: bottomBarColor,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingLeft: "2vw",
                }}
              >
                <Typography
                  textTransform={"uppercase"}
                  variant={notPc ? "h5" : "h4"}
                  fontFamily={"Kinetic"}
                  color={bottomBarTxtColor}
                  sx={{
                    fontSize: galaxyFold && "medium !important",
                  }}
                >
                  {bottomBar}
                </Typography>

                <SouthIcon
                  onClick={() => scroll()}
                  sx={{
                    color: barArrow,
                    height: "45px",
                    width: "45px",
                    marginRight: "1vw",
                    cursor: "pointer",
                    zIndex: 4000,
                  }}
                />
              </Box>
            </motion.div>
          </Box>
          // <img
          //   src={backgroundImg}
          //   alt=""

          //   style={{
          //     zIndex: "-90",
          //     width: '100%',
          //     height: notPc ? "86.5vh" : "100vh",
          //   }}
          // />
        )}
      </motion.div>{" "}
      {/*NAVBAR */}
      <motion.div
        initial={{ y: -30, opacity: -50 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 1.6,
          ease: "easeOut",
          duration: 1.6,
        }}
        style={{
          position: "fixed",
          top: 0,
          zIndex: 4000,
        }}
      >
        <Box
          sx={{
            zIndex: 1000,
            width: "100vw",
            height: "12vh",
            minHeight: "fit-content",
            backgroundColor: "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingLeft: "2vw",
            paddingRight: "2vw",
          }}
        >
          <NavLink to="/home">
            <img
              height={"40vh"}
              src={
                "https://cdn.discordapp.com/attachments/1084169150622093352/1109254673174642788/white_21.png"
              }
              alt=""
            />
          </NavLink>

          <Box
            className="navLink"
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            gap={"3vw"}
          >
            {(!notPc || tablet) && (
              <>
                {navbarArr.map((item) => (
                  <NavLink
                    hidden={
                      tablet && item.name === "AVAILABILITY" ? true : false
                    }
                    style={({ isActive }) => {
                      return {
                        textDecoration: "none",
                        color: "white",
                        fontFamily: "Kinetic",
                        borderBottom: isActive && "3px solid orange",
                      };
                    }}
                    to={item.href}
                    variant={"h2"}
                  >
                    {item.name === "CONTACT" ? "SCHEDULE A VISIT" : item.name}
                  </NavLink>
                ))}
              </>
            )}
            <Hamburger
              onToggle={(toggled) => (toggled ? handleShow() : handleClose())}
              color="#d3901c"
              size={35}
              distance="sm"
              direction={"right"}
              style={{
                zIndex: 4000,
              }}
            />
          </Box>
        </Box>
      </motion.div>
      <Offcanvas
        scroll={true}
        backdrop={false}
        placement="end"
        show={show}
        onHide={handleClose}
        style={{
          marginTop: "12vh",
          width: notPc ? "70vw" : "50vw",
        }}
      >
        <Offcanvas.Header></Offcanvas.Header>
        <Offcanvas.Body
          style={{
            textAlign: "end",
          }}
        >
          <List
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: !notPc ? "7vh" : "6vh",
              overflowY: "auto",
            }}
          >
            {navArr.map((item) => (
              <ListItem
                className={"navLinks"}
                sx={{
                  textAlign: "end",
                  position: "relative",
                }}
              >
                {item.href !== navArr[6].href ? (
                  <NavLink
                    style={({ isActive }) => {
                      return {
                        textDecoration: "none",
                        color: "black",
                        position: "absolute",
                        right: "1vw",
                        fontFamily: "Kinetic",
                        fontSize: !notPc ? "xx-large" : galaxyFold && "x-small",
                        borderBottom: isActive && "3px solid orange",
                      };
                    }}
                    to={item.href}
                    variant={notPc ? "h4" : "h2"}
                  >
                    {item.name}
                  </NavLink>
                ) : (
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      window.location.assign(item.href);
                    }}
                    style={{
                      textDecoration: "none",
                      color: "black",
                      position: "absolute",
                      right: "1vw",
                      fontFamily: "Kinetic",
                      fontSize: !notPc ? "xx-large" : galaxyFold && "x-small",
                    }}
                  >
                    {item.name}
                  </a>
                )}
              </ListItem>
            ))}
          </List>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Header;
