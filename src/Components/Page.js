import Box from "@mui/material/Box";

const Page = ({ children }) => {
  return (
    <Box
      maxWidth={"100%"}
      width={"100%"}
      overflow={"hidden"}
      height={"auto"}
      minHeight={"fit-content"}
      display={"flex"}
      flexDirection={"column"}
      flex={"auto"}
    >
      {children}
    </Box>
  );
};

export default Page;
