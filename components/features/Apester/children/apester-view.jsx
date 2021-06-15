import React, {useEffect} from 'react';
import get from 'lodash.get';
import {sendMessage, parseQueryString} from '../../../../util/powerups/index';
import './apester.scss';

const ApesterView = () => {
    useEffect(() => {
        const loader = document.createElement('script');
        loader.type = 'text/javascript';
        loader.src = 'https://static.apester.com/js/sdk/latest/apester-sdk.js';
        document
            .getElementsByTagName('head')[0]
            .appendChild(loader);

        sendMessage('ready', {height: document.documentElement.scrollHeight});

        const parameters = Object.assign({
            wait: 0
        }, parseQueryString());
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