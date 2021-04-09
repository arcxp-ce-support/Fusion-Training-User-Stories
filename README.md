# Welcome to Fusion!

This repository contains all of the code necessary to complete each of the steps in the Arc PageBuilder Fusion training curriculum.

## How to use

This repo contains one branch for each of the labs in the Fusion training curriculum. Each branch builds off of the previous completed lab so you can check your solutions as you go. For example, to see the solution to lab 4, you can switch to lab-05 branch since thats where lab 5 starts off.

## Getting started

1. Clone this repository to your local environment
```
git clone https://github.com/wapopartners/Fusion-Training-User-Stories.git
```

2. Change into the directory:
```
cd Fusion-Training-User-Stories
```

3. From the master branch checkout a new branch. This is the branch you will make all your changes to while going through this training.
```
git checkout -b USERNAME-Fusion-Training
```

4. Install the Fusion CLI
```
npm i @arc-fusion/cli
```

5. Initialize a new Fusion feature pack
```
npx fusion init
```

## Useful Commands 
You do not need to run these right now, these are just some helpful commands and links to remember as you complete this training.
```
npx fusion rebuild
```
- This forces a webpack rebuild of a running cluster. [Documentation](https://www.npmjs.com/package/@arc-fusion/cli#rebuild)
- Use this command if enviornment variables are not picked up by rebuild or if you need to restart the webpack container.

## Documentation 

An intoduction to Fusion can be found [here](https://redirector.arcpublishing.com/alc/arc-products/pagebuilder/fusion/documentation/recipes/intro.md?version=2.7). Please read through this prior to moving to the first lab.

Fusion recipes can be found [here](http://redirector.arcpublishing.com/alc/alc/arc-products/pagebuilder/fusion/2.7). This is a helpful resource for deeper explainations of fusion concepts.


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
| [lab-16](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/lab-16) | Controlling how a feature will render by explicitly checking the output type, preventing an output type from falling back onto default features and risking validation. |


## [Next up: Lab 00](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/lab-00)
