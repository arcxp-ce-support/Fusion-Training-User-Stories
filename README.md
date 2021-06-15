
# The Edit View

Usually in the Edit view we give the editor the opportunity to interact and edit the custom embed. Some embeds offer a lot of customization options, others don't. 

For this training we're going to limit the 'Edit' to basically perform another search to select a different embed. 

Let's start writing the code for `The Edit View:`  which looks like very similar to the Search.

1. Let's create a new component called ApesterEdit in apester-edit.jsx > components/features/Apester/children/apester-edit.jsx which returns an empty `div` and export it.

    ```
    const ApesterEdit = () => {

        return (
            <div>  
            </div>
        );
    };

    export default ApesterEdit;

2. Let's add the required imports 
    - import React and the useState and useEffect methods
    - import get from lodash (optional). 
    - import the scss or styles file
    - import sendMessage and getKey from the util file 


    ```  
    import React, { useState, useEffect } from 'react';
    import get from 'lodash.get';
    import { sendMessage, getKey } from '../../../../util/powerups/index';
    import './apester.scss';

    const ApesterEdit = () => {

        return (
            <div>  
            </div>
        );
    };

    export default ApesterEdit;


3. Now instead of returning an empty div, let's return the edit view. (Feel free to add more to this view).


    ```

    const ApesterEdit = () => {

        return (
            <div className="container apester-search">
                <h2>Edit Apester Embed</h2>
                <p>Find a new Apester Embed </p>
                <label htmlFor="mediaID" className="form-label">Media ID: </label>
                <div className='search-container'>
                    <input
                    type="text"
                    className="form-control search-input"
                    name="mediaID"
                    id="mediaID"
                    placeholder="12345"
                    aria-label="Media ID"
                    onChange={e => handleFieldChange(e.target.value)}></input>
                    <input type="button" id="btnSubmit" className="btn btn-primary search-btn" name="btnSubmit" value="Search"
                    onClick={handleClick}>
                    </input>
                </div>
            </div>
        );
    };

    export default ApesterEdit;


4. Now let's add the methods `onChange` on the input, `onClick` on the submit button, a `useEffect` and let's create a hook called mediaId and its method setMediaId which we will use to reference the Apester mediaId that we want to search for.

    ```
        
        import React, { useState, useEffect } from 'react';
        import get from 'lodash.get';
        import { sendMessage, getKey } from '../../../../util/powerups/index';
        import './apester.scss';

        const ApesterEdit = () => {
            const [mediaID, setMediaID] = useState('12345');

            const handleFieldChange = (value) => {
                setMediaID(value);
            };

            const handleClick = () => {
                const ansCustomEmbed = {
                    id: getKey(),
                    url: get(window, 'location.href', ''),
                    config: {
                        mediaId: mediaID,
                    },
                };
                sendMessage('data', ansCustomEmbed);
            };

            useEffect(() => {
                sendMessage('ready', {
                height: document.documentElement.scrollHeight,
                });
            }, []);

            return (
                <div className="container apester-search">
                    <h2>Edit Apester Embed</h2>
                    <p>Find a new Apester Embed </p>
                    <label htmlFor="mediaID" className="form-label">Media ID: </label>
                    <div className='search-container'>
                        <input
                        type="text"
                        className="form-control search-input"
                        name="mediaID"
                        id="mediaID"
                        placeholder="12345"
                        aria-label="Media ID"
                        onChange={e => handleFieldChange(e.target.value)}></input>
                        <input type="button" id="btnSubmit" className="btn btn-primary search-btn" name="btnSubmit" value="Search"
                        onClick={handleClick}>
                        </input>
                    </div>
                </div>
            );
        };

        export default ApesterEdit;




## [Next up: Lab 06](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/lab-00)
