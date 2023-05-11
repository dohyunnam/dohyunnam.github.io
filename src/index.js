import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import ContactPage from "./ContactPage";
import ProjectPage from "./ProjectPage";

ReactDOM.render(
    <Router>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/project" element={<ProjectPage />} />
        </Routes>
    </Router>,
  document.getElementById("root")
);