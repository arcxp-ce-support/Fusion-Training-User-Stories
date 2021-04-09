# Lab 15
This lab focuses on configuring a site to render different output types such as Google AMP. For more information on Fusion output types, [click here](https://redirector.arcpublishing.com/alc/arc-products/pagebuilder/fusion/documentation/recipes/creating-using-output-types.md?version=2.7). Output types allow fusion to render content in different formats and for different purposes (AMP, JSON, XML, etc).

1. In the `/components/output-types` directory, create an `amp.jsx` file

2. Within the react component return skeleton HTML for the entire AMP page (the html, head and body tag), while rendering the children from props. Remember to add in any AMP support tags needed. Refer to the [AMP documentation](https://amp.dev/documentation/guides-and-tutorials/learn/spec/amphtml/) for further details.

3. There are other attributes in props we can use to render content. For example, the favicon can be displayed by the following line of code where `deployment` and `contextPath` are extracted from `props`:

```
<link rel='icon' type='image/x-icon' href={deployment(`${contextPath}/resources/favicon.ico`)} />
```

4. `CssLinks`, `MetaTags` and `Libs` components can be extracted from the props and rendered in the head tag. e.g. `<CssLinks />`

5. Similarily, `Fusion` components should be extracted from props and rendered in the body - `<Fusion />`. This [bootstraps data from the server that will hydrate our React components](https://redirector.arcpublishing.com/alc/arc-products/pagebuilder/fusion/documentation/recipes/creating-using-output-types.md).

6. Now lets render an AMP version of our color-block component. In the `color-block` feature directory, create an amp.jsx file. When the AMP output type loads, it automatiacally looks for the `amp.jsx` version of all the features isntead of the `default.jsx`.

7. In this case, we only need to return the elements of the feature we want to render from the component. Add a React component here that renders the color the way you want it to on AMP pages.

8. After fusion rebuild, load the same test page you have been working with while specifying the output type via a query parameter `?outputType=amp` and confirm you can see the AMP version of your features. You may see the features you do not have an `amp.jsx` file configured for still render, this is because Fusion uses the `default.jsx` as a fallback. You can change this behavior by specifying the output type `fallback` property to false.

<img width="500" alt="Screen Shot 2021-04-05 at 10 14 27 AM" src="https://user-images.githubusercontent.com/39777478/113583520-bd47eb80-95f7-11eb-88ae-d2bceefc9086.png">

## [Next up: Lab 16]( https://github.com/wapopartners/Fusion-Training-User-Stories/tree/lab-16)
