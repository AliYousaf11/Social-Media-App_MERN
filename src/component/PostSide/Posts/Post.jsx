import React from "react";
import Comment from "../../../img/comment.png";
import Share from "../../../img/share.png";
import Like from "../../../img/like.png";
import NotLike from "../../../img/notlike.png";

const Post = ({ data }) => {
  return (
    <div className="Post">
      <img src={data.img} alt="Post_Image" />

      <div className="PostReact">
        <img src={data?.liked ? Like : NotLike} alt="Liked_svg" />
        <img src={Comment} alt="Comment_svg" />
        <img src={Share} alt="Share_svg" />
      </div>

      <span style={{ color: "var(--gray)", fontSize: "12px" }}>
        {data?.likes} likes
      </span>
      <div className="details">
        <span>
          <b>{data?.name}</b>
        </span>{" "}
        <span>{data?.desc}</span>
      </div>
    </div>
  );
};

export default Post;
