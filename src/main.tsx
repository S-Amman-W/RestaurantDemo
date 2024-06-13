import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing.tsx";
import Reservation from "./pages/Reservation.tsx";
import PrivEvents from "./pages/PrivEvents.tsx";
import Menu from "./pages/Menu.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/reservations" element={<Reservation />} />
        <Route path="/privateEvents" element={<PrivEvents />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
