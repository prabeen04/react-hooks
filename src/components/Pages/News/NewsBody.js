import React, { useState, useEffect } from 'react'
import { news_api_key, news_api_url } from "../../../config";
const NewsBody = (props) => {
    const [news, setNews] = useState(null)
    useEffect(() => {
        fetch(`${news_api_url}articles?source=${props.selectedSource}&sortBy=top&apiKey=${news_api_key}`)
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err))
    })
    return (
        <div>
            <h3>NewsBody</h3>
            <h3>{props.selectedSource}</h3>
        </div>
    )
}
export default NewsBody