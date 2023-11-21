import React from "react";
import "./Profile.css";
import ProfileLeft from "../../component/ProfileLeft";
import ProfileCard from "../../component/ProfileSide/ProfileCard";
import PostSide from "../../component/PostSide";
import TrendSide from "../../component/TrentSide";

const Profile = () => {
  return (
    <div className="Profile">
      <ProfileLeft />
      <div className="Porfile_Center">
        <ProfileCard />
        <PostSide />
      </div>
      <div>
        <TrendSide />
      </div>
    </div>
  );
};

export default Profile;
