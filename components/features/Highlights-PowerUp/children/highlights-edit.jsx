import React, {useState, useEffect} from 'react';
import get from 'lodash.get';
import {sendMessage, getKey, parseQueryString} from '../../../../util/powerups/index';
import './highlights.scss';

const HighlightsSearch = () => {
    const [highlight,setHighlight] = useState('');
    const [highlights,setHighlights] = useState([]);

    const handleFieldChange = (value) => {
        setHighlight(value);
    };

    const addHighlight = (e) => {
        e.preventDefault();
        if(highlight.length) {
            setHighlights([highlight, ...highlights ]);
            setHighlight('');
        }
    }

    return (
        <div className="container highlights-search">
            <h2>Edit story highlights</h2>
            <br/>
            <div className='search-container'>
                <input
                    type="text"
                    className="form-control search-input"
                    placeholder="Lorem Ipsum"
                    value={highlight}
                    onChange={e => handleFieldChange(e.target.value)}></input>
                <input
                    type="button"
                    className="btn-primary search-btn"
                    value="Add"
                    disabled={highlight === ''}
                    onClick={e => addHighlight(e)}></input>
            </div>
            {
                 highlights.map((highlight, index) => {
                    return <p key={index}>{highlight}</p>
                })
            }
            <br/>
            <div className='btns-contaimer'>
                <button >Cancel</button>
                <button disabled={!highlights.length}>Save</button>
            </div>
        </div>
    );
};

export default HighlightsSearch;
