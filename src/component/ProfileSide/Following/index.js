import React from "react";
import "./Following.css";
import { Followers } from "../../../Data/FollowersData";

const index = () => {
  return (
    <div className="Following">
      <h3>Who is Following you</h3>

      {Followers?.map((item, index) => (
        <div className="follower" key={index}>
          <div>
            <img src={item.img} alt="Following_img" className="followerImg" />
            <div className="name">
              <span>{item.name}</span>
              <span>@{item.username}</span>
            </div>
          </div>
          <button className="button fc-button">Follow</button>
        </div>
      ))}
    </div>
  );
};

export default index;
