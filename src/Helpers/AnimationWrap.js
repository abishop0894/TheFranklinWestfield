import { useRef } from "react";
import { useInView } from "framer-motion";
import Box from "@mui/material/Box";

const AnimationWrap = ({
  children,
  contact,
  customW,
  customH,
  gap,
  picture,
  gallery,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerStyle = {
    transform: isInView ? "none" : picture ? "none" : "translateY(20px)",
    opacity: isInView ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
    backgroundColor: contact && "black",
  };

  return (
    <Box
      sx={containerStyle}
      ref={ref}
      display={"flex"}
      width={contact ? customW : "fit-content"}
      height={contact ? customH : "fit-content"}
      flex={contact && "auto"}
      alignItems={contact && "center"}
      flexDirection={contact && "column"}
      gap={gap}
      paddingTop={contact && "18vh"}
      paddingBottom={contact && "2vh"}
    >
      {children}
    </Box>
  );
};

export default AnimationWrap;
