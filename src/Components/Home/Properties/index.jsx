import React from 'react'
import PropertyCard from './PropertyCard/index';
import "./styles.css"
import EmptyView from './../../Common/EmptyView/index';

const Properties = ({ listData }) => {
  if (listData.length === 0) return <EmptyView />

  return (
    <div className="properties-wrap">
      {listData.map(property => <PropertyCard property={property} />)}
    </div>
  )
}

export default Properties