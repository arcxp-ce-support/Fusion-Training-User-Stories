# fusion-07

On this branch, we have updated our `/global/alert-bar` feature that we created in `exercise-01` to offer PageBuilder users the ability to edit their feature inline in the admin preview pane.

## User story
As a user, I would like to directly customize my feature using inline editing for a streamlined experience.

## Concepts
- Inline Editing

## New Files on this branch
- None

## Changed files:
- `/components/features/global/alert-bar/default.jsx`

## What's next?
Your next task is to update your feature to dynamically pipe content by exposing a content config to the PageBuilder user. Switch to branch `fusion-08` to see the completed code for this branch's user story.

If you are continuing this training from the last user story, then keep working on your current branch USERNAME-fusion-training.

If you are starting this training from the eighth user story (task Fusion-08), then follow the steps under "What's next?" on the README file in the (https://github.com/wapopartners/Fusion-Training-User-Stories/blob/fusion-01/README.md)[fusion-01] branch - but checkout from fusion-07 instead.

## Task: User Story 07
As a user, I would like to fetch content from an API into my feature pack.

## Guide
In order to fetch content from an API, we need to define what API we'll be fetching from and provide credentials. To do this, we'll need to:

1. Create a new file called `.env` at the root of your project directory. Inside this file, you'll need to add in the content base and access token for your API

2. Go to your [orgs homepage](https://redirector.arcpublishing.com/home/) or if you don't have one, use our [demo organization](https://demo.arcpublishing.com/home/)

3. Click developer center and click "create read-only token"

4. Enter your email address into the description field and click create. This will create your access token

5. Copy the content at the bottom where it says "Copy the following into your PB .env file if setting up PageBuilder" and place it into your .env. It should be something like this:
```
CONTENT_BASE=https://api.sandbox.{org}.arcpublishing.com 
ARC_ACCESS_TOKEN={token_here}
```
where `org` is the name of your organization

6. Now that we have access to our orgs API, we need to create a content source to retrieve the API data. All content sources goes into the `content/sources` folder

7. Open the `content/sources` folder and create a new file called `content-api.js`

8. Give your content source a schema name. For example:
```
const schemaName = 'article';
```

9. Are there params that need to be provided to use this content source? Then add them in:
```
const params = {
  website_url : 'text',
  published: 'text',
};
```
In our example above, this content source is expecting a `website_url` and `published` date

10. We need to define the URI which the content source will call. Create a resolve function which takes in a `key` holding the params defined above and returns the URI
```
const resolve = (key) => {
  const requestUri = `/content/v4/stories/?website_url=${ key.website_url || key }&website={org}`;

  return (key.hasOwnProperty('published')) ? `${requestUri}&published=${key.published}` : requestUri
}
```

11. *(This is only for those using demo as the org)* If you are using `demo` as your org then you probably don't have any data available. As a work-around, go to fusion-08 and download the `helpers/sample-content.js` file into a `helpers` folder in the root of your project. Now, we can import this sample data into our content source and return it when this content source is called like so:

```
import { CONTENT } from '../../helpers/sample-content';
// ... other functions / consts
const fetch = (query = {}) => {
  return CONTENT;
};
```

12. Finally, export your content source:
```
export default {
  resolve,
  fetch,  // you only need this if using the sample data mentioned on step #11
  params,
  schemaName,
}
```

13. Since content sources usually return a lot of data, we need to define what fields we want in order to reduce the size and improve performance. This is done by creating a schema for our content source.

14. From root, open the `content/schemas` folder - this is where all schemas reside. View the [schema documentation](https://redirector.arcpublishing.com/alc/arc-products/pagebuilder/fusion/documentation/recipes/using-graphql-schema.md) to learn more

15. Create a new JS file and using the same name as the schema name you defined on step 8 `article.js` - this is the naming convention we follow for schemas

16. Here, we are going to define the fields we want from the content source. Fields important to us are:
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

17. Notice how `description, headlines, promo_items and subheadlines` are referencing other types - this is because they hold objetcs. So we need to define those as well:
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

18. Now that we have our content source and schema defined, we can test it out! After fusion rebuilds, open your test page from previous tasks and scroll to the "Page Content" section

19. Here, you will see a drop down for "Global Content Service" - select your `content-api` and enter values for the `website_url` and `published` fields. Save and publish the page

20. We're going to provide a tip - you can view Fusion data with the following JavaScript. Create a new bookmark on your browser called `View Fusion Data` and paste the JavaScript in `/helpers/view-fusion-data.js` from this branch, into the URL

21. Open your test page and click on your new bookmark - you should see a panel on the left-hand side of your screen appear

22. Click on "Global Content" and you'll see the content returned from your content source! You'll also be able to view the data you entered into the `website_url` and `published` fields

## Solution Files: User Story 07
- [/content/sources/content-api.js](https://github.com/wapopartners/Fusion-Training-User-Stories/blob/fusion-08/content/sources/content-api.js)
- [/content/schemas/article.js](https://github.com/wapopartners/Fusion-Training-User-Stories/blob/fusion-08/content/schemas/article.js)
- .env

### [Continue to Next Task: User Story 08](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/fusion-08)
