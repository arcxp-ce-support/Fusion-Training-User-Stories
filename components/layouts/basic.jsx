/*  /components/layouts/basic.jsx  */

import React, { Fragment } from 'react'
import PropTypes from 'prop-types';

const BasicLayout = (props) => {
  const [promo, header, main, aside, footer] = props.children;
  return (
    <Fragment>
      {promo}
      <div className="container">
        <div className="row">
          <header className='col-lg-12'>
            {header}
          </header>
          <main className='col-lg-8'>
            {main}
          </main>
          <aside className='col-lg-4'>
            {aside}
          </aside>
          <footer className='col-lg-12'>
            {footer}
            <p>Copyright &copy; 2020</p>
          </footer>
        </div>
      </div>
    </Fragment>
  )
}

BasicLayout.propTypes = {
  children: PropTypes.node
}

BasicLayout.sections = ['promo', 'header', 'main', 'aside', 'footer']

export default BasicLayout