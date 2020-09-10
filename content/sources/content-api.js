/**
 * Makes a call to the url
 * https://{CONTENT_BASE}/content/v4/stories/?website_url=${ key.website_url || key }&website=demo`;
 *
 * */
import { CONTENT } from '../../helpers/sample-content';

const schemaName = 'article';

const params = {
  website_url : 'text',
  published: 'text',
};

const resolve = (key) => {
  const arcsite = key["arc-site"] || 'demo';
  const requestUri = `/content/v4/?website_url=${ key.website_url || key }&website=${arcsite}`;
  return (key.hasOwnProperty('published')) ? `${requestUri}&published=${key.published}` : requestUri
};

const fetch = (query = {}) => {
  return CONTENT;
};

const fetch = (query = {}) => {
    if (query["arc-site"]) {
        return CONTENT[query["arc-site"]];
    }
    return CONTENT["demo"];
};

export default {
  resolve,
  fetch,
  params,
  schemaName,
}
