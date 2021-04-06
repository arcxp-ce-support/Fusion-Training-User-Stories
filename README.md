# Lab 07
This lab focuses on fetching content from an API and dynamically piping content to a PageBuilder user.  For more information on fetching content, [click here](https://redirector.arcpublishing.com/alc/arc-products/pagebuilder/fusion/documentation/recipes/fetching-content.md?version=2.7).

On this branch, we have updated our `/global/alert-bar` feature that we created in `exercise-01` to offer PageBuilder users the ability to edit their feature inline in the admin preview pane.

Your next task is to update your feature to dynamically pipe content by exposing a content config to the PageBuilder user. Switch to branch `fusion-08` to see the completed code for this branch's user story.

In order to fetch content from an API, we need to define what API we'll be fetching from and provide credentials. That's why we defined our CONTENT_BASE and ARC_ACCESS_TOKEN in `.env` during setup. 

1. We have access to our orgs API, but now we need to create a content source to retrieve the API data. All content sources goes into the `content/sources` folder

2. Open the `content/sources` folder and create a new file called `content-api.js`

3. Give your content source a schema name. For example:
```
const schemaName = 'article';
```

4. Are there params that need to be provided to use this content source? Then add them in:
```
const params = {
  website_url : 'text',
  published: 'text',
};
```
In our example above, this content source is expecting a `website_url` and `published` date

5. We need to define the URI which the content source will call. Create a fusion `resolve` function which takes in a `key` holding the params defined above and returns the URI. For more details on content source, [click here](https://redirector.arcpublishing.com/alc/arc-products/pagebuilder/fusion/documentation/recipes/defining-content-source.md?version=2.6)
```
const resolve = (key) => {
  const requestUri = `/content/v4/stories/?website_url=${ key.website_url || key }&website={org}`;

  return (key.hasOwnProperty('published')) ? `${requestUri}&published=${key.published}` : requestUri
}
```

6. *(This if you do not have access to your Arc organization)* As a work-around, go to lab-08 and download the `helpers/sample-content.js` file into a `helpers` folder in the root of your project. Now, we can import this sample data into our content source and return it when this content source is called like below. You do not need the `resolve` function.

```
import { CONTENT } from '../../helpers/sample-content';
const fetch = (query = {}) => {
  return CONTENT;
};
```

7. Finally, export your content source:
```
export default {
  resolve,
  fetch,  // you only need this if using the sample data mentioned on step #11
  params,
  schemaName,
}
```

8. Since content sources usually return a lot of data, we need to define what fields we want in order to reduce the size and improve performance. This is done by creating a schema for our content source.

9. From root, open the `content/schemas` folder - this is where all schemas reside. View the [schema documentation](https://redirector.arcpublishing.com/alc/arc-products/pagebuilder/fusion/documentation/recipes/using-graphql-schema.md) to learn more

10. Create a new JS file called `article.js` (the schemaName we defined in step 8). 

11. Here, we are going to define the fields we want from the content source. Fields important to us are:
```
type Query {
  type: String!
  version: String!
  description: Description
  headlines: Headlines
  promo_items: PromoItems
  subheadlines: Subheadlines
}
```

12. Notice how `description, headlines, promo_items and subheadlines` are referencing other types - this is because they hold objetcs. So we need to define those as well:
```
type BasicPromoItems {
  type: String
  url: String
}
type Description {
  basic: String
}
type Headlines {
  basic: String
}
type PromoItems {
  basic: BasicPromoItems
}
type Subheadlines {
  basic: String
}
```

13. Now that we have our content source and schema defined, we can test it out! After fusion rebuilds, open your test page from previous tasks and scroll to the "Page Content" section

14. Here, you will see a drop down for "Global Content Service" - select your `content-api` and enter values for the `website_url` and `published` fields. Save and publish the page

15. We're going to provide a tip - you can view Fusion data with the following JavaScript. Create a new bookmark on your browser called `View Fusion Data` and paste the JavaScript in `/helpers/view-fusion-data.js` from this branch, into the URL

16. Open your test page and click on your new bookmark - you should see a panel on the left-hand side of your screen appear

17. Click on "Global Content" and you'll see the content returned from your content source! You'll also be able to view the data you entered into the `website_url` and `published` fields

## [Next up: Lab 08](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/lab-08)
