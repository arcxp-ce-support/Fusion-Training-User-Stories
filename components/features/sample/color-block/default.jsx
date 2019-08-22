/*  /components/features/sample/color-block/default.jsx  */

import React from 'react'

const ColorBlock = () => {
  /* generate a random RGB color value */
  let rgb = []
  for (var i = 0; i < 3; i++) {
    let r = Math.floor(Math.random() * 256)
    rgb.push(r)
  }

  /* set styles for color block */
  const styles = {
    height: '250px',
    margin: '10px',
    backgroundColor: `rgb(${rgb})`,
  };

  return (
    <div style={styles} />
  )
}

export default ColorBlock