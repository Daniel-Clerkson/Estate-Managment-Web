import React from "react";
import EstateImages from "../EstateComponents/EstateImages";
import EstateHeroNav from "../EstateComponents/EstateHeroNav";
import EstateDetails from "../EstateComponents/EstateDetails";

const EstateHero = () => {
  return (
    <>
      <EstateHeroNav />
      <EstateImages estate={window.location.href.substr(47)} />
      <EstateDetails estate={window.location.href.substr(47)} />
    </>
  );
};

export default EstateHero;
