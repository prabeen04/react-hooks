import React, { useState, useRef } from 'react'
import { useTransition, useSpring, useChain, config } from 'react-spring'
import { Container, Item } from './style'

export default function NewsSpring({ data, selectedSource, setSelectedSource }) {
  const [open, set] = useState(false)

  const springRef = useRef()
  const { size, opacity, ...rest } = useSpring({
    ref: springRef,
    // config: config.stiff,
    from: { size: '20%', background: 'hotpink' },
    to: { size: open ? '100%' : '20%', background: open ? 'white' : 'hotpink' }
  })

  const transRef = useRef()
  const transitions = useTransition(open ? data : [], item => item.name, {
    ref: transRef,
    unique: true,
    trail: 400 / data.length,
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0)' }
  })

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springRef, transRef] : [transRef, springRef], [0, open ? 0.1 : 0.0002])
  function handleContainerClick() {
    set(!open)
  }
  function handleItemClick(e, item) {
    e.stopPropagation()
    set(!open)
    setSelectedSource(item.id)
  }
  return (
    <>
      <Container style={{ ...rest, width: size, height: size, position: 'relative' }} onClick={handleContainerClick}>
        <h3 style={{position: 'absolute', left: '30%', top: '30%', color: '#fff', fontWeight: 'normal', letterSpacing: '3px'}}>Select News</h3>
        {transitions.map(({ item, key, props }) => (
          <Item key={key} style={{ ...props, background: item.css }} onClick={(e) => handleItemClick(e, item)}>
            {item.name}
          </Item>
        ))}
      </Container>
    </>
  )
}

