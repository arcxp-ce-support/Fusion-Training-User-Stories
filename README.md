

# Add the conditional to render each view

Now that we have our three views, let's write a function that checks the URL hash and based on that renders the appropriate view.

1. Let's create a new component called ApesterPowerUp in powerup.jsx > components/features/Apester/powerup which returns an empty `div` and export it.

    ```
    const ApesterPowerUp = () => {
        return (
            <div></div>
        )
    }

    export default ApesterPowerUp;

    ```

2. Add the required imports 
    - import React, the useEffect and useState methods
    - import get from lodash (optional). 
    - import each of the three views


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
    ```


4. Now let's add a function to get the hash and let's assign the value of the hash to a variable called actionID

    ```
    const [ actionID, setActionID ] = useState('');

    const getActionParam = () => {
        const actionHash = get(window, 'location.hash', 'NONE');
        setActionID(actionHash.toUpperCase());
    }

    useEffect(() => getActionParam(), []);

5. Now we can render the appropriate component based on the actionID which is the URL hash, let's add the conditional!

    ```
    return (
        <div>
            {actionID.includes('#SEARCH') && <ApesterSearch/>}
            {actionID.includes('#VIEW') && <ApesterView/>}
            {actionID.includes('#EDIT') && <ApesterEdit/>}
        </div>
    );

    ```

    Our powerup.jsx should look like this:

    ``` 
    import React, { useEffect, useState } from 'react';
    import get from 'lodash.get';
    import ApesterSearch from './children/apester-search.jsx';
    import ApesterView from './children/apester-view';
    import ApesterEdit from './children/apester-edit';

    const ApesterPowerUp = () => {
        const [ actionID, setActionID ] = useState('');

        const getActionParam = () => {
            const actionHash = get(window, 'location.hash', 'NONE');
            setActionID(actionHash.toUpperCase());
        }

        useEffect(() => getActionParam(), []);


        return (
            <div>
                { actionID.includes('#SEARCH') && <ApesterSearch /> }
                { actionID.includes('#VIEW') && <ApesterView /> }
                { actionID.includes('#EDIT') && <ApesterEdit />}
            </div>
        )
    }

    export default ApesterPowerUp;
    ```

## [Next up: Lab 08](https://github.com/arc-partners/Fusion-Training-User-Stories/tree/powerups-lab-08)
