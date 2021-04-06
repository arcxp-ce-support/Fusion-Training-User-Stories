# Lab 10
In this lab we will configure a feature to fetch content at the page level; this is synonymous to what we call globalContent. This content will thereafter be used to power multiples features on the same page. For a refresher on fetching content with Fusion, [click here](https://redirector.arcpublishing.com/alc/arc-products/pagebuilder/fusion/documentation/recipes/fetching-content.md?version=2.7).

On this branch, we've created a GraphQL filter and applied it to the useContent call in order to minimize the payload from the content source.

So far, our feature has only been able to render content from a single source provided by the content config, which provides content to the feature. In our next task, we'll learn how to fetch content at a page level (what fusion refers to as `globalContent`) so that we can use it to power multiple features. Switch to branch `lab-11` to see this in action.

## Guide

01. Create a new feature in the features folder by creating an article/header directory with a `default.jsx` file.

02. Import `useAppContext` from the `fusion:context` package as documented [here](https://redirector.arcpublishing.com/alc/arc-products/pagebuilder/fusion/documentation/api/feature-pack/components/context.md).

03. Now that you've imported the useAppContext hook, use it to retrieve and populate the `globalContent` available from it. (For a refresher on Global Content, refer back to [lab 07](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/lab-07).)

```
const appContext = useAppContext();
const { globalContent } = appContext;
```

04. Render the headline and subheadline from global content in the header feature.

05. Remove the generic headline we added in our default `output-type` from lab-01.

06. `npx fusion rebuild` to see your new feature available in the admin.

07.  After fusion rebuilds, open your test page from previous tasks and scroll to the "Page Content" section in the left column.

08. Here, you will see a drop down for "Global Content Service" - select your content-api and enter values for the website_url and published fields.

09. Add the `article/header` feature to your page and you should see it populate with the headline and subheadline from the global content. Save and publish the page.

<img width="500" alt="Screen Shot 2021-04-05 at 9 05 25 AM" src="https://user-images.githubusercontent.com/39777478/113576727-1874e080-95ee-11eb-9290-02faface2fd4.png">

## [Next up: Lab 11](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/lab-11)
