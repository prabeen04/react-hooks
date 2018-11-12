import React from 'react'

const NewsContext = React.createContext('dummy list');

export default function NewsListContext(props) {
    return (
        <NewsContext.Provider value={'dummy list'}>{props.children(value)}</NewsContext.Provider>
    )
}
