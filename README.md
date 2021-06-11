

# The conditional to render each view!

Let's start writing the code for `View`!: 

1. Let's create a new component called ApesterView in apester-view.jsx > components/features/Apester-Composer/children/apester-view.jsx which returns an empty `div` and export it.

2. Let's add the required imports 
    - import React and the useEffect method
    - import get from lodash (optional). 
    - import the scss or styles file
    - import sendMessage and parseQueryString from the util file (These are placeholders, we haven't created these two methods yet, we will create them in Lab 04 )

    Code:

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
        
    const [actionID, setActionID] = useState('');

    const getActionParam = () => {
        const actionHash = get(window, 'location.hash', 'NONE');
        setActionID(actionHash.toUpperCase());
    };

    useEffect(() => getActionParam(), []);

5. Last but not least, let's add some styles!

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





## [Next up: Lab 00](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/lab-00)
