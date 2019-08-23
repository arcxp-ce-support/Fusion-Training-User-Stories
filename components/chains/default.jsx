import React from 'react'

 const DefaultChain = props => (
  <div className='chain | default bg-light' style={{padding: '30px'}} id={props.id}>
    {props.children}
  </div>
);

 export default DefaultChain;