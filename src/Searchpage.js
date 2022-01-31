import { TuneOutlined } from "@material-ui/icons";
import React from "react";
import "./Searchpage.css";
import VideoRow from "./VideoRow";
import ChannelRow from "./ChannelRow";
const Searchpage = () => {
  return (
    <div className="searchpage">
      <div className="searchpage_filter">
        <TuneOutlined />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
      image="https://avatars.githubusercontent.com/u/87361294?v=4"
      Channel="Mr programmer"
      Verified
      subs="100k"
      nov={382}
      description="This is channel your you get the most informative videos and 
      you will be eable to do with your self to understand the best way."
      />
      <hr/>
      <VideoRow 
      channel="Mr programmer"
      title ="How to build my sql component in onday"
      image="https://avatars.githubusercontent.com/u/87361294?v=4"
      views="100M"
      subs="100k"
      desc="This is channel your you get the most informative videos and 
      you will be eable to do with your self to understand the best way"
      timestamp="19 second ago"/>
   
      <VideoRow 
      channel="Mr programmer"
      title ="How to build my sql component in onday"
      image="https://avatars.githubusercontent.com/u/87361294?v=4"
      views="100M"
      subs="100k"
      desc="This is channel your you get the most informative videos and 
      you will be eable to do with your self to understand the best way"
      timestamp="19 second ago"/>
  
    <VideoRow 
    channel="Mr programmer"
    title ="How to build my sql component in onday"
    image="https://avatars.githubusercontent.com/u/87361294?v=4"
    views="100M"
    subs="100k"
    desc="This is channel your you get the most informative videos and 
    you will be eable to do with your self to understand the best way"
    timestamp="19 second ago"/>

  <VideoRow 
  channel="Mr programmer"
  title ="How to build my sql component in onday"
  image="https://avatars.githubusercontent.com/u/87361294?v=4"
  views="100M"
  subs="100k"
  desc="This is channel your you get the most informative videos and 
  you will be eable to do with your self to understand the best way"
  timestamp="19 second ago"/>
</div>
  );
};

export default Searchpage;
