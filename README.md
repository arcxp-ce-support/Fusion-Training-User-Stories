

# The conditional to render each view!

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
    
    import React, { useEffect, useState } from 'react';
    import get from 'lodash.get';
    import ApesterSearch from './children/apester-search.jsx';
    import ApesterView from './children/apester-view.jsx';
    import ApesterEdit from './children/apester-edit.jsx';

    const ApesterPowerUp = () => {

        return (
            <div></div>
        );
    };

    export default ApesterPowerUp;



3. Now let's give that div the following attributes:

    Code:

    ```
    
    <div>
      {actionID.includes('#SEARCH') && <ApesterSearch/>}
      {actionID.includes('#VIEW') && <ApesterView/>}
      {actionID.includes('#EDIT') && <ApesterEdit/>}
    </div>


4. In a useEffect hook let's write the code to get the selected mediaId of the embed as well as some of the config values. The Apester documentation says that in order to embed Apester, a div with the data-media-id is required.

    ```
        
    const [actionID, setActionID] = useState('');

    const getActionParam = () => {
        const actionHash = get(window, 'location.hash', 'NONE');
        setActionID(actionHash.toUpperCase());
    };

    useEffect(() => getActionParam(), []);

5. Remember that you can give some styles to the div! This is what our `View` component looks like:

    ```
    import React, { useEffect, useState } from 'react';
    import get from 'lodash.get';
    import ApesterSearch from './children/apester-search.jsx';
    import ApesterView from './children/apester-view.jsx';
    import ApesterEdit from './children/apester-edit.jsx';


    const ApesterPowerUp = () => {
    const [actionID, setActionID] = useState('');

    const getActionParam = () => {
        const actionHash = get(window, 'location.hash', 'NONE');
        setActionID(actionHash.toUpperCase());
        console.log('aSDKJASDLJALKSD', actionHash)
    };

    useEffect(() => getActionParam(), []);

    return (
        <div>
        {actionID.includes('#SEARCH') && <ApesterSearch/>}
        {actionID.includes('#VIEW') && <ApesterView/>}
        {actionID.includes('#EDIT') && <ApesterEdit/>}
        </div>
    );
    };

    export default ApesterPowerUp;





## [Next up: Lab 07](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/lab-00)
