import React from 'react';

import './Sidebarrow.css'
const Sidebarrow = ({Selected,Icons,title}) => {
  return (
  <div className={`Sidebarrow ${Selected && "Selected"}`}>
      <Icons className='Sidebarrow_icons'/>
      <h2 className='Sidebarrow_title'>{title}</h2>
  </div>);
};

export default Sidebarrow;
