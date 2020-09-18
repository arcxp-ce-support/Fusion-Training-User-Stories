# fusion-05

On this branch, we have updated our `/sample/color-block` feature to render server side only.

## User story
As a user, I would like to render my feature server side only to improve page performance.

## Concepts
- Server Side vs. Isomorphic vs. Client side rendering

## New Files on this branch
- none!

## Changed files:
- `/components/features/sample/color-block/default.jsx`

## What's next?
One of the many features of PageBuilder is the ability to allow non-technical users to customize the appearance or functionality of their pages without requiring a developer. In the next step, we'll learn how we, as developers, can make such functionality available in the PageBuilder UI based on a set of options. Switch to branch `fusion-06` to see the completed code for this branch's user story.

If you are continuing this training from the last user story, then keep working on your current branch USERNAME-fusion-training.

If you are starting this training from the sixth user story (task Fusion-06), then follow the steps under "What's next?" on the README file in the (https://github.com/wapopartners/Fusion-Training-User-Stories/blob/fusion-01/README.md)[fusion-01] branch - but checkout from fusion-05 instead.

## Task: User Story 05
As a user, I would like to customize my feature in the PageBuilder UI based on a set of options.

## Guide
Building from our Color Block feature, we're going to add the ability to set the background color of our div in PageBuilder. However, you can add any customization you'd like

1. From root, change directory into the folder of your feature (from our previous example in fusion-03, that will be `components/features/sample/color-block/`) and open the deafult.jsx file of your component

2. Add in a [custom field](https://redirector.arcpublishing.com/alc/arc-products/pagebuilder/fusion/documentation/recipes/adding-custom-fields.md) that will allow PageBuilder editors to input a hex code. To do this, you'll need to update the propTypes of your component to include custom fields like so:
```
ColorBlock.propTypes = {
  customFields: PropTypes.shape({
    hexCode: PropTypes.string.tag({
      label: 'Hex Code',
      description: 'Please enter a valid color hex value. For example, 6b5d96.'
    }),
  }),
};
```

3. To access the value of this custom field, you'll need to import `useComponentContext`
```
import { useComponentContext } from 'fusion:context';
```

4. With the component context, you can now retrieve custom fields from fusion's component context:
```
const componentContext = useComponentContext();
const { hexCode } = componentContext.customFields;
```

5. Now, lets set a fallback value for rgb if the editor does not provide one:
```
const bgColor = hexCode ? `#${hexCode}` : `rgb(${rgb})`;
```

6. Finally, update the CSS with the new `bgColor` we've created

7. After fusion rebuild, go back into your page and open your color block feature

8. You should now see the object to add a hexCode value

9. Add a hexcode into the input field, save and republish your page

10. Load your page and confirm that the background color of the div displayed is the same color you entered into PageBuilder

## Solution Files: User Story 05
- [/components/features/sample/color-block/default.jsx](https://github.com/wapopartners/Fusion-Training-User-Stories/blob/fusion-06/components/features/sample/color-block/default.jsx)

### [Continue to Next Task: User Story 04](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/fusion-06)
