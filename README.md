# Lab 06

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


## Inline editing


On this branch, we have updated our `/sample/color-block` feature to offer PageBuilder users the ability to customize the feature using Custom Fields.

So far, we have updated our output type to modify our head and footer on the page, created a basic layout to provide semantic html to our page, and began creating and modifying features using custom fields from Fusion's component context. 

Now we will allow the user to directly customize my feature using inline editing for a streamlined experience. Building on the alert bar feature we just created, we provide a clearer and easier way for editors to configure custom fields through inline editing as documented [here](https://redirector.arcpublishing.com/alc/arc-products/pagebuilder/fusion/documentation/recipes/adding-custom-fields.md#inline-editing)

1. Make sure the above ticket is completed. This includes adding a new section to the layout and a new feature in the `global/alert-bar` directory. Now we will modify it by adding inline editing to a text field in the feature. You can also complete the steps below on the custom field we added to the color block.

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

## [Next up: Lab 07](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/lab-07)
