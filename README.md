
Now that we have our util functions, let's add the new output-type for Power-Ups, this will allow us to add custom configurations specific to Power-Ups.

# Adding the new Output-Type


1. In components/output-types/powerup.jsx let's add the html


    ```
    import React from 'react';

    export default ({
    children,
    contextPath,
    deployment,
    CssLinks,
    Fusion,
    Libs,
    MetaTags
    }) =>
    <html>
        <head>
        <title>Fusion Article</title>
        <MetaTags />
        <Libs />
        <CssLinks />
        <link rel='icon' type='image/x-icon' href={deployment(`${contextPath}/resources/favicon.ico`)} />
        </head>
        <body>
            <div id='fusion-app'>
                {children}
            </div>
            <Fusion />
        </body>
    </html>

    ```


Now we can use powerup.jsx in addition to default.jsx

## [Next up: Lab 04](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/lab-00)
