import React from 'react'
import PropTypes from 'prop-types';

const GridChain = props => {
  const {
    children,
    customFields: {
      desktopCols = '4',
      tabletCols = '6',
      mobileCols = '12',
    },
    id,
  } = props;

  return (
    <div className='chain_grid | row' id={id}>
      {children.map((item) => {
        return (
          <div
            className={`mb-3 col-lg-${desktopCols} col-md-${tabletCols} col-xs-${mobileCols}`}
            key={item.key}
          >
            {item}
          </div>
        );
      })}
    </div>
)};

GridChain.propTypes = {
  customFields: PropTypes.shape({
    desktopCols: PropTypes.oneOf([
      '12', '6', '4', '3'
    ]).tag({
      labels: {
        '12': '1',
        '6': '2',
        '4': '3',
        '3': '4',
      },
      name: 'Number of Cards (Desktop)',
    }),
    tabletCols: PropTypes.oneOf([
      '12', '6', '4', '3'
    ]).tag({
      labels: {
        '12': '1',
        '6': '2',
        '4': '3',
        '3': '4',
      },
      name: 'Number of Cards (Tablet)',
    }),
    mobileCols: PropTypes.oneOf([
      '12', '6', '4'
    ]).tag({
      labels: {
        '12': '1',
        '6': '2',
        '4': '3',
      },
      name: 'Number of Cards (Mobile)',
    }),
  }),
};

 export default GridChain;