# Lab 09
This lab focuses on filtering content for optimal page performance. To read more about content filtering in Fusion, [click here](https://redirector.arcpublishing.com/alc/arc-products/pagebuilder/fusion/documentation/recipes/content-filtering.md). 

We want to filter the content fetched to only what is necessary to optimize page performance. Building on our existing content source, we will apply a filter to the payload to retrieve only the necessary fields. You can add or remove fields that you would like to preview.

1. Add a `filters` directory in the `/content` folder if it doesn't already exist. Filters can be stored in other folders or inline in the content source file as well.

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

5. To see the difference in payload, `console.log(JSON.stringify(story))` in the `Card` feature

6. Load your page and confirm that you are still displaying the headline and subheadline with a much smaller payload.

You have now implemented the filter on the `Card` feature block. Now, anytime the `Card` block is placed on a page, it filters the data for each instance of the block to just what is defined in the filter. You can also apply the filter directly within the content source itself. This will result in the filter being applied for every feature block that utilizes that content source.

## [Next up: Lab 10](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/lab-10)
