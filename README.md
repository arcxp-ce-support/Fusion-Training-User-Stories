# fusion-09
On this branch, we've created a new Card feature that can fetch content individually for each instance of the feature. This means that we can configure multiple card features per page and each one can render its own content.

## User story
As a user, I would like to be able to pipe content into my feature so that it renders information from an API.

## Concepts
- useContent
- contentConfig custom field

## New Files on this branch
- `components/features/global/card/default.jsx`

## Changed files:
- none

## What's next?
Now that we can render multiple instances of a feature, we want to filter the content to only use what is necessary to optimize page performance. Switch to branch `fusion-10` to see how!
