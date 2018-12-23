import React, { useState } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
const MapContainer = (props) => {
    const position = [props.data.lat, props.data.lng]
    return (
        <>
            <Map center={position} zoom={props.data.zoom}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>A pretty CSS3 popup. <br /> Easily customizable.</Popup>
                </Marker>
            </Map>

        </>
    )
}

export default MapContainer;