import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("../Pages/Home"));

const Routing = () => (
  <Routes>
    <Route exact path="/" component={Home} />;
  </Routes>
);
export default Routing;
