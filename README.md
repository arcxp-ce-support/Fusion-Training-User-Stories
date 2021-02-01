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
git init
git remote add origin https://github.com/wapopartners/Fusion-Training-User-Stories.git
```

6. Check out a new branch called USERNAME-fusion-training where USERNAME is your username. 
```
git checkout -b USERNAME-fusion-training
```

NOTE: This is the branch you will make all your changes to while going through this training. An intoduction to Fusion can be found [here](https://redirector.arcpublishing.com/alc/arc-products/pagebuilder/fusion/documentation/recipes/intro.md?version=2.6)


## Curriculum Overview 

| branch   | topic covered | 
| :------: | :----------   |
| [lab-00](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/lab-00) | Running fusion & PageBuilder editor locally |
| [lab-01](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/lab-01) | Rendering content via a default output type and customizing the page head. |
| [lab-02](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/lab-02) | Adding a custom layout to give a page structure and semantic HTML. |
| [lab-03](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/lab-03) | Adding a feature to a page. |
| [lab-04](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/lab-04) | Rendering a feature server-side to improve performance. |
| [lab-05](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/lab-05) | Customizing a feature in the PageBuilder UI based on a custom set of configuration options. |
| [lab-06](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/lab-06) | Directly customizing a feature using inline editing in PageBuilder for a streamlined experience. |
| [lab-07](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/lab-07) | Fetching content from an API into the feature pack. |
| [lab-08](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/lab-08) | Piping content into a feature so that it renders information from an API. |
| [lab-09](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/lab-09) | Filtering content to only the necessary fields to reduce the payload. |
| [lab-10](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/lab-10) | Configuring a feature to use a single global content source. |
| [lab-11](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/lab-11) | Rendering many pieces of content via a template in the browser. |
| [lab-12](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/lab-12) | Grouping features together to create more complex layouts using chains. |
| [lab-13](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/lab-13) | Using the feature pack for multiple sites within an organization |
| [lab-14](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/lab-14) | Configuring pages to use site-specific variables. |
| [lab-15](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/lab-15) | Configuring a site to render different content for different outputs such as Google AMP. |
| [lab-16](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/lab-16) | Controlling how a feature will render by explicitly checking the output type. |
| [lab-17](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/lab-17) | Preventing an output type from falling back onto default features and risking validation. |
| [lab-18](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/lab-18) | Done! |


## Exercises

#### [Exercise 01](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/exercise-01)

#### [Exercise 02](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/exercise-02)



It's important to note that the code in this repo may differ from the code written on-the-spot in your training session. However, the files will contain the same information and represent a complete version of each concept.

## [Next up: Lab 00](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/lab-00)