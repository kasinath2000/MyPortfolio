

import React from 'react'

export default function Background({
    children
}) {
  
  return (
    <div
    style={{
        width : '100%',
        clipPath : 'polygon(72% 11%, 100% 0, 100% 100%, 0 100%, 0 0)',
        backgroundColor : '#5463FF',
        color : 'white !important',
        // add me
        padding: '20px 0',
    }}

    >
        {children}
      
    </div>
  )
}