import React from "react";
import "./infoCard.css";
import UIPenn from "@iconscout/react-unicons/icons/uil-pen";
const index = () => {
  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>Your Info</h4>
        <div>
          <UIPenn width={"2rem"} height={"1.2rem"} />
        </div>
      </div>

      <div className="info">
        <span>
          <b>Status In </b>
        </span>
        <span>RelationShip</span>
      </div>

      <div className="info">
        <span>
          <b>Lives In </b>
        </span>
        <span>Multan</span>
      </div>

      <div className="info">
        <span>
          <b>Works In </b>
        </span>
        <span>America</span>
      </div>

      <button className="button logout">Logout</button>
    </div>
  );
};

export default index;
