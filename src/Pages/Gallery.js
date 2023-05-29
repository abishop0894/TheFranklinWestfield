import React from "react";
import img1 from "../assets/mod.png";
import residence from "../assets/resi.png";
import lounge from "../assets/LOUNGE.png";
import { useState } from "react";
import Header from "../Components/Header";
import Contact from "../Components/Contact";
import AnimationWrap from "../Helpers/AnimationWrap";
import gallery from "../assets/golf.png";
import trainStation from "../assets/trainstation.jpg";
import Upper from "../assets/UPPER.png";
import night from "../assets/night.png";
import roofTop from "../assets/roofTop.png";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { useEffect } from "react";
import useMediaQuery from "../Helpers/Hooks/UseMediaQuery";
import "../App.css";

const urlOne =
  "https://cdn.discordapp.com/attachments/1084169150622093352/1112388001981538324/UPPER_FLOOR_CONFERENCE_RM.png";
const urlTwo =
  "https://cdn.discordapp.com/attachments/1084169150622093352/1112388060081049620/UPPER_FLOOR_GYM_2.png";

const amnPic =
  "https://cdn.discordapp.com/attachments/1084169150622093352/1091921608039485493/theatre.png";
const westfield =
  "https://cdn.discordapp.com/attachments/980168318151450717/1096407243513155624/f95e6cc849a2c09da2f637a8c5a8a492.webp";

const tabContent = [
  {
    id: 0,
    image: residence,
    category: "residence",
  },
  {
    id: 1,
    image: lounge,
    category: "residence",
  },
  {
    id: 2,
    image: night,
    category: "residence",
  },
  {
    id: 3,
    image: roofTop,
    category: "residence",
  },

  {
    id: 4,
    image: amnPic,
    category: "amenities",
  },
  {
    id: 5,
    image: urlOne,
    category: "amenities",
  },
  {
    id: 6,
    image: urlTwo,
    category: "amenities",
  },
  {
    id: 7,
    image: Upper,
    category: "amenities",
  },

  {
    id: 8,
    image: gallery,
    category: "amenities",
  },
  {
    id: 9,
    image: westfield,
    category: "neighborhood",
  },
  {
    id: 10,
    image: trainStation,
    category: "neighborhood",
  },
];
const tabNav = [
  {
    id: 0,
    name: "all",
  },
  {
    id: 1,
    name: "residence",
  },
  {
    id: 2,
    name: "amenities",
  },
  {
    id: 3,
    name: "neighborhood",
  },
];

function GalleryPage() {
  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router Dom v6
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Optional if you want to skip the scrolling animation
    });
  }, []);

  const notPc = useMediaQuery("(max-width: 950px)");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const containerStyle = {
    transform: isInView ? "none" : "translateY(20px)",
    opacity: isInView ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
  };
  const [images, setImages] = useState(tabContent);

  const [active, setActive] = useState(0);

  const filterImages = (category) => {
    const filtered = tabContent.filter((element) => {
      return element.category === category;
    });
    setImages(filtered);
  };
  const switchTabItems = (item) => {
    item.name === "all" ? setImages(tabContent) : filterImages(item.name);
    setActive(item.id);
  };

  return (
    <>
      <Header
        home={false}
        bottomBarColor={"black"}
        bottomBarTxtColor={"white"}
        bottomBar={"Gallery"}
        backgroundImg={gallery}
        barArrow={"#d3901c"}
      />

      <section style={containerStyle} ref={ref} className="galleryPage">
        <center>
          <div
            className="galleryTabs"
            style={{
              display: "flex",
              flexDirection: notPc ? "column" : "row",
            }}
          >
            {tabNav.map((item) => {
              return (
                <h1
                  style={{
                    fontFamily: "Kinetic",
                    fontSize: notPc ? "large" : "x-large",
                    cursor: "pointer",
                  }}
                  key={item.id}
                  className={`tabMenu ${
                    item.id === active ? "active" : "inactive"
                  }`}
                  onClick={() => switchTabItems(item)}
                >
                  {item.name.toString().toUpperCase()}
                </h1>
              );
            })}
          </div>
        </center>
        <div className="tabContent">
          {images.map((item) => {
            return (
              <div
                key={item.id}
                className="tabImages"
                style={{
                  background: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition:
                    item.image === trainStation ? "top" : "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            );
          })}
        </div>
      </section>

      <Contact />
    </>
  );
}

export default GalleryPage;
