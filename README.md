# fusion-14

On this branch, we haveadded multisite mocks and updated our `content-api` content source to pull from multiple sites within an organization to offer PageBuilder users the ability to use the same feature pack for many sites.

## User story
As a user, I would like to use my feature pack for multiple sites within my organization

## Concepts
- Multisite

## New Files on this branch
-  `/mocks/siteservice/api/v3/website`

## Changed files:
- `/content/sources/content-api.js`

## What's next?
Now that we can use the same feature pack for multiple sites, we also need the ability to store site specific information. Switch to branch `fusion-15` to learn more about this branch's user story.

If you are continuing this training from the last user story, then keep working on your current branch USERNAME-fusion-training.

If you are starting this training from the fifteenth user story (task Fusion-15), then follow the steps under "What's next?" on the README file in the (https://github.com/wapopartners/Fusion-Training-User-Stories/blob/fusion-01/README.md)[fusion-01] branch - but checkout from fusion-14 instead.

## Task: User Story 14

As a user, I would like to configure my pages to use site-specific variables.

## Guide

1. Site properties allow for presenting values particular to the site which is helpful in a multisite scenario  (https://redirector.arcpublishing.com/alc/arc-products/pagebuilder/fusion/documentation/recipes/using-site-properties.md)

2. Get site properties from the appContext.

`const { globalContent, siteProperties } = appContext;`

3. Replace `demo` with the current site default title.

```
<span className="text-info">{`News from ${siteProperties.defaultSiteTitle}!`}</span>
```

4. Next, we need to add default and site specific properties. Add an `index.js` to the `properties` directory with some default data.

```
module.exports = {
    defaultSiteTitle: "Demo",
    dfpId: 123456,
    siteDomainURL: "https://org.website",
    twitterURL: "https://twitter.com/orgUsername",
    facebookURL: "https://www.facebook.com/orgUsername",
    instagramURL: "https://www.instagram.com/orgUsername"
}
```

5. We also need to add site specific properties to files in the `properties/sites` directory. The filename should match the site id. We'll add a file for `demo` and `the-bugle`. For `demo` we'll add:

```
export default {
    siteDomainURL: "https://demo.website",
    twitterURL: "https://twitter.com/demo",
    facebookURL: "https://www.facebook.com/demo",
    instagramURL: "https://www.instagram.com/demo",
  }
```

For `the-bugle` we'll add:

```
export default {
    defaultSiteTitle: "The Bugle",
    siteDomainURL: "https://bugle.website",
    twitterURL: "https://twitter.com/bugle",
    facebookURL: "https://www.facebook.com/bugle",
    instagramURL: "https://www.instagram.com/bugle",
  }
```

6. Now that we have the site properties established, the header feature should reflect `The Bugle` as the `defaultSiteTitle`. Check it by going to your test page with the `_website` set to `the-bugle`. `http://localhost/pf/sample/?_website=the-bugle`

## Solution Files: User Story 14
- [properties/index.js](https://github.com/wapopartners/Fusion-Training-User-Stories/blob/fusion-15/properties/index.js)
- [properties/sites/demo.js](https://github.com/wapopartners/Fusion-Training-User-Stories/blob/fusion-15/properties/sites/demo.js)
- [properties/sites/the-bugle.js](https://github.com/wapopartners/Fusion-Training-User-Stories/blob/fusion-15/properties/sites/the-bugle.js)
- [components/features/article/header/default.jsx](https://github.com/wapopartners/Fusion-Training-User-Stories/blob/fusion-15/components/features/article/header/default.jsx)

### [Continue to Next Task: User Story 15](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/fusion-15)
