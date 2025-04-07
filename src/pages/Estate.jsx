import React from "react";
import EstateNavbar from "../components/EstateComponents/EstateNavbar";
import EstateHero from "../components/EstateComponents/EstateHero";
import EstateDetails from "../components/EstateComponents/EstateDetails";

const Estate = ({data}) => {
  return (
    <div>
      <EstateNavbar estate={window.location.href.substr(29)} />
      <EstateHero />
      <EstateDetails />
    </div>
  );
};

export default Estate;
