

# Last but not least: The View!

Now we need to create the component that will render the inline view of the custom embed `The View!`

1. Let's create a new component called ApesterView in apester-view.jsx > components/features/Apester/children/apester-view.jsx which returns an empty `div` and export it.

    ```
    const ApesterView = () => {

        return (
            <div></div>
        );
    };

    export default ApesterView;

    ```

2. Let's add the required imports 

    - import React and the useEffect method
    - import get from lodash (optional). 
    - import the scss or styles file
    - import sendMessage and parseQueryString from the util file


    ```
    
    import React, { useEffect } from 'react';
    import get from 'lodash.get';
    import { sendMessage, parseQueryString } from '../../../../util/powerups/index';
    import './apester.scss';

    const ApesterView = () => {

        return (
            <div></div>
        );
    };

    export default ApesterView;



3. Now let's give that div the following attributes:

    - id: String
    - className
    - data-media-id = ""


    ```
    
    import React, { useEffect } from 'react';
    import get from 'lodash.get';
    import { sendMessage, parseQueryString } from '../../../../util/powerups/index';
    import './apester.scss';

    const ApesterView = () => {

        return (
            <div id="apester-media" className="apester-media" data-media-id=""></div>
        );
    };

    export default ApesterView;


4. In a useEffect hook let's write the code to get the selected mediaId of the embed as well as some of the config values. The Apester documentation says that to embed Apester, a div with the data-media-id is required.

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

5. Remember that you can give some styles to the div! This is what our `View` component looks like:

    ```
    import React, { useEffect } from 'react';
    import get from 'lodash.get';
    import { sendMessage, parseQueryString } from '../../../../util/powerups/index';
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




## [Next up: Lab 07](https://github.com/arc-partners/Fusion-Training-User-Stories/tree/powerups-lab-07)
