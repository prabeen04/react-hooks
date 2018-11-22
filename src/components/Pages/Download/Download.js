import React, { useState, useEffect } from 'react'

const Download = () => {
    useEffect(() => {
        fetch(`${news_api_url}/sources`)
            .then(res => res.json())
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))
    }, [])
    
    return (
        <div>

        </div>
    )
}

export default Download;