import React, { useState, useEffect } from 'react';
import NewsHeader from './NewsHeader';
import NewsBody from './NewsBody';
import { news_api_url } from '../../../config';
import NewsErrorBoundary from "../../ErrorBoundary/NewsErrorBoundary";
import NewsSpring from '../NewsSpring/NewsSpring';
import cssStyles from '../NewsSpring/data';
function News(props) {
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
  return (
    <>
      <NewsErrorBoundary>
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '0.5rem' }}>
          <NewsSpring data={sources} setSelectedSource={setSelectedSource} selectedSource={selectedSource} />
        </div>
        {/* <NewsHeader sources={sources} setSelectedSource={setSelectedSource} selectedSource={selectedSource} /> */}
        <NewsBody selectedSource={selectedSource} />
      </NewsErrorBoundary>
    </>
  )
}

export default News;