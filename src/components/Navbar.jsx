import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { IoArrowBackOutline } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  console.log(location.pathname);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    const serverUrl = import.meta.env.VITE_API_URL;
    console.log(serverUrl);
  };

  return (
    <nav className=" p-4 ">
      <div className="max-w-7xl mx-auto   md:border rounded-full p-4 md:border-zinc-500 px-8">
        <div className="flex justify-between items-center ">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-white flex items-center gap-2 text-lg font-semibold"
            >
              {location.pathname === "/" ? "" : <IoArrowBackOutline />} EmpSys
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/employee/all"
              className="text-gray-300 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
            >
              All Data
            </Link>
            <Link
              to="/employee/create"
              className="text-gray-300 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
            >
              Add Employee
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-lg "
            >
              About
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg"
            >
              {isOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-2">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
              <Link
                to="/employee/all"
                className="text-gray-300 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
              >
                All Data
              </Link>
              <Link
                to="/employee/create"
                className="text-gray-300 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
              >
                Add Employee
              </Link>
              <Link
                to="/about"
                className="text-gray-300 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-lg "
              >
                About
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
