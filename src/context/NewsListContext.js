import React from 'react'

const NewsListContext = React.createContext('dummy list');

export default function NewsListContext() {
    return (
        <NewsListContext.Provider value={'dummy list'}></NewsListContext.Provider>
    )
}
