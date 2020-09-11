# Custom block development

Themes allows you to easily use the existing Arc OutboundFeeds (OBF) blocks in your repo by listing them
in [blocks.json](./blocks.json.md). Themes also makes it possible to modify the Arc OBF Blocks to change the way they work, or to create completely new custom feeds.

## Blocks

Outbound Feeds is based on blocks, which are npm packages. A block can be any fusion component or content. OBF blocks are either features which generate the output and end with "-feature-block" or they are content sources which call API's to get data and start with "feeds-source-". There is a npm package for the xml [output-type](./output-types.md) called "@wpmedia/feeds-xml-output", but it must be used like a regular npm package by listing it as a dependency in the package.json.

If you want to modify a block you will first need to download it from the npm registry and copy it into your repo. This is known as [ejecting](./ejecting.md) a block. Once the code is in your local repo it will no longer receive updates from Arc.

Each feed block is organized using the same structure which is described in [architecture](./block-architecture.md). Feed blocks use several javascript [dependencies](./dependencies.md) to make it easier to work with ANS and xml. To reduce the amount of duplicate code a set of [utilities](./utilities.md) has been created that can be used in any block.
