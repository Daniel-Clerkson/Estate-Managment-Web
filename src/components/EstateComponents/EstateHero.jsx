import React from "react";
import EstateImages from "../EstateComponents/EstateImages";
import EstateHeroNav from "../EstateComponents/EstateHeroNav";
import EstateDetails from "../EstateComponents/EstateDetails";

const EstateHero = () => {
  return (
    <>
      <EstateHeroNav />
      <EstateImages estate={window.location.href.substr(29)} />
      <EstateDetails estate={window.location.href.substr(29)} />
    </>
  );
};

export default EstateHero;
