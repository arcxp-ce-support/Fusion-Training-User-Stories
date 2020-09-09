# dependencies

## xmlbuilder2

The [xmlbuilder2](https://oozcitak.github.io/xmlbuilder2/) package converts objects into xml. This allows you to create the feed using a simple object and have it converted automatically to xml by the output-type.

### Create a tag

To create a tag just add it to the object that is being built by the feed:
`{ title: "Title Here", }`

Will be converted to:
`<title>Title Here</title>`

### Attributes

If you need to add attributes to a tag use an `@` in front of the tag name. If you need to include text with the tag use `#`:

```javascript
{
  link: {
     "@href": "http://www.example.com",
     "@type": "application/rss",
     "#": "tag text goes here"
  }
}
```

Will be converted to:
`<link href="http://www.example.com" type="application/rss">tag text goes here</link>`

### Multiple tags using Arrays

If you need to use the same tag multiple times an object will not allow it. You can use an array to group them. The previous example can be rewritten using an array like:

````javascript
{
  link: {
    "@": {
       href: "http://www.example.com",
       type: "application/rss",
    }, k
    "#": "tag text goes here"
  }
}```

Will be converted to:
`<link href="http://www.example.com" type="application/rss">tag text goes here</link>`

This can be use anywhere you need to include duplicate tags. Image that you want to use a `<p>` to wrap each paragraph of an article:
```javascript
{
  description: {
    "p": [
      "The first sentence",
      "The second sentence",
    ]
  }
}```

Will be converted to:
`<description><p>The first sentence</p><p>The second sentence</p></description>`

### CDATA

To wrap data in a CDATA tag use the `$`. We can rewrite the last example to wrap it in CDATA like:
```javscript
{
  description: {
    "$": {
      "p": [
         "The first sentence",
         "The second sentence",
      ]
    }
  }
}```

Will be converted to:
`<description>![CDATA[<p>The first sentence</p><p>The second sentence</p>]]</description>`

### index error

Using the xml output-type to convert the object to xml keeps the code dry. But it can make debugging harder. If the xml conversion fails it will generate an index error in the output-type and not in the feeds code. xmlbuilder2 will give an error if you try to convert a null or an empty array.

## jmespath

[jmespath](https://jmespath.org/) is a language to query objects. Think of it as a more flexible version of lodash's get. jmespath is used extensively with customFields where any valid jmespath expression can be used to find the data you want. It can also be used to modify the structure of the data. For example, we want to include keywords in a feed. Some clients want to use taxonomy.tags and object, and others might want to use taxonomy.seo_keywords, an array. We could create a customField with two choices;

- "taxonomy.tags[].text"
- "taxonomy.seo_keywords"

Which ever value they select can be used by the same line of code:
`const keywords = jmespath(storyANS, keywordCustomField) || []`

This way regardless of which field is searched for, it will be returned as an array.

## moment

We use the [moment](https://momentjs.com/) package to format ANS datetime strings. ANS uses ISO-8601 to encode all datetimes using UTC. All feeds output datetimes in UTC. To convert an ISO-8601 format to that used by RSS feeds (rfc-822) you can use:
`moment.utc(dateString).format('ddd, DD MMM YYYY HH:mm:ss ZZ')`
````
