import React from 'react'
import "./styles.css"

const SearchPanel = ({ searchedText, setSearchedText }) => {
    return (
        <div className="search-panel">
            <h2>Search Properties to Rent</h2>
            <div className="search-panel_bar">
                <input type="text"
                    placeholder="Search with Search Bar"
                    value={searchedText}
                    onChange={(e) => setSearchedText(e.target.value)}
                />
            </div>
        </div>
    )
}

export default SearchPanel