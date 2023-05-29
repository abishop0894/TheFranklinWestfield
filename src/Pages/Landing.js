import { Box, Typography, Button } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Viewer } from "../Components/Viewer";
import useMediaQuery from "../Helpers/Hooks/UseMediaQuery";
import EastIcon from "@mui/icons-material/East";
import { NavLink } from "react-router-dom";

const Landing = () => {
  const [color, setColor] = useState("black");

  setTimeout(() => {
    setColor("white");
  }, 6500);

  const mobile = useMediaQuery("(max-width: 550px)");
  const galaxyFold = useMediaQuery("(width: 280px) and (max-height: 653px)");

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: mobile ? "85vh" : "100vh",
        position: "relative",
        zIndex: 1000,
        backgroundColor: color,
        alignItems: "center",
        justifyContent: "center",
        overflowX: "hidden",
        overflowY: "hidden",
        transitionDuration: "2s",
        margin: 0,
      }}
    >
      <AnimatePresence>
        <motion.div
          initial={{ x: -window.innerWidth, opacity: -50 }}
          animate={{
            x: window.innerWidth / 3,
            opacity: [0, 1, 2, 3, 4, 5, 6, -50],
          }}
          transition={{
            delay: 0.5,
            ease: "easeOut",
            duration: "3",
          }}
        >
          <Box>
            <Typography
              sx={{
                textShadow: "0 3px 6px rgba(0,0,0,.161)",
              }}
              fontFamily={"Kinetic"}
              color={"white"}
              variant={"h4"}
            >
              WINTER 2024
            </Typography>
          </Box>
        </motion.div>
      </AnimatePresence>

      <motion.div
        initial={{ x: window.innerWidth, opacity: -50 }}
        animate={{
          x: -window.innerWidth / 3,
          opacity: [0, 1, 2, 3, 4, 5, 6, 7, -50],
        }}
        transition={{
          delay: 3,
          ease: "easeOut",
          duration: "3",
        }}
      >
        <Box>
          <img
            src={
              "https://cdn.discordapp.com/attachments/1084169150622093352/1108830690931376138/adoni1_1.webp"
            }
            alt=""
          />

          <center>
            <Typography
              sx={{
                textShadow: "0 3px 6px rgba(0,0,0,.161)",
              }}
              fontFamily={"Kinetic"}
              color={"white"}
              variant={"h4"}
            >
              PRESENTS
            </Typography>
          </center>
        </Box>
      </motion.div>
      {/*NAVBAR */}
      <motion.div
        initial={{ y: -30, opacity: -50 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 8,
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
            zIndex: 4000,
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
          <a href="/">
            <img
              height={"40vh"}
              src={
                "https://cdn.discordapp.com/attachments/1084169150622093352/1109254673174642788/white_21.png"
              }
              alt=""
            />
          </a>
          <NavLink
            to={"/home"}
            style={{
              textDecoration: "none",
            }}
          >
            {" "}
            <Button
              endIcon={
                <EastIcon
                  hidden={galaxyFold && true}
                  sx={{ color: "#d3901c", width: "44px", height: "45px" }}
                />
              }
            >
              <Typography
                variant={mobile ? "p" : "h6"}
                fontSize={galaxyFold && "x-small"}
                color={"white"}
                fontFamily={"Kinetic"}
              >
                ENTER
              </Typography>
            </Button>
          </NavLink>
        </Box>
      </motion.div>

      {color === "white" && (
        <motion.div
          initial={{ opacity: -50 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 3.5,
            ease: "easeOut",
            duration: 1.6,
          }}
        >
          <Viewer />;
        </motion.div>
      )}
    </Box>
  );
};

export default Landing;
