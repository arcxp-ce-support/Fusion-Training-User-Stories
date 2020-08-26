# fusion-07

On this branch, we have updated our `/global/alert-bar` feature that we created in `exercise-01` to offer PageBuilder users the ability to edit their feature inline in the admin preview pane.

## User story
As a user, I would like to directly customize my feature using inline editing for a streamlined experience.

## Concepts
- Inline Editing

## New Files on this branch
- None

## Changed files:
- `/components/features/global/alert-bar/default.jsx`

## What's next?
Your next task is to update your feature to dynamically pipe content by exposing a content config to the PageBuilder user. Switch to branch `fusion-08` to see the completed code for the next step.

If you are continuing this training from the last user story, then keep working on your current branch USERNAME-fusion-training.

If you are starting this training from the eighth user story (task Fusion-08), then follow the steps under "What's next?" on the README file in the (https://github.com/wapopartners/Fusion-Training-User-Stories/blob/fusion-01/README.md)[fusion-01] branch - but checkout from fusion-07 instead.

## New Task: User Story 08
As a user, I would like to fetch content from an API into my feature pack.

## Guide
In order to fetch content from an API, we need to define what API we'll be fetching from and provide credentials. To do this, we'll need to:

1. Create a new file called `.env` at the root of your project directory. Inside this file, you'll need to add in the content base and access token for your API

2. Go to your [orgs homepage](https://redirector.arcpublishing.com/home/) or if you don't have one, use our [demo organization](https://demo.arcpublishing.com/home/)

3. Click developer center and click "create read-only token"

4. Enter your email address into the description field and click create. This will create your access token

5. Copy the content at the bottom where it says "Copy the following into your PB .env file if setting up PageBuilder" and place it into your .env. It should be something like this:
```
CONTENT_BASE=https://api.sandbox.{org}.arcpublishing.com 
ARC_ACCESS_TOKEN={token_here}
```
where `org` is the name of your organization

6. 