

# The View!

Let's start writing the code for `View`!: 

1. Let's create a new component called ApesterView in apester-view.jsx > components/features/Apester-Composer/children/apester-view.jsx which returns an empty `div` and export it.

2. Let's add the required imports 
    - import React and the useEffect method
    - import get from lodash (optional). 
    - import the scss or styles file
    - import sendMessage and parseQueryString from the util file (These are placeholders, we haven't created these two methods yet, we will create them in Lab 04 )

    Code:

    ```
    
    import React, { useEffect } from 'react';
    import get from 'lodash.get';
    import { sendMessage, parseQueryString } from '../../../../util/power-ups/index';
    import './apester.scss';

    const ApesterView = () => {

        return (
            <div></div>
        );
    };

    export default ApesterView;



3. Now let's give that div the following attributes:

    - id: a string
    - className
    - data-media-id = ""


    Code:

    ```
    
    import React, { useEffect } from 'react';
    import get from 'lodash.get';
    import { sendMessage, parseQueryString } from '../../../../util/power-ups/index';
    import './apester.scss';

    const ApesterView = () => {

        return (
            <div id="apester-media" className="apester-media" data-media-id=""></div>
        );
    };

    export default ApesterView;


4. Now let's add the methods `onChange` on the input, `onClick` on the submit button, a `useEffect` and let's create a hook called mediaId and it's method setMediaId which we will use to reference the Apester mediaId that we want to search for.

    For two of these methods we will use the util function that we imported called `sendMessage` (we will review this API in lab 04)

    The `onChange` method will set the mediaId to whatever value the user inputs.

    The `onClick` method will call `sendMessage` with 2 parameters: one is the string 'data' and the second one is an ansCustomEmbed object with the following attributes:

    - `id` which is another util function that we will build in lab 4 called getKey()
    - `url` which refers to the window location
    - `config` which is an object with the key 'mediaId' and the value that's set in mediaId 

    The `useEffect` will also call `sendMessage` but with these 2 parameters: the string 'ready', an object with the atributte: height: document.documentElement.scrollHeight

    Code:

    ```
        
        useEffect(() => {
            const loader = document.createElement('script');
            loader.type = 'text/javascript';
            loader.src = 'https://static.apester.com/js/sdk/latest/apester-sdk.js';
            document.getElementsByTagName('head')[0].appendChild(loader);

            sendMessage('ready', {
            height: document.documentElement.scrollHeight,
            });

            const parameters = Object.assign({ wait: 0,}, parseQueryString());

            const data = JSON.parse(decodeURIComponent(get(parameters, 'p', '{}')));

            const dataEl = document.getElementById('apester-media');
            const mediaID = get(data, 'config.mediaId', 0);

            const hasSrc = get(dataEl, 'dataset', false);
            if (hasSrc) {
                dataEl.dataset.mediaId = mediaID;
            }
        }, []);

5. Last but not least, let's add some styles!

    ```
    import React, { useEffect } from 'react';
    import get from 'lodash.get';
    import { sendMessage, parseQueryString } from '../../../../util/power-ups/index';
    import './apester.scss';

    const ApesterView = () => {
        useEffect(() => {
            const loader = document.createElement('script');
            loader.type = 'text/javascript';
            loader.src = 'https://static.apester.com/js/sdk/latest/apester-sdk.js';
            document.getElementsByTagName('head')[0].appendChild(loader);

            sendMessage('ready', {
            height: document.documentElement.scrollHeight,
            });

            const parameters = Object.assign({ wait: 0,}, parseQueryString());
            const data = JSON.parse(decodeURIComponent(get(parameters, 'p', '{}')));

            const dataEl = document.getElementById('apester-media');
            const mediaID = get(data, 'config.mediaId', 0);

            const hasSrc = get(dataEl, 'dataset', false);

            if (hasSrc) {
                dataEl.dataset.mediaId = mediaID;
            }
        }, []);


        return (
            <div id="apester-media" className="apester-media" data-media-id="">&nbsp;</div>
        );
    };

    export default ApesterView;




## [Next up: Lab 00](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/lab-00)
