
import React, { useEffect, useState } from 'react';
import get from 'lodash.get';
import ApesterSearch from './children/apester-search.jsx';
import ApesterView from './children/apester-view.jsx';
import ApesterEdit from './children/apester-edit.jsx';


const ApesterComposerPowerUpIframe = () => {
  const [actionID, setActionID] = useState('');

  const getActionParam = () => {
    const actionHash = get(window, 'location.hash', 'NONE');
    setActionID(actionHash.toUpperCase());
  };

  useEffect(() => getActionParam(), []);

  return (
    <div>
      {actionID.includes('#SEARCH') && <ApesterSearch/>}
      {actionID.includes('#VIEW') && <ApesterView/>}
      {actionID.includes('#EDIT') && <ApesterEdit/>}
    </div>
  );
};

export default ApesterComposerPowerUpIframe;
