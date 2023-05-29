import { Button, Typography } from "@mui/material";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Box from "@mui/material/Box";

import AnimationWrap from "../Helpers/AnimationWrap";

import EastIcon from "@mui/icons-material/East";
import useMediaQuery from "../Helpers/Hooks/UseMediaQuery";
import "../App.css";
import { NavLink } from "react-router-dom";

const LeftRight = (props) => {
  const {
    image,
    title,
    content,
    rightLeft,
    titleStyles,
    backgroundColor,
    color,
    homePage,
    btnContent,
    btnColor,
    btnTxtColor,
    backgroundPos,
    id,
    href,
  } = props;

  const sideProfile = window.innerHeight < 450;

  const notPc = useMediaQuery("(max-width: 950px)");
  const mobile = useMediaQuery("(max-width: 600px)");
  const galaxyFold = useMediaQuery("(width: 280px) ");
  const nestHub = useMediaQuery("(max-width: 1024px) and (max-height: 600px)");
  const iPadMiniLandscape = useMediaQuery(
    "(max-width: 1024px) and (max-height: 768px)"
  );
  const iPadPro = useMediaQuery("(max-width: 1024px) and (max-height: 1366px)");

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const containerStyle = {
    transform: "none",
    opacity: isInView ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
  };

  const titleFilter = [
    "LIVING SPACE" || "WESTFIELD" || "KITCHEN" || "FEATURED AMENITIES",
  ];

  return (
    <>
      <Box
        width={"auto"}
        minWidth={"100%"}
        overflow={"hidden"}
        margin={0}
        height={sideProfile ? "170vh !important" : "90vh"}
        display={"flex"}
        flexDirection={notPc ? "column" : "row"}
        flex={"auto"}
      >
        {!rightLeft ? (
          <>
            <Box
              id={id}
              width={"auto"}
              minWidth={notPc ? "100%" : "55vw"}
              height={
                sideProfile ? "100% !important" : mobile ? "50vh" : "100%"
              }
              minHeight={"fit-content"}
              ref={ref}
              sx={{
                padding: "0px",
                backgroundImage: `url(${image})`,
                backgroundPosition: backgroundPos,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat !important",
                ...containerStyle,
              }}
            ></Box>
            <Box
              width={notPc ? "100%" : "45vw"}
              height={
                sideProfile
                  ? "120vh"
                  : mobile
                  ? "70vh"
                  : notPc
                  ? "60vh"
                  : "100%"
              }
              display={"flex"}
              alignItems={!notPc ? "flex-start" : "center"}
              justifyContent={"center"}
              flexDirection={"column"}
              sx={{
                backgroundColor: backgroundColor,
                color: color,
                textAlign: notPc ? "center" : "left",
                paddingLeft:
                  nestHub || iPadMiniLandscape || iPadPro ? "2vw" : "4vw",
                paddingRight: "4vw",
                gap: "3vh",
              }}
            >
              {title && (
                <AnimationWrap picture={false}>
                  <Typography
                    paddingLeft={"4vw"}
                    fontFamily={"Kinetic"}
                    textTransform={"uppercase"}
                    sx={titleStyles}
                    textAlign={!notPc && "left"}
                    variant={notPc ? "h5" : "h4"}
                  >
                    {title}
                  </Typography>
                </AnimationWrap>
              )}
              {/*coditional rendering for lists */}
              <AnimationWrap>
                <Box
                  minHeight={"fit-content"}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: notPc ? "center" : "left",
                    paddingLeft: "4vw",
                    paddingRight: "4vw",
                    gap: "3vh",
                    lineHeight: mobile ? "1.3" : nestHub ? "1.6" : "2",
                    fontFamily: "Brooklyn",
                    fontSize: "1rem",
                  }}
                >
                  {content}

                  {homePage && (
                    <NavLink
                      style={{
                        textDecoration: "none",
                        display: "flex",
                        alignSelf: notPc ? "center" : "flex-start",
                      }}
                      to={`${href}`}
                    >
                      <Button
                        sx={{
                          display: "flex",
                          alignSelf: notPc ? "center" : "flex-start",
                          color: btnTxtColor,
                          fontSize: mobile ? "large" : "x-large",
                          fontFamily: "Kinetic",
                          marginLeft: (nestHub || iPadMiniLandscape) && "-1vw",
                          marginBottom:
                            mobile &&
                            (btnContent === "AMENITIES" || "RESIDENCES") &&
                            "1.5vh",
                        }}
                        variant={"text"}
                        endIcon={
                          <EastIcon
                            className="icon"
                            style={{
                              height: "45px",
                              width: "45px",
                              color: btnColor,
                            }}
                          />
                        }
                      >
                        {btnContent}
                      </Button>
                    </NavLink>
                  )}
                </Box>
              </AnimationWrap>
            </Box>{" "}
          </>
        ) : (
          <>
            <Box
              id={id}
              width={notPc ? "100%" : "45vw"}
              height={
                sideProfile
                  ? "120vh !important"
                  : mobile
                  ? "70vh"
                  : notPc
                  ? "45vh"
                  : "100%"
              }
              display={"flex"}
              alignItems={!notPc ? "flex-start" : "center"}
              flexDirection={"column"}
              flex={"auto"}
              paddingLeft={!notPc && "3vw"}
              justifyContent={"center"}
              minHeight={"fit-content"}
              sx={{
                backgroundColor: backgroundColor,
                color: color,
                display: "flex",
                flexDirection: "column",
                textAlign: notPc ? "center" : "left",
                paddingLeft: "4vw",
                paddingRight: "4vw",
                gap: "3vh",
                lineHeight: "2",
              }}
            >
              {title && (
                <AnimationWrap picture={false}>
                  <Typography
                    paddingLeft={
                      nestHub || iPadMiniLandscape || iPadPro ? "2vw" : "4vw"
                    }
                    sx={titleStyles}
                    fontFamily={"Kinetic"}
                    textTransform={"uppercase"}
                    variant={galaxyFold ? "h6" : notPc ? "h5" : "h4"}
                    textAlign={!notPc && "left"}
                  >
                    {title}
                  </Typography>
                </AnimationWrap>
              )}
              {/*coditional rendering for lists */}
              <AnimationWrap>
                <Box
                  minHeight={"fit-content"}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    lineHeight: mobile
                      ? "1.3"
                      : nestHub || iPadMiniLandscape || iPadPro
                      ? "1.6"
                      : "2",
                    paddingLeft:
                      nestHub || iPadMiniLandscape || iPadPro ? "2vw" : "4vw",
                    paddingRight: "4vw",
                    gap: "3vh",
                    fontFamily: "Brooklyn",
                  }}
                >
                  {content}
                  {homePage && (
                    <NavLink
                      style={{
                        textDecoration: "none",
                        display: "flex",
                        alignSelf: notPc ? "center" : "flex-start",
                      }}
                      to={`${href}`}
                    >
                      <Button
                        sx={{
                          color: btnTxtColor,
                          fontSize: galaxyFold
                            ? "medium"
                            : mobile
                            ? "large"
                            : "x-large",
                          display: "flex",
                          alignSelf: notPc ? "center" : "flex-start",
                          fontFamily: "Kinetic",
                          marginLeft:
                            (nestHub || iPadMiniLandscape || iPadPro) && "-1vw",
                        }}
                        variant="text"
                        endIcon={
                          <EastIcon
                            className="icon"
                            style={{
                              height: "45px",
                              width: "45px",
                              color: btnColor,
                            }}
                          />
                        }
                      >
                        {btnContent}
                      </Button>
                    </NavLink>
                  )}
                </Box>
              </AnimationWrap>
            </Box>

            <Box
              ref={ref}
              width={notPc ? "100%" : "55vw"}
              height={sideProfile ? "100%" : mobile ? "50vh" : "100%"}
              sx={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: backgroundPos,
                backgroundRepeat: "no-repeat !important",
                ...containerStyle,
              }}
            ></Box>
          </>
        )}
      </Box>
    </>
  );
};

export default LeftRight;
