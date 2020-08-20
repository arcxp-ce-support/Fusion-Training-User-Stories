# fusion-03

On this branch, we've created and customized a new layout, `basic.jsx`, which lets us add semantic markup to our pages.

## User story
As a user, I would like to be able to add a layout to my page, in order to give my page some structure and semantic HTML.

## Concepts
- Layouts

## New Files on this branch
- /components/layouts/basic.jsx

## What's next?
Your next task is to create a new feature. Switch to branch `fusion-04` to see the completed code for the next step.

If you are continuing this training from the last user story, then keep working on your current branch USERNAME-fusion-training.

If you are starting this training from the fourth user story (task Fusion-04), then follow the steps under "What's next?" on the README file in the (https://github.com/wapopartners/Fusion-Training-User-Stories/blob/fusion-01/README.md)[fusion-01] branch - but checkout from fusion-03 instead.

## New Task: User Story 03
As a user, I would like to be able to add a feature to my page.

## Guide
This guide is going to demonstrate how to create a color block feature, that generates a random background color for a div. However, you can create any new feature you'd like for this task

1. All features are added into the `/components/features/` folder

2. Change into this directory and create a new folder called `sample` - this is where we'll store all our "sample" features

3. In the `/sample/` folder, create another folder for our feature called `color-block`

4. In the `/color-block/` folder, create a file called `default.jsx` - this is where we'll add all the code for our new feature

5. In the `default.jsx` file, create a functional component generates a random rgb value for a div. You can use this rbg generator in your component:
```
  let rgb = []
  for (var i = 0; i < 3; i++) {
    let r = Math.floor(Math.random() * 256)
    rgb.push(r)
  }
```

6. Apply the rgb value for your div using the following style:
```
backgroundColor: `rgb(${rgb})`,
```