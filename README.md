# fusion-12
On this branch, we won't actually be making any code changes! It's just here for continuity with the other tasks and concepts.

## User story
As a user, I would like to be able to render many pieces of content via this template in the browser.

## Concepts
- Resolvers

## New Files on this branch
- None

## Changed files:
- None

## What's next?
Now that we can render complex features, it's time to add some complexity to our layouts. We'll do that by introducing a new type of component: Chains. Switch to branch `fusion-13` to see how!

If you are continuing this training from the last user story, then keep working on your current branch USERNAME-fusion-training.

If you are starting this training from the thirteenth user story (task Fusion-13), then follow the steps under "What's next?" on the README file in the (https://github.com/wapopartners/Fusion-Training-User-Stories/blob/fusion-01/README.md)[fusion-01] branch - but checkout from fusion-12 instead.

## New Task: User Story 13
As a user, I would like to group features together to create more complex layouts.

## Guide
To group features together, we need to create a chain. A [chain](https://redirector.arcpublishing.com/alc/arc-products/pagebuilder/user-docs/pagebuilder-editor-adding-features-and-chains/) is a collection of features organized in a predetermined structure. In this task, we will create two chains - a default chain and a grid chain.

NOTE: All chains are places in the `components/chains` directory

1. Create a new file called default.jsx in the `components/chains` directory

2. In this file, create a functional component that all children within the props like so:
```
{props.children}
```

3. In the same directory, create a grid.jsx file. This chain will have a customizable column count from PageBuilder via custom fields

4. Define three custom fields - desktopCols, tabletCols and mobileCols. Each should give the editor options of `'12', '6', '4', '3'` to choose from. For example:
```
desktopCols: PropTypes.oneOf([
  '12', '6', '4', '3'
]).tag({
  labels: {
    '12': '1',
    '6': '2',
    '4': '3',
    '3': '4',
  },
  name: 'Number of Cards (Desktop)',
}),
```

5. Iterate through the `children` props and each item in a div with the desktopCols, tabletCols and mobileCols values provided by the editor (using bootstrap)

6. After Fusion rebuilds, open page builder and add in a new feature.

7. Open up the chains accordion and select the chain type you want displayed. Add in any configurations needed

8. Open the page in the browser and confirm it displays as expected
