import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import "../App.css";
import { Squeeze as Hamburger } from "hamburger-react";
import Toolbar from "@mui/material/Toolbar";
import logo from "../assets/whiteloco.png";
import Drawer from "@mui/material/Drawer";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

//import { Outlet, Link } from "react-router-dom"; -wherever drawer is located,

const sideNavMenu = [
  {
    id: "0",
    name: "residences",
    linkTo: "",
  },
  {
    id: "1",
    name: "amenities",
    linkTo: "",
  },
  {
    id: "2",
    name: "neighborhood",
    linkTo: "",
  },
  {
    id: "3",
    name: "availability",
    linkTo: "",
  },
  {
    id: "4",
    name: "gallery",
    linkTo: "",
  },
  {
    id: "5",
    name: "contact",
    linkTo: "",
  },
  {
    id: "6",
    name: "apply now",
    linkTo: "",
  },
];

const Navbar = ({ isShrunk }) => {
  const [open, setOpen] = useState(false);
  function toggleNav(toggle) {
    setOpen(toggle);
  }

  return (
    <div className="nav ">
      <div className="toolbar" enableColorDark></div>

      <div className="appbar">
        <div
          className="container"
          style={{
            padding: isShrunk ? "15px 0" : "35px 0",
            transition: "padding .2s ease-out",
          }}
        >
          <img
            className="logo"
            src={logo}
            alt=""
            style={{
              height: isShrunk ? "35px" : "48px",
              transition: "height .2s ease-out",
            }}
          ></img>

          <Hamburger
            color="#d3901c"
            onToggle={(toggle) => toggleNav(toggle)}
          ></Hamburger>
        </div>
      </div>

      <div className={`sideNavMenu ${open ? "sideNavOpen" : ""}`}>
        <ul>
          {sideNavMenu.map((item) => {
            return <li key={item.id}>{item.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
