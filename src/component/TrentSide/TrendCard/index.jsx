import React from "react";
import "./TrendCard.css";
import { TrendData } from "./../../../Data/TrendData";

const index = () => {
  return (
    <div className="TrendCard">
      <h3>Trends for you</h3>
      {TrendData?.map((trend) => (
        <div className="trend">
          <span>#{trend.name}</span>
          <span>#{trend.share}k shares</span>
        </div>
      ))}
    </div>
  );
};

export default index;
