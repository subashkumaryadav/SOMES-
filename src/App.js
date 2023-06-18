import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Alumini from "./pages/alumini/Alumini";
import Committee from "./pages/committee/Committee";
import Notes from "./pages/notes/Notes";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/committee" element={<Committee />}></Route>
          <Route path="/alumini" element={<Alumini />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/notes" element={<Notes />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
