# fusion-10
On this branch, we've created a GraphQL filter and applied it to the useContent call in order to minimize the payload from the content source.

## User story
As a user, I would like to filter the content to only the necessary fields to reduce the payload.

## Concepts
- filtering

## New Files on this branch
- `components/features/global/card/default.jsx`

## Changed files:
- `content/filters/story-card.js`

## What's next?
So far, our feature has only been able to render content from a single source provided by the content config, which provides content to the feature. In our next task, we'll learn how to fetch content at a page level so that we can use it to power multiple features. Switch to branch `fusion-11` to learn more about this next step.
