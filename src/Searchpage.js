import { TuneOutlined } from "@material-ui/icons";
import React from "react";
import "./Searchpage.css";
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
      you will be eable to do with your self to understand the best way."/>
    </div>
  );
};

export default Searchpage;
