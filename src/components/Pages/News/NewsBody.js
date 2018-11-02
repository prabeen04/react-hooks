import React, { useState, useEffect } from 'react'
import { news_api_key, news_api_url } from "../../../config";
import LoadingNews from './LoadingNews';
import Article from './Article';
import { FlexContainer } from "../../UI/Layouts";

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
    }, [props.selectedSource])
    return (
        <FlexContainer justifyContent='space-evenly'>
            {fetching && <LoadingNews />}
            {!fetching && articles && articles.map((article, i) => {
                return (<div key={i}>
                    <Article article={article} />
                </div>)
            })}
        </FlexContainer>
    )
}
export default NewsBody