# Lab 06
In this lab we are going use our knowledge from the previous labs to create a new feature with custom fields. Furthermore, we are going to learn how to enable inline editing for those custom fields. Inline editing allows a user in PageBuilder to edit text directly in the preview of the page instead of from a custom field.

1. We are going to add an alert bar to notify my readers of interesting content. First, modify the layout at `/components/layouts/basic.jsx` to have a full-width section at the top called `promo` for the alert bar.

2. Create a new feature in a new `/components/features/global/` directory called `alert-bar`. 

3. [Check out the Arc Learning Center (ALC) docs on custom fields.](https://redirector.arcpublishing.com/alc/arc-products/pagebuilder/fusion/documentation/api/feature-pack/components/custom-fields.md) Give the alert-bar a dropdown custom field (`PropTypes.oneOf`) with three options: `breaking`, `warning`, and `info`.

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

4. Create a **required** custom field that allows the user to add text for the alert. Give this custom field a description that will be visible to the user in the PageBuilder admin.  

```
text: PropTypes.string.tag({
  name: 'Main Alert Text'
}).isRequired
```

5. Create two custom fields to allow the user to add an external link. One field should be for the link text; the other for the url. This second one should be `PropTypes.url`, which validates the url in PageBuilder. Put these two in one custom field `group` in the admin. 

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

### Inline editing 

Now we will allow the user to directly customize this feature using inline editing for a streamlined experience. Building on the alert bar feature we just created, we provide a clearer and easier way for editors to configure custom fields through inline editing. [Read through the ALC docs on inline editing](https://redirector.arcpublishing.com/alc/arc-products/pagebuilder/fusion/documentation/recipes/adding-custom-fields.md#inline-editing#inline-editing) before proceeding.

6. Make sure we have the new `promo` section in the layout and the new `alert-bar` feature. Now we will modify the feature by adding inline editing to a text field in the feature. To do so, we will make use of the `useEditableContent` fusion helper:

```
import { useEditableContent } from 'fusion:content';
```

9. From that helper, extract the `editableField` function.

```
const { editableField } = useEditableContent();
```

10. The object we receive from executing the `editableField` function with type 'text' are spread as props on the `a` tag. We will also add a flag to prevent a warning from appearing regarding the editable field. The `a` tag for the alert bar will now look like this:

```
<a 
    {...editableField('linkText')}
    suppressContentEditableWarning
    href={link} 
    className='alert-link'>
    {linkText}
</a>
```

Both the `linkText` (Call to Action) field and the `text` (Main Alert Text) field could be handled as an `editableField` so feel free to experiment by making the `text` field editable inline as well.

11. Go back into the admin and click on the alert bar text in the live preview. It should now be editable inline without having to find the text field in the admin UI.

12. Save and republish as normal and load the page and confirm that the text you edited inline is displayed.

Pagebuilder Editor:

<img width="500" alt="Screen Shot 2021-04-04 at 2 28 10 PM" src="https://user-images.githubusercontent.com/39777478/113518088-1b21f800-9552-11eb-90d2-b78316d73191.png">

Published Page: http://localhost/pf/firstpage/?_website=demo

<img width="500" alt="Screen Shot 2021-04-04 at 2 30 09 PM" src="https://user-images.githubusercontent.com/39777478/113518125-4ad10000-9552-11eb-972d-efdfac090103.png">


## [Next up: Lab 07](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/lab-07)
