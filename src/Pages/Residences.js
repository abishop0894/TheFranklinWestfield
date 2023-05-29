import Header from "../Components/Header";
import Contact from "../Components/Contact";
import LeftRight from "../Components/LeftRight";
import Page from "../Components/Page";
import residence from "../assets/resi.png";
import two from "../assets/roofTop.png";
import lounge from "../assets/LOUNGE.png";
import { useEffect } from "react";
import useMediaQuery from "../Helpers/Hooks/UseMediaQuery";
import night from "../assets/night.png";
import "../App.css";

const Residences = () => {
  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router Dom v6
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Optional if you want to skip the scrolling animation
    });
  }, []);

  const notPc = useMediaQuery("(max-width: 950px)");
  const mobile = useMediaQuery("(max-width: 600px)");

  const livingSpace = [
    "9' Ceilings",
    "Luxury Plank Flooring",
    "Custom Built Closets",
    "In-Home Vented Washer & Dryer By GE",
    "Complimentary Window Treatments",
    "Juliet Balconies & Terraces Available On Select Homes*",
  ];

  const kitchen = [
    "Chic Open Kitchen Layouts",
    "Quartz Waterfall Island",
    "Full Height Subway Tile Backsplash",
    "Sleek Full-Sized GE Stainless Steel Appliances",
    "5-Burner Gas Range With Griddle",
    "Sculptural Vented Oven Hood",
    "Custom Two-Tone Soft Close Cabinetry",
    "Matte Black Moen Integral Faucet With Vegetable Spray",
  ];

  const bathroom = [
    "Custom Soft Close Vanities",
    "Quartz Countertop",
    "Mosaic Tiled Backsplash",
    "Custom Storage Niche",
    "Glass Tub/Shower Doors",
    "Chrome Moen Faucets",
  ];

  return (
    <Page>
      <Header
        home={false}
        bottomBarColor={"#d3901c"}
        bottomBarTxtColor={"black"}
        bottomBar={"Residences"}
        backgroundImg={residence}
        barArrow={"black"}
      />

      <LeftRight
        id={"first"}
        title={"Living Space"}
        image={lounge}
        rightLeft={notPc ? true : false}
        backgroundPos={"center"}
        content={
          <>
            <ul
              style={{
                textAlign: "left",
                fontSize: notPc ? "small" : "large",
                marginBottom: "4vh",
              }}
            >
              {livingSpace.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </>
        }
        titleStyles={{
          color: "#d3901c",
          fontSize: mobile && "large",
        }}
        color={"white"}
        homePage={false}
        backgroundColor={"black"}
      />

      <LeftRight
        title={"Kitchen"}
        image={two}
        rightLeft={true}
        backgroundPos={"center"}
        content={
          <>
            <ul
              style={{
                textAlign: "left",
                fontSize: notPc ? "small" : "large",
              }}
            >
              {kitchen.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </>
        }
        titleStyles={{
          color: "#d3901c",
          fontSize: mobile && "large",
        }}
        color={"white"}
        homePage={false}
        backgroundColor={"black"}
      />
      <LeftRight
        title={"Bathroom"}
        image={night}
        rightLeft={notPc ? true : false}
        backgroundPos={"left"}
        content={
          <>
            <ul
              style={{
                textAlign: "left",
                fontSize: notPc ? "small" : "large",
              }}
            >
              {bathroom.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </>
        }
        titleStyles={{
          color: "#d3901c",
          fontSize: mobile && "large",
        }}
        color={"white"}
        homePage={false}
        backgroundColor={"black"}
      />
      <Contact />
    </Page>
  );
};

export default Residences;
