import Box from "@mui/material/Box";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles((theme) => ({
  bottom: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: "yellow",
    zIndex: "1000 !important",
  },
}));

const BottomBar = (props) => {
  const classes = useStyles();
  const { text } = props;
  return (
    <Box className={classes.bottom}>
      <Typography variant="h4">{text}</Typography>
    </Box>
  );
};

export default BottomBar;
