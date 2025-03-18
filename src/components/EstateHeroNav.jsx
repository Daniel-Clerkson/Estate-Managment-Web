import React from 'react'
import { NavLink } from "react-router-dom";


const EstateHeroNav = () => {
  return (
    <>
      <div className="links m-5 border-b-2 p-2 pt-0 mt-3 hidden sm:block">
        <NavLink
          to="./"
          id="1"
          className="p-2 sm:4 text-green-800 border-b-2 pb-0 sm:pb-2 border-green-800 font-semibold"
        >
          {" "}
          Details{" "}
        </NavLink>
        <NavLink
          to="./"
          id="2"
          className="p-2 sm:4 text-gray-600 font-semibold"
        >
          {" "}
          Property{" "}
        </NavLink>
        <NavLink
          to="./"
          id="3"
          className="p-2 sm:4 text-gray-600 font-semibold"
        >
          {" "}
          Allocation{" "}
        </NavLink>
        <NavLink
          to="./"
          id="4"
          className="p-2 sm:4 text-gray-600 font-semibold"
        >
          {" "}
          Analysis{" "}
        </NavLink>
        <NavLink
          to="./"
          id="5"
          className="p-2 sm:4 text-gray-600 font-semibold"
        >
          {" "}
          Activity{" "}
        </NavLink>
      </div>
    </>
  );
}

export default EstateHeroNav