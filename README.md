# Lab 14

On this branch, we have added multisite mocks and updated our `content-api` content source to pull from multiple sites within an organization to offer PageBuilder users the ability to use the same feature pack for many sites.

Now that we can use the same feature pack for multiple sites, we also need the ability to store site specific information called site properties.

1. Site properties allow for presenting values particular to the site which is helpful in a multisite scenario. For more details, [click here](https://redirector.arcpublishing.com/alc/arc-products/pagebuilder/fusion/documentation/recipes/using-site-properties.md)

2. To add default and site specific properties. Add an `index.js` to the `properties` directory with some default data.

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

3. We also need to add site specific properties to files in the `properties/sites` directory. The filename should match the site id. We'll add a file for `demo` and `the-bugle`. For `demo` we'll add:

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

4. Now lets use the site properties within a feature. Open any of the features we have created. We can access the Site Properties via the `useFusionContext` hook.

```
import { useFusionContext } from 'fusion:context';
const { siteProperties } = useFusionContext();

return (
    <span className="text-info">{`News from ${siteProperties.defaultSiteTitle}!`}</span>
);
```

5. Now that we have the site properties established, that feature should reflect `The Bugle` as the `defaultSiteTitle`. Check it by going to your test page with the `_website` set to `the-bugle`. `http://localhost/pf/${page_url}/?_website=the-bugle`


### Next up: Lab 15