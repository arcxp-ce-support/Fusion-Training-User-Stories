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
So far, our feature has only been able to render content from a single source provided by the content config, which provides content to the feature. In our next task, we'll learn how to fetch content at a page level so that we can use it to power multiple features. Switch to branch `fusion-11` to learn more about this branch's user story.

If you are continuing this training from the last user story, then keep working on your current branch USERNAME-fusion-training.

If you are starting this training from the eleventh user story (task Fusion-11), then follow the steps under "What's next?" on the README file in the (https://github.com/wapopartners/Fusion-Training-User-Stories/blob/fusion-01/README.md)[fusion-01] branch - but checkout from fusion-10 instead.

## Task: User Story 10

As a user, I would like to configure my feature to use a single global content source.

## Guide

01. Create a new feature in the features folder by creating an article/header directory with a `default.jsx` file.

02. Import `useAppContext` from the `fusion:context` package as documented [here](https://redirector.arcpublishing.com/alc/arc-products/pagebuilder/fusion/documentation/api/feature-pack/components/context.md).

03. Now that you've imported the useAppContext hook, use it to retrieve and populate the global content available from it.

04. Render the headline and subheadline from global content in the header feature.

05. Remove the generic headline we added in our default output-type from fusion-01.

06. `npx fusion rebuild` to see your new feature available in the admin.

07.  After fusion rebuilds, open your test page from previous tasks and scroll to the "Page Content" section in the left column.

08. Here, you will see a drop down for "Global Content Service" - select your content-api and enter values for the website_url and published fields.

09. Add the `article/header` feature to your page and you should see it populate with the headline and subheadline from the global content. Save and publish the page.

## Solution Files: User Story 10
- [components/features/article/header/default.jsx](https://github.com/wapopartners/Fusion-Training-User-Stories/blob/fusion-11/components/features/article/header/default.jsx)

### [Continue to Next Task: User Story 11](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/fusion-11)
