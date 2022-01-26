import React from 'react';
import './Sidebar.css'
import Sidebarrow from './Sidebarrow';
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
const Sidebar = () => {
  return (
  <div className='Sidebar'>
     
    <Sidebarrow Icons={HomeIcon} title="Home"/>
    <Sidebarrow Icons={WhatshotIcon} title="Trending"/>
    <Sidebarrow Icons={SubscriptionsIcon} title="Subscritption"/>
  </div>);
};

export default Sidebar;
