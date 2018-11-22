import React, { useState, useEffect } from 'react'

const Download = () => {
    useEffect(() => {
        fetch(`http://192.168.1.61:8000/employeeList`)
            .then(res => res.json())
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))
    }, [])
    
    return (
        <div>
            <h1>Download Component</h1>
        </div>
    )
}

export default Download;