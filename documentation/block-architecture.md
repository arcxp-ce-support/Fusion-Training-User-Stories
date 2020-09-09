# blocks architecture

There are three parts that make up each block.

- Template function that generates the object that represents the xml
- The function that is called by fusion
- The customField and label assignments

## Template function

This function is passed all the customFields, global variables and globalContent and it returns an object that represents the xml output. By building an object for the xml it makes it clear where data comes from and how it gets represented in the final output.

## main function

This is the function called by fusion. It's exported and passed to the Consumer function so fusion can make it available. This function gets passed the global content, customFields and website. It can also get passed other values like `requestUri`. The function then gets the needed siteProperties, defines any functions used by the template and calls the template to generate the feed.

## customFields

There is a utility [generatePropsForFeed](documentation/utilities## feeds-prop-types) to create the shared customFields for a feed. Add any new customFields into propTypes.customFields.

You must set a label for the feed, this will be what is displayed when you list the features in PBEditor. And export the function like
`export default Consumer(CustomRss)`
