## Lab 01

In this lab you will render content via a default output type, customize the head of a page, and publish that page to be viewed.

As a user, I would like to be able to render content via a default output type, which allows me to customize the head of my page. Without an output type, PageBuilder can't render anything! For more details on output types, [click here](https://redirector.arcpublishing.com/alc/arc-products/pagebuilder/fusion/documentation/recipes/creating-using-output-types.md?version=2.6).

1. Open `components > output-types > default.jsx`
2. Add a heading after the opening body tag. For example:
```<h2 class="text-info">Welcome to Fusion!</h2>```
3. Once you save your file, fusion should automatically pick up the changes.
4. Visit http://localhost/pagebuilder/pages
5. Click on `Create Page` and give it a name and path like `firstpage`
6. Click on the globe icon on the left, and click on `Share & Publish`
7. Then you can visit `http://localhost/pf/firstpage/?_website=demo` and you should see your new page published with your `<h2>` text rendered.

## [Next up: Lab 02](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/lab-02)
