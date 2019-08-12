import React, { useEffect, useState } from 'react';
import { news_api_url } from '../../../config';
import cssStyles from '../NewsSpring/data';

export default function useNews() {
    const [sources, setSources] = useState([]);
    const [selectedSource, setSelectedSource] = useState('buzzfeed')

    useEffect(() => {
        fetch(`${news_api_url}/sources`)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                const stylesSources = res.sources && res.sources.map((source, i) => {
                    return { ...source, css: cssStyles[i] }
                })
                setSources(stylesSources)
            })
            .catch(err => console.log(err))
    }, [])

    return {
        sources,
        selectedSource,
        setSelectedSource
    }
}

