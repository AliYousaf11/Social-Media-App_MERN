import React from "react";
import "./PostSearch.css";
import ProfileImg from "../../../img/profileImg.jpg";
import UilScenery from "@iconscout/react-unicons/icons/uil-scenery";
import UilPlayCircle from "@iconscout/react-unicons/icons/uil-play-circle";
import UilLocationPoint from "@iconscout/react-unicons/icons/uil-location-point";
import UilSchedule from "@iconscout/react-unicons/icons/uil-schedule";

const index = () => {
  return (
    <div className="PostSearch">
      <img src={ProfileImg} alt="Profile_img" />

      <div>
        <input type="text" placeholder="What's happenings?" />

        <div className="postOption">
          <div className="option" style={{ color: "var(--photo)" }}>
            <UilScenery /> Photo
          </div>
          <div className="option" style={{ color: "var(--video)" }}>
            <UilPlayCircle /> Video
          </div>
          <div className="option" style={{ color: "var(--location)" }}>
            <UilLocationPoint /> Location
          </div>
          <div className="option" style={{ color: "var(--shedule)" }}>
            <UilSchedule /> Shedule
          </div>
          <button className="button ps-button">Share</button>
        </div>
      </div>
    </div>
  );
};

export default index;
