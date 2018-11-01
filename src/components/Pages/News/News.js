import React, { useState, useEffect } from 'react'
import NewsHeader from './NewsHeader';
import NewsBody from './NewsBody';
import { news_api_url } from '../../../config';

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
    <React.Fragment>
      <NewsHeader sources={sources} setSelectedSource={setSelectedSource}/>
      <NewsBody selectedSource={selectedSource}/>
    </React.Fragment>
  )
}

export default News;