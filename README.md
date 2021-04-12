# OBF Lab 00

Before you proceed with this lab, ensure that you have walked through the [master branch](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/master) and [lab 00](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/lab-00) of this repository.

# Setup

1. Checkout this branch to access the outbound feeds skeleton.
```
git checkout obf-lab-00
```
2. Now, from the obf-lab-00 branch checkout a new branch. This is the branch you will make all your changes to while going through this training.
```
git checkout -b USERNAME-Feeds-Training
```

**.npmrc**

1. Add a `.npmrc` file to the home folder of your directory with the following format:
```
@wpmedia:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=<your personal access token>
```

2. Use these [Github instructions]( https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) to generate a read-only token. Paste the read-only token into the .npmrc file where it says `<your personal access token>`. 

3. Note: The .npmrc is in .gitignore and should never be added to the repo or checked in because of major security concerns. 

**.env**

1. Create .env

2. Copy env.example to .env.

3. The only way to access the values (CONTENT_BASE, ARC_ACCESS_TOKEN, RESIZER_KEY) is by contacting Arc/Photo Center team. Do so and then replace the placeholders with your correct values in .env. For BLOCK_DIST_TAG - to use production blocks, set this to 'stable', to use development blocks use 'beta'. Fusion defaults to stable if not set.

4. Note: The .env file is in .gitignore and should never be checked into github due to major security concerns.

## blocks.json

First, let's understand an important file in the repository - blocks.json. Navigate to the home directory and take a look at `blocks.json`. This is the main configuration file used to control which blocks are imported and to set global variables. There are two important parts of `blocks.json`: 1) the blocks array and 2) siteProperties. 

**Blocks Array**

The blocks array is an array of the feeds (npm packages) that are loaded by the arc-fusion/cli at run time. Initially, the blocks array will contain all of the Out Of the Box feeds. To read more about the blocks array, [click here]( https://redirector.arcpublishing.com/alc/arc-products/arcio/user-docs/blocksjson/#blocks-configs).
<img width="450" alt="Screen Shot 2021-04-09 at 10 01 35 AM copy" src="https://user-images.githubusercontent.com/39777478/114422114-fc3fe900-9b83-11eb-98c4-db9a4282ee50.png">

**siteProperties**

Inside the key of `values` you will see `siteProperties`. A starter blocks.json file has default values that will be replaced with specific site values. The different values for siteProperties are as follows: 

-	feedDomainURL - The fully qualified url for the site. It must not end in a slash.
-	resizerURL - The fully qualified url for the sites resizer. It must not end in a slash. Typically this is the same as the feedDomainURL with "/resizer" at the end.
-	feedTitle - The name of your website. This will be used as the title in RSS feeds
-	feedLanguage - The ISO-3166 two letter country code.
-	feedDefaultQuery - Optional, this overrides the default query used in feeds-source-content-api-block which is stories with lastupdateddate from the last 2 days. The feedDefaultQuery value must be a valid json array in the format: 
```json "[{\"term\":{\"type\":\"story\"}},{\"range\":{\"last_updated_date\":{\"gte\":\"now-2d\",\"lte\":\"now\"}}}]"```

<img width="450" alt="Screen Shot 2021-04-09 at 10 03 30 AM" src="https://user-images.githubusercontent.com/39777478/114422897-ab7cc000-9b84-11eb-89f4-6c61cc953671.png">

# Documentation
For more information on developing outbound feeds:

- [intro](https://redirector.arcpublishing.com/alc/arc-products/arcio/user-docs/outbound-feeds-custom-block-development/)
- [blocks.json](https://redirector.arcpublishing.com/alc/arc-products/arcio/user-docs/blocksjson/)
- [Ecjecting blocks](https://redirector.arcpublishing.com/alc/arc-products/arcio/user-docs/ejecting-a-block/)
- [Block Architecture](https://redirector.arcpublishing.com/alc/arc-products/arcio/user-docs/feature-blocks-architecture/)
- [Dependencies](https://redirector.arcpublishing.com/alc/arc-products/arcio/user-docs/dependencies/)
- [Utilities](https://redirector.arcpublishing.com/alc/arc-products/arcio/user-docs/outbound-feeds-development-utilities/)
- [Content Source](https://redirector.arcpublishing.com/alc/arc-products/arcio/user-docs/outbound-feeds-development-content-source/)
- [Output Types](https://redirector.arcpublishing.com/alc/arc-products/arcio/user-docs/outbound-feeds-development-output-types/)


## [Next up: OBF Lab 01](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/obf-lab-01)
