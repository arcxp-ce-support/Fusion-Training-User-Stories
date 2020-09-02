/*  /components/features/global/card/default.jsx  */

import React from 'react';
import PropTypes from 'prop-types';
import { useContent } from 'fusion:content';
import storyCardFilter from '../../../../content/filters/story-card';

const Card = (props) => {
  /*
    Retrieve content config values from custom fields
    Notice that here we are using props directly instead of component context
  */
  const {
    customFields: {
      storyConfig = {},
    },
  } = props;
  const { contentService, contentConfigValues } = storyConfig;

  /* fetch component content using Fusion's useContent */
  const story = useContent({
    source: contentService,
    query: contentConfigValues,
    filter: storyCardFilter,
  });

  /* prevent the story card from rendering if there is no content */
  if (!story) return null;

  return (
    <article className="card">
      <div className="card-body">
        <h2 className="card-title">{story.headlines.basic}</h2>
        <h5 className="card-text">{story.subheadlines.basic}</h5>
      </div>
    </article>
  );
}

Card.propTypes = {
  customFields: PropTypes.shape({
    storyConfig: PropTypes.contentConfig('article').tag({
      label: 'Story URL',
    }).isRequired,
  }),
};

export default Card;