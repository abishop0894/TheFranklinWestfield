import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import useMediaQuery from "../Helpers/Hooks/UseMediaQuery";
import "../App.css";

const NotFound = () => {
  const notPc = useMediaQuery("(max-width: 990px)");
  const galaxyFold = useMediaQuery("(width: 280px) and (max-height: 653px)");

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100vh",
        backgroundColor: "black",
        color: "white",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Kinetic",
        flexDirection: "row",
        gap: ".5vw",
      }}
    >
      <Typography
        fontFamily={"Kinetic"}
        variant={galaxyFold ? "h6" : notPc ? "h5" : "h3"}
        sx={{
          borderRight: "1.5px solid white",
        }}
      >
        404
      </Typography>
      <Typography
        fontFamily={"Kinetic"}
        variant={galaxyFold ? "h6" : notPc ? "h5" : "h3"}
      >
        NOT FOUND
      </Typography>
    </Box>
  );
};

export default NotFound;
