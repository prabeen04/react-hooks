import React, { useState, useEffect } from 'react'
import { news_api_key, news_api_url } from "../../../config";
import Masonry from 'react-masonry-component';
import LoadingNews from '../../UI/Placeholder/LoadingNews'
import Article from './Article';

const masonryOptions = {
    transitionDuration: 0
};

const imagesLoadedOptions = { background: '.my-bg-image-el' }
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
        <div style={{ minHeight: '100vh', width: '100vw' }}>
            {fetching && <LoadingNews />}
            <Masonry
                style={{ margin: '2rem' }}
                className={'my-gallery-class'} // default ''
                elementType={'div'} // default 'div'
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                imagesLoadedOptions={imagesLoadedOptions} // default {}
            >
                {!fetching && articles && articles.map((article, i) => {
                    return (<div key={i} style={{ margin: '0.4rem' }}>
                        <Article article={article} />
                    </div>)
                })}
            </Masonry>
        </div>
    )
}
export default NewsBody