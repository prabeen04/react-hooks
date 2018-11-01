import React, { useState, useEffect } from 'react'
import NewsHeader from './NewsHeader';
import NewsBody from './NewsBody';
import { news_api_url } from '../../../config';

function News() {
  const [sources, setSources] = useState([]);
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
      <NewsHeader />
      <NewsBody />
    </React.Fragment>
  )
}

export default News;