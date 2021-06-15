import React, { useEffect } from 'react';
import get from 'lodash.get';
import propTypes from 'prop-types';

const ApesterArticleBody = (props) => {
  useEffect(() => {
    const loader = document.createElement('script');
    loader.type = 'text/javascript';
    loader.src = 'https://static.apester.com/js/sdk/latest/apester-sdk.js';
    document.getElementsByTagName('head')[0].appendChild(loader);
  }, []);

  const mediaID = get(props, 'mediaId', null);

  return (
    mediaID ? <div className="apester-media" data-media-id={mediaID}>&nbsp;</div> : null
  );
};

ApesterArticleBody.propTypes = {
  mediaId: propTypes.string,
};

export default ApesterArticleBody;
