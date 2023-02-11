import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { AcercaDe, Contacto, Home, Portafolio, Error404, Certificados } from "./router";

import "bootstrap/dist/css/bootstrap.min.css";

import './style.css';
import 'animate.css'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="acerca-de" element={<AcercaDe />} />
            <Route path="portafolio" element={<Portafolio />} />
            <Route path="contacto" element={<Contacto />} />
            <Route path="mis-certificados" element={<Certificados />} />

            <Route path="*" element={<Error404 />} />
          </Route>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
