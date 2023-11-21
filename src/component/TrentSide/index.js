import React from "react";
import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import UilSearch from "@iconscout/react-unicons/icons/uil-setting";
import TrendCard from "./TrendCard";
import "./TrendSide.css";

const index = () => {
  return (
    <div className="TrendSide">
      <div className="navIcons">
        <img src={Home} alt="Home" />
        <UilSearch />
        <img src={Noti} alt="Home" />
        <img src={Comment} alt="Home" />
      </div>
      <TrendCard />
      <button className="button r-button">Share</button>
    </div>
  );
};

export default index;
