# Lab 05
This lab focuses on making a feature more dynamic by adding custom fields and walking through the steps of configuring the fields in PageBuilder Editor.

On this branch, we have updated our `/sample/color-block` feature to render server side only.

One of the many features of PageBuilder is the ability to allow non-technical users to customize the appearance or functionality of their pages without requiring a developer. In the next step, we'll learn how we, as developers, can make such functionality available in the PageBuilder UI based on a set of options. Switch to branch `lab-06` to see the completed code for this branch's user story.

Building from our Color Block feature, we're going to add the ability to set the background color of our `div` in PageBuilder. This is made possible by Custom Fields in PageBuilder. For more details, [click here](https://redirector.arcpublishing.com/alc/arc-products/pagebuilder/fusion/documentation/recipes/adding-custom-fields.md).

1. Open the feature we created previously at `components/features/sample/color-block/default.jsx`.

2. Add in a Custom Field that will allow PageBuilder editors to input a hex code. To do this, you'll need to update the propTypes of your component to include custom fields like below.
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

7. Go back into your page in PageBuilder, refresh the browser and open your color block feature (a browser refresh is needed for any changes to the PageBuilder UI)

8. You should now see the object to add a hexCode value

9. Add a hexcode into the input field, save and republish your page

<img width="500" alt="Screen Shot 2021-04-04 at 2 21 54 PM" src="https://user-images.githubusercontent.com/39777478/113517981-42c49080-9551-11eb-8bed-1a4eab7b2dd7.png">

10. Load your page and confirm that the background color of the div displayed is the same color you entered into PageBuilder

There are many more types of Custom Fields in addition to `text`. [Click here](https://redirector.arcpublishing.com/alc/arc-products/pagebuilder/fusion/documentation/api/feature-pack/components/custom-fields.md?version=2.6) to see all of them.

## [Next up: Lab 06](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/lab-06)
