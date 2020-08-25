/*  /components/features/article/alert-bar/default.jsx  */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useComponentContext } from 'fusion:context';

const AlertBar = () => {
  /* retrieve custom fields from fusion's component context */
  const componentContext = useComponentContext();
  const {
    alertType,
    link,
    linkText,
    text,
  } = componentContext.customFields;

  return (
    <section className={`alert alert-${alertType} w-100`} role='alert'>
      {text}
      {
        linkText
        &&
        <Fragment>: <a href={link} className='alert-link'>{linkText}</a></Fragment>
      }
    </section>
  );
}

AlertBar.static = true;

AlertBar.propTypes = {
  customFields: PropTypes.shape({
    alertType: PropTypes.oneOf([
      'danger', 'warning', 'info',
    ]).tag({
      defaultValue: 'danger',
      labels: {
        danger: 'breaking',
        warning: 'warning',
        info: 'info',
      },
      name: 'Alert Type',
    }),
    text: PropTypes.string.tag({
      name: 'Main Alert Text'
    }).isRequired,
    linkText: PropTypes.string.tag({
      group: 'Call to Action',
      name: 'Text',
      description: 'Text to prompt the users to click the link',
    }),
    link: PropTypes.url.tag({
      group: 'Call to Action',
      name: 'Url',
    }),
  }),
};

export default AlertBar;