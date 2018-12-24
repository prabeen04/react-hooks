import React from 'react'


const MyPopupMarker = ({mark}) => {
    // console.log(children)
    console.log(mark)
    // console.log([...position.lat, position.lng])
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

export default MarkerList