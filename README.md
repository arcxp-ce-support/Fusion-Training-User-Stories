# Fusion 11
This lab will focus on how to create and utilize templates to render dynamic pages in the browser. We will also configure a resolver – a tool/system to pair templates and content. To learn more about templates and resolvers, [click here](https://redirector.arcpublishing.com/alc/arc-products/pagebuilder/user-docs/pagebuilder-editor-30-resolvers/).

Now that we have a feature that renders based on the global content instead of being fixed to feature level content, we want to see how we can dynamically route content using PageBuilder templates.

NOTE: No code changes are required to complete this task.

1. Navigate to `PageBuilder > Templates` Create a new Template in PB called `Articles`.

2. Using the basic layout, add in the header feature and any other feature you'd like. Feel free to configure the `Preview Content` at the bottom of the Curate tab. This will allow you to set the global content of the live preview so you have some data to visualize. The Preview Content is never seen by the end user.

3. Share & Publish the Template.

4. Navigate to "Developer Tools" > "Resolvers", create a new resolver. A resolver allows a set of URLs to resolve to a single template. Learn more about resolvers [here](https://redirector.arcpublishing.com/alc/arc-products/pagebuilder/user-docs/pagebuilder-editor-30-resolvers/)

4. Fill in the details of your resolver as follows:
    - Resolver Name: Give your resolver a name.
    - Priority: Set the priority for your resolver relative to other resolvers you might have (you can set it to `1`). Since resolvers are based on Regex patterns, a URL can match multiple. The priority defines which one should take precedence.
    - Pattern: A Regex URL pattern for this resolver to target (for our demo example, you can simply put `(.*)` for all urls - as more templates and resolvers are created, the more specific you can make the regex pattern, the better).
    - Content Source: Select the content source the resolver should use to fetch the articles content. For our example, it will be `content-api`.
    - To send data in the URL visited to the content source, for `website_url` select, `Pattern` and type in `1`. Setting it to `1` means it will read the first capture set (first set of parenthesis) from the regex pattern and pass that value to the content source.
    - For `published` you can select static and set it to `true` or `false`.
    - Default Template: Select the default template to render for all URLs that matches this resolver. In our case, this wil be our `Articles` template.

<img width="400" alt="Screen Shot 2021-04-05 at 9 34 28 AM" src="https://user-images.githubusercontent.com/39777478/113579318-20cf1a80-95f2-11eb-9f9f-ab425a8557e5.png">

NOTE: static values are values you want displayed within this field but patterns are used to get a value from the regex defined in the resolver.

5. To test this out, you need some stories created and published in Composer sandbox (unless you are using mock data). Once you have the mock data or published stories, visit the story in localhost at `http://localhost/pf${website_url}/?_website=demo`. You can also use the PageBuilder debugger to test resolvers: click on `Developer Tools > Debugger`. Select a site, then choose `Resolver Debugger` from the other dropdown. This debugger will let you input a test URI like `/article/2021/15/01/my-first-article/`. Once the URL matches with a regex, it then checks if the content source call is successful. If it is, it navigates to the template specified in the resolver. If not, it will navigate to a 404 page.

<img width="400" alt="Screen Shot 2021-04-05 at 9 37 25 AM" src="https://user-images.githubusercontent.com/39777478/113579625-91763700-95f2-11eb-8058-83fe58441e32.png">

## [Next up: Lab 12](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/lab-12)
