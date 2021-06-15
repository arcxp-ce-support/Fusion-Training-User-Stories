# The Testing Tool!

Congrats! Now we have all the code needed for the Apester Power-Up!!

Now it's time to test our implementation using [Arc's testing tool for custom embeds](https://customembed.ellipsis.aws.arc.pub/#).

## Using the testing tool:
1.  Run Fusion locally

2. Go to `Page Builder` locally and create a new page called Powerup with the URI powerup

3. Click on `curate on` the left menu

4. Click on `Add new feature`

5. Select `Apester Powerup` (If you don't see this feature, restart fusion)

6. On the top menu change the output-type to powerup

7. On the left menu click on the globe icon and click on `Share and Publish`

## Open the testing tool:

https://customembed.ellipsis.aws.arc.pub/#

## Define the URLs

1. Once you're on the testing tool page, click on the menu that's on the top right corner

2. You should see a settings panel where we're going to define the Search, View, and Edit URLs and the Host Load Timeout Msec

3. When testing the Power-Ups locally the URL for each view, should look like this:

    http://localhost/[name-of-the-page]?_website=[your-website-id]&outputType=powerup#[hash]

    Note: the website id should be a valid one, you can go to your organization's dashboard and go to the Sandbox env, under `delivery` click on `Sites`, there you'll find the list of websites that your organization has.

&nbsp;

## Example of the URLs

Search:
http://localhost/powerup?_website=demo&outputType=powerup#SEARCH

View:
http://localhost/powerup?_website=demo&outputType=powerup#VIEW

Edit:
http://localhost/powerup?_website=demo&outputType=powerup#EDIT

Host Load Timeout Msec
6000

Now refresh the page, should see the SEARCH iFrame!

If you don't have an Apester mediaId use this one for testing: `5dbe8444923548b36a17547b` - Add it to the search input, click on `Search` and you should see the `VIEW!`

&nbsp;


## [Next up: Lab 09](https://github.com/arc-partners/Fusion-Training-User-Stories/tree/powerups-lab-09)
