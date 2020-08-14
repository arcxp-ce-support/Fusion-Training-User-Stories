# Welcome to Fusion!

This repository contains all of the code necessary to complete each of the steps in the Arc PageBuilder Fusion training curriculum.

## How to use
This repo contains one branch for each of the user stories in the Fusion training curriculum. Each branch represents a single step in the lessons, so that you can easily follow along and switch branches to get the latest code for a step if you fall behind.

Each branch name corresponds to the last completed step in the code on the branch. For example, if you're beginning the Fusion-04 user story, you'll switch to branch `fusion-03`. However, if you want to see the completed files for Fusion-04, switch to branch `fusion-04`.

It's important to note that the code in this repo may differ from the code written on-the-spot in your training session. However, the files will contain the same information and represent a complete version of each concept.

## What next?
To use this repo, clone the repo to your local machine and check out a new branch (any name is fine) from `master`. This is the starting point for [user story](https://docs.google.com/document/d/18W2lXAE9Y5HmidFF_b2zSv55lNSXREIJnLFhmGy_XRY/edit?usp=sharing) Fusion-01.

## User Story 01 Task
As a user, I would like to scaffold a new PageBuilder Feature Pack via command line for a brand-new project called FusionFeatureStories

## User Story 01 Instructions
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

5. Change the origin to point to the Fusion-Training-User-Stories repo
```
git remote set-url origin git@github.com:wapopartners/Fusion-Training-User-Stories.git
```

6. Check out a new branch called USERNAME-fusion-training where USERNAME is your username
```
git checkout -b USERNAME-fusion-training
```

7. Open your README.md file within your code editor and remove all the contents. Save the file

8. Add your changes to git
```
git add .
```

9. Commit your changes to git with a message. For example:
```
git commit -m "clearing out README.md file"
```

10. Push your new branch up to the Fusion Training User Stories repo
```
git push origin USERNAME-fusion-training
```

NOTE: This is the branch you will make all your changes to while going through this training. An intoduction to Fusion can be found [here](https://redirector.arcpublishing.com/alc/arc-products/pagebuilder/fusion/documentation/recipes/intro.md)