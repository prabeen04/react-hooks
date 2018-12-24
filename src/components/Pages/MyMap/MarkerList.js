import React from 'react'
import { Marker, Popup } from "react-leaflet";

const MyPopupMarker = ({mark}) => {
    return (
        <Marker position={[mark.lat, mark.lng]}>
            <p>{mark.name}</p>
        </Marker>
    )
}
const MarkerList = ({ markers }) => {
    console.log(markers)
    const items = markers.map((mark, i) => (
        <MyPopupMarker key={i} mark={mark} />
    ))
    return <div style={{ display: 'none' }}>{items}</div>
}

export default MarkerList;