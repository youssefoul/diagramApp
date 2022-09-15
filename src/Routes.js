import React from "react";
import Authentication from "pages/Authentication";
import Insertdiagram from "pages/Insertdiagram";
import Home1 from "pages/Home1";
import Process from "pages/Process";
import Registerpage from "pages/Registerpage";
import Showcaseresults from "pages/Showcaseresults";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/showcaseresults" element={<Showcaseresults />} />
        <Route path="/registerpage" element={<Registerpage />} />
        <Route path="/process" element={<Process />} />
        <Route path="/home1" element={<Home1 />} />
        <Route path="/insertdiagram" element={<Insertdiagram />} />
        <Route path="/authentication" element={<Authentication />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
