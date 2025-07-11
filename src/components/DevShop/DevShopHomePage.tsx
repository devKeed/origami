import React from "react";
import DevShopNavbar from "./DevShopNavbar";
import DevShopHero from "./DevShopHero";
import DevShopPortfolio from "./DevShopPortfolio";
import DevShopServices from "./DevShopServices";
import DevShopFooter from "./DevShopFooter";

const DevShopHomePage = () => (
  <div className="bg-black text-white">
    <DevShopNavbar />
    <DevShopHero />
    <DevShopPortfolio />
    <DevShopServices />
    <DevShopFooter />
  </div>
);

export default DevShopHomePage;
