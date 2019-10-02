import React from 'react';

var CowListEntry = (props) => {
  return (
    <div className='cow-body' onClick={() => props.onClick(props.cow.name, props.cow.description)}>

      <p>{props.cow.name} </p>

    </div>
  );

};
export default CowListEntry;

