import Header from "../Components/Header";
import LeftRight from "../Components/LeftRight";
import Contact from "../Components/Contact";
import "../App.css";
import Page from "../Components/Page";
import { useEffect, useState } from "react";
import useMediaQuery from "../Helpers/Hooks/UseMediaQuery";

const Amenities = () => {
  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router Dom v6
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Optional if you want to skip the scrolling animation
    });
  }, []);

  const notPc = useMediaQuery("(max-width: 950px)");

  const text = "Resident Lobby Lounge";
  const urlOne =
    "https://cdn.discordapp.com/attachments/1084169150622093352/1112388001981538324/UPPER_FLOOR_CONFERENCE_RM.png";
  const urlTwo =
    "https://cdn.discordapp.com/attachments/1084169150622093352/1112388060081049620/UPPER_FLOOR_GYM_2.png";

  const amnPic =
    "https://cdn.discordapp.com/attachments/1084169150622093352/1091921608039485493/theatre.png";

  const listOne = [
    "One Complimentary Reserved Indoor Parking Space",
    "Electric Vehicle Charging Capabilities",
    "Patio With Fire Pits, BBQ Stations & Pergolas",
    "State-Of-The-Art Fitness Center",
    "Movie Screening Room",
    "Multisport Simulator",
    "Resident Lounge & Event Space",
    "Private Conference Room & Workspaces",
    "Children's Playroom",
  ];

  const listTwo = [
    "Resident Lobby Lounge",
    "Remote Entry Access",
    "Secured Package System By Package Concierge",
    "Keyless Door Locks",
    "Pet Washing Station",
    "Dog Run",
    "Private Storage Lockers Available",
    "Bicycle Storage",
  ];

  return (
    <>
      <Page>
        <Header
          home={false}
          bottomBarColor={"black"}
          bottomBarTxtColor={"white"}
          bottomBar={"Amenities"}
          barArrow={"#d3901c"}
          backgroundImg={amnPic}
        />
        <LeftRight
          title={<>Featured {!notPc && <br />} Amenities</>}
          titleStyles={{
            color: "white",
            paddingLeft: !notPc && "4.5vw",
          }}
          backgroundColor={"#d3901c"}
          image={urlOne}
          rightLeft={true}
          backgroundPos={"center"}
          content={
            <ul
              style={{
                textAlign: "left",
              }}
            >
              {listOne.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          }
        />
        <LeftRight
          title={false}
          image={urlTwo}
          backgroundColor={"#d3901c"}
          rightLeft={notPc ? true : false}
          content={
            <ul
              style={{
                textAlign: "left",
              }}
            >
              {listTwo.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          }
        />

        <Contact />
      </Page>
    </>
  );
};

export default Amenities;
