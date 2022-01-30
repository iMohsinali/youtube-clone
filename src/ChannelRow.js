import { Avatar } from "@material-ui/core";
import React from "react";
import './ChannelRow.css'
const ChannelRow = ({ image, Channel, Verified, subs, nov, description }) => {
  return (
  <div className="ChannelRow">
<Avatar src={image} alt={Channel} className="channelrow_logo"/>
  </div>);
};

export default ChannelRow;
