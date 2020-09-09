# fusion-15

On this branch, we have are now utilizing site properties so that we can render site specific properties within an organization.

## User story
As a user, I would like to configure my pages to use site-specific variables.

## Concepts
- Site Properties

## New Files on this branch
-  `properties/index.js `
-  `properties/sites/demo.js`
-  `properties/sites/the-bugle.js`

## Changed files:
- `components/features/article/header/default.jsx`

## What's next?
It's time to learn how to work with multiple output types. Switch to `fusion-16` to find out how.

If you are continuing this training from the last user story, then keep working on your current branch USERNAME-fusion-training.

If you are starting this training from the sixteenth user story (task Fusion-16), then follow the steps under "What's next?" on the README file in the (https://github.com/wapopartners/Fusion-Training-User-Stories/blob/fusion-01/README.md)[fusion-01] branch - but checkout from fusion-15 instead.

## New Task: User Story 16
As a user, I would like to configure my site to render different content for different outputs such as Google AMP.

## Guide
1. In the `components/output-types` directory, create an amp.jsx file

2. Within the react component return the entire page content (from the html tag to the body tag), while rendering the children from props

3. There are other attributes in props we can use to render content. For example, the favicon can be displayed by:

```
<link rel='icon' type='image/x-icon' href={deployment(`${contextPath}/resources/favicon.ico`)} />
```
where `deployment` and `contextPath` are extracted from props

4. `CssLinks`, `MetaTags` and `Libs` components can be extracted from the props and rendered in the head tag. e.g. `<CssLinks />`

5. Similarily, `Fusion` components should be extracted from props and rendered in the body - `<Fusion />`

6. Now lets render an AMP version of our colorblock component. In the colorblock directory, create an amp.jsx file

7. In this case, we only need to return the elements of the feature we want to render from the component (i.e. no head/body tags are needed here)

8. After fusion rebuild, load your amp page by adding the following query at the end of your test page url `?outputType=amp` and confirm you can see your AMP page