import React from "react";
import EstateNavbar from "../components/EstateComponents/EstateNavbar";
import EstateHero from "../components/EstateComponents/EstateHero";
import EstateDetails from "../components/EstateComponents/EstateDetails";

const Estate = ({data}) => {
  return (
    <div>
      <EstateNavbar />
      <EstateHero />
      <EstateDetails estate="63192c85-7061-4e7b-ba63-a44a507e4ad0" />
    </div>
  );
};

export default Estate;
