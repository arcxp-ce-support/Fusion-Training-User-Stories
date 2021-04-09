# Lab 13
In this lab we will create another chain and learn how to use the same feature pack for multiple sites within an organization. Now that you are a master of content sources, chains, and features, we're going to add a new chain to display features in a more interesting way. Feel free to tackle the following steps:

1. Create a new chain called `double-chain`. This chain should split all of its children into two columns. 

2. The user should be able to configure if the column style is `wide-left`, `wide-right`, or `even`. (Use a `PropTypes.oneOf` custom field).

3. The user should also be able to decide the number of features that should exist in the left column. This field should be **required** for display.

4. Now let's fetch content from site service to use in the feature pack. First, in `/content/sources` create a new content source called `site-menu`.

5. This content source should fetch content from the `/site/v3/navigation/demo/?hierarchy=${hierarchyName}&_id=${sectionId}`. Site service documentation can be found [here](https://redirector.arcpublishing.com/alc/docs/swagger/?url=./arc-products/site-api.json).

6. The content source should take in a `hierarchy` and an `id` parameter. The hierarchy param should use `default` as a fallback if it is undefined. The id param should use `/` as a fallback if it is undefined.

7. Rebuild fusion, then check the PageBuilder content debugger. From `http://localhost/pagebuilder/pages` click on `Developer Tools > Debugger > Content Debugger` then select `site-menu` and add test parameters.
    - If you get an empty response, check [site service](https://redirector.arcpublishing.com/siteservice/#/) and confirm hierarchies have been set up under the `Navigation` tab.
    - Once you've confirmed the source can pull in content, create a schema. See [Lab 07](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/lab-07) for a refresher on how to create a schema.

8. Now let's use content from site service to create a navigation bar. Create a new `global` feature called `nav-bar`.

9. This feature should allow the PageBuilder user to configure the content source so that it takes in the new `site-menu` content source. You'll need a custom field of type `PropTypes.contentConfig(<schema name>)`.

10. This feature should then display the links from site service hierarchy. Use the PageBuilder content debugger to view the data you'll be using.


## Manual curation

So far we have the major components for creating a manually curated page (albeit a simple one) within PageBuilder. Let's do another exercise to practice what we've learned so far! 

In this lab, lets use the feature pack we have for multiple sites within the organization.

11. We will be modifying the content source to handle multiple sites. Here are some best practices for [multisite](https://redirector.arcpublishing.com/alc/arc-products/pagebuilder/user-docs/how-to-prepare-for-pagebuilder-multisite/).

12. Since we are working locally and are not using site service, we need to add multiple sites to our mock `website` file to mimic what we would see if there were multiple sites in site service.

13. Add the following sites to `mocks/siteservice/api/v3/website`. This is only used locally, as in sandbox/prod environments this data comes from what is configured in `Sites`. Remember to update one of these to match the website `_id` set up in your Arc organization.
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

14. Now that we have multiple sites to choose from, we need a apply the requested site to the content source when we fetch content. As part of the object passed into the content source, Fusion adds the requested site ID as well. Open any of the content source files and pull out the site ID. Feel free to default it to your main site.

```
const arcsite = key['arc-site'] || 'demo';
```

16. Then pass that `arcsite` value in the API call aligning to the API documentation:

```
...&website=${arcsite}
```

17. The arc-site value comes from the url that is associated with your site in site service. It is equivalent to the `_id` value in the site data that we added to the `website` mock. To test it locally, add or adjust the _website query param on your url. `localhost/pf/sample/?_website=the-planet` for example will set the arc-site value to be `the-planet`.

18. Modifying the content source alone works if we are using an Arc API. If you are using the sample data, we will need a different approach. To see different data from this site, you'll have to modify the sample data file in helpers to have the article nested in a key matching the site id in `helpers/sample-content.js`.
    - To pull the content from that arc site added to the sample data, modify the fetch on that sample data to choose the current site data, and default to `demo`. See the code snippet below:

```
const fetch = (query = {}) => {
  if (query["arc-site"]) {
      return CONTENT[query["arc-site"]];
  }
  return CONTENT["demo"];
};
```

20. Visit your test page and you should see the data for the site you have designated in the URL showing on the page.

## [Next up: Lab 14](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/lab-14)
