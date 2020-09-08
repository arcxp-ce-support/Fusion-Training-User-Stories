/*  /components/features/article/header/default.jsx  */

import React from 'react';
import { useAppContext } from 'fusion:context';
import getProperties from 'fusion:properties'

const Header = () => {
  /* retrieve global content from fusion's app context */
  const appContext = useAppContext();
  const { globalContent, siteProperties } = appContext;

  return (
    <header className="container-fluid">
      <span className="text-info">{`News from ${siteProperties.defaultSiteTitle}!`}</span>
      <h2 className="card-title">{globalContent.headlines.basic}</h2>
      <h5 className="card-text">{globalContent.subheadlines.basic}</h5>
    </header>
  );
}

export default Header;