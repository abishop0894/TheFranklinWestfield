import React, { useState, useEffect } from "react";
import Page from "../Components/Page";
import Contact from "../Components/Contact";
import Header from "../Components/Header";
import Upper from "../assets/UPPER.png";
import { Button, Typography, Box } from "@mui/material";
import Modal from "react-bootstrap/Modal";
import WestIcon from "@mui/icons-material/West";
import "../App.css";
import useMediaQuery from "../Helpers/Hooks/UseMediaQuery";

const tabNav = [
  {
    id: 0,
    name: "all",
  },
  {
    id: 1,
    name: "Flats",
  },
  {
    id: 2,
    name: "Duplex",
  },
];

const tabContent = [
  {
    id: 0,
    residence: "A-1",
    bedBath: " 1 br / 1.5 bath",
    rent: "TBD",
    floorPlan: "View",
    category: "Flats",
    imgSrc:
      "https://cdn.discordapp.com/attachments/1084169150622093352/1110826914811236392/a-1.png",
  },

  {
    id: 1,
    residence: " A-2",
    bedBath: " 1 br / 1.5 bath",
    rent: "TBD",
    floorPlan: "View",
    category: "Flats",
    imgSrc:
      "https://cdn.discordapp.com/attachments/1084169150622093352/1110827768452763659/a-2.png",
  },
  {
    id: 2,
    residence: "B-1",
    bedBath: " 2 br / 2bath",
    rent: "TBD",
    floorPlan: "View",
    category: "Flats",
    imgSrc:
      "https://cdn.discordapp.com/attachments/1084169150622093352/1110827922878631957/b-1.png",
  },
  {
    id: 3,
    residence: " C-1",
    bedBath: " 2 br / 2 bath",
    rent: "TBD",
    floorPlan: "View",
    category: "Flats",
    imgSrc:
      "https://cdn.discordapp.com/attachments/1084169150622093352/1110828101727965274/c-1.png",
  },
  {
    id: 4,
    residence: " D-1",
    bedBath: " 2 br / 2 bath",
    rent: "TBD",
    floorPlan: "View",
    category: "Flats",
    imgSrc:
      "https://cdn.discordapp.com/attachments/1084169150622093352/1110828902160539688/d-1.png",
  },
  {
    id: 5,
    residence: " D-2",
    bedBath: " 2 br / 2 bath",
    rent: "TBD",
    floorPlan: "View",
    category: "Flats",
    imgSrc:
      "https://cdn.discordapp.com/attachments/1084169150622093352/1110829076308041728/d-2.png",
  },
  {
    id: 6,
    residence: " AH-1",
    bedBath: " 2 br / 2 bath",
    rent: "TBD",
    floorPlan: "View",
    category: "Flats",
    imgSrc:
      "https://cdn.discordapp.com/attachments/1084169150622093352/1110829246110236762/ah-1.png",
  },
  {
    id: 7,
    residence: " AH-2",
    bedBath: " 2 br / 2 bath",
    rent: "TBD",
    floorPlan: "View",
    category: "Flats",
    imgSrc:
      "https://cdn.discordapp.com/attachments/1084169150622093352/1110829401811189770/ah-2.png",
  },
  {
    id: 8,
    residence: " AH-3",
    bedBath: " 2 br / 2 bath",
    rent: "TBD",
    floorPlan: "View",
    category: "Flats",
    imgSrc:
      "https://cdn.discordapp.com/attachments/1084169150622093352/1110829524301660170/ah-3.png",
  },
  {
    id: 9,
    residence: " AH-4",
    bedBath: " 2 br / 2 bath",
    rent: "TBD",
    floorPlan: "View",
    category: "Flats",
    imgSrc:
      "https://cdn.discordapp.com/attachments/1084169150622093352/1110829647446417428/ah-4.png",
  },
  {
    id: 10,
    residence: " E-1",
    bedBath: " 2 br / 2 bath",
    rent: "TBD",
    floorPlan: "View",
    category: "Duplex",
    imgSrc:
      "https://cdn.discordapp.com/attachments/1084169150622093352/1110829848139661332/e-1.png",
  },
  {
    id: 11,
    residence: " E-1a",
    bedBath: " 2 br / 2 bath",
    rent: "TBD",
    floorPlan: "View",
    category: "Duplex",
    imgSrc:
      "https://cdn.discordapp.com/attachments/1084169150622093352/1110830294367477790/e-1a.png",
  },
  {
    id: 12,
    residence: " E-2",
    bedBath: " 2 br / 2 bath",
    rent: "TBD",
    floorPlan: "View",
    category: "Duplex",
    imgSrc:
      "https://cdn.discordapp.com/attachments/1084169150622093352/1110830473627840532/e-2.png",
  },
  {
    id: 13,
    residence: " E-3",
    bedBath: " 2 br / 2 bath",
    rent: "TBD",
    floorPlan: "View",
    category: "Duplex",
    imgSrc:
      "https://cdn.discordapp.com/attachments/1084169150622093352/1110830612333473822/e-3.png",
  },
  {
    id: 14,
    residence: " F-1",
    bedBath: " 2 br / 2 bath",
    rent: "TBD",
    floorPlan: "View",
    category: "Duplex",
    imgSrc:
      "https://cdn.discordapp.com/attachments/1084169150622093352/1110830742373679174/f-1.png",
  },
  {
    id: 15,
    residence: " F-2",
    bedBath: " 2 br / 2 bath",
    rent: "TBD",
    floorPlan: "View",
    category: "Duplex",
    imgSrc:
      "https://cdn.discordapp.com/attachments/1084169150622093352/1110830895964885032/f-2.png",
  },
  {
    id: 16,
    residence: " F-2a",
    bedBath: " 2 br / 2 bath",
    rent: "TBD",
    floorPlan: "View",
    category: "Duplex",
    imgSrc:
      "https://cdn.discordapp.com/attachments/1084169150622093352/1110831035505184808/f-2a.png",
  },
  {
    id: 17,
    residence: " G-1",
    bedBath: " 2 br / 2 bath",
    rent: "TBD",
    floorPlan: "View",
    category: "Duplex",
    imgSrc:
      "https://cdn.discordapp.com/attachments/1084169150622093352/1110831177977307166/g-a.png",
  },
  {
    id: 18,
    residence: " G-2",
    bedBath: " 2 br / 2 bath",
    rent: "TBD",
    floorPlan: "View",
    category: "Duplex",
    imgSrc:
      "https://cdn.discordapp.com/attachments/1084169150622093352/1110831293446496336/g-2.png",
  },
];

