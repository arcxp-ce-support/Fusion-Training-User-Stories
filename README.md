# Lab 10

In this lab we will configure a feature to fetch content at the page level; this is synonymous to what we call `globalContent`. This content will thereafter be used to power multiples features on the same page.

So far, our feature has only been able to render content from a single source provided by the content config custom field, which provides content to a single instance of a feature. In our next task, we'll learn how to fetch content at a page level (what fusion refers to as `globalContent`) so that we can use it to power multiple features.

01. Create a new feature in the features folder by creating an `/components/features/article/header` directory with a `default.jsx` file.

02. Import `useAppContext` from the `fusion:context` package as documented [here](https://redirector.arcpublishing.com/alc/arc-products/pagebuilder/fusion/documentation/api/feature-pack/components/context.md). We will use this to retreive the `globalContent`;
```
import { useAppContext } from 'fusion:context';
```

03. Now that you've imported the `useAppContext` hook, use it to retrieve the `globalContent`.

```
const appContext = useAppContext();
const { globalContent } = appContext;
```

04. Render the headline and subheadline from `globalContent` in the header feature.

05. Remove the generic headline we added in our default `output-type` from lab-01. There aren't many usecases to put display elements directly in the output type - this was just for illustration purposes.

06. Rebuild fusion, `npx fusion rebuild`, to see your new feature available in the admin.

07.  After fusion rebuilds, open your test page from previous tasks and scroll to the "Page Content" section in the left column.

08. Here, you will see a drop down for "Global Content Service" - select `content-api` and enter values for the `website_url` and `published` fields.

09. Add the `article/header` feature to your page and you should see it populate with the headline and subheadline from the global content. Save and publish the page.

<img width="500" alt="Screen Shot 2021-04-05 at 9 05 25 AM" src="https://user-images.githubusercontent.com/39777478/113576727-1874e080-95ee-11eb-9290-02faface2fd4.png">

We will see more applications of global content and how it can be used to dynamically power PageBuilder Templates in the following labs.

## [Next up: Lab 11](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/lab-11)
