# OBF Lab 01

In this lab you will learn to run fusion locally, download and restore a database dump, and preview a feed.

1.  Run Fusion locally. Click [here](https://redirector.arcpublishing.com/alc/arc-products/pagebuilder/fusion/documentation/recipes/running-fusion-locally.md) for more information on starting fusion.
```
npx fusion start
```

**Database Dump**

2. Click [this link](https://outboundfeeds-sandbox.corecomponents.arcpublishing.com/pb-data/mongo/corecomponents_outboundfeeds_sandbox.tar.gz) to download the database dump. 
3. Ensure that fusion is still running. Drag the downloaded tar.gz datadump into the `data/restore` folder. You should see the folder unzip and disappear automatically. Once that happens, you have your new database! 

4. Now, navigate to the pagebuilder editor [pages](http://localhost/pagebuilder/pages) and [templates](http://localhost/pagebuilder/templates) to add and configure feeds locally. For example, this is what your local pagebuilder editor templates should look like:

TODO: add screenshot of localhost/pagebuiler/pages feeds

Note: In the future, once you have create your templates and resolvers you can use a tool like [postman](https://www.postman.com/) to see them at `http://localhost/arc/outboundfeeds/{FEED_NAME}?outputType=xml&_website={WEBSITE}`

5. TODO:	Add steps to preview a single feed to confirm it works (add screenshot here)

# Relevant Links
- [Starting Fusion](https://redirector.arcpublishing.com/alc/arc-products/pagebuilder/fusion/documentation/recipes/running-fusion-locally.md)
- [Database Dump](https://outboundfeeds-sandbox.corecomponents.arcpublishing.com/pb-data/mongo/corecomponents_outboundfeeds_sandbox.tar.gz)
- [Localhost Pages](http://localhost/pagebuilder/pages)
- [Localhost Templates](http://localhost/pagebuilder/templates)
- [Postman](https://www.postman.com/)

## [Next up: OBF Lab 02](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/obf-lab-02)
