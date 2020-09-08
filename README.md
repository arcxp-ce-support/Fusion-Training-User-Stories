# fusion-17

## User story
As a user, I would like to be able to have more control of how a feature will render by explicitly check the output type

## Concepts
- Using app context with multiple output types

## New files:
-  `components/features/global/alert-bar/amp.jsx`

## Updated Files:
-  `components/features/article/header/default.jsx`

## What's next
Just like that, our site now supports AMP! Let's learn a little bit more about how output types work together. Switch to `fusion-17` to learn more.

If you are continuing this training from the last user story, then keep working on your current branch USERNAME-fusion-training.

If you are starting this training from the eighteenth user story (task Fusion-18), then follow the steps under "What's next?" on the README file in the (https://github.com/wapopartners/Fusion-Training-User-Stories/blob/fusion-01/README.md)[fusion-01] branch - but checkout from fusion-17 instead.

## New User Story

As a user, I would like to be able to have more control of how a feature will render by explicitly checking the output type.

## Guide

1. We will be adding setting the fallback value on our amp output type. Review the api for output types here and especially the section regarding fallback. https://redirector.arcpublishing.com/alc/arc-products/pagebuilder/fusion/documentation/api/feature-pack/components/output-type.md

2. To make sure that the features without amp versions will not render, add `fallback = false` to the component.
```
AmpOutputType.fallback = false
```

3. `npx fusion rebuild` and features without an amp output type should no longer render.