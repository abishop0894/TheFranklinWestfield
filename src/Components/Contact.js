import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@mui/material/TextField";
import { Typography, Button, Divider } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AnimationWrap from "../Helpers/AnimationWrap";
import adoni from "../assets/adoni.svg";
import tmd from "../assets/tmd.svg";
import { fontSize } from "@mui/system";
import { grey } from "@mui/material/colors";
import EastIcon from "@mui/icons-material/East";
import { useState } from "react";
import useMediaQuery from "../Helpers/Hooks/UseMediaQuery";

const Contact = ({ contactPage }) => {
  const sideProfile = useMediaQuery("(max-height: 450px)");
  const notPc = useMediaQuery("(max-width: 950px) and (min-width: 501)");
  const mobile = useMediaQuery("(max-width: 600px)");
  const galaxyFold = useMediaQuery("(width: 280px)");
  const tablet = useMediaQuery("min-width: 601px and (max-width: 950px)");
  const useStyles = makeStyles((theme) => ({
    form: {
      width: mobile ? "85vw" : "60vw",
      display: "flex",
      gap: "2vh",
      marginBottom: "2vh",
    },
    footer: {
      color: "white",
      display: "flex",
      flexDirection: "column",
      minHeight: "fit-content",
    },
    topFooter: {
      display: "flex",
      flexDirection: "row",
      maxWidth: "90vw",
      height: "fit-content",
      alignItems: "center",
      flexWrap: "wrap",
      justifyContent: "center",
      textAlign: "center",
      gap: "1vw",
    },
    emailButton: {
      color: "white",
      borderLeft: ".5px solid #d3901c",
      borderRight: ".5px solid #d3901c",
      borderTop: "0px",
      borderBottom: "0px",
      backgroundColor: "transparent",
      width: "auto",
      minWidth: "fit-content",
      height: "fit-content",
    },
    bottomFooter: {
      display: "flex",
      flexDirection: "row",
      gap: "1vw",
      width: mobile ? "90%" : "fit-content",
      flexWrap: mobile && "wrap",
      height: "fit-content",
      justifyContent: "center",
      alignItems: "center",
    },
  }));

  const theme = createTheme({
    palette: {
      primary: {
        main: grey[50],
      },
    },
  });

  const formContent = [
    {
      label: "Name",
      className: "name",
      required: true,
    },
    {
      label: "Phone Number",
      className: "phone",
      required: true,
    },
    {
      label: "E-mail",
      className: "email",
      required: true,
    },
    {
      label: "Move-In-Date",
      className: "date",
      required: false,
    },
    {
      label: "Message",
      className: "message",
      required: false,
    },
  ];

  const classes = useStyles();

  const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const submission = async (name, number, email) => {
    await setErrState(false);
    await setSubmitState(true);
    await setTimeout(() => {
      setSubmitState(false);
    }, 2000);
    const valOne = String(name);
    const valTwo = number;

    console.log(name);
    if (valOne === "null") {
      return setTimeout(() => setErrState(true), 2000);
    }
    if (!Number(valTwo)) {
      return setTimeout(() => setErrState(true), 2000);
    }

    if (emailRegex.test(email) === false) {
      return setTimeout(() => setErrState(true), 2000);
    }

    return setAccepted(true);
  };

  const [submitState, setSubmitState] = useState(false);
  const [errState, setErrState] = useState(false);
  const [nameField, setNameField] = useState(null);
  const [phoneNumberField, setPhoneNumberField] = useState(null);
  const [emailField, setEmailField] = useState(null);
  const [dateField, setDateField] = useState(null);
  const [messageField, setMessageField] = useState(null);
  const [accepted, setAccepted] = useState(false);

  return (
    <Box
      sx={{
        width: "100%",
        height: "fit-content",
        backgroundColor: "black",
      }}
    >
      {" "}
      {accepted ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "40vh",
            width: "100%",
          }}
        >
          <center>
            <Typography variant="h6" color={"white"} fontFamily={"Kinetic"}>
              THANK YOU FOR YOUR INQUIRY
            </Typography>
          </center>
        </Box>
      ) : (
        <AnimationWrap
          contact={true}
          gap={notPc || mobile ? "7vh" : contactPage ? ".5vh" : "15vh"}
          customH={"fit-content"}
          customW={"100%"}
        >
          {" "}
          <Typography
            width={"60vw"}
            variant={mobile ? "h6" : "h4"}
            color={"white"}
            textAlign={"center"}
            fontFamily={"Kinetic"}
          >
            SAVE YOUR SPOT <span style={{ color: "#d3901c" }}>TODAY</span>
          </Typography>{" "}
          <Box minHeight={"fit-content"} minWidth={"fit-content"}>
            <ThemeProvider theme={theme}>
              <FormControl className={classes.form}>
                {formContent.map((item) => (
                  <TextField
                    onInput={(e) => {
                      item.className === "name" && setNameField(e.target.value);
                      item.className === "phone" &&
                        setPhoneNumberField(e.target.value);
                      item.className === "email" &&
                        setEmailField(e.target.value);
                      item.className === "date" && setDateField(e.target.value);
                      item.className === "message" &&
                        setMessageField(e.target.value);
                    }}
                    sx={{
                      color: "white",
                      borderBottom: ".2px solid white",
                      input: { color: "white !important" },
                    }}
                    InputLabelProps={{
                      style: { color: "#fff", fontFamily: "Brooklyn" },
                    }}
                    id="standard-basic"
                    label={item.label}
                    variant="standard"
                    margin="dense"
                    className={item.className}
                    required={item.required}
                  />
                ))}
                <Typography
                  variant="h5"
                  fontFamily={"Brooklyn"}
                  color={"white"}
                  hidden={!errState}
                >
                  Please enter a valid response.
                </Typography>
                <Button
                  disabled={submitState ? true : false}
                  onClick={(e) => {
                    e.preventDefault();
                    submission(nameField, phoneNumberField, emailField);
                  }}
                  style={{
                    color: submitState ? "white" : "#d3901c",
                    fontSize: "x-large",
                    fontWeight: "bolder",
                    display: "flex",
                    alignSelf: "flex-start",
                    marginLeft: "-.5vw",
                    fontFamily: "Kinetic",
                  }}
                  variant="text"
                  endIcon={
                    <EastIcon
                      hidden={submitState}
                      style={{
                        height: "45px",
                        width: "45px",
                        color: "white",
                      }}
                    />
                  }
                >
                  {submitState ? "SENDING ..." : "SUBMIT"}
                </Button>
              </FormControl>
            </ThemeProvider>
          </Box>
          {window.innerWidth < 920 && (
            <Divider
              sx={{
                backgroundColor: "white",
                width: "100%",
              }}
            />
          )}
          <Box className={classes.footer}>
            <center>
              <Box className={classes.topFooter}>
                <Typography
                  variant={!notPc && "h6"}
                  fontSize={mobile && "medium"}
                  fontFamily={"Brooklyn"}
                  color={"white"}
                >
                  526 North Avenue E, Westfield NJ 07090
                </Typography>
                <Button
                  sx={{
                    color: "white",
                    borderLeft: !notPc && "1px solid #d3901c",
                    borderRight: notPc ? "0px" : "1px solid #d3901c",
                    borderTop: "0px",
                    border: mobile && "0px",
                    borderBottom: "0px",
                    backgroundColor: "transparent",
                    width: "fit-content",
                    height: "3vh",
                    borderRadius: "0px",
                  }}
                  onClick={() => {
                    window.location.href =
                      "mailto:leasing@adonipropertygroup.com?subject=&body=";
                  }}
                >
                  <Typography
                    padding={"0px"}
                    variant={!notPc && "h6"}
                    fontSize={galaxyFold ? " small" : mobile && "medium"}
                    fontFamily={"Brooklyn"}
                    textTransform={"none"}
                  >
                    Leasing@AdoniPropertyGroup.com
                  </Typography>
                </Button>
                <Button
                  onClick={() => window.open("tel:9737822220")}
                  sx={{
                    border: "0px",
                    backgroundColor: "transparent",
                  }}
                >
                  <Typography
                    color={"white"}
                    padding={"0px"}
                    variant={!notPc && "h6"}
                    fontSize={mobile && "medium"}
                    fontFamily={"Brooklyn"}
                  >
                    973.782.2220
                  </Typography>
                </Button>
              </Box>
            </center>
            <center>
              <Box className={classes.bottomFooter}>
                <img
                  style={{
                    marginTop: "1vh",
                    marginBottom: "1vh",
                  }}
                  src={adoni}
                  alt=""
                />

                <Typography
                  variant="caption"
                  textAlign={mobile ? "center" : "left"}
                  fontFamily={"Brooklyn"}
                  sx={{
                    fontSize: "xx-small !important",
                  }}
                >
                  *Rate reflects net effective rent after 3 free months on 12
                  month leases, or 1 free month on 12 month leases for already{" "}
                  {!mobile && <br />} reduced homes. Offer applies to leases
                  beginning on or before 12/31/23. Tenant pays gross rent with
                  the exception of free {!mobile && <br />}
                  months. Please call our leasing office for more details.
                  {mobile && <br />} • Privacy policy
                </Typography>
              </Box>
            </center>
          </Box>
        </AnimationWrap>
      )}
    </Box>
  );
};

export default Contact;
