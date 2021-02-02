'use strict'

/* Third party libs */
import PropTypes from 'prop-types'
import React from 'react'

const DoubleChain = (props) => {
  const {
    children = [],
    customFields = {},
    id,
  } = props;
  const col_one_count = customFields.columnOne
  const layout = customFields.layout

  return (
    <div className={`double_chain | default ${layout}`} id={id}>
      <div className='col_one'>
        {children.map((feature, index) => {
          return (index < col_one_count) ? feature : ''
        })}
      </div>
      <div className='col_two'>
        {children.map((feature, index) => {
          return (index >= col_one_count) ? feature : ''
        })}
      </div>
    </div>
  )
}

DoubleChain.propTypes = {
  id: PropTypes.string.isRequired,
  customFields: PropTypes.shape({
	  layout: PropTypes
	    .oneOf([
	      'even-width',
	      'wide-left',
	      'wide-right'
	    ]).tag({
	      name: 'Layout',
	      labels: {
	        'even-width': 'Even Width',
	        'wide-left': 'Wide Left',
	        'wide-right': 'Wide Right'
	      }
	    }),
	  columnOne:PropTypes.number.tag({
      name: 'Number of features in column one?',
      description: 'Enter the number of features to go in the first column. The rest will go in the second'
    }).isRequired,
  }),
};

export default DoubleChain