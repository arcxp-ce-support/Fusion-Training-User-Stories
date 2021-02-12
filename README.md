# Lab 06

Now that we have some basics down, let's create a new feature. 

1. We are going to add an alert bar to notify my readers of interesting content. First, modify the layout to have a full-width section at the top called `promo` for the alert bar.

2. Create a new feature in the `global` directory called `alert-bar`. 

3. [Check out the ALC docs on custom fields.](https://redirector.arcpublishing.com/alc/arc-products/pagebuilder/fusion/documentation/api/feature-pack/components/custom-fields.md) Give the alert-bar a dropdown custom field (`PropTypes.oneOf`) with three options: breaking news, warning, and info. 

```
alertType: PropTypes.oneOf([
        'danger', 'warning', 'info',
    ]).tag({
      defaultValue: 'danger',
      labels: {
        danger: 'breaking',
        warning: 'warning',
        info: 'info',
    },
    name: 'Alert Type',
})
```

4. Create a **required** custom field that allows the user to add text. Give this custom field a description that will be visible to the user in the PageBuilder admin.  

```
text: PropTypes.string.tag({
    name: 'Main Alert Text'
}).isRequired
```

5. Create two custom fields to allow the user to add an external link. One field should be for the link text; the other for the url. This second one should be `PropTypes.url`, which validates the url in PageBuilder. Put these two in one **group** in the admin. 

```
linkText: PropTypes.string.tag({
    group: 'Call to Action',
    name: 'Text',
    description: 'Text to prompt the users to click the link',
}),
link: PropTypes.url.tag({
    group: 'Call to Action',
    name: 'Url',
})
```

## Inline editing


On this branch, we have updated our `/sample/color-block` feature to offer PageBuilder users the ability to customize the feature using Custom Fields.

So far, we have updated our output type to modify our head and footer on the page, created a basic layout to provide semantic html to our page, and began creating and modifying features using custom fields from Fusion's component context. 

Now we will allow the user to directly customize my feature using inline editing for a streamlined experience. Building on the alert bar feature we just created, we provide a clearer and easier way for editors to configure custom fields through inline editing. [Read through the ALC docs on inline editing](https://redirector.arcpublishing.com/alc/arc-products/pagebuilder/fusion/documentation/recipes/adding-custom-fields.md#inline-editing#inline-editing) before proceeding.

6. Make sure we have the new `promo` section in the layout and the new `global/alert-bar` feature. Now we will modify it by adding inline editing to a text field in the feature. You can also complete the steps below on the custom field we added to the color block.

7. You should now have a working `alert-bar` feature. We will now add a way to edit the feature text inline in the admin.

8. To do so, we will make use of the `useEditableContent` fusion helper 

```import { useEditableContent } from 'fusion:content';```

9. From that helper, extract the `editableField` function.

```const { editableField } = useEditableContent();```

10. The object we receive from executing the `editableField` function with type 'text' are spread as props on the `a` tag. We will also add a flag to prevent a warning from appearing regarding the editable field. The `a` tag will now look like this:

```
<a 
    {...editableField('linkText')}
    suppressContentEditableWarning
    href={link} 
    className='alert-link'>
    {linkText}
</a>
```

Both the `linkText` (Call to Action) field and the `text` (Main Alert Text) field could handled as an `editableField` so feel free to experiment by making the `text` span editable inline as well.

11. Go back into the admin and click on the alert bar text. It should now be editable inline without having to find the text field in the admin UI.

12. Save and republish as normal and load the page and confirm that the text you edited inline is displayed.

## [Next up: Lab 07](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/lab-07)
