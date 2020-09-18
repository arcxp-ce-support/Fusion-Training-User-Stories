# fusion-04

On this branch, we have developed our first feature, which we can add to a page or template in PageBuilder.

## User story
As a user, I would like to be able to add a feature to my page.

## Concepts
- Features

## New Files on this branch
- /features/sample/color-block/default.jsx

## What's next?
Your next task is to update your feature to render server side only. Switch to branch `fusion-05` to see the completed code for the this branch's task.

If you are continuing this training from the last user story, then keep working on your current branch USERNAME-fusion-training.

If you are starting this training from the fifth user story (task Fusion-05), then follow the steps under "What's next?" on the README file in the (https://github.com/wapopartners/Fusion-Training-User-Stories/blob/fusion-01/README.md)[fusion-01] branch - but checkout from fusion-04 instead.

## Task: User Story 04
As a user, I would like to render my feature server side only to improve page performance.

## Guide
1. From root, change directory back into the folder of your feature (from our previous example in fusion-03, that will be `components/features/sample/color-block/`) and open the deafult.jsx file of your component

2. To make a feature run server side, we'll need to set it to static. Using our example, that means adding the following to our component:
```
ColorBlock.static = true;
```
## Solution Files: User Story 04
- [/components/features/sample/color-block/default.jsx](https://github.com/wapopartners/Fusion-Training-User-Stories/blob/fusion-05/components/features/sample/color-block/default.jsx)

### [Continue to Next Task: User Story 05](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/fusion-05)
