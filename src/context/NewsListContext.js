import React from 'react'

const NewsListContext = React.createContext('dummy list');

export default function NewsListContext() {
  return (
    <NewsListContext.Provider value={'dummy list'}>
      <h2>News list context</h2>
    </NewsListContext.Provider>
  )
}
