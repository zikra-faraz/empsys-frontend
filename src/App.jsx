import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateEmployee from "./pages/CreateEmployee";
import Edit from "./pages/Edit";
import Delete from "./pages/Delete";
import Show from "./pages/Show";
import Navbar from "./components/Navbar";
import ShowAll from "./pages/showAll";
import About from "./pages/About";

// import toast, { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <>
      <div className="bg-black min-h-screen">
        <Navbar />
        {/* <Toaster /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee/create" element={<CreateEmployee />} />
          <Route path="/about" element={<About />} />
          <Route path="/employee/all" element={<ShowAll />} />
          <Route path="/employee/details/:id" element={<Show />} />
          <Route path="/employee/edit/:id" element={<Edit />} />
          <Route path="/employee/delete/:id" element={<Delete />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
