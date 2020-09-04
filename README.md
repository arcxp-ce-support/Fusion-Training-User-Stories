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

1. We need to add multiple sites to our mock website file to approximate what we would see if there were multiple sites in site service.

2. Add the following sites to `mocks/siteservice/api/v3/website`
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

3. Now that we have multiple sites in site service, we need a way to distinguish them when we fetch content. This is done by making the content source dynamic to handle passing the current site into the content source.

4. First, find the current site id:

`const arcsite = key['arc-site'] || 'demo';`

5. Then pass that arcsite value into the content source:

`&website=${arcsite}`

6. The arc-site value comes from the url that is associated with your site in site service. It is equivalent to the `_id` value in the site data that we added to the mock. To test it locally, add it as the _website query param on your url. `localhost/sample/?_website=the-planet` for example.

7. The above works if we are using an Arc content source, but since we are using sample data, we will need a different approach. To see different data from this site, you'll have to modify the sample data file in helpers to have the article nested in a key matching the site id. See `helpers/sample-content.js`.

8. Then pull the content from that arc site by modifying the fetch on the sample data. This example only applies to the sample data.

```const fetch = (query = {}) => {
    if (query["arc-site"]) {
        return CONTENT[query["arc-site"]];
    }
    return CONTENT["demo"];
};```