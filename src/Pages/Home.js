import Header from "../Components/Header";
import LeftRight from "../Components/LeftRight";
import Contact from "../Components/Contact";
import "../App.css";
import Page from "../Components/Page";
import MapLR from "../Components/MapLR";
import Navbar from "../Components/Nav";
import { useEffect } from "react";
import useMediaQuery from "../Helpers/Hooks/UseMediaQuery";

const Home = () => {
  const notPc = useMediaQuery("(max-width: 950px)");

  const galaxyFold = useMediaQuery("(width: 280px) and (max-height: 653px)");
  const text = "Resident Lobby Lounge";
  const residences =
    "https://cdn.discordapp.com/attachments/1084169150622093352/1105920037988089976/resi.png";
  const amenities =
    "https://cdn.discordapp.com/attachments/1084169150622093352/1091921608039485493/theatre.png";
  const neighborhood =
    "https://cdn.discordapp.com/attachments/980168318151450717/1096407243513155624/f95e6cc849a2c09da2f637a8c5a8a492.webp";
  const imgOne =
    "https://cdn.discordapp.com/attachments/1084169150622093352/1084169176605806692/FHqnLsks.png";
  const imgTwo =
    "https://cdn.discordapp.com/attachments/1084169150622093352/1084170897977520228/POOL_5.png";
  const imgThree =
    "https://cdn.discordapp.com/attachments/1084169150622093352/1084171001270640791/LOUNGE_4.png";

  const content = [
    {
      title: "A new level of living",
      content:
        "The brand new residences of The Franklin offer sophisticated style with a close eye on your comfort and convenience. Chef-inspired kitchens, expansive layouts and superior finishes combine to create an unrivaled lifestyle in the heart of Westfield.",
    },
    {
      title: "A wealth of luxuries await",
      content:
        "Experience a seamless lifestyle at The Franklin's dynamic amenity spaces. Relax in state-of-the-art lounges or outdoor escapes. Your new home comes with indulgent extensions for your everyday living.",
    },
    {
      title: "An address of distinction",
      content:
        "Find yourself in a Union County oasis known for suburban tranquility with a delightfully transit-friendly location. Shopping, restaurants, and cafes abound alongside beautiful parks and open green spaces.",
    },
  ];

  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router Dom v6
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Optional if you want to skip the scrolling animation
    });
  }, []);

  return (
    <>
      <Page>
        <Header
          home={true}
          bottomBarColor={"#d3901c"}
          bottomBarTxtColor={"black"}
          bottomBar={"Coming Soon!"}
          backgroundImageOne={imgOne}
          backgroundImageTwo={imgTwo}
          backgroundImageThree={imgThree}
          barArrowHref={"#first"}
          barArrow={"black"}
        />
        <LeftRight
          id={"first"}
          title={content[0].title}
          image={residences}
          rightLeft={true}
          content={content[0].content}
          backgroundColor={"black"}
          titleStyles={{
            color: "#d3901c",
          }}
          color={"white"}
          homePage={true}
          href={"/residences"}
          btnContent={"RESIDENCES"}
          backgroundPos={"20%"}
          btnTxtColor={"#d3901c"}
          btnColor={"white"}
        />
        <LeftRight
          backgroundColor={"#d3901c"}
          href={"/amenities"}
          color={"black"}
          title={content[1].title}
          image={amenities}
          backgroundPos={"70%"}
          rightLeft={notPc ? true : false}
          content={content[1].content}
          titleStyles={{
            color: "white",
          }}
          homePage={true}
          btnContent={"AMENITIES"}
          btnTxtColor={"white"}
          btnColor={"black"}
        />
        <LeftRight
          title={content[2].title}
          image={neighborhood}
          rightLeft={true}
          href={"/neighborhood"}
          content={content[2].content}
          backgroundColor={"#e8e8e8"}
          titleStyles={{
            color: "#d3901c",
          }}
          homePage={true}
          btnContent={"NEIGHBORHOOD"}
          btnTxtColor={"black"}
          btnColor={"#d3901c"}
        />
        <Contact />
      </Page>
    </>
  );
};

export default Home;
