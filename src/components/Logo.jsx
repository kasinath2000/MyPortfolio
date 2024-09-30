import React from 'react'
import logo from '../assets/images/logo.svg'

function Logo({width = '100px',className}) {
  return (
    <div>
      <img className={className} src={logo} height='50' width='90' alt="logo" />
    </div>
  )
}

export default Logo