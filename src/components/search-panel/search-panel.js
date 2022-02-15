import React from 'react';

import './search-panel.css'

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