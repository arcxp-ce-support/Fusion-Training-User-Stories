import React, {useEffect, useState} from 'react';
import get from 'lodash.get';
import {sendMessage, parseQueryString} from '../../../../util/powerups/index';
import './highlights.scss';

const HighlightsView = () => {
    const [highlights, setHighlights] = useState([]);

    useEffect(() => {
        sendMessage('ready', {height: document.documentElement.scrollHeight});
    }, []);

    return (
        <div className='highlights-box'>
            <h1>Story Highlights!</h1>
            <br/>
            {
                highlights?.length ? highlights.map((highlight, index ) => {
                    return <p key={index}>- {highlight}</p>
                }) : 'No Highlights'
            }
        </div>
    );
};

export default HighlightsView;