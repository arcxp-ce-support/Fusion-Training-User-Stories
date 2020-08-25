# Fusion-02
On this branch, we've updated the `default` output type, introducing ourselves to some core PageBuilder concepts. Without an output type, PageBuilder can't render anything!

## User Story
As a user, I would like to be able to render content via a default output type, which is natively recognized by PageBuilder and allows me to customize the head and foot of my page.

## Concepts
- Output Types

## New Files
- None

## Changed Files
- `/components/output-types/default.jsx`

## What's next?
An output type provides a common backbone for all of our pages, so now we'll explore how we can start adding some semantic HTML and customization. The first concept to tackle in this regard is layouts. Switch to `fusion-03` to view a completed layout.

If you are continuing this training from the last user story, then keep working on your current branch USERNAME-fusion-training.

If you are starting this training from the third user story (task Fusion-03), then follow the steps under "What's next?" on the README file in the (https://github.com/wapopartners/Fusion-Training-User-Stories/blob/fusion-01/README.md)[fusion-01] branch - but checkout from fusion-02 instead.

## New Task: User Story 03
As a user, I would like to add a layout to my page, in order to give my page some structure and semantic HTML.

## Guide
1. All layouts are added to the `components/layouts` folder. Change directory into this folder and create a new file called `basic.jsx`

2. In `basic.jsx`, create a new React component called `BasicLayout` that retrieves the following content from `props.children`:
```
const [header, main, aside, footer] = props.children;
```
The syntax we use here is called [array destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Array_destructuring). It assigns the elements of the array to variables with names "header", "main", etc. based on their position in the array. Each of these variables contains a React Component that has all the blocks the user has placed within that section of the layout in PageBuilder. To display the component, add `{header}` within an element in the render function of your layout.

Bootstrap can be used to style any component.

3. Using these content variables, create the header, main, right rail (using the `aside` element) and footer for the page and display the header, main, aside and footer content in them respectively

4. Define the different section of this layout outside the definition of your component, like so:
```
BasicLayout.sections = ['header', 'main', 'aside', 'footer']
```

5. Finally, define the propTypes of your component:
```
BasicLayout.propTypes = {
  children: PropTypes.node,
};
```
To use PropTypes, you'll need to import the library into your component
```
import PropTypes from 'fusion:prop-types';
```

6. Once Fusion rebuilds (or you manually rebuild it by running `npx fusion rebuild`), go into pagebuilder and create a new page

7. On the new page you created, you should now see your `basic` layout as part of the drop down options for the Layout section