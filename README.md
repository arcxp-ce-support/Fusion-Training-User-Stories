# Lab 03
This lab focuses on features. You will implement a feature and add it to a page in PageBuilder Editor.

These steps will guide you through creating a color feature block that generates a random background color for a div. However, you can create any new feature you'd like for this task. For more details on features, [click here](https://redirector.arcpublishing.com/alc/arc-products/pagebuilder/fusion/documentation/recipes/creating-feature-component.md?version=2.7).

1. All features are added into the `/components/features/` folder so, navigate to this directory.

2. Create a new folder called `sample` - this is where we'll store all our "sample" features. Features are always stored in their respective group folders. A "group" is just a namespace of related Features.

3. In the `/components/features/sample/` folder, create another folder for our feature called `color-block`.

4. In the `/components/features/sample/color-block/` folder, create a file called `default.jsx` - this is the entry point for our new feature block.

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
/* set styles for color block */
  const styles = {
    height: '250px',
    margin: '10px',
    backgroundColor: `rgb(${rgb})`,
  };

  return (
    <div style={styles} />
  )
```

7. After Fusion rebuilds (since we created a new file, you will need to manually rebuild fusion), open the page you created in the previous lab.

8. Ensure that your Basic layout has been selected.

9. In the `Curate` tab, click on `Add Feature` in any of the layout sections and select your `Sample color block` feature

<img width="500" alt="Screen Shot 2021-04-04 at 2 14 19 PM" src="https://user-images.githubusercontent.com/39777478/113517780-2116d980-9550-11eb-8251-07ea25f86475.png">

10. Save and republish your page and open up the live page

<img width="500" alt="Screen Shot 2021-04-04 at 2 13 56 PM" src="https://user-images.githubusercontent.com/39777478/113517788-296f1480-9550-11eb-8006-c68f5c3c17d7.png">

11. You should see your color block feature display in the preview. If you would like to see these changes reflected on the published page, you must click on `Share & Publish` in the Publish tab.

## [Next up: Lab 04](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/lab-04)
