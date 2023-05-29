import { lazy } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes, Router } from "react-router-dom";
import Home from "./Pages/Home";
import Amenities from "./Pages/Amenities";
import GalleryPage from "./Pages/Gallery";
import ContactPage from "./Pages/ContactPage";
import Neighborhood from "./Pages/Neighborhood";
import Residences from "./Pages/Residences";
import Availability from "./Pages/Availability";
import NotFound from "./Pages/NotFound";
import Landing from "./Pages/Landing";
import "./assets/fonts/Brooklyn/Brooklyn-Normal.a3ecc99e.woff2";
import "./assets/fonts/Kenetic/Kinetic-Bold.6579dd3a.woff2";
import "./App.css";

/* 
const Home = lazy(() => import("./Pages/Home"));
const Amenities = lazy(() => import("./Pages/Amenities"));
const Gallery = lazy(() => import("./Pages/Gallery"));
const ContactPage = lazy(() => import("./Pages/ContactPage"));
const Neighborhood = lazy(() => import("./Pages/Neighborhood"));
const Residences = lazy(() => import("./Pages/Residences"));
const Availability = lazy(() => import("./Pages/Availability"));
*/

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/amenities" element={<Amenities />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/neighborhood" element={<Neighborhood />} />
        <Route path="/residences" element={<Residences />} />
        <Route path="/availability" element={<Availability />} />
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
