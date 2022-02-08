import React from 'react';

import './search-panel'

const SearchPanel = () => {
    return (
        <input
            className='form-control search-panel'
            type='text'
            placeholder='Search by notes'
        />
    )
}

export default SearchPanel;