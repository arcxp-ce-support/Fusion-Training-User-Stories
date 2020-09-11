# Feature Blocks Architecture

There are three parts that make up each feature.

- Template function that generates the object that represents the xml
- The function that is called by fusion
- The customField and label assignments

## Template function

This function is passed all the customFields, global variables and globalContent and it returns an object that represents the xml output. By using an object to represent the xml it makes it clear where data comes from and how it gets represented in the final output.

## main function

This is the function called by fusion. It's exported so fusion can make it available. This function gets passed the global content, customFields and website. It can also get passed other values like `requestUri`. The function gets any needed siteProperties, defines any functions used by the template and returns the template to generate the feed.

## customFields

There is a utility [generatePropsForFeed](documentation/utilities## feeds-prop-types) to create the shared customFields for a feed. Add any new customFields into propTypes.customFields.

You must set a label for the feed, this name will be what is displayed when you list the features in PBEditor.

And finally the function must be exported like `export default Consumer(**Your function name**)` for it to be used as a feature.
