import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Alumni from "./pages/alumni/Alumini";
import Committee from "./pages/committee/Committee";
import Notes from "./pages/notes/Notes";
// import Events from "./pages/events/Events";
import GoToTop from "./components/topButton/GoToTop";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import Gal from "./pages/gallery/Gal";
const LazyEvents = React.lazy(() => import("./pages/events/Events.js"));

const App = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/committee" element={<Committee />}></Route>
          <Route path="/alumni" element={<Alumni />}></Route>
          <Route path="/notes" element={<Notes />}></Route>
          <Route
            path="/events"
            element={
              <React.Suspense fallback="loading...">
                <LazyEvents />
              </React.Suspense>
            }
          ></Route>
          <Route path="/gallery" element={<Gal />}></Route>
        </Routes>
      </Router>
      <GoToTop />
    </>
  );
};

export default App;
