"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.whenAvailable = exports.sendMessage = exports.getKey = exports.parseQueryString = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _lodash = _interopRequireDefault(require("lodash.get"));

exports.parseQueryString = parseQueryString;

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