Nice work completing `lab-01`. If you are continuing this training from the last lab, then keep working on your current branch USERNAME-fusion-training. If you are starting this training from this branch, you will need to clone and set up this repository as described in `lab-00`.

## Lab 02
This lab focuses on layouts. You will create, implement, and add a layout to your page in PageBuilder Editor.

As a user, I would like to add a layout to my page, in order to give my page some structure and semantic HTML. To learn more about layouts, [click here](https://redirector.arcpublishing.com/alc/arc-products/pagebuilder/fusion/documentation/recipes/creating-layout-component.md?version=2.6).

## Guide
1. All layouts are added to the `components/layouts` folder. Change directory into this folder and create a new file called `basic.jsx`

2. In `basic.jsx`, create a new functional React component called `BasicLayout` and make that the default export. (We'll be using functional components during these labs, but class-based components are also supported.)

3. Lets define the following sections for this layout outside the definition of your component, like so:
```
BasicLayout.sections = ['header', 'main', 'aside', 'footer']
```

4. The content of all those sections will be passed via `props.children` in the component so let's retrieve those sections:
```
const [header, main, aside, footer] = props.children;
```

Bootstrap can be used to style any component.

5. Now, lets render these sections of the layout. Bootstrap or inline CSS can be used to give the layout some structure.

6. Finally, define the propTypes of your component:
```
BasicLayout.propTypes = {
  children: PropTypes.node,
};
```
To use PropTypes, you'll need to import the library into your component
```
import PropTypes from 'fusion:prop-types';
```
In general, using [PropTypes](https://github.com/facebook/prop-types) allows developers to mitigate the risk of passing the wrong data types to components. It does so by validating data types as they pass through components. 

With Fusion, a feature’s custom fields are also implemented using PropTypes. Fusion will look for a static property on your component named `propTypes` which is an object with a `customFields` key and `PropTypes` value. For more information about how Fusion uses PropTypes and custom fields, [click here](https://redirector.arcpublishing.com/alc/arc-products/pagebuilder/fusion/documentation/api/feature-pack/components/custom-fields.md#types). 

7. Since we added a new file here, we have to restart or rebuild fusion to recognize it. You can manually restart or manually rebuild with `npx fusion rebuild`. Once fusion is back up, go into pagebuilder and open the page you had created in `lab-01`

8. Click on the `Setup` icon on the left and select your new layout. Then click on the `Curate` icon on the left and you should see all the new sections of your layout show up (header, main, aside, footer).

<img width="500" alt="Screen Shot 2021-04-04 at 2 04 10 PM" src="https://user-images.githubusercontent.com/39777478/113517575-b7e29680-954e-11eb-8ccc-82d9a61b806a.png">


Remember, if you would like to see the solution, you can always switch to the next lab branch.

## [Next up: Lab 03](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/lab-03)
