import React, { useState, useEffect } from 'react'
import { news_api_key, news_api_url } from "../../../config";
import LoadingNews from './LoadingNews';

const NewsBody = (props) => {
    const [articles, setArticles] = useState(null);
    const [fetching, setFetching] = useState(true)
    useEffect(() => {
        setFetching(true)
        fetch(`${news_api_url}articles?source=${props.selectedSource}&sortBy=top&apiKey=${news_api_key}`)
            .then(res => res.json())
            .then(res => {
                setFetching(false)
                console.log(res)
                setArticles(res.articles)
            })
            .catch(err => {
                setFetching(false)
                console.log(err)
            })
    },[props.selectedSource])
    return (
        <div>
            {fetching && <LoadingNews/>}
            {!fetching && articles && articles.map((article, i) => {
                return <h3 key={i}>{article.title}</h3>
            })}
        </div>
    )
}
export default NewsBody