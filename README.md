# Fusion 11
On this branch, we have add our `/article/header` feature and configured it to render using global content.

Now that we have a feature that renders based on the global content instead of being fixed to component level content, we want to see how we can dynamically route content using PageBuilder templates.

No code changes are required to complete this task

1. Create a new template in PB called `Articles`

2. Using the basic layout, add in the header feature and any other feature you'd like

3. Under "Developer Tools" > "Resolvers", create a new resolver. Learn more about resolvers [here](https://redirector.arcpublishing.com/alc/arc-products/pagebuilder/user-docs/pagebuilder-editor-30-resolvers/)

4. Fill in the details of your resolver as follows:
- Resolver Name: give your resolver a name
- Pattern: set a URL pattern for this resolver to target (for our demo example, you can simply put `(.*)` for all urls)
- Priority: set the priority for your resolver relative to other resolvers you might have (you can set it to `1`)
- Default Template: set the default template to render for all url patterns that matches what is definied for this resolver. In our case, this wil be our `Articles` template
- Content Source: set the content source the resolver should use to fetch the articles content. For our example, it will be `content-api`
- To send data in the URL visited to the content source, for `website_url` select, `Pattern` and type in `1`. Setting it to `1` means it will read the first set of parenthesis in the resolver regex pattern and pass that value to the content source.
- For `published` you can select static and set it to `true` or `false`

NOTE: static values are values you want displayed within this field but patterns are used to get a value from the regex added in the pattern field above

5. To test this out, you need some stories created and published in Composer sandbox (unless you are using mock data). Once you have the mock data or published stories. Visit the story in localhost at `http://localhost/pf/${website_url}/?_website=demo` You can also use the PageBuilder debugger to test resolvers: click on Developer Tools and then Debugger. Select a site, then choose "Resolver Debugger" from the other dropdown. This debugger will let you input a test URI like `/homepage/` and help debug any issues with the resolver.  

## [Next up: Lab 12](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/lab-12)