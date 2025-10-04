import React from "react";
import EstateImages from "../EstateComponents/EstateImages";
import EstateHeroNav from "../EstateComponents/EstateHeroNav";
import EstateDetails from "../EstateComponents/EstateDetails";

const EstateHero = () => {
  return (
    <>
      <EstateHeroNav />
      <EstateImages estate={window.location.href.substr(26)} />
      <EstateDetails estate={window.location.href.substr(26)} />
    </>
  );
};

export default EstateHero;
