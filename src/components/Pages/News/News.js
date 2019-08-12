import React from 'react';
import NewsBody from './NewsBody';
import NewsErrorBoundary from "../../ErrorBoundary/NewsErrorBoundary";
import NewsSpring from '../NewsSpring/NewsSpring';
import useNews from "./UseNews";
function News(props) {
  const { selectedSource, sources, setSelectedSource } = useNews()
  return (
    <>
      <NewsErrorBoundary>
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '0.5rem' }}>
          <NewsSpring data={sources} setSelectedSource={setSelectedSource} selectedSource={selectedSource} />
        </div>
        <NewsBody/>
      </NewsErrorBoundary>
    </>
  )
}

export default News;