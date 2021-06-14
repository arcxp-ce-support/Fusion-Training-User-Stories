# Now the fun part:  `Building the three views!`

Now we are going to build `The three views`,  they're basically 3 React components that are required for each Power-Up: 

- Search: The Initial view when selecting the Power-Up.
- View: Inline view after selecting Power-Up.
- Edit: Provides an opportunity for Authors to manipulate the 3rd Party data



# The Search View

Let's start writing the code for `The Search View:` 

1. Let's create a new component called ApesterSearch in apester-search.jsx > components/features/Apester/children/apester-search.jsx which returns an empty `div` and export it.

    ```
    const ApesterSearch = () => {

        return (
            <div>  
            </div>
        );
    };

    export default ApesterSearch;

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

    const ApesterSearch = () => {

        return (
            <div>  
            </div>
        );
    };

    export default ApesterSearch;


3. Now instead of returning an empty div, let's return the search view, which in this case has the logo of the Power-Up, a title, a description, an input and a submit button that triggers the search. (Feel free to add more to this view).


    ```

    const ApesterSearch = () => {

        return (
            <div className="container apester-search">
                <img src='https://blumbergcapital.com/wp-content/uploads/2016/02/apester_logo_400x200_2.png'/>
                <h2>Search Apester Embed</h2>
                <p>Using the Media ID, search for a published Apester embed</p>
                <label htmlFor="mediaID" className="form-label">Media ID: </label>
                <div className='search-container'>
                    <input
                        type="text"
                        className="form-control search-input"
                        name="mediaID"
                        id="mediaID"
                        placeholder="12345"
                        aria-label="Media ID">
                    </input>
                    <input type="button" id="btnSubmit" className="btn btn-primary search-btn" name="btnSubmit" value="Search"></input>
                </div>
            </div>
        );
    };

    export default ApesterSearch;


4. Now let's add the methods `onChange` on the input, `onClick` on the submit button, a `useEffect` and let's create a hook called mediaId and its method setMediaId which we will use to reference the Apester mediaId that we want to search for.

    For two of these methods, we will use the util function that we imported called `sendMessage` 

    The `onChange` method will set the mediaId to whatever value the user inputs.

    The `onClick` method will call `sendMessage` with 2 parameters: one is the String 'data' and the second one is an ansCustomEmbed Object with the following attributes:

    - `id` the value being returned from getKey(), in this case, we're expecting the hash with the name of the view: SEARCH, EDIT, or VIEW
    - `url` which refers to the window location
    - `config` which is an Object with the key 'mediaId' and the value that's set in mediaId 

    The `useEffect` will also call `sendMessage` with these 2 parameters: the String 'ready', an Object with the atributte: height: document.documentElement.scrollHeight



    ```
        
        import React, { useState, useEffect } from 'react';
        import get from 'lodash.get';
        import { sendMessage, getKey } from '../../../../util/powerups/index';
        import './apester.scss';

        const ApesterSearch = () => {
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
                    <img src='https://blumbergcapital.com/wp-content/uploads/2016/02/apester_logo_400x200_2.png'/>
                    <h2>Search Apester Embed</h2>
                    <p>Using the Media ID, search for a published Apester embed</p>
                    <label htmlFor="mediaID" className="form-label">Media ID: </label>
                    <div className='search-container'>
                        <input
                            type="text"
                            className="form-control search-input"
                            name="mediaID"
                            id="mediaID"
                            placeholder="12345"
                            aria-label="Media ID">
                            onChange={e => handleFieldChange(e.target.value)}
                        </input>
                        <input type="button" id="btnSubmit" className="btn btn-primary search-btn" name="btnSubmit" value="Search" onClick={handleClick}></input>
                    </div>
                    </div>
            );
        };

        export default ApesterSearch;

5. Last but not least, let's add some styles!

    In apester.scss add the styles for this view.

    ```
    .apester-search {
        background-color: white;
        padding: 50px;
        box-shadow: 0px 0px 4px #c3c2c2;

        & img {
            width: 30%;
        }

        .search-input {
            width: 100%;
            border: 3px solid #00B4CC;
            border-right: none;
            padding: 5px;
            height: 20px;
            border-radius: 5px 0 0 5px;
            outline: none;
        }
        
        .search-btn {
            height: 36px;
            border: 1px solid #00B4CC;
            background: #00B4CC;
            text-align: center;
            color: #fff;
            border-radius: 0 5px 5px 0;
            cursor: pointer;
            font-size: 20px;
        }
        
        .search-container {
            width: 100%;
            position: relative;
            display: flex;
        }
    }
    ```



## [Next up: Lab 05](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/lab-00)
