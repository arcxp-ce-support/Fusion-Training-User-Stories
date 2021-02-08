# Lab 08

On this branch, we have created our `content-api` content source using the content base added in our .env file so that we can see content making it into our feature pack using the debugger tool exposed in the PageBuilder UI.

We are going to create a new `Card` component, which will render the headline and subheadline from our content source.

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

3. Within the Card component, retrieve the `storyConfig` custom field. This `storyConfig` custom field contains `contentService` and `contentConfigValues`. Extract them from `storyConfig` 

```
const { contentService, contentConfigValues } = props.customFields.storyConfig;
```

4. Now, we need to [fetch the content](https://redirector.arcpublishing.com/alc/arc-products/pagebuilder/fusion/documentation/recipes/fetching-content-with-hooks.md) using Fusion's `useContent`. Import `useContent` from Fusion:
```
import { useContent } from 'fusion:content';
```

5. Using `useContent`, fetch the story by passing in the source and query parameters:
```
const story = useContent({
  source: contentService,
  query: contentConfigValues,
});
```

6. Now that we have the story available to us, display it's headline and subheadline on the page

7. Remember to catch the case when `story` doesn't exist and return null

8. To test, open your test page and add in your new `Card` feature

9. Within the Story URL custom fields, select `article` and your `content-api` (feel free to add in values for `website_url` and `published`)

10. Save and publish your page. When you open up the page within your browser, you should see the data of your content source display

## [Next up: Lab 09](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/lab-09)
