# fusion-13

## User story
As a user, I would like to group features together to create more complex layouts.

## Concepts
- Chains
- Multiple features

## New files:
- `/components/chains/default.jsx`
- `/components/chains/grid.jsx`

## What's next
This branch gives us the major components for creating a manually curated page (albeit a simple one) within PageBuilder. Let's do another exercise to practice what we've learned so far! Switch to `exercise-02` for examples.

If you are continuing this training from the last user story, then keep working on your current branch USERNAME-fusion-training.

If you are starting this training from the twelfth user story (task Fusion-12), then follow the steps under "What's next?" on the README file in the (https://github.com/wapopartners/Fusion-Training-User-Stories/blob/fusion-01/README.md)[fusion-01] branch - but checkout from fusion-12 instead.

After completing `exercise-02` return here and we'll start on the next user story.

## New User Story
As a user, I would like to use my feature pack for multiple sites within my organization

## Guide
1. We will be modifying the content source to handle multiple sites. Here are some best practices for [multisite](https://cmg.arcpublishing.com/alc/arc-products/pagebuilder/user-docs/how-to-prepare-for-pagebuilder-multisite/).

2. Since we are working locally and are not using site service, we need to add multiple sites to our mock website file to approximate what we would see if there were multiple sites in site service.

3. Add the following sites to `mocks/siteservice/api/v3/website`
```
{
    "_id": "the-bugle",
    "display_name": "The Bugle",
    "is_default_website": false
},
{
    "_id": "the-planet",
    "display_name": "The Planet",
    "is_default_website": false
},
{
    "_id": "the-news",
    "display_name": "The News",
    "is_default_website": false
}
```

4. Now that we have multiple sites to choose from, we need to apply the current site to the content source when we fetch content. We can make the content source dynamic by passing the current site into the content source.

5. First, find the current site id and if missing default to `demo`:

`const arcsite = key['arc-site'] || 'demo';`

6. Then pass that arcsite value into the content source:

`&website=${arcsite}`

7. The arc-site value comes from the url that is associated with your site in site service. It is equivalent to the `_id` value in the site data that we added to the mock. To test it locally, add or adjust the _website query param on your url. `localhost/sample/?_website=the-planet` for example will set the arc-site value to be `the-planet`.

8. Modifying the content source alone works if we are using an Arc api, but since we are using sample data, we will need a different approach. To see different data from this site, you'll have to modify the sample data file in helpers to have the article nested in a key matching the site id. See `helpers/sample-content.js`.

9. To pull the content from that arc site added to the sample data, modify the fetch on that sample data to choose the current site data, and default to `demo`.

```const fetch = (query = {}) => {
    if (query["arc-site"]) {
        return CONTENT[query["arc-site"]];
    }
    return CONTENT["demo"];
};
```

10. Visit your test page and you should see the data for the site you have designated in the url showing on the page.
