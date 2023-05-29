import { useRef } from "react";
import { useInView } from "framer-motion";
import Box from "@mui/material/Box";

const PicReveal = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const containerStyle = {
    transform: "none",
    opacity: isInView ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
  };
  return (
    <Box
      sx={containerStyle}
      ref={ref}
      display={"flex"}
      width={"fit-content"}
      height={"fit-content"}
    >
      {children}
    </Box>
  );
};

export default PicReveal;
