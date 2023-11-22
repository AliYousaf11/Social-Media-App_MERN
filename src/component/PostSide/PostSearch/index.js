import React, { useRef, useState } from "react";
import "./PostSearch.css";
import ProfileImg from "../../../img/profileImg.jpg";
import UilScenery from "@iconscout/react-unicons/icons/uil-scenery";
import UilPlayCircle from "@iconscout/react-unicons/icons/uil-play-circle";
import UilLocationPoint from "@iconscout/react-unicons/icons/uil-location-point";
import UilSchedule from "@iconscout/react-unicons/icons/uil-schedule";
import UilTimes from "@iconscout/react-unicons/icons/uil-times";

const Index = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const HandlePhotoChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };
  return (
    <div className="PostSearch">
      <img src={ProfileImg} alt="Profile_img" />

      <div>
        <input type="text" placeholder="What's happenings?" />

        <div className="postOption">
          <div
            className="option"
            style={{ color: "var(--photo)" }}
            onClick={() => imageRef.current.click()}
          >
            <UilScenery /> Photo
          </div>
          <div className="option" style={{ color: "var(--video)" }}>
            <UilPlayCircle /> Video
          </div>
          <div className="option" style={{ color: "var(--location)" }}>
            <UilLocationPoint /> Location
          </div>
          <div className="option" style={{ color: "var(--shedule)" }}>
            <UilSchedule /> Shedule
          </div>
          <button className="button ps-button">Share</button>
          
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={HandlePhotoChange}
            />
          </div>
        </div>

        {image && (
          <div className="previewImage">
            <UilTimes onClick={() => setImage(null)} />
            <img src={image.image} alt="previewImage" />
          </div>
        )}
        
      </div>
    </div>
  );
};

export default Index;
