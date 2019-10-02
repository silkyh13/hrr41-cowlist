import React from 'react';
import CowListEntry from './CowListEntry';

var CowList = (props) => (
  <div className='cow-list'>
    {props.cows.map((cow, index )=> <CowListEntry cow={cow} onClick={props.onClick} key={index} />)}
  </div>
);
export default CowList;