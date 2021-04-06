# Lab 03
This lab focuses on features. You will implement a feature and add it to a page in PageBuilder Editor.

Your next task is to create a new feature. Switch to branch `lab-04` to see the completed code for the this branch's user story.

Remeber, if you are continuing this training from the last user story, then keep working on your current branch USERNAME-fusion-training.

These steps will guide you through creating a color block feature, that generates a random background color for a div. However, you can create any new feature you'd like for this task. For more details on features, [click here](https://redirector.arcpublishing.com/alc/arc-products/pagebuilder/fusion/documentation/recipes/creating-feature-component.md?version=2.6).

1. All features are added into the `/components/features/` folder

2. Change into this directory and create a new folder called `sample` - this is where we'll store all our "sample" features

3. In the `/sample/` folder, create another folder for our feature called `color-block`

4. In the `/color-block/` folder, create a file called `default.jsx` - this is where we'll add all the code for our new feature

5. In the `default.jsx` file, create a functional component that generates a random rgb value for a div. You can use this rbg generator in your component:
```
  let rgb = []
  for (var i = 0; i < 3; i++) {
    let r = Math.floor(Math.random() * 256)
    rgb.push(r)
  }
```

6. Apply the rgb value for your div using the following style:
```
backgroundColor: `rgb(${rgb})`,
```

7. After Fusion rebuilds (since we created a new file, you will need to manually rebuild fusion), open the page you created in `lab-02`

8. Ensure that your Basic layout has been selected

9. In the `Curate` tab, click on `Add Feature` in any of the layout sections and select your `Sample color block` feature

10. Save and republish your page and open up the live page

11. You should see your color block feature

## [Next up: Lab 04](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/lab-04)
