import React from "react";
import "./ProfileLeft.css";
import LogoSearch from "../ProfileSide/LogoSearch";
import Following from "../ProfileSide/Following";
import InfoCard from "./InfoCard";

const index = () => {
  return (
    <div className="ProfileLeft">
      <LogoSearch />
      <InfoCard />
      <Following />
    </div>
  );
};

export default index;
