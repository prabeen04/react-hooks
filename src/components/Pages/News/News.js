import React, { useState, useEffect } from 'react';
import NewsHeader from './NewsHeader';
import NewsBody from './NewsBody';
import { news_api_url } from '../../../config';
import NewsErrorBoundary from "../../ErrorBoundary/NewsErrorBoundary";
function News(props) {
  const [sources, setSources] = useState([]);
  const [selectedSource, setSelectedSource] = useState('buzzfeed')

  useEffect(() => {
    fetch(`${news_api_url}/sources`)
      .then(res => res.json())
      .then(res => {
        console.log(res)
        setSources(res.sources)
      })
      .catch(err => console.log(err))
  }, [])
  return (
    <>
      <NewsErrorBoundary>
        <NewsHeader sources={sources} setSelectedSource={setSelectedSource} selectedSource={selectedSource} />
        <NewsBody selectedSource={selectedSource} />
      </NewsErrorBoundary>
    </>
  )
}

export default News;