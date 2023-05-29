import Header from "../Components/Header";
import Contact from "../Components/Contact";
import MapLR from "../Components/MapLR";
import LeftRight from "../Components/LeftRight";
import downtown from "../assets/Westfieldnj.png";
import trainStation from "../assets/trainstation.jpg";
import Page from "../Components/Page";
import useMediaQuery from "../Helpers/Hooks/UseMediaQuery";
import { useEffect, useRef } from "react";

const Neighborhood = () => {
  const notPc = useMediaQuery("(max-width: 990px)");
  const content =
    "Discover a Union County oasis, where you'll find your new home surrounded by the manicured acres and many green parks that define one of the area's most sought-after destinations. Enjoy eclectic shopping and gourmet dining moments from your door, with walkable access to the heart of Westfield and other highlights, while abundant transit options keep you conveniently connected.";
  const westfield =
    "https://cdn.discordapp.com/attachments/980168318151450717/1096407243513155624/f95e6cc849a2c09da2f637a8c5a8a492.webp";

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Optional if you want to skip the scrolling animation
    });
  }, []);

  return (
    <Page>
      <Header
        home={false}
        bottomBarColor={"#d3901c"}
        bottomBarTxtColor={"black"}
        bottomBar={"Neighborhood"}
        backgroundImg={westfield}
      />
      <LeftRight
        title={"Westfield"}
        rightLeft={false}
        image={trainStation}
        content={content}
        titleStyles={{
          color: "#d3901c",
        }}
        color={"black"}
        homePage={false}
      />

      <MapLR />

      <Contact />
    </Page>
  );
};

export default Neighborhood;
