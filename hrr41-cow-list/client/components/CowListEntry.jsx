import React from 'react';

var CowListEntry = (props) => {
  return (

    <li  className='cow-body'>

      <span onClick={() => props.onClick(props.cow.name, props.cow.description)}>{props.cow.name} </span>
      <button onClick={() => props.onDelete(props.cow.name, props.cow.description)}>Dinner</button>
    </li>
  );

};
export default CowListEntry;

