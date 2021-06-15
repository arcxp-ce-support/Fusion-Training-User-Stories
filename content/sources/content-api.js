const schemaName = 'article';

const params = {
    website_url : ''
}

const resolve = (key) => {
    const requestUri = `/content/v4/stories/?website_url=${key.website_url}&website=the-daily-news`;
    return requestUri;
}

export default {
    resolve,
    params,
    schemaName
}
