import React from 'react';

var CowListEntry = (props) => {
  return (
    <div className='cow-body'>
      <div className='cow-list-entry-name'>
      {props.cow.name}
      </div>
    </div>
  );

};
export default CowListEntry;

