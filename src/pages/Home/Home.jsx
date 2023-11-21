import React from "react";
import Profile from "../../component/ProfileSide";
import PostSide from "../../component/PostSide";
import Trend from "../../component/TrentSide";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <Profile />
      <PostSide />
      <Trend />
    </div>
  );
};

export default Home;
