# Lab 13

# exercise-02

Here are some following tickets you should be able to pick up now that you are a master of content sources, chains, and features!

# TICKET - 01

## User story
As a user, I would like to add a new chain to display my features in a more interesting way.

## Description
Create a new chain called `double-chain`. This chain should split all of its children into two columns. The user should be able to configure if the column style is `wide-left`, `wide-right`, or `even`. The user should also be able to decide the number of features that should exist in the left column. This field should be required for display.

## Acceptance Criteria
- There should be a chain called `double-chain`
- The chain should split it's children into two columns.
- The user should be able to select 3 different display options (wide left, wide right, or even) from a dropdown.
- The user must decide on the number of features to display in the first column of the chain.



# TICKET - 02

## User story
As a user, I would like to be able to fetch content from site service to use in my feature pack.

## Description
Create a new content source called `site-menu`. This content source should fetch content from the `/site/v3/navigation/demo/?hierarchy=<hierarchy-name>&_id=$<section-id>` where hierarchy and id are optional parameters. After you see this content coming back in the debugger, you can use that to make a schema!

## Acceptance Criteria
- There should be a content source that fetches from the site service endpoint
- The content source should take in a `hierarchy` and `id` parameter
- The hierarchy param should use `default` as a default if it is undefined
- The id param should use `/` as a default if it is undefined
- The content source should be usable in the debugger of the PageBuilder dev tools

## Example Hierarchies from Demo
- `footer`
- `main-site-navigation`

## Example Sections from Demo
- `/food`
- `/news/arts-and-entertainment`
- `/news`



# TICKET - 03

## User story
As a user, I would like to create a navigation bar that uses content from site service.

## Description
Create a new `global` feature called `nav bar`. This feature should allow the PageBuilder user to configure the content source so that it takes in the new `site menu` content source. This featurer should then display the links from site service hierarchy.

## Example Hierarchies from Demo
- `footer`
- `main-site-navigation`

## Acceptance Criteria
- There should be a feature named `nav bar` in the global group.
- The feature should display a list of links from any site service hierarchy.


This branch gives us the major components for creating a manually curated page (albeit a simple one) within PageBuilder. Let's do another exercise to practice what we've learned so far! Switch to `exercise-02` for examples. After completing `exercise-02` return here and we'll start on this branch's user story.

In this lab, lets use the feature pack we have for multiple sites within my organization

1. We will be modifying the content source to handle multiple sites. Here are some best practices for [multisite](https://cmg.arcpublishing.com/alc/arc-products/pagebuilder/user-docs/how-to-prepare-for-pagebuilder-multisite/).

2. Since we are working locally and are not using site service, we need to add multiple sites to our mock website file to approximate what we would see if there were multiple sites in site service.

3. Add the following sites to `mocks/siteservice/api/v3/website`. This is only used locally, as in sandbox/prod environments this data comes from what is configured in `Sites`
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

4. Now that we have multiple sites to choose from, we need a apply the current site to the content source when we fetch content. We can make the content source dynamic by passing the current site into the content source.

5. First, find the current site id and if missing default to `demo`:

`const arcsite = key['arc-site'] || 'demo';`

6. Then pass that arcsite value into the content source:

`&website=${arcsite}`

7. The arc-site value comes from the url that is associated with your site in site service. It is equivalent to the `_id` value in the site data that we added to the mock. To test it locally, add or adjust the _website query param on your url. `localhost/pf/sample/?_website=the-planet` for example will set the arc-site value to be `the-planet`.

8. Modifying the content source alone works if we are using an Arc api, but since we are using sample data, we will need a different approach. To see different data from this site, you'll have to modify the sample data file in helpers to have the article nested in a key matching the site id in `helpers/sample-content.js`.

9. To pull the content from that arc site added to the sample data, modify the fetch on that sample data to choose the current site data, and default to `demo`.

```const fetch = (query = {}) => {
    if (query["arc-site"]) {
        return CONTENT[query["arc-site"]];
    }
    return CONTENT["demo"];
};
```

10. Visit your test page and you should see the data for the site you have designated in the url showing on the page.

## [Next up: Lab 14](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/lab-14)