function Availability() {
  const notPc = useMediaQuery("(max-width: 950px)");
  const mobile = useMediaQuery("(max-width: 550px)");

  const modalSections = {
    left: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "3vh",
      backgroundColor: "black",
      color: "white",
      height: notPc ? "50vh" : "100vh",
      width: notPc ? "100%" : "50%",
    },

    right: {
      height: notPc ? "50vh" : "100vh",
      width: notPc ? "100vw" : "50vw",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  };

  const [rooms, setRooms] = useState(tabContent);

  const [active, setActive] = useState(0);

  const filterImages = (category) => {
    const filtered = tabContent.filter((element) => {
      return element.category === category;
    });
    setRooms(filtered);
  };
  const switchTabItems = (item) => {
    console.log(item.name);
    item.name === "all" ? setRooms(tabContent) : filterImages(item.name);
    setActive(item.id);
  };

  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router Dom v6
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Optional if you want to skip the scrolling animation
    });
  }, []);

  const [show, setShow] = useState(false);
  const [rent, setRent] = useState(null);
  const [residence, setResidence] = useState(null);
  const [bedBath, setBedBath] = useState(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [imgShow, setImgShow] = useState(false);
  return (
    <Page>
      <Header
        bottomBarColor={"black"}
        bottomBarTxtColor={"white"}
        barArrow={"#d3901c"}
        bottomBar={"Availability"}
        backgroundImg={Upper}
      />
      <section className="availabilityPage">
        <div className="galleryTabs">
          {tabNav.map((item) => {
            return (
              <div
                style={{
                  display: mobile && "flex",
                  flexDirection: mobile && "column",
                  fontFamily: "Kinetic",
                }}
              >
                <Typography
                  sx={{
                    padding: "0 10px 5px",
                    cursor: "pointer",
                    fontFamily: "Kinetic",
                    color: "black",
                  }}
                  key={item.id}
                  className={`tabMenu ${
                    item.id === active ? "active" : "inactive"
                  }`}
                  onClick={() => switchTabItems(item)}
                  variant={mobile ? "h6" : "h4"}
                >
                  {item.name.toString().toUpperCase()}
                </Typography>
              </div>
            );
          })}
        </div>

        <table className="table">
          <thead hidden={mobile && true}>
            <tr>
              <th>Residence</th>
              <th>Bed/Bath</th>
              <th>Rent</th>
              <th>Floor Plan</th>
            </tr>
          </thead>

          <tbody>
            {rooms.map((item) => {
              return mobile ? (
                <>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography fontFamily={"Kinetic"}>
                      {item.residence}
                    </Typography>
                    <Typography fontFamily={"Brooklyn"}>
                      {item.bedBath}
                    </Typography>
                    <Typography fontFamily={"Brooklyn"}>{item.rent}</Typography>
                    <Button
                      onClick={async () => {
                        setRent(item.rent);
                        setResidence(item.residence);
                        setBedBath(item.bedBath);
                        setImgSrc(item.imgSrc);
                        setShow(true);
                      }}
                    >
                      <Typography fontFamily={"Kinetic"} color={"black"}>
                        {item.floorPlan}
                      </Typography>
                    </Button>
                    <hr
                      style={{
                        width: "50vw",
                      }}
                    />
                  </Box>
                </>
              ) : (
                <tr key={item.id}>
                  <td aria-label="Residence">{item.residence}</td>
                  <td aria-label="Bed/Bath">{item.bedBath}</td>
                  <td aria-label="Rent">{item.rent}</td>
                  <td aria-label="Floor Plan">
                    <Button
                      onClick={async () => {
                        setRent(item.rent);
                        setResidence(item.residence);
                        setBedBath(item.bedBath);
                        setImgSrc(item.imgSrc);
                        setShow(true);
                      }}
                    >
                      <Typography
                        color={"black"}
                        marginTop={"-1vh"}
                        fontFamily={"Kinetic"}
                      >
                        {item.floorPlan}
                      </Typography>
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Modal
          show={show}
          animation={false}
          fullscreen={true}
          onHide={() => setShow(false)}
          style={{
            display: "flex",
            zIndex: 5000,
          }}
        >
          <Modal.Body
            style={{
              display: "flex",
              flexDirection: notPc ? "column" : "row",
              padding: 0,
            }}
          >
            <section style={modalSections.left}>
              <Button
                sx={{
                  width: "15vw",
                  position: "absolute",
                  top: "1vh",
                  left: "70px",
                }}
                startIcon={
                  <WestIcon
                    sx={{ width: "45px", height: "45px", color: "#d3901c" }}
                  />
                }
                onClick={() => setShow(false)}
              >
                <Typography fontFamily={"Kinetic"} color={"white"}>
                  BACK
                </Typography>
              </Button>
              <Typography fontFamily={"Kinetic"} variant={"h5"}>
                {residence}
              </Typography>
              <Typography fontFamily={"Brooklyn"} variant="h5">
                {bedBath}
              </Typography>
              <Typography fontFamily={"Brooklyn"} variant="h5">
                {rent}
              </Typography>
            </section>
            <section style={modalSections.right}>
              <Box
                width={"100%"}
                height={"100%"}
                onClick={() => setImgShow(true)}
                sx={{
                  backgroundImage: `url(${imgSrc})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPositionX: "center",
                  backgroundPositionY: "center",
                }}
              ></Box>
            </section>
          </Modal.Body>
        </Modal>
        {/*img modal */}
        <Modal
          show={imgShow}
          animation={false}
          fullscreen={true}
          onHide={() => setImgShow(false)}
          style={{
            zIndex: 6000,
          }}
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                height: notPc ? "50vh" : "100vh",
                width: notPc ? "100vw" : "50vw",
                backgroundImage: `url(${imgSrc})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPositionX: "center",
                backgroundPositionY: "center",
              }}
            ></Box>
          </Modal.Body>
        </Modal>
      </section>
      <Contact />
    </Page>
  );
}

export default Availability;
