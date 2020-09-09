# blocks.json

This is the main configuration file use to control which blocks to use, where to get them from and to set global variables. The skeleton repo provides a sample blocks.json the contains all of the Out Of the Box feeds already listed in the blocks array. Normally the only things you need to change in blocks.json are the siteProperties.

## the configuration file

```json
{
  "org": "@wpmedia/",
  "useLocal": false,
  "blocks": [
    "@wpmedia/feeds-source-content-api-block",
    ..."@wpmedia/sitemap-index-feature-block"
  ],
  "values": {
    "default": {
      "siteProperties": {
        "feedTitle": "Outbound Feeds",
        "feedDomainURL": "http://localhost",
        "feedLanguage": "en",
        "resizerURL": "http://localhost/resizer",
        "feedDefaultQuery": "[{\"term\":{\"type\":\"story\"}}]"
      }
    },
    "sites": {
      "website1": {
        "siteProperties": {
          "feedDomainURL": "https://www.website1.com",
          "resizerURL": "https://www.website1.com/resizer",
          "feedTitle": "wwebsite 1",
          "feedLanguage": "en"
        }
      },
      "website2": {
        "siteProperties": {
          "feedDomainURL": "https://www.website2.com",
          "resizerURL": "https://www.website2.com/resizer",
          "feedTitle": "website 2",
          "feedLanguage": "es"
        }
      }
    }
  }
}
```

- org: The name of the npm repository, is should always be "@wpmedia"
- useLocal: true or false. If you have a local repo of blocks you can set this to true while doing local development. But generally this is not the recommended client workflow.
- blocks: An array of npm packages that will be loaded by the arc-fusion/cli at run time
- values: global configuration variables. The values set in default will be used by all websites. Any values set it a website specific section will override any default settings.

## feeds configs

- feedDomainURL - The fully qualified url for the site. It must not end in a slash.
- resizerURL - The fully qualified url for the sites resizer. It must not end in a slash. Typically this is the same as the feedDomainURL with a /resizer.
- feedTitle - The name of your website. This will be used as the title in RSS feeds
- feedLanguage - The ISO-3166 two letter country code.
- feedDefaultQuery - The default query used in feeds-source-content-api-block is type:story and last_updated_date from the last 2 days. The default query can be changed by setting feedDefaultQuery. It must be a valid json array in the format:
  "[{\"term\":{\"type\":\"story\"}},{\"range\":{\"last_updated_date\":{\"gte\":\"now-2d\",\"lte\":\"now\"}}}]"
