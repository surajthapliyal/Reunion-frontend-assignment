import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import KingBedIcon from '@mui/icons-material/KingBed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import SelectAllIcon from '@mui/icons-material/SelectAll';
import "./styles.css"

const PropertyCard = ({ property }) => {
  return (
    <div className="card-container">
      <div className="property-card_wrap">
        <div className="property-card_image"></div>
        <div className="property-card_content_wrap">
          <div className="property-card_price_wrap">
            <div className="property-price"><span>${property.price}</span>/month</div>
            <div className="property-like"><FavoriteBorderIcon style={{ fontSize: "15px", cursor: "pointer" }} /></div>
          </div>
          <div className="property-name"><h3>{property.name}</h3></div>
          <div className="property-address">{property.address}</div>
          <div className="property-indoor-information">
            <div className="property-beds"><KingBedIcon style={{ fontSize: "12px" }} />{property.numberOfBeds} Beds</div>
            <div className="property-bathrooms"><BathtubIcon style={{ fontSize: "12px" }} />{property.numberOfBathrooms} Bathrooms</div>
            <div className="property-area"><SelectAllIcon style={{ fontSize: "12px" }} />{property.area}m<sup style={{ fontSize: "4px" }}>2</sup></div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default PropertyCard