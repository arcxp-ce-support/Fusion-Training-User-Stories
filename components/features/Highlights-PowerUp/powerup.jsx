import React, {useEffect, useState} from 'react';
import get from 'lodash.get';
import HighlightsSearch from './children/highlights-search.jsx';
import HighlightsView from './children/highlights-view';
import HighlightsEdit from './children/highlights-edit';

const HighlightsPowerUp = () => {
    const [actionID,
        setActionID] = useState('');

    const getActionParam = () => {
        const actionHash = get(window, 'location.hash', 'NONE');
        setActionID(actionHash.toUpperCase());
    }

    useEffect(() => getActionParam(), []);

    return (
        <div>
            {actionID.includes('#SEARCH') && <HighlightsSearch/>}
            {actionID.includes('#VIEW') && <HighlightsView/>}
            {actionID.includes('#EDIT') && <HighlightsEdit/>}
        </div>
    )
}

export default HighlightsPowerUp;