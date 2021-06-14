
Now that we have our directory structure, we're going to write the code that's going to allow and handle communication between Composer and the iframes that we're going to build, this communication is achieved with the [postMessage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage)

# About the postMessage API

`postMessage` is a method that safely enables cross-origin communication between Window objects; e.g., between a page and a pop-up that it spawned, or between a page and an iframe embedded within it

## Main settings
- Sent on window.parent.
- `Key is required`, received from Composers iFrame URL
- Composer always requires a `”ready” message`
- Composer timeout: 10 seconds
- Saving data with “data” message
- Cancelling with “cancel” message


## Let's send the message!

1. In util/powerups/index.js let's add the import that we're going to need.


    ```
    "use strict";

    var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

    Object.defineProperty(exports, "__esModule", {
    value: true
    });

    exports.whenAvailable = exports.sendMessage = exports.getKey = exports.parseQueryString = void 0;

    var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

    var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

    var _lodash = _interopRequireDefault(require("lodash.get"));
    ```

2. Let's create and export a function called sendMessage that takes in 2 parameters: `action` which is a string and `data` which is an Object

    ```
    var sendMessage = function sendMessage(action, data) {

    };

    exports.sendMessage = sendMessage;
    ```

3. Now let's call the postMessage API with the payload which should have the following attributes:

    -  `source:` The ANS schema requires the source to be the string `custom_embed`
    -   `action:` String, we'll use 'ready' and 'data' for this training
    -   `data:` Object with config values
    -   `key:`  String. To set up the iFrame URLs in Composer Settings we will add a hash for each of the three views: #SEARCH #EDIT and #VIEW. For this `key` attribute we're going to write a function that returns the correspondent hash string


    Code:

    ```
    var sendMessage = function sendMessage(action, data) {
        if ((0, _lodash["default"])(window, 'parent', false)) {
            var messagePayload = {
                source: 'custom_embed',
                action: action,
                data: data,
                key: getKey() // we'll define this next
            };

            if (action === 'ready') {
                messagePayload.isAnsRequired = true;
            }

            window.parent.postMessage(JSON.stringify(messagePayload), '*');
        }
    };

    exports.sendMessage = sendMessage;
    ```

    

4. Now let's define getKey();

    ```
    var getKey = function getKey() {
        var pageURL = new URL((0, _lodash["default"])(window, 'location.href', ''));
        var searchParams = pageURL.searchParams;
        var keyResult = searchParams.get('k');

        if (keyResult) {
            return keyResult;
        }

        var hash = pageURL.hash;
        var embedParams = hash.split('?');
        var embedParamsList = embedParams[1].split('&');
        var sessionKey = embedParamsList.reduce(function (accumulator, currentValue) {
            if (currentValue.startsWith('k=')) {
                var key = currentValue.split('=')[1];
                return key;
            }

            return accumulator;
        
        }, '');

        return sessionKey;
    };

    exports.getKey = getKey;
    ```


    &nbsp;

    So far our util/powerups/index.js should look like this:

    ```
    "use strict";

    var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

    Object.defineProperty(exports, "__esModule", {
    value: true
    });

    exports.whenAvailable = exports.sendMessage = exports.getKey = exports.parseQueryString = void 0;
    var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
    var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
    var _lodash = _interopRequireDefault(require("lodash.get"));

    var getKey = function getKey() {
        var pageURL = new URL((0, _lodash["default"])(window, 'location.href', ''));
        var searchParams = pageURL.searchParams;
        var keyResult = searchParams.get('k');

        if (keyResult) {
            return keyResult;
        }

        var hash = pageURL.hash;
        var embedParams = hash.split('?');
        var embedParamsList = embedParams[1].split('&');
        var sessionKey = embedParamsList.reduce(function (accumulator, currentValue) {
            if (currentValue.startsWith('k=')) {
                var key = currentValue.split('=')[1];
                return key;
            }

            return accumulator;

        }, '');

        return sessionKey;
    };

    exports.getKey = getKey;

    var sendMessage = function sendMessage(action, data) {
        if ((0, _lodash["default"])(window, 'parent', false)) {
            var messagePayload = {
                source: 'custom_embed',
                action: action,
                data: data,
                key: getKey()
            };

            if (action === 'ready') {
                messagePayload.isAnsRequired = true;
            }

            window.parent.postMessage(JSON.stringify(messagePayload), '*');
        }
    };

    exports.sendMessage = sendMessage;
   
    ```



## [Next up: Lab 02](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/lab-00)
