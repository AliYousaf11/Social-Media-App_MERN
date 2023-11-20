import React from "react";
import "./PostSide.css";
import PostSearch from "./PostSearch";
import Posts from "./Posts";

const index = () => {
  return (
    <div className="postSide">
      <PostSearch />
      <Posts />
    </div>
  );
};

export default index;
