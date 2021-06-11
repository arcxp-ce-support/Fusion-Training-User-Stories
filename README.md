

# Power-Ups Training

Welcome to the Power-Ups traning! 


To start let's review the definition of Power-Ups:

## What are Power-Ups

Power-Ups are an expanded custom embed that allows Editors in Composer to interact with Third Party Content providers and/or create unique content not supported by existing Composer features.

## Common Use Cases:

- Liveblogs
- Sports scoreboards
- Polls
- Audio
- External Video
- Quiz

## About this training 

This repository contains all of the code necessary to complete each of the steps in the Arc Power-Ups training curriculum.


## How to use

This repo contains one branch for each of the labs in the Power-Up training curriculum. Each branch builds off of the previous completed lab so you can check your solutions as you go. For example, to see the solution to lab 4, you can switch to powerup-lab-05 branch since thats where lab 5 starts off.

## Prerequisites

- Node version 10+
- Fusion CLI `npm i @arc-fusion/cli`
- VS Code - *There is configuration and documentation setup specifically for this code editor so you'll have an easier time linting and formatting your work.*
- Docker desktop - *Update the memory allocated in the docker settings to ~8GB – without this update fusion will run very slowly and file watcher will likely break.*

## Installation and setup


If you already cloned this repo, set up the .env file and downloaded the PB data, checkout to the branch `powerup-master` to get started. Otherwise follow these steps:


1.  [Clone](https://git-scm.com/docs/git-clone) this repository and checkout to the `powerup-master` branch.


2. In the root directory, create a `.env` file based on the below .env example and fill in the relevant info.

    To get the Auth token:

    - Go to your orgs Arc homepage and switch to the sandbox environment.
    - Click on Developer Center and click "create read-only token".
    - Fill in the fields and click create. This will create your access token.
    - Copy the content at the bottom where it says "Copy the following into your PB .env file if setting up PageBuilder" and place it into your .env. It should be something like this:

        ```
        ARC_ACCESS_TOKEN=xxx
        CONTENT_BASE=https://api.xxx.arcpublishing.com/

        ```



3. Next, you'll need to install dependencies for the feature pack. Run `npm i` to install dependencies for the feature pack.


4. Import the database from pb data. To mimic a deployed environment, go to your orgs Arc homepage, go to the sandbox environment and click on the PB data button which is under the `delivery` section. This will download a `file.tar.gz` (the file name should follow this naming convention). Copy that file into your feature pack's `data/restore/` folder. Then, when you run start, you can see pages from that setup to more closely match the selected environment.

5. Start the app!  `npx fusion start`



6. Wait until you see a webpack build success with files successfully built. Then you can go to http://localhost/pagebuilder/pages to see the output.


## Useful Commands

`npx fusion rebuild`

- This forces a webpack rebuild of a running cluster. [Documentation](https://www.npmjs.com/package/@arc-fusion/cli#rebuild)

- Use this command if enviornment variables are not picked up by rebuild or if you need to restart the webpack container.


## Curriculum Overview 

| branch   | topic covered | 
| :------: | :----------   |
| [lab-00](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/lab-00) | Running fusion & PageBuilder editor locally |



## [Next up: Lab 00](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/lab-00)
