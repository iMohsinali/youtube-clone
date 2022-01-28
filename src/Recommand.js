import React from 'react';
import './recommand.css'
import VideoCard from './VideoCard';
const Recommand = () => {
  return( 
  <div className='recommand'>
    <h2>Recommand</h2> 
    <div className='recommand_videos'>
    <VideoCard
         views="2.3M"
         title="This stuff is awesome; really appreciate you guys.
          I have bought paid courses on Udemy and LinkedIn learning "
          timestamp="3 days ago"
          channel="Mr Programmer"
          channelimage="https://avatars.githubusercontent.com/u/87361294?v=4"
          image="https://avatars.githubusercontent.com/u/87361294?v=4"/>
     <VideoCard
         views="2.3M"
         title="This stuff is awesome; really appreciate you guys.
          I have bought paid courses on Udemy and LinkedIn learning "
          timestamp="3 days ago"
          channel="Mr Programmer"
          channelimage="https://avatars.githubusercontent.com/u/87361294?v=4"
          image="https://avatars.githubusercontent.com/u/87361294?v=4"/>
           <VideoCard
         views="2.3M"
         title="This stuff is awesome; really appreciate you guys.
          I have bought paid courses on Udemy and LinkedIn learning "
          timestamp="3 days ago"
          channel="Mr Programmer"
          channelimage="https://avatars.githubusercontent.com/u/87361294?v=4"
          image="https://avatars.githubusercontent.com/u/87361294?v=4"/>
           <VideoCard
         views="2.3M"
         title="This stuff is awesome; really appreciate you guys.
          I have bought paid courses on Udemy and LinkedIn learning "
          timestamp="3 days ago"
          channel="Mr Programmer"
          channelimage="https://avatars.githubusercontent.com/u/87361294?v=4"
          image="https://avatars.githubusercontent.com/u/87361294?v=4"/>
           <VideoCard
         views="2.3M"
         title="This stuff is awesome; really appreciate you guys.
          I have bought paid courses on Udemy and LinkedIn learning "
          timestamp="3 days ago"
          channel="Mr Programmer"
          channelimage="https://avatars.githubusercontent.com/u/87361294?v=4"
          image="https://avatars.githubusercontent.com/u/87361294?v=4"/>
    </div>
    </div>);
};

export default Recommand;
