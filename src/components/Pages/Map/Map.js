import React, { useState } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
const Map = () => {
    return (
        <>
            <Map 
            center={position}  
           >
                <TileLayer
                    attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MyMarkersList markers={markers} />
            </Map>
        </>
    )
}

export default Map;