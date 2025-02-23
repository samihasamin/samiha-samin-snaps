import { useState } from "react";
import "./App.scss";
import { v4 as uuid } from "uuid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Photo from "./Pages/Photo/Photo";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photo/:photoId" element={<Photo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
