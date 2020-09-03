# fusion-08

On this branch, we have created our `content-api` content source using the content base added in our .env file so that we can see content making it into our feature pack using the debugger tool exposed in the PageBuilder UI.

## User story
As a user, I would like to fetch content from an API into my feature pack.

## Concepts
- Content sources
- Content Base
- Content Schema

## New Files on this branch
- `/content/sources/content-api.js`
- `/content/schemas/article.js`
- `.env`

## Changed files:
- none

## What's next?
Now that we have access to content, it's time to update our feature to render this via PageBuilder. Switch to branch `fusion-09` to learn more about this next step.

If you are continuing this training from the last user story, then keep working on your current branch USERNAME-fusion-training.

If you are starting this training from the ninth user story (task Fusion-09), then follow the steps under "What's next?" on the README file in the (https://github.com/wapopartners/Fusion-Training-User-Stories/blob/fusion-01/README.md)[fusion-01] branch - but checkout from fusion-08 instead.

## New Task: User Story 09
As a user, I would like to be able to pipe content into my feature so that it renders information from an API.

## Guide
We are going to create a new `Card` component, which will read the headline and subheadline from our content source

1. Create a new *global* feature called `Card` (i.e. the `deafult.jsx` should be placed in `components/features/global/card` folder)

2. Add a PageBuilder custom field that enables the user to select our article content source:
```
Card.propTypes = {
  customFields: PropTypes.shape({
    storyConfig: PropTypes.contentConfig('article').tag({
      label: 'Story URL',
    }).isRequired,
  }),
};
```
Refer to the docs for more information on [dynamically configuring content](https://redirector.arcpublishing.com/alc/arc-products/pagebuilder/fusion/documentation/recipes/dynamically-configuring-content-with-hooks.md)

3. Within the Card component, retrieve the `storyConfig` custom field

4. This `storyConfig` custom field contains `contentService` and `contentConfigValues`. Extract them from `storyConfig` 

5. Now, we need to [fetch the content](https://redirector.arcpublishing.com/alc/arc-products/pagebuilder/fusion/documentation/recipes/fetching-content-with-hooks.md) using Fusion's `useContent`. Import `useContent` from Fusion:
```
import { useContent } from 'fusion:content';
```

6. Using `useContent`, fetch the story by passing in the source and query parameters:
```
const story = useContent({
  source: contentService,
  query: contentConfigValues,
});
```

7. Now that we have the story available to us, display it's headline and subheadline on the page

8. Remember to catch the case when `story` doesn't exist and return null

9. To test, open your test page and add in your new `Card` feature

10. Within the Story URL custom fields, select `article` and your `content-api` (feel free to add in values for `website_url` and `published`)

11. Save and publish your page. When you open up the page within your browser, you should see the data of your content source display