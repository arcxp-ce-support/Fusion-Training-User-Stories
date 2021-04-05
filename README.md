# Lab 16
In this lab we will focus on controlling how a feature will render in relation to the output type. For a refresher on output types in Fusion, [click here](https:/redirector.arcpublishing.com/alc/arc-products/pagebuilder/fusion/documentation/recipes/creating-using-output-types.md?version=2.7). 


Just like that, our site now supports AMP! Let's learn a little bit more about how output types work together. Lets add some control of how a feature will render by explicitly checking the output type.

1. Now that we have set an output type of `amp` we can access it in our features to optionally render depending on output type.

2. Access `outputType` from `appContext` in the `article/header` feature:

```
const {
    globalContent,
    outputType,
    siteProperties,
  } = appContext;
```

3. Now you can test your output type to conditionally render based on which output type is active. For example `outputType !== 'amp'` will test if the output type is not `amp` and will only render in that scenario.

4. Try it out in the `article/header` feature by conditionally rendering the title when the output type is not `amp`.

5. We can also conditionally render an entire feature by adding an `amp.jsx` version and returning `null`. For the `alert-bar` feature, add `amp.jsx` in the same folder as the `default.jsx` file. Then instead of returning feature code, return `null` like so:

```
const AlertBar = () => {
  return null;
}
```

6. Now, alert bar will only render when the output type is not `amp`

7. `npx fusion rebuild` and check your results on the default output type and by adding the query param to review the `amp` output type `?outputType=amp`.

8. By default, if fusion does not find a compatible version of the feature file to render like `amp.jsx`, it falls back to `default.jsx`. The steps below show you how to prevent it from falling back and instead prevent rendering that feature entirely. We will be setting the fallback value on our amp output type. Review the api for output types here and especially the section regarding fallback. https://redirector.arcpublishing.com/alc/arc-products/pagebuilder/fusion/documentation/api/feature-pack/components/output-type.md

9. To make sure that the features without amp versions will not render, add `fallback = false` to the component.
```
AmpOutputType.fallback = false
```

10. `npx fusion rebuild` and features without an amp output type should no longer render.


## What's next
Nothing! You've completed fusion training. For further exercises and information, check out the [Arc Learning Center](https://redirector.arcpublishing.com/alc/arc-products/pagebuilder/fusion/documentation/recipes/intro.md?version=2.6).

[Go back to the Master branch to see an overview of the labs.](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/master)
