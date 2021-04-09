# Lab 04

This lab focuses on rendering a feature server-side. Rendering elements server side only increases performance but since it doesn't run client side, you cannot access client side data in these features. To read more about Fusion's rendering cycles, [click here](https://redirector.arcpublishing.com/alc/answers/1555/how-does-rendering-in-fusion-work?show=1555#q1555).

1. From root, open the feature we created at `/components/features/sample/color-block/default.jsx`.

2. To make a feature run server side, we'll need to set it to fusion static. Using our example, that means adding the following to our component:
```
ColorBlock.static = true;
```

That's it! There is another way to render part of the component server side. For more information, [click here](https://redirector.arcpublishing.com/alc/arc-products/pagebuilder/fusion/documentation/api/feature-pack/components/static.md?version=2.7).

### [Next up: Lab 05](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/lab-05)
