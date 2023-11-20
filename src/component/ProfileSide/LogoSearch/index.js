import React from "react";
import "./LogoSearch.css";
import Logo from "../../../img/logo.png";
import UilSearch from "@iconscout/react-unicons/icons/uil-search";

const index = () => {
  return (
    <div className="LogoSearch">
      <img src={Logo} alt="logoSearch_Icons" />
      <div className="Search">
        <input type="text" placeholder="#Explore" />
        <div className="s-icon">
          <UilSearch />
        </div>
      </div>
    </div>
  );
};

export default index;
