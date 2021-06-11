

# About the postMessage API

Communication between Composer and the iframes that we're going to build is achieved by using the postMessage API: https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage which is a method that safely enables cross-origin communication between Window objects; e.g., between a page and a pop-up that it spawned, or between a page and an iframe embedded within it

## Main settings
- Sent on window.parent.
- `Key is required`, received from Composers iFrame URL
- Composer always requires a `”ready” message`
- Composer timeout: 10 seconds
- Saving data with “data” message
- Cancelling with “cancel” message


## Writing our first util functions

Let's start by writing the functions to get the key and to send the message.

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

2. Create and export the function to get the key 

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

3. Create and export the function to send the message 

    ```
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

4. Create and export the function to check if the window is ready 

    ```
    var whenAvailable = function whenAvailable(name, callback) {
        var interval = 10;
        window.setTimeout(function () {
            if (window[name]) {
                callback(window[name]);
            } else {
                whenAvailable(name, callback);
            }
        }, interval);
    };

    exports.whenAvailable = whenAvailable;

    ```

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

    var whenAvailable = function whenAvailable(name, callback) {
        var interval = 10;
        window.setTimeout(function () {
            if (window[name]) {
            callback(window[name]);
            } else {
            whenAvailable(name, callback);
            }
        }, interval);
    };

    exports.whenAvailable = whenAvailable;
   
    ```



## [Next up: Lab 00](https://github.com/wapopartners/Fusion-Training-User-Stories/tree/lab-00)
