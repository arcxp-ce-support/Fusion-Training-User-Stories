import React from 'react';

export default (ListType, ItemType = 'li') => ({ children }) => <ListType>
    {
      children.map(
        (child) => <ItemType key={child.key}>{child}</ItemType>,
      )
    }
  </ListType>;
