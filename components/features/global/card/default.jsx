/*  /components/features/global/card/default.jsx  */

import React from 'react';
import { useAppContext } from 'fusion:context';

const Card = () => {
  /* retrieve global content from fusion's app context */
  const appContext = useAppContext();
  const { globalContent } = appContext;

  return (
    <article className="card">
      <div className="card-body">
        <h2 className="card-title">{globalContent.headlines.basic}</h2>
        <h5 className="card-text">{globalContent.subheadlines.basic}</h5>
      </div>
    </article>
  );
}

export default Card;