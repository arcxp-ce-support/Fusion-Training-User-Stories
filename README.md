## Lab 01

In this lab you will render content via a default output type. An output type allows you to customize the `head` of a page and the skeleton of the `body`. A single output type is used to render all of the sites pages. Alternate output types can be introduced for use cases like delivering JSON or XML data instead of HTML.

Without an output type, PageBuilder can't render anything! For more details on output types, [click here](https://redirector.arcpublishing.com/alc/arc-products/pagebuilder/fusion/documentation/recipes/creating-using-output-types.md?version=2.7).

1. Open `components > output-types > default.jsx`. You will see a basic HTML skeleton has already been set up. Here you can inject any scripts or other tags into the page.
2. Add Bootstrap inside of the `<head>` tag
    ```
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
    ```
3. Add a heading after the opening body tag. For example:
    ```
    <h2 class="text-info">Welcome to Fusion!</h2>
    ```
4. Once you save your file, fusion should automatically pick up the changes.
5. Visit http://localhost/pagebuilder/pages
6. Click on `Create Page` and give it a name and path like `firstpage`. You should see the `h2` render in the preview on the right.
7. Click on the globe icon on the left, and click on `Share & Publish`
8. Then you can visit `http://localhost/pf/firstpage/?_website=demo` and you should see your new page published with your `<h2>` text rendered.
<img width="500" alt="Screen Shot 2021-04-02 at 11 47 40 AM" src="https://user-images.githubusercontent.com/39777478/113511978-82c74b80-9530-11eb-8b6e-88ea238aec32.png">

When viewing locally published pages outside of PageBuilder, all preview URLs will start with `/pf` and have a `_website` query parameter with the value of the `site` you would like to view that page for. Remember, a single page can be published to more than 1 site to streamline the editorial workflow across your organization.

## [Next up: Lab 02](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/lab-02)
