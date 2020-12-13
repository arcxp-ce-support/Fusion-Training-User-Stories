# Lab 04

On this branch, we have developed our first feature, which we can add to a page or template in PageBuilder. Your next task is to update your feature to render server side only. Rendering elements server side only increases performance but since it doesn't run client side, you cannot access client side data in these features. Switch to branch `lab-05` to see the completed code for the this branch's task.

1. From root, open the feature we created at `components/features/sample/color-block/default.jsx`.

2. To make a feature run server side, we'll need to set it to fusion static. Using our example, that means adding the following to our component:
```
ColorBlock.static = true;
```

That's it! There is another way to render part of the component server side. For more information, [click here](https://redirector.arcpublishing.com/alc/arc-products/pagebuilder/fusion/documentation/api/feature-pack/components/static.md?version=2.6).

### Next up: Lab 05
