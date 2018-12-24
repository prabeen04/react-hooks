import React, { useState } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import MarkerList from './MarkerList';

import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const MapContainer = (props) => {
    const position = [props.data.lat, props.data.lng]
    return (
        <>
            <Map center={position} zoom={props.data.zoom} style={{width: '100vw', height: '85vh', margin: 10}}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>A pretty CSS3 popup. <br /> Easily customizable.</Popup>
                </Marker>
                <MarkerList/>
            </Map>

        </>
    )
}

export default MapContainer;