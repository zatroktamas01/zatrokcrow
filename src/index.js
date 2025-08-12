import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from "react-router-dom";
import MainP from './pages/mainpage/MainP';
import Photography from './pages/portfolio/photography';
import Design from './pages/portfolio/design';
import MeContent from './pages/aboutMe/MeContent';
import Software from './pages/portfolio/Software';
import "./pages/css/basic.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainP />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/design" element={<Design />} />
        <Route path="/software" element={<Software />} />
        <Route path="/me-content" element={<MeContent />} />
      </Routes>
    </HashRouter>
);

