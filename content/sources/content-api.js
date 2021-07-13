
const params = {
    website_url : ''
}

// Remember to change the last query param of the endpoint with the id of your website
const resolve = (key) => {
    const requestUri = `/content/v4/stories/?website_url=${key.website_url}&website=the-daily-news`;
    return requestUri;
}

export default {
    resolve,
    params
}
