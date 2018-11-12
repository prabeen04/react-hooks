import React from 'react'

const NewsContext = React.createContext('dummy list');

export default function NewsListContext() {
    return (
        <NewsContext.Provider value={'dummy list'}></NewsContext.Provider>
    )
}
