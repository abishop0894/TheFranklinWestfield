import Contact from "../Components/Contact";
import { motion } from "framer-motion";
import { Fade as Hamburger } from "hamburger-react";
import Box from "@mui/material/Box";
import Logo from "../assets/logowhyte.png";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { List, ListItem, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import useMediaQuery from "../Helpers/Hooks/UseMediaQuery";

const ContactPage = () => {
  const tablet = useMediaQuery("(min-width: 601px) and (max-width: 950px)");
  const notPc = useMediaQuery("(max-width: 950px)");
  const galaxyFold = useMediaQuery("(width: 280px) and (max-height: 653px)");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
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

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

  return (
    <>
      <Box
        sx={{
          backgroundColor: "black",
          height: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
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
              className={"navLink"}
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
                direction={"right"}
                style={{
                  zIndex: 4000,
                }}
              />
            </Box>
          </Box>
        </motion.div>
        <Contact contactPage={true} />
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
          <Offcanvas.Body>
            <List
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: !notPc ? "7vh" : "6vh",
                overflowY: "auto",
                paddingTop: "2vh",
              }}
            >
              {navArr.map((item) => (
                <ListItem
                  className="navLinks"
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
                          fontSize: !notPc
                            ? "xx-large"
                            : galaxyFold && "x-small",
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
      </Box>
    </>
  );
};

export default ContactPage;
