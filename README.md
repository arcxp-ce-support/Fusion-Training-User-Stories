# Lab 09
On this branch, we've created a new Card feature that can fetch content individually for each instance of the feature. This means that we can configure multiple card features per page and each one can render its own content.

Now that we can render multiple instances of a feature, we want to filter the content to only use what is necessary to optimize page performance. Switch to branch `lab-10` to see the completed code for this branch's user story.

Building on our existing content source, we will apply a filter to the payload to retrieve only the necessary fields. You can add or remove fields that you would like to preview

1. Add a `filters` directory in the `/content` folder if it doesn't already exist.

2. Add a new file named `story-card.js` that exports a filter following the expected [query format](https://redirector.arcpublishing.com/alc/arc-products/pagebuilder/fusion/documentation/recipes/content-filtering.md)

```
export default `
{
  headlines {
    basic
  }
  subheadlines {
    basic
  }
}
`;
```

3. Import the filter into the `card` feature.
```import storyCardFilter from '../../../../content/filters/story-card';```

4. Apply the filter to the `useContent` function that fetches the data.
```
const story = useContent({
    source: contentService,
    query: contentConfigValues,
    filter: storyCardFilter,
});
```

5. To see the difference in payload, `console.log(JSON.stringify(story))` in the `card` feature

6. Load your page and confirm that you are still displaying the headline and subheadline with a much smaller payload.

## [Next up: Lab 10](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/lab-10)
