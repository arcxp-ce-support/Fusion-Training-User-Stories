/*  /components/features/sample/color-block/default.jsx  */

import React from 'react';
import PropTypes from 'prop-types';
import { useComponentContext } from 'fusion:context';

const ColorBlock = () => {
  /* retrieve custom fields from fusion's component context */
  const componentContext = useComponentContext();
  const { hexCode } = componentContext.customFields;

  /* generate a random RGB color value */
  let rgb = [];
  for (var i = 0; i < 3; i++) {
    let r = Math.floor(Math.random() * 256)
    rgb.push(r)
  }

  /* select background color */
  const bgColor = hexCode ? `#${hexCode}` : `rgb(${rgb})`;

  /* set styles for color block */
  const styles = {
    height: '250px',
    margin: '10px',
    backgroundColor: bgColor,
  };

  return (
    <div style={styles} />
  );
}

ColorBlock.static = true;

ColorBlock.propTypes = {
  customFields: PropTypes.shape({
    hexCode: PropTypes.string.tag({
      label: 'Hex Code',
      description: 'Please enter a valid color hex value. For example, 6b5d96.'
    }),
  }),
};

export default ColorBlock;