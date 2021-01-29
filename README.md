# exercise-01

Now that we have some basics down, let's create a new feature. The following information is an example ticket that you may come across with some acceptance criteria. If you are stuck, try looking at the ALC documentation for Fusion to get more information. This branch also contains an example implementation, but you should only look at this once you've finished this exercise.

# TICKET

## User story
As a user, I would like to add an alert bar to notify my readers of interesting content.

## Description
Create an alert bar feature with the following acceptance criteria. Let's also modify the layout to have a full-width section at the top called `promo` for the alert bar.

## Acceptance Criteria
- There should be an additional section in the `basic` layout for the alert bar.
- The new section should be called `promo`
- There should be a new feature in the `global/alert-bar` directory.
- The alert bar should have a dropdown of at least 3 options - breaking news, warning, and info.
- The alert bar should allow the user to add text.
    - This should be a required custom field
    - This should have a description viewable to the user in the PageBuilder admin to give them additional context.
- The alert bar should allow the user to add an external link.
    - This field should be a `PropTypes.url` which validates the url in PageBuilder. [See ALC docs for more on custom fields.](https://redirector.arcpublishing.com/alc/arc-products/pagebuilder/fusion/documentation/api/feature-pack/components/custom-fields.md)
- The text and link custom fields should be grouped together in the PageBuilder admin.
