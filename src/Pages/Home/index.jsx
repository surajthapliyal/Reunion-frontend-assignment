import React, { useEffect, useState } from 'react'
import Navbar from './../../Components/Home/Navbar/index';
import FilterPanel from './../../Components/Home/FilterPanel/index';
import Properties from './../../Components/Home/Properties/index';
import SearchPanel from './../../Components/Home/SearchPanel/index';
import PropertiesData from "../../Constant/PropertiesData"
import priceRanges from './../../Constant/PriceRanges';
import propertyTypes from './../../Constant/PropertyTypes';
import locationOptions from './../../Constant/LocationOptions';
import "./styles.css"

const Home = () => {

    const [listData, setListData] = useState(PropertiesData);
    const [selectedPrice, setSelectedPrice] = useState(priceRanges[0]);
    const [selectedPropertyType, setSelectedPropertyType] = useState(propertyTypes[0]);
    const [selectedLocation, setSelectedLocation] = useState(locationOptions[0]);
    const [searchedText, setSearchedText] = useState("");

    const parseRanges = () => {
        let min = 0, max = 0, f = 0;
        for (let i = 0; i < selectedPrice.length; i++) {
            const char = selectedPrice.charAt(i);
            if (char >= '0' && char <= '9') {
                if (f === 0) {
                    min = (min * 10) + (char - '0');
                } else {
                    max = (max * 10) + (char - '0');
                }
            } else {
                if (min !== 0) f = 1;
            }
        }
        return [min, max];
    }

    const handleFiltersSubmit = () => {

        setListData(PropertiesData);

        if (selectedPrice !== "All") {
            const [min, max] = parseRanges();
            setListData(prevData => prevData.filter(data => data.price >= min && data.price <= max))
        }
        if (selectedPropertyType !== "All") {
            setListData(prevData => prevData.filter(data => data.type === selectedPropertyType))
        }
        if (selectedLocation !== "All") {
            setListData(prevData => prevData.filter(data => data.location === selectedLocation))
        }

    }


    useEffect(() => {

        if (searchedText === "") return handleFiltersSubmit();

        const newData = listData.filter(data => data.name.toLowerCase().indexOf(searchedText.toLowerCase()) !== -1)
        setListData(newData);

    }, [searchedText])


    return (
        <div className="home">
            <Navbar />
            <div className="home_content-wrap">
                <div className="home_search-panel-wrap">
                    <SearchPanel searchedText={searchedText} setSearchedText={setSearchedText} />
                </div>
                <div className="home_panel-wrap">
                    <FilterPanel
                        selectedPrice={selectedPrice}
                        setSelectedPrice={setSelectedPrice}
                        selectedPropertyType={selectedPropertyType}
                        setSelectedPropertyType={setSelectedPropertyType}
                        handleFiltersSubmit={handleFiltersSubmit}
                        selectedLocation={selectedLocation}
                        setSelectedLocation={setSelectedLocation}
                    />
                </div>
                <div className="home_properties-wrap">
                    <Properties listData={listData} />
                </div>
            </div>
        </div>
    )
}

export default Home