## Lab 12
Now that we can render complex features, it's time to add some complexity to our layouts. We'll do that by introducing a new type of component: Chains. Switch to branch `lab-13` to see how! For more details on chains, [click here](https://redirector.arcpublishing.com/alc/arc-products/pagebuilder/fusion/documentation/recipes/creating-chain-component.md?version=2.6)

To group features together, we need to create a chain. A [chain](https://redirector.arcpublishing.com/alc/arc-products/pagebuilder/user-docs/pagebuilder-editor-adding-features-and-chains/) is a collection of features organized in a predetermined structure. In this task, we will create two chains - a default chain and a grid chain.

NOTE: All chains are places in the `components/chains` directory

1. Create a new file called default.jsx in the `components/chains` directory

2. In this file, create a functional component that renders all children within the props like so:
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

5. Iterate through the `children` props and place each item in a div with the desktopCols, tabletCols and mobileCols values provided by the editor (using bootstrap). Each item in the `children` array is a feature that is dragged into the chain. It can be placed using simple JSX syntax like `{props.children[0]}`

6. After Fusion rebuilds, open page builder and click on `Add Feature` in any section

7. Click on `Chains` and select the new chain you created. Modify any custom fields you would like

8. Click on `Add Feature` again and drag in any feature into the chain to see how it renders

## Next up: Lab 13
