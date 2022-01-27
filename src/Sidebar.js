import React from 'react';
import './Sidebar.css'
import Sidebarrow from './Sidebarrow';
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import { ExpandMoreOutlined, History, OndemandVideo, ThumbUpOutlined, VideoLibrary, WatchLater } from '@material-ui/icons';
const Sidebar = () => {
  return (
  <div className='Sidebar'>
     
    <Sidebarrow Selected Icons={HomeIcon} title="Home"/>
    <Sidebarrow Icons={WhatshotIcon} title="Trending"/>
    <Sidebarrow Icons={SubscriptionsIcon} title="Subscritption"/>
    <hr/>
    <Sidebarrow Icons={VideoLibrary} title="Library"/>
    <Sidebarrow Icons={History} title="History"/>
    <Sidebarrow Icons={OndemandVideo} title="Your videos"/>
    <Sidebarrow Icons={WatchLater} title="Watch later"/>
    <Sidebarrow Icons={ThumbUpOutlined} title="Liked videos"/>
    <Sidebarrow Icons={ExpandMoreOutlined} title="Show more"/>
  </div>);
};

export default Sidebar;
