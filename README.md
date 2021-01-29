# Welcome to Fusion!

This repository contains all of the code necessary to complete each of the steps in the Arc PageBuilder Fusion training curriculum.

## How to use
This repo contains one branch for each of the labs in the Fusion training curriculum. Each branch builds off of the previous completed lab so you can check your solutions as you go. For example, to see the solution to lab 4, you can switch to `lab-05` branch since thats where lab 5 starts off.

It's important to note that the code in this repo may differ from the code written on-the-spot in your training session. However, the files will contain the same information and represent a complete version of each concept.

## Lab 00
Running Fusion locally.

1. Checkout your own branch
```
git checkout USERNAME-fusion-training
```

2. Install all packages/dependencies
```
npm install
```

3. To ensure you are using the latest fusion-cli, run:
```
npm install @arc-fusion/cli@canary
```

4. Start fusion
```
npx fusion start
```

5. Load the following link once fusion has finished loading (it might take a few minutes)
```
http://localhost/pagebuilder/pages
```

6. Note: you may see an alert warning of an error with content sources. Disregard this; we will address content sources later on.'

7. Add the folders `mocks`, `components`, `content`, `environment`, and `properties`.

8. In `mocks`, add the file `/user` with the following content:

```
{
   "displayName": "Local Developer",
   "permissions": {
     "PageBuilder": {
       "global": [
         "W",
         "D",
         "P",
         "VRP",
         "ERP",
         "DT"
       ]
     }
   }
 } 
```

and the file `/siteservice/api/v3/website` with the following content:

```
[
  {
    "_id": "demo",
    "display_name": "Demo",
    "is_default_website": true
  }
]
```

9. In `components`, add the folders `output-types`, `layouts`, `chains`, and `features`

10. In `content`, add the folders `schemas` and `sources`

11. In `properties`, add the folder `sites`

12. In the root director, add the file `.dockerignore` with the following content: 

```
.git*
.fusion/
data/
dist/
node_modules/
```

and the file `.gitignore` with the following content: 

```
**/.DS_Store
**/.env
**/.npmrc
**/node_modules

/.fusion

/data/db/
/data/dumps/**
!/data/dumps/.gitkeep
/data/restore/**
!/data/restore/.gitkeep

/dist
```

13. Create a new file called `.env` at the root of your project directory. Inside this file, you'll need to add in the content base and access token for your API

Go to your orgs homepage and switch to the sandbox environment

Click on Developer Center and click "create read-only token"

Fill in the fields and click create. This will create your access token

Copy the content at the bottom where it says "Copy the following into your PB .env file if setting up PageBuilder" and place it into your .env. It should be something like this:

```
CONTENT_BASE=https://api.sandbox.{org}.arcpublishing.com 
ARC_ACCESS_TOKEN={token_here}
```

where org is the name of your organization

This will come into play in a later lab, but it's best to get it set up initially. 


## [Next up: Lab 01](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/lab-01)
