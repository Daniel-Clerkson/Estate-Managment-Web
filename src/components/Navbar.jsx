import { FaSearch, FaPlayCircle, FaArrowDown, FaArrowLeft, FaEdit, FaBell, FaShare, FaClock, FaOutdent, FaPlus } from "react-icons/fa";
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaX, FaHouse, FaHotel, FaCircleDot } from "react-icons/fa6";


const Navbar = () => {

  const navigate = useNavigate()

  const [dropDownOpen, setDropDownOpen] = useState(false);

  const isOpen = (value) => {
     if (value) {
       return "dropdown h-screen text-white bg-green-800 w-40 shadow-md flex  fixed top-0 p-2 justify-start items-center flex-col right-0";
     } else {
       return "hidden";
     }
  };


  return (
    <div className="p-5 ">
      <div className="mainNav flex justify-between items-center">
        <div className="title mr-4">
          <h2 className="text-md md:text-2xl font-serif font-black">
            My Properties
          </h2>
        </div>
        <div className="outdent">
          <FaOutdent
            className="block md:hidden"
            onClick={() => setDropDownOpen(true)}
          />
          <div className={`${isOpen(dropDownOpen)}`}>
            <FaX
              className="mb-10 mt-5"
              onClick={() => setDropDownOpen(false)}
            />
            <h2
              className="flex items-center flex-wrap justify-between"
              onClick={() => navigate("/home")}
            >
              {" "}
              <FaArrowLeft className="text-sm mr-2" /> Back
            </h2>
            <h2 className="flex items-center flex-wrap justify-between">
              {" "}
              Create Estate <FaPlus className="text-sm mr-2" />
            </h2>
          </div>
        </div>
        <div className="searchbar hidden md:block">
          <input
            type="text"
            name=""
            className="p-2 bg-gray-200 outline-none rounded-full pl-4 w-56 md:w-96 pr-10 font-semibold"
            placeholder="     Search Estate..."
          />
          <FaSearch className="relative bottom-7 left-3 text-gray-400 hover:text-transparent" />
        </div>
        <div className="others hidden text-xs text-green-700 font-semibold justify-between items-center md:flex">
          <div className="how flex bg-gray-200 p-2 rounded-full items-center justify-between width mr-4">
            <FaPlayCircle />
            <h2 className="text-sm">How It Works</h2>
            <FaArrowDown />
          </div>
          <div className="others2 flex justify-between align-center w-32">
            <div className="bell bg-gray-200 p-2 rounded-full mr-2">
              <FaBell />
            </div>
            <div className="time bg-gray-200 p-2 rounded-full mr-2">
              <FaClock />
            </div>
            <div className="share bg-gray-200 p-2 rounded-full">
              <FaShare />
            </div>
          </div>
        </div>
      </div>
      <div className="secNav items-center border-b pb-5 pt-3 hidden md:flex">
        <div className="estates flex mr-3 items-center">
          <div className="mr-3 rounded-full border p-1 bg-gray-50">
            <FaHotel className="text-green-700 text-sm" />
          </div>
          <div>
            <h2 className="font-semibold text-gray-600 text-sm">50 ESTATES</h2>
          </div>
        </div>
        <div className="houses flex mr-3 items-center">
          <div className="mr-3 rounded-full border p-1 bg-gray-50">
            <FaHouse className="text-green-700 text-sm" />
          </div>
          <div>
            <h2 className="font-semibold text-gray-600 text-sm"> 5 HOUSES</h2>
          </div>
        </div>
        <div className="units flex mr-3 items-center">
          <div className="mr-3 rounded-full border p-1 bg-gray-50">
            <FaCircleDot className="text-green-700 text-sm" />
          </div>
          <div>
            <h2 className="font-semibold text-gray-600 text-sm">7 UNITS</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
