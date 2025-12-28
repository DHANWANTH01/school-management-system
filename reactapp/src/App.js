import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CourseList from "./components/CourseList";
import AddCourse from "./components/AddCourse";
import CourseDetails from "./components/CourseDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CourseList />} />
        <Route path="/add" element={<AddCourse />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
