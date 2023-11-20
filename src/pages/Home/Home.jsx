import React from "react";
import "./Home.css";
import Profile from "../../component/ProfileSide";

const Home = () => {
  return (
    <div className="Home">
      <Profile />
      <div className="postSide">Post</div>
      <div className="TrendSide">Trend</div>
    </div>
  );
};

export default Home;
