import React from 'react';
import PropTypes from 'prop-types';

const DefaultOutputType = ({
  children,
  contextPath,
  deployment,
  CssLinks,
  Fusion,
  Libs,
  MetaTags,
}) => <html>
    <head>
      <title>Fusion Article</title>
      <MetaTags />
      <Libs />
      <CssLinks />
      <link rel='icon' type='image/x-icon' href={deployment(`${contextPath}/resources/favicon.ico`)} />
    </head>
    <body>
      <div id='fusion-app'>
        {children}
      </div>
      <Fusion />
    </body>
  </html>;

DefaultOutputType.propTypes = {
  children: PropTypes.array,
  contextPath: PropTypes.string,
  CssLinks: PropTypes.elementType,
  deployment: PropTypes.func,
  Fusion: PropTypes.elementType,
  Libs: PropTypes.elementType,
  MetaTags: PropTypes.elementType,
};

export default DefaultOutputType;
