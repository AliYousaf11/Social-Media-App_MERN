import React from "react";
import "./Home.css";
import Profile from "../../component/ProfileSide";
import PostSide from "../../component/PostSide";

const Home = () => {
  return (
    <div className="Home">
      <Profile />
      <PostSide />
      <div className="TrendSide">Trend</div>
    </div>
  );
};

export default Home;
