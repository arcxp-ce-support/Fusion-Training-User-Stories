# fusion-06

On this branch, we have updated our `/sample/color-block` feature to offer PageBuilder users the ability to customize the feature using Custom Fields.

## User story
As a user, I would like to customize the appearance or functionality of my feature in the PageBuilder UI based on a set of options.

## Concepts
- Custom Fields
- Fusion Context

## New Files on this branch
- None

## Changed files:
- `/components/features/sample/color-block/default.jsx`

## What's next?
So far, we have updated our output type to modify our head and footer on the page, created a basic layout to provide semantic html to our page, and began creating and modifying features using custom fields from
Fusion's component context. Let's practice with an exercise - creating an alert bar! Switch to `exercise-01` to see one example implementation.

If you are continuing this training from the last user story, then keep working on your current branch USERNAME-fusion-training.

If you are starting this training from the seventh user story (task Fusion-07), then follow the steps under "What's next?" on the README file in the (https://github.com/wapopartners/Fusion-Training-User-Stories/blob/fusion-01/README.md)[fusion-01] branch - but checkout from fusion-06 instead.

## Task: User Story 06
As a user, I would like to directly customize my feature using inline editing for a streamlined experience.

## Guide
Building on the alert bar feature from `exercise-01` we provide a clearer and easier way for editors to configure custom fields through inline editing as documented [here](https://redirector.arcpublishing.com/alc/arc-products/pagebuilder/fusion/documentation/recipes/adding-custom-fields.md#inline-editing)

1. Complete the user story from branch `exercise-01`. This includes adding a new section to the layout and a new feature in the `global/alert-bar` directory. After completing the exercise, return here and we will modify it by adding inline editing to a text field in the feature.

2. You should now have a working `alert-bar` feature. We will now add a way to edit the feature text inline in the admin.

3. To do so, we will make use of the `useEditableContent` fusion helper 

```import { useEditableContent } from 'fusion:content';```

4. From that helper, extract the `editableField` function.

```const { editableField } = useEditableContent();```

5. The object we receive from executing the `editableField` function with type 'text' are spread as props on the `a` tag. We will also add a flag to prevent a warning from appearing regarding the editable field. The `a` tag will now look like this:

```
<a
    {...editableField('text')}
    suppressContentEditableWarning
    href={link}
    className='alert-link'
>
    {text}
</a>
```

The code from `exercise-01` differs slightly in that it provides separate fields for the `text` and the `linkText`. Both of these fields could handled as an `editableField` so feel free to experiment by making the `linkText` editable inline.

6. After fusion rebuild, go back into the admin and click on the alert bar text. It should now be editable inline without having to find the text field in the admin UI.

7. Save and republish as normal and load the page and confirm that the text you edited inline is displayed.

## Solution Files: User Story 06
- [/components/features/global/alert-bar/default.jsx](https://github.com/wapopartners/Fusion-Training-User-Stories/blob/fusion-07/components/features/global/alert-bar/default.jsx)

### [Continue to Next Task: User Story 07](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/fusion-07)
