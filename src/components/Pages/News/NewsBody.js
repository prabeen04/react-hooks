import React, { useState, useEffect } from 'react'
import { news_api_key, news_api_url } from "../../../config";
const NewsBody = (props) => {
    const [articles, setArticles] = useState(null)
    useEffect(() => {
        fetch(`${news_api_url}articles?source=${props.selectedSource}&sortBy=top&apiKey=${news_api_key}`)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setArticles(res.articles)
            })
            .catch(err => console.log(err))
    })
    return (
        <div>
            {!props.article && <p>Loading...</p>}
            {articles && articles.map((article, i) => {
               return <h3 key={i}>{article.title}</h3>
            })}
        </div>
    )
}
export default NewsBody