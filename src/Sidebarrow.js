import React from 'react';

import './Sidebarrow.css'
const Sidebarrow = ({Icons,title}) => {
  return (
  <div className='Sidebarrow'>
      <Icons/>
      <h2>{title}</h2>
  </div>);
};

export default Sidebarrow;
