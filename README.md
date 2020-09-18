# fusion-16

## User story
As a user, I would like to configure my site to render different content for different outputs such as Google AMP.

## Concepts
- Working with multiple output types

## New files:
- `/components/output-types/amp.jsx`
- `/components/features/sample/color-block/amp.jsx`

## What's next
Just like that, our site now supports AMP! Let's learn a little bit more about how output types work together. Switch to `fusion-17` to learn more.

If you are continuing this training from the last user story, then keep working on your current branch USERNAME-fusion-training.

If you are starting this training from the seventeeth user story (task Fusion-17), then follow the steps under "What's next?" on the README file in the (https://github.com/wapopartners/Fusion-Training-User-Stories/blob/fusion-01/README.md)[fusion-01] branch - but checkout from fusion-16 instead.

## Task: User Story 16
As a user, I would like to be able to have more control of how a feature will render by explicitly checking the output type.

## Guide
1. Now that we have set an output type of `amp` we can access it in our templates to optionally render depending on output type.

2. Access `outputType` from `appContext` in the `article/header` feature:

```
const {
    globalContent,
    outputType,
    siteProperties,
  } = appContext;
```

3. Now you can test your output type to conditionally render based on which output type is active. For example `outputType !== 'amp'` will test if the output type is not `amp` and will only render in that scenario.

4. Try it out in the `article/header` feature by conditionally rendering the title when the output type is not `amp`.

5. We can also conditionally render an entire feature by adding an `amp.jsx` version and returning `null`. For the `alert-bar` feature, add `amp.jsx` in the same folder as the `default.jsx` file. Then instead of returning feature code, return `null` like so:

```
const AlertBar = () => {
  return null;
}
```

6. Now, alert bar will only render when the output type is not `amp`

7. `npx fusion rebuild` and check your results on the default output type and by adding the query param to review the `amp` output type `?outputType=amp`.

## Solution Files: User Story 16
- [components/features/global/alert-bar/amp.jsx](https://github.com/wapopartners/Fusion-Training-User-Stories/blob/fusion-17/components/features/global/alert-bar/amp.jsx)
- [components/features/article/header/default.jsx](https://github.com/wapopartners/Fusion-Training-User-Stories/blob/fusion-17/components/features/article/header/default.jsx)

### [Continue to Next Task: User Story 17](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/fusion-17)
