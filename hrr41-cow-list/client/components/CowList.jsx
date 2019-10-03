import React from 'react';
import CowListEntry from './CowListEntry';

var CowList = (props) => (
  <ul className='cow-list'>
    {props.cows.map((cow, index )=> <CowListEntry cow={cow} onClick={props.onClick} onDelete={props.onDelete} key={index} />)}
  </ul>
);
export default CowList;