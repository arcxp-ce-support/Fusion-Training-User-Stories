

# Output-Type

Definition


## Code

1. In components/output-types/powerups.jsx


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
            <div>Hello!!!!!</div>
            <div id='fusion-app'>
                {children}
            </div>
            <Fusion />
        </body>
    </html>

    ```



## [Next up: Lab 00](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/lab-00)
