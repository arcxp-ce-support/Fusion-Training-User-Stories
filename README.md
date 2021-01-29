# Welcome to Fusion!

This repository contains all of the code necessary to complete each of the steps in the Arc PageBuilder Fusion training curriculum.

## How to use

This repo contains one branch for each of the labs in the Fusion training curriculum. Each branch builds off of the previous completed lab so you can check your solutions as you go. For example, to see the solution to lab 4, you can switch to lab-05 branch since thats where lab 5 starts off.

It's important to note that the code in this repo may differ from the code written on-the-spot in your training session. However, the files will contain the same information and represent a complete version of each concept.

## Getting started

1. Create a new directory for your project called FusionFeatureStories
```
mkdir FusionFeatureStories
```

2. Change into the directory:
```
cd FusionFeatureStories
```

3. Install the Fusion CLI
```
npm i @arc-fusion/cli
```

4. Initialize a new Fusion feature pack
```
npx fusion init
```

5. Change the origin to point to the Fusion-Training-User-Stories repo (in a real scenario, `Fusion-Training-User-Stories` would be replaced by the repo name of your new project)
```
git remote set-url origin git@github.com:wapopartners/Fusion-Training-User-Stories.git
```

6. Check out a new branch called USERNAME-fusion-training where USERNAME is your username. 
```
git checkout -b USERNAME-fusion-training
```

NOTE: This is the branch you will make all your changes to while going through this training. An intoduction to Fusion can be found [here](https://redirector.arcpublishing.com/alc/arc-products/pagebuilder/fusion/documentation/recipes/intro.md?version=2.6)


## Curriculum Overview 

#### lab-00
As a user, I would like to run fusion & PageBuilder editor locally

#### lab-01
As a user, I would like to be able to render content via a default output type, which allows me to customize the head of my page.

#### lab-02
As a user, I would like to add a layout to my page, in order to give my page some structure and semantic HTML.

#### lab-03
As a user, I would like to be able to add a feature to my page.

#### lab-04
As a user, I would like to render my feature server side only to improve page performance.

#### lab-05
As a user, I would like to customize my feature in the PageBuilder UI based on a custom set of configuration options.

#### lab-06
As a user, I would like to directly customize my feature using inline editing in PageBuilder for a streamlined experience.

#### lab-07
As a user, I would like to fetch content from an API into my feature pack.

#### lab-08
As a user, I would like to be able to pipe content into my feature so that it renders information from an API.

#### lab-09
As a user, I would like to filter the content to only the necessary fields to reduce the payload.

#### lab-10
As a user, I would like to configure my feature to use a single global content source.

#### lab-11
As a user, I would like to be able to render many pieces of content via this template in the browser.

#### lab-12
As a user, I would like to group features together to create more complex layouts using chains.

#### lab-13
As a user, I would like to use my feature pack for multiple sites within my organization

#### lab-14
As a user, I would like to configure my pages to use site-specific variables.

#### lab-15
As a user, I would like to configure my site to render different content for different outputs such as Google AMP.

#### lab-16
As a user, I would like to be able to have more control of how a feature will render by explicitly checking the output type.

#### lab-17
As a user, I would like to prevent my output type from falling back onto default features and risking validation.

#### lab-18
Done!


## Exercises

#### [Exercise 01](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/exercise-01)

#### [Exercise 02](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/exercise-02)



It's important to note that the code in this repo may differ from the code written on-the-spot in your training session. However, the files will contain the same information and represent a complete version of each concept.

## [Next up: Lab 00](https://github.com/wapopartners/ Fusion-Training-User-Stories/tree/lab-00)