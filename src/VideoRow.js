import React from "react";
import "./VideoRow.css";
const VideoRow = ({ channel, title, image, views, subs, desc, timestamp }) => {
  return (
    <div className="videorow">
      <img src={image} />
      <div className="videorow_text">
        <h3>{title}</h3>
        <p className="videorow_headline">
       {channel} . {" "} <span className="vspanc"> <span className="vspan">
            {subs} </span>Subscribers</span>{" "} {views} views . {timestamp}
        </p >
        <p className="videorow_desc">{desc}</p>
      </div>
    </div>
  );
};

export default VideoRow;
