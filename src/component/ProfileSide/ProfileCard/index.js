import React from "react";
import "./ProfileCard.css";
import Cover from "../../../img/cover.jpg";
import Profile from "../../../img/profileImg.jpg";

const index = () => {
  return (
    <div className="ProfileCard">
      <div className="ProfileImg">
        <img src={Cover} alt="Cover_Pic" />
        <img src={Profile} alt="Profile_Pic" />
      </div>

      <div className="ProfileName">
        <span>Muhammad Ali</span>
        <span>Developer / Designer</span>
      </div>

      <div className="FollowStatus">
        <hr />
        <div>
          <div className="Follow">
            <span>6,866</span>
            <span>Following</span>
          </div>
          <div className="vl"></div>
          <div className="Follow">
            <span>15</span>
            <span>Followers</span>
          </div>
        </div>
        <hr />
      </div>

      <span>My Profile</span>
    </div>
  );
};

export default index;
