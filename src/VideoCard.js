import { Avatar } from "@material-ui/core";
import React from "react";
import './VideoCard.css'
const VideoCard = ({
  image,
  title,
  channel,
  views,
  timestamp,
  channelimage,
}) => {
  return (
    <div className="video_card">
      <img className="video_card_thambnail" src={image} alt="" />
      <div className="video_info">
        <Avatar className="video_avatar" alt={channel} src={channelimage} />
        <div className="video_text">
            <h4>{title}</h4>
            <p>{channel}</p>
            <p>{views} . {timestamp}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
