import React from "react";
import "./Posts.css";
import { PostsData } from "../../../Data/PostData";
import Post from "./Post";

const index = () => {
  return (
    <div className="Posts">
      {PostsData?.map((post, index) => (
        <Post data={post} id={index} />
      ))}
    </div>
  );
};

export default index;
