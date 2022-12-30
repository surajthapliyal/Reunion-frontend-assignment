import React from 'react'
import priceRanges from './../../../Constant/PriceRanges';
import propertyTypes from './../../../Constant/PropertyTypes';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import locationOptions from './../../../Constant/LocationOptions';
import "./styles.css"


const FilterPanel = (props) => {
    const { selectedPrice, setSelectedPrice, selectedPropertyType, setSelectedPropertyType, handleFiltersSubmit, selectedLocation, setSelectedLocation } = props;

    return (
        <div className="filter-panel_wrap">
            <ul className="filter-panel_list_wrap">
                <li>
                    <span className="list-heading">Location</span>
                    <div>
                        <select value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)}>
                            {locationOptions.map((location, i) => <option key={i} value={location}>{location}</option>)}
                        </select>
                    </div>
                </li>
                <li>
                    <span>When</span>
                    <div className="calendar">
                        Move-in Date
                        <CalendarMonthIcon style={{ fontSize: "12px" }} />
                    </div>
                </li>
                <li>
                    <span>Price</span>
                    <div>
                        <select value={selectedPrice} onChange={(e) => setSelectedPrice(e.target.value)}>
                            {priceRanges.map((price, i) => <option key={i} value={price}>{price}</option>)}
                        </select>
                    </div>
                </li>
                <li>
                    <span>Property Type</span>
                    <div>
                        <select value={selectedPropertyType} onChange={(e) => setSelectedPropertyType(e.target.value)}>
                            {propertyTypes.map((property, i) => <option key={i} value={property}>{property}</option>)}
                        </select>
                    </div>
                </li>
                <li><button className="btn search" onClick={handleFiltersSubmit}>Search</button></li>
            </ul>
        </div >
    )
}

export default FilterPanel