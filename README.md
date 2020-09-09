# The Washington Post's Arc Outbound Feeds skeleton

This is a fusion themes based repository and is intended to be used as the starting point for enabling _out of the box and custom Arc Outboundfeeds_.

## Setup

Pre-requisites:

- node / npm installed (node version > 10).
- github personal access token with `read:packages` access and sso enabled for WPMedia
- docker

1. Clone this repo:

```
git clone git@github.com:wapopartners/outboundfeeds-skeleton.git
```

2. Modify the `.npmrc` to use your github access token.

```
@wpmedia:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken={ YOUR AUTH TOKEN HERE }
```

3. Install the packages

```
npm install
```

4. Create .env
   copy env.example to .env and edit the file. Update the CONTENT_BASE with the correct org. Update ARC_ACCESS_TOKEN with your developer token. Update resizerKey with the correct resizerKey for your org.

Run Fusion locally see [here](https://redirector.arcpublishing.com/alc/arc-products/pagebuilder/fusion/documentation/recipes/running-fusion-locally.md) for more details:

```
npx fusion start
```

Once fusion has finished starting you should be able to to get to the pagebuilder editor [pages](http://localhost/pagebuilder/pages) and [templates](http://localhost/pagebuilder/templates)

Run tests with:

```
npm test
```

Run the linter with:

```
npm run lint
```

For more information on developing outbound feeds:

- [documentation](documentation/README.md)
