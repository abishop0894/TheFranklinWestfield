import React, { useRef, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import mapboxgl, { Map } from "mapbox-gl";
import { ZoomControl, StylesControl } from "mapbox-gl-controls";
import useMediaQuery from "../Helpers/Hooks/UseMediaQuery";
import "mapbox-gl/dist/mapbox-gl.css";
import dining from "../dining.json";
import shopping from "../shopping.json";
import lifestyle from "../lifestyle.json";
import parks from "../parks.json";
import transit from "../transit.json";
import government from "../government.json";
import schools from "../schools.json";
import theFranklin from "../theFranklin.json";
import { Divider } from "@mui/material";
import "../App.css";
import { Button, Typography } from "@mui/material";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYWxtb3JyaSIsImEiOiJjbGdiMWphdncwajJ6M2RxbHU5dHE4b3Q2In0.ajpwLRSn6qCQW7fkAktLTg";

const MapLR = () => {
  const notPc = useMediaQuery("(max-width: 950px)");
  const mapContainer = useRef(null);
  const map = useRef(null);

  const [lng, setLng] = useState(-74.342743);
  const [lat, setLat] = useState(40.6398097);
  const [test, setTest] = useState(false);
  const [test2, setTest2] = useState(false);
  const [arr, setArr] = useState(false);
  const [zoom, setZoom] = useState(14.8);

  const nestHub = useMediaQuery("(max-width: 1024px) and (max-height: 600px)");
  const iPadMiniLandscape = useMediaQuery(
    "(max-width: 1024px) and (max-height: 768px)"
  );
  const iPadPro = useMediaQuery("(max-width: 1024px) and (max-height: 1366px)");

  useEffect(() => {
    setTimeout(() => {
      if (map.current) return; // initialize map only once

      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/almorri/clgctmnvb00nn01mnhgo9pxy8",
        center: [lng, lat],
        zoom: zoom,
        maxZoom: 20,
        minZoom: 6,
        cooperativeGestures: true,
      });
      map.current.addControl(new mapboxgl.FullscreenControl());
      map.current.addControl(nav, "top-left");
      theFranklin.features.map((feature) => {
        flyTo(feature);
        popup(feature);
      });
    }, 6500);
  }, [lat, lng, zoom]);

  const flyTo = (features) => {
    map.current.flyTo({
      center: features.geometry.coordinates,
      zoom: 18.5,
      essential: true, // this animation is considered essential with respect to prefers-reduced-motion
    });
  };
  const popup = async (feature) => {
    const popUps = document.getElementsByClassName("mapboxgl-popup");
    if (popUps[0]) popUps[0].remove();
    new mapboxgl.Popup({ closeOnClick: false, focusAfterOpen: false })
      .setLngLat(feature.geometry.coordinates)
      .setHTML(
        `<h4 style='font-family: Brooklyn; margin: 0px;'>${Object.getOwnPropertyNames(
          feature.properties
        )}</h4>`
      )
      .addTo(map.current);
  };

  const nav = new mapboxgl.NavigationControl();
  return (
    <>
      <Box
        className={"locations"}
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: notPc ? "column" : "row",
        }}
      >
        <Box
          sx={{
            width: notPc ? "100%" : "35%",
            height: notPc ? "40vh" : "100vh",
            backgroundColor: "#e8e8e8",
            display: "flex",
            flexDirection: "column",
            color: "black",
            overflowY: "scroll",
            overflowX: "hidden",
            paddingLeft: notPc ? "2.5vw" : "1.5vw",
            paddingTop: "4vh",
            margin: 0,
            position: "relative",
          }}
        >
          {" "}
          <Typography
            variant={
              notPc || nestHub || iPadMiniLandscape || iPadPro ? "h5" : "h4"
            }
            fontFamily={"Kinetic"}
          >
            DINING & CAFÉ
          </Typography>
          <hr
            style={{
              marginBottom: "1.5vh",
              border: "1.8px solid black",
              width: "15%",
            }}
          />
          {dining.features.map((feature) => (
            <button
              key={feature.id}
              id={"fly"}
              style={{
                textAlign: "left",
                marginBottom: ".7vh",
                border: 0,
                color: "black",
                textDecoration: "none",
                fontFamily: "Brooklyn",
                fontSize: notPc ? "medium" : "large",
                backgroundColor: "transparent",
              }}
              onClick={async (e) => {
                e.preventDefault();
                e.stopPropagation();
                flyTo(feature);
                popup(feature);
              }}
            >
              {Object.getOwnPropertyNames(feature.properties)}
            </button>
          ))}
          <hr
            style={{
              border: "1.8px solid white",
              width: "95%",
            }}
          />
          <Typography
            variant={
              notPc || nestHub || iPadMiniLandscape || iPadPro ? "h5" : "h4"
            }
            fontFamily={"Kinetic"}
            bor
          >
            {" "}
            SHOPPING
          </Typography>
          <hr
            style={{
              marginBottom: "1.5vh",
              border: "1.8px solid #5D3FD3",
              width: "15%",
            }}
          />
          {shopping.features.map((feature) => (
            <button
              id={feature.geometry.coordinates}
              style={{
                textAlign: "left",
                marginBottom: ".7vh",
                border: 0,
                fontFamily: "Brooklyn",
                color: "black",
                fontSize: notPc ? "medium" : "large",
                textDecoration: "none",
                backgroundColor: "transparent",
              }}
              onClick={async (e) => {
                e.preventDefault();
                e.stopPropagation();
                flyTo(feature);
                popup(feature);
              }}
            >
              {Object.getOwnPropertyNames(feature.properties)}
            </button>
          ))}
          <hr
            style={{
              border: "1.8px solid white",
              width: "95%",
            }}
          />
          <Typography
            variant={
              notPc || nestHub || iPadMiniLandscape || iPadPro ? "h5" : "h4"
            }
            fontFamily={"Kinetic"}
          >
            {" "}
            LIFESTYLE
          </Typography>
          <hr
            style={{
              marginBottom: "1.5vh",
              border: "1.8px solid #D3901C",
              width: "15%",
            }}
          />
          {lifestyle.features.map((feature) => (
            <button
              id={feature.geometry.coordinates}
              style={{
                textAlign: "left",
                marginBottom: ".7vh",
                border: 0,
                color: "black",
                textDecoration: "none",
                fontFamily: "Brooklyn",
                fontSize: notPc ? "medium" : "large",
                backgroundColor: "transparent",
              }}
              onClick={async (e) => {
                e.preventDefault();
                e.stopPropagation();
                flyTo(feature);
                popup(feature);
              }}
            >
              {Object.getOwnPropertyNames(feature.properties)}
            </button>
          ))}
          <hr
            style={{
              border: "1.8px solid white",
              width: "95%",
            }}
          />
          <Typography
            variant={
              notPc || nestHub || iPadMiniLandscape || iPadPro ? "h5" : "h4"
            }
            fontFamily={"Kinetic"}
            bor
          >
            {" "}
            PARKS
          </Typography>
          <hr
            style={{
              marginBottom: "1.5vh",
              border: "1.8px solid #00A36C",
              width: "15%",
            }}
          />
          {parks.features.map((feature) => (
            <button
              id={feature.geometry.coordinates}
              style={{
                textAlign: "left",
                marginBottom: ".7vh",
                border: 0,
                color: "black",
                textDecoration: "none",
                fontFamily: "Brooklyn",
                fontSize: notPc ? "medium" : "large",
                backgroundColor: "transparent",
              }}
              onClick={async (e) => {
                e.preventDefault();
                e.stopPropagation();
                flyTo(feature);
                popup(feature);
              }}
            >
              {Object.getOwnPropertyNames(feature.properties)}
            </button>
          ))}
          <hr
            style={{
              border: "1.8px solid white",
              width: "95%",
            }}
          />
          <Typography
            variant={
              notPc || nestHub || iPadMiniLandscape || iPadPro ? "h5" : "h4"
            }
            fontFamily={"Kinetic"}
            bor
          >
            {" "}
            TRANSIT
          </Typography>
          <hr
            style={{
              marginBottom: "1.5vh",
              border: "1.8px solid #0F86BD",
              width: "15%",
            }}
          />
          {transit.features.map((feature) => (
            <button
              id={feature.geometry.coordinates}
              style={{
                textAlign: "left",
                marginBottom: ".7vh",
                border: 0,
                color: "black",
                textDecoration: "none",
                fontFamily: "Brooklyn",
                fontSize: notPc ? "medium" : "large",
                backgroundColor: "transparent",
              }}
              onClick={async (e) => {
                e.preventDefault();
                e.stopPropagation();
                flyTo(feature);
                popup(feature);
              }}
            >
              {Object.getOwnPropertyNames(feature.properties)}
            </button>
          ))}
          <hr
            style={{
              border: "1.8px solid white",
              width: "95%",
            }}
          />
          <Typography
            variant={
              notPc || nestHub || iPadMiniLandscape || iPadPro ? "h5" : "h4"
            }
            fontFamily={"Kinetic"}
            bor
          >
            {" "}
            SCHOOLS
          </Typography>
          <hr
            style={{
              marginBottom: "1.5vh",
              border: "1.8px solid #DE3163",
              width: "15%",
            }}
          />
          {schools.features.map((feature) => (
            <button
              id={feature.geometry.coordinates}
              style={{
                textAlign: "left",
                marginBottom: ".7vh",
                border: 0,
                color: "black",
                textDecoration: "none",
                fontFamily: "Brooklyn",
                fontSize: notPc ? "medium" : "large",
                backgroundColor: "transparent",
              }}
              onClick={async (e) => {
                e.preventDefault();
                e.stopPropagation();
                flyTo(feature);
                popup(feature);
              }}
            >
              {Object.getOwnPropertyNames(feature.properties)}
            </button>
          ))}
          <hr
            style={{
              border: "1.8px solid white",
              width: "95%",
            }}
          />
          <Typography
            variant={
              notPc || nestHub || iPadMiniLandscape || iPadPro ? "h5" : "h4"
            }
            fontFamily={"Kinetic"}
          >
            {" "}
            GOVERNMENT
          </Typography>
          <hr
            style={{
              marginBottom: "1.5vh",
              border: "1.8px solid #000080",
              width: "15%",
            }}
          />
          {government.features.map((feature) => (
            <button
              id={feature.geometry.coordinates}
              style={{
                textAlign: "left",
                marginBottom: ".7vh",
                border: 0,
                textDecoration: "none",
                color: "black",
                fontFamily: "Brooklyn",
                fontSize: notPc ? "medium" : "large",
                backgroundColor: "transparent",
              }}
              onClick={async (e) => {
                e.preventDefault();
                e.stopPropagation();
                flyTo(feature);
                popup(feature);
              }}
            >
              {Object.getOwnPropertyNames(feature.properties)}
            </button>
          ))}
        </Box>

        <div
          ref={mapContainer}
          style={{
            display: "flex",
            width: notPc ? "100%" : "65%",
            height: notPc ? "60vh" : "100vh",
            margin: 0,
            overflow: "hidden",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {!map.current && (
            <Typography variant="h4" fontFamily={"Brooklyn"} color={"black"}>
              Loading...
            </Typography>
          )}
        </div>
      </Box>
    </>
  );
};

export default MapLR;
