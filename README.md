

# Directory Structure

To start let's define our directory structure.

- Under ~/components/features create a new folder called `Apester`

- Inside `Apester` add a file called powerup.jsx

- Inside `Apester` also add a new folder called `children` and add 4 files to this folder: apester-view.jsx, apester-edit.jsx apester-search.jsx and apester.scss 

- Under components/output-types create a new file called powerup.jsx

- Create a folder at the root level for all the util functions: util/powerups/index.js
 
So far our directory structure should look like this:

```
 > components
    > features
        > Apester
            > children
                > apester-view.jsx
                > apester-search.jsx
                > apester-edit.jsx
                > apester.scss
            powerup.jsx
    > output-types
        > powerup.jsx
        > default.jsx

> util
    > powerups
        index.js
```

## Note: 
Since we added these new directories, we need to restart the app for Fusion to pick up the new changes.


## [Next up: Lab 01](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/lab-00)
