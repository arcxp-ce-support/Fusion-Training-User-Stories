# Lab 16

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

## Next up: Lab 17