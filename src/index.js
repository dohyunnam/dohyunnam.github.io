import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import ContactPage from "./pages/ContactPage";
import ProjectPage from "./pages/ProjectPage";

ReactDOM.render(
    <Router>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/Contact" element={<ContactPage />} />
            <Route path="/Project" element={<ProjectPage />} />
        </Routes>
    </Router>,
  document.getElementById("root")
);