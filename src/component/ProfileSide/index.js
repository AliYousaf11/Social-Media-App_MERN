import React from "react";
import "./ProfileSide.css";
import LogoSearch from "./LogoSearch";
import ProfileCard from "./ProfileCard";
import Following from "./Following";

const index = () => {
  return (
    <div className="profileSide">
      <LogoSearch />
      <ProfileCard />
      <Following />
    </div>
  );
};
export default index;
