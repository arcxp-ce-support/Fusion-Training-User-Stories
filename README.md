# fusion-11
On this branch, we have add our `/article/header` feature and configured it to render using global content.

## User story
As a user, I would like to configure my feature to use a single global content source.

## Concepts
- Global Gontent
- App Context

## New Files on this branch
- `components/features/article/header/default.jsx`

## Changed files:
- none

## What's next?
Now that we have a feature that renders based on the global content instead of being fixed to component level content, we want to see how we can dynamically route content using PageBuilder templates. Switch to branch `fusion-12` to learn more about this next step.

If you are continuing this training from the last user story, then keep working on your current branch USERNAME-fusion-training.

If you are starting this training from the twelfth user story (task Fusion-12), then follow the steps under "What's next?" on the README file in the (https://github.com/wapopartners/Fusion-Training-User-Stories/blob/fusion-01/README.md)[fusion-01] branch - but checkout from fusion-11 instead.

## New Task: User Story 12
As a user, I would like to be able to render many pieces of content via this template in the browser.

## GUIDE
No code changes are required to complete this task

1. Create a new template in PB called `Articles`

2. Using the basic layout, add in the header feature and any other feature you'd like

3. Under "Developer Tools" > "Resolvers", create a new resolver. Learn more about resolvers [here](https://redirector.arcpublishing.com/alc/arc-products/pagebuilder/user-docs/pagebuilder-editor-30-resolvers/)

4. Fill in the details of your resolver as follows:
- Resolver Name: give your resolver a name
- Pattern: set a URL pattern for this resolver to target (for our demo example, you can simply put `/` for all urls)
- Priority: set the priority for your resolver relative to other resolvers you might have (you can set it to `1`)
- Default Template: set the default template to render for all url patterns that matches what is definied for this resolver. In our case, this wil be our `Articles` template
- Content Source: set the content source the resolver should use to fetch the articles content. For our example, it will be `content-api`
- website_url & published: set the website url and published value - you can use any value here for our example and save our resolver

NOTE: static values are values you want displayed within this field but patterns are used to get a value from the regex added in the pattern field above

5. Open our site with any url and you should see the header with our demo data e.g. http://localhost/sample
