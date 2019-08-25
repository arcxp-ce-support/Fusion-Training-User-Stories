/*  /components/features/sample/color-block/default.jsx  */

import React from 'react';

const ColorBlock = () => {
  /* set styles for color block */
  const styles = {
    height: '250px',
    margin: '10px',
  };

  return (
    <div className="bg-info " style={styles}>
      <p className="text-light text-center">I'm an amp feature!</p>
    </div>
  );
}

export default ColorBlock;