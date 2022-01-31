import { Avatar } from "@material-ui/core";
import { CheckCircleOutline, VerifiedUser } from "@material-ui/icons";
import React from "react";
import './ChannelRow.css'
const ChannelRow = ({ image, Channel, Verified, subs, nov, description }) => {
  return (
  <div className="ChannelRow">
<Avatar src={image} alt={Channel} className="channelrow_logo"/>
<div className="ChannelRow_text">
    <h2>
        {Channel } {Verified && <CheckCircleOutline/>}
    </h2>
    <p>{subs} subscriber . {nov} videos</p>
    <p>{description}</p>
</div>
  </div>);
};

export default ChannelRow;